import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { hackClubAuthEndpoints, getAuthRedirectUri } from "@/lib/hackclub-auth";

export async function GET(request: NextRequest) {
  const state = randomBytes(16).toString("hex");

  const authorizeUrl = new URL(hackClubAuthEndpoints.authorize);
  authorizeUrl.searchParams.set("client_id", process.env.AUTH_CLIENT_ID!);
  authorizeUrl.searchParams.set("redirect_uri", getAuthRedirectUri(request));
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("scope", "openid profile");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set("hc_auth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  return response;
}
