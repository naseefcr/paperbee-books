// src/app/api/admin/verify/route.ts
import { NextResponse } from 'next/server';
import { firebaseAdmin } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    
    if (!token) {
      return NextResponse.json({ isAdmin: false, error: 'No token provided' }, { status: 401 });
    }
    
    // Verify the ID token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    
    // Check if the user has admin claims
    const isAdmin = decodedToken.admin === true;
    
    return NextResponse.json({ isAdmin });
  } catch (error) {
    console.error('Error verifying admin status:', error);
    return NextResponse.json({ isAdmin: false, error: 'Authentication failed' }, { status: 500 });
  }
}