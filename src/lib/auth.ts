// src/lib/auth.ts
import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  User
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase-client';
import { setCookie, destroyCookie } from 'nookies';

// Sign in user
export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get ID token
    const token = await user.getIdToken();
    
    // Set session cookie (for server-side auth)
    setCookie(null, 'session', token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    
    // Check if user is admin by calling a server API
    const adminCheckResponse = await fetch('/api/admin/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    
    const { isAdmin } = await adminCheckResponse.json();
    
    return { 
      success: true, 
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        isAdmin,
      }
    };
  } catch (error) {
    console.error('Error signing in:', error);
    return { success: false, error };
  }
}

// Sign out user
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    
    // Clear session cookie
    destroyCookie(null, 'session');
    
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { success: false, error };
  }
}

// Reset password
export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error('Error resetting password:', error);
    return { success: false, error };
  }
}

// Get current user's profile data
export async function getUserProfile(user: User) {
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { ...userSnap.data() };
    } else {
      // Create user profile if it doesn't exist
      const newUserData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        createdAt: new Date(),
      };
      
      await setDoc(userRef, newUserData);
      return newUserData;
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
}