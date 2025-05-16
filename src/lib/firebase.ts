// lib/firebase.ts
// Note: Replace these with your actual Firebase config values
// You can get these from the Firebase Console > Project Settings > General > Your apps

// For development, you can use these placeholder values
// Make sure to replace them with real values before deployment

const firebaseConfig = {
  // Replace these with your actual Firebase configuration
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "paperbee-books-demo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "paperbee-books-demo",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "paperbee-books-demo.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// For now, let's comment out Firebase initialization to prevent errors
// Uncomment these when you have actual Firebase configuration

/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
*/

// For development, export empty objects
export const db = {};
export const storage = {};

export default firebaseConfig;