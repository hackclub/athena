import { NextRequest } from "next/server";

const AUTH_ISSUER = "https://auth.hackclub.com";

export const hackClubAuthEndpoints = {
  authorize: `${AUTH_ISSUER}/oauth/authorize`,
  token: `${AUTH_ISSUER}/oauth/token`,
  userinfo: `${AUTH_ISSUER}/oauth/userinfo`,
};

// Derived from the incoming request so it's http://localhost:3000/auth/callback
// locally and the real domain in production, with no separate env var to keep in sync.
export function getAuthRedirectUri(request: NextRequest) {
  return `${request.nextUrl.origin}/auth/callback`;
}
