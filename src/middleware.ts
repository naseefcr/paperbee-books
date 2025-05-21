// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname;
  
  // Check if it's accessing admin routes
  if (path.startsWith('/admin')) {
    // Get the cookie session token if it exists
    const session = request.cookies.get('session')?.value;
    
    if (!session) {
      // If no session cookie, redirect to login
      return NextResponse.redirect(new URL('/login?from=admin', request.url));
    }
    
    // If session exists, proceed (we'll verify the token in the API)
  }

  return NextResponse.next();
}

// Only run middleware on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};