import { NextRequest } from "next/server";

const AUTH_ISSUER = "https://auth.hackclub.com";

export const hackClubAuthEndpoints = {
  authorize: `${AUTH_ISSUER}/oauth/authorize`,
  token: `${AUTH_ISSUER}/oauth/token`,
  userinfo: `${AUTH_ISSUER}/oauth/userinfo`,
};

// APP_URL lets prod override the origin the server sees (e.g. behind a proxy that
// doesn't forward the public Host header). Falls back to the request origin for local dev.
export function getAppBaseUrl(request: NextRequest) {
  return process.env.APP_URL || request.nextUrl.origin;
}

export function getAuthRedirectUri(request: NextRequest) {
  return `${getAppBaseUrl(request)}/auth/callback`;
}
