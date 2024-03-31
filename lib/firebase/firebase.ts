// lib/firebase.js or a similar file
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_FIREBASE_SENDERID,
  appId: process.env.NEXT_FIREBASE_APPID,
  measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Analytics should only be initialized in a client-side context (typeof window !== 'undefined'). 
// This prevents errors during server-side rendering or static site generation in Next.js.
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
