// === API ROUTE FOR ADMIN USER CHECK ===
// src/app/api/admin/verify/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/firebase-admin';

export async function POST(request: NextRequest) {
  try {
    // Get the session token from the request
    const { token } = await request.json();
    
    if (!token) {
      return NextResponse.json({ isAdmin: false, error: 'No token provided' }, { status: 401 });
    }
    
    // Verify if the user is an admin
    const isAdmin = await verifyAdminSession(token);
    
    return NextResponse.json({ isAdmin });
  } catch (error) {
    console.error('Error verifying admin status:', error);
    return NextResponse.json({ isAdmin: false, error: 'Authentication failed' }, { status: 500 });
  }
}