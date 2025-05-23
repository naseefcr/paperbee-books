// src/middleware.ts - Updated for App Router
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
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
    
    // If session exists, we'll proceed and verify it in API calls
    // We can't verify it here directly because we can't use Firebase Admin in middleware
  }

  return NextResponse.next();
}

// Only run middleware on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};