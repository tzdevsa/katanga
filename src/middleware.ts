import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''; // Get the hostname (e.g., org1.katanga.workspacezm.com)
  const requestHeaders = new Headers(req.headers);

  // Extract the subdomain
  const subdomain = host.split('.')[0]; // Get "org1" from "org1.katanga.workspacezm.com"

  // Rewrite only if there is a valid subdomain
  if (subdomain && subdomain !== 'www' && subdomain !== 'katanga') {
    requestHeaders.set("x-organisation-id", subdomain);
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: "/:path*", // Apply to all routes
};