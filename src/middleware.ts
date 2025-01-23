import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''; // Get the hostname (e.g., org1.katanga.workspacezm.com)

  // Extract the subdomain
  const subdomain = host.split('.')[0]; // Get "org1" from "org1.katanga.workspacezm.com"

  // Rewrite only if there is a valid subdomain
  if (subdomain && subdomain !== 'www' && subdomain !== 'katanga') {
    const url = req.nextUrl.clone();
    url.searchParams.set('organization-id', subdomain); // Pass subdomain as query parameter
    return NextResponse.rewrite(url); // Rewrite to pass the subdomain
  }

  return NextResponse.next(); // Let other requests pass through
}
