
// === FIREBASE ADMIN SETUP GUIDE ===

// 1. Initialize Firebase Admin SDK
// src/lib/firebase-admin.ts - Full implementation

import * as admin from 'firebase-admin';

// Check if we're already initialized to prevent multiple initializations
if (!admin.apps.length) {
  // Method 1: Using service account credentials (recommended for production)
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Handle potential escaping of newline characters in the private key
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    // Optional: Only needed if you're using other Firebase services
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });

  // Method 2: Alternative approach using application default credentials
  // This is useful in certain environments like Google Cloud Functions where
  // the environment automatically provides credentials
  /*
  admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
  */
}

export const firebaseAdmin = admin;

// Helper function to check if a user exists
export async function userExists(email: string): Promise<boolean> {
  try {
    await admin.auth().getUserByEmail(email);
    return true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}

// Helper function to create a new admin user
export async function createAdminUser(email: string, password: string, displayName: string) {
  try {
    // First create the user
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
      emailVerified: true, // Set to true for admin users to bypass verification
    });
    
    // Then set admin custom claim
    await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });
    
    return { success: true, uid: userRecord.uid };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return { success: false, error };
  }
}

// Set admin role for existing user
export async function setAdminRole(email: string) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    return { success: true };
  } catch (error) {
    console.error('Error setting admin role:', error);
    return { success: false, error };
  }
}

// Remove admin role from user
export async function removeAdminRole(email: string) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: false });
    return { success: true };
  } catch (error) {
    console.error('Error removing admin role:', error);
    return { success: false, error };
  }
}

// Check if a user is an admin
export async function isUserAdmin(uid: string) {
  try {
    const user = await admin.auth().getUser(uid);
    const customClaims = user.customClaims || {};
    return !!customClaims.admin;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

// Verify a session token and check if user is admin
export async function verifyAdminSession(token: string) {
  try {
    // Verify the ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    // Check the custom claims
    const customClaims = decodedToken.admin || false;
    return customClaims === true;
  } catch (error) {
    console.error('Error verifying admin session:', error);
    return false;
  }
}