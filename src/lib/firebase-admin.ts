// src/lib/firebase-admin.ts
import * as admin from 'firebase-admin';

// Check if already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const firebaseAdmin = admin;
export const db = admin.firestore();

// Verify admin session token
export async function verifyAdminSession(token: string) {
  try {
    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    // Check if the user has admin claims
    const isAdmin = decodedToken.admin === true;
    return isAdmin;
  } catch (error) {
    console.error('Error verifying admin session:', error);
    return false;
  }
}

