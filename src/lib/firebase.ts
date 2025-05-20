// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // For admin authentication later
// import { getStorage } from 'firebase/storage'; // If you plan to use Firebase Storage for images

const firebaseConfig = {
  apiKey: "AIzaSyCMNUIrANqfwR1ro8KAomvn2JDfOrxw4Yw",
  authDomain: "paperbee-books.firebaseapp.com",
  projectId: "paperbee-books",
  storageBucket: "paperbee-books.firebasestorage.app",
  messagingSenderId: "1092290793122",
  appId: "1:1092290793122:web:0d5f81668e0451347ad1fb",
  measurementId: "G-CDZXY3NLLX"
};

// Initialize Firebase
// Check if apps are already initialized to prevent errors during hot reloading / SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app); // If using Auth
// const storage = getStorage(app); // If using Storage for images etc.

export { app, db, auth /*, storage */ };
