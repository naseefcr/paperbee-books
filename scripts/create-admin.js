/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});

// Function to create the first admin user
async function createFirstAdmin() {
  // Replace with your admin email and password
  const email = 'admin@example.com';
  const password = 'securePassword123!';
  const displayName = 'Admin User';
  
  try {
    let userRecord;
    
    // Check if user already exists
    try {
      userRecord = await admin.auth().getUserByEmail(email);
      console.log('User already exists, setting admin role...');
      
      // Set admin custom claim
      await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });
      console.log('Admin role assigned to existing user:', userRecord.uid);
    } catch (error) {
      // User doesn't exist, create new user
      if (error.code === 'auth/user-not-found') {
        console.log('Creating new admin user...');
        userRecord = await admin.auth().createUser({
          email,
          password,
          displayName,
          emailVerified: true,
        });
        
        // Set admin custom claim
        await admin.auth().setCustomUserClaims(userRecord.uid, { admin: true });
        console.log('Admin user created with ID:', userRecord.uid);
      } else {
        throw error;
      }
    }
    
    // Make sure userRecord exists before proceeding
    if (userRecord) {
      // Create admin user document in Firestore
      const firestore = admin.firestore();
      await firestore.collection('users').doc(userRecord.uid).set({
        email,
        displayName,
        role: 'admin',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      
      console.log('Admin setup completed successfully!');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

// Run the function
createFirstAdmin().then(() => process.exit());