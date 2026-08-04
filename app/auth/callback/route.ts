import { NextRequest, NextResponse } from "next/server";
import { getAppBaseUrl, getAuthRedirectUri, hackClubAuthEndpoints } from "@/lib/hackclub-auth";
import { AirtableSignupsManager } from "@/lib/airtable";

export async function GET(request: NextRequest) {
  console.log("[auth/callback] incoming query params:", Object.fromEntries(request.nextUrl.searchParams));

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const storedState = request.cookies.get("hc_auth_state")?.value;
  const oauthError = request.nextUrl.searchParams.get("error");

  const response = NextResponse.redirect(new URL("/auth/complete", getAppBaseUrl(request)));
  response.cookies.delete("hc_auth_state");

  if (oauthError) {
    console.error(
      "[auth/callback] Hack Club auth returned an error:",
      oauthError,
      request.nextUrl.searchParams.get("error_description")
    );
    return response;
  }

  if (!code || !state || state !== storedState) {
    console.error("[auth/callback] missing or mismatched state", { code, state, storedState });
    return response;
  }

  const tokenRes = await fetch(hackClubAuthEndpoints.token, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: getAuthRedirectUri(request),
      client_id: process.env.AUTH_CLIENT_ID!,
      client_secret: process.env.AUTH_CLIENT_SECRET!,
    }),
  });

  const tokenBody = await tokenRes.text();
  console.log("[auth/callback] token endpoint response:", tokenRes.status, tokenBody);

  if (!tokenRes.ok) {
    console.error("[auth/callback] Hack Club auth token exchange failed:", tokenBody);
    return response;
  }

  const { access_token, scope: grantedScope } = JSON.parse(tokenBody);
  console.log("[auth/callback] granted scope:", grantedScope);

  const userInfoRes = await fetch(hackClubAuthEndpoints.userinfo, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const userInfoBody = await userInfoRes.text();
  console.log("[auth/callback] userinfo endpoint response:", userInfoRes.status, userInfoBody);

  if (!userInfoRes.ok) {
    console.error("[auth/callback] Hack Club auth userinfo fetch failed:", userInfoBody);
    return response;
  }

  const userInfo = JSON.parse(userInfoBody);

  if (userInfo.email) {
    const fields = {
      first_name: userInfo.given_name,
      last_name: userInfo.family_name,
      birthdate: userInfo.birthdate,
      hca_identity: userInfo.sub,
    };
    console.log("[auth/callback] upserting Airtable signup:", userInfo.email, fields);

    try {
      const result = await new AirtableSignupsManager().upsertSignupByEmail(userInfo.email, fields);
      console.log("[auth/callback] Airtable upsert result:", JSON.stringify(result));
    } catch (error: any) {
      console.error(
        "[auth/callback] Failed to save Airtable signup record:",
        error?.message,
        error?.error,
        error?.statusCode,
        JSON.stringify(error)
      );
    }
  } else {
    console.error("[auth/callback] Hack Club auth userinfo response had no email claim:", userInfoBody);
  }

  return response;
}
