// === MIDDLEWARE FOR PROTECTING ADMIN ROUTES ===
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAdminSession } from './lib/firebase-admin';

export async function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get the session cookie
    const session = request.cookies.get('session')?.value;
    
    if (!session) {
      // No session cookie, redirect to login
      return NextResponse.redirect(new URL('/login?from=admin', request.url));
    }
    
    // Verify if the user is an admin
    const isAdmin = await verifyAdminSession(session);
    
    if (!isAdmin) {
      // Not an admin, redirect to unauthorized page
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};