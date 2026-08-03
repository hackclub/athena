import { NextRequest, NextResponse } from "next/server";
import { hackClubAuthEndpoints, getAuthRedirectUri } from "@/lib/hackclub-auth";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const storedState = request.cookies.get("hc_auth_state")?.value;

  const response = NextResponse.redirect(new URL("/auth/complete", request.url));
  response.cookies.delete("hc_auth_state");

  if (!code || !state || state !== storedState) {
    console.error("Hack Club auth callback: missing or mismatched state");
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

  if (!tokenRes.ok) {
    console.error("Hack Club auth token exchange failed:", await tokenRes.text());
    return response;
  }

  const { access_token } = await tokenRes.json();

  const userInfoRes = await fetch(hackClubAuthEndpoints.userinfo, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (!userInfoRes.ok) {
    console.error("Hack Club auth userinfo fetch failed:", await userInfoRes.text());
    return response;
  }

  const userInfo = await userInfoRes.json();
  console.log(userInfo.given_name);
  console.log(response)
  return response;
}
