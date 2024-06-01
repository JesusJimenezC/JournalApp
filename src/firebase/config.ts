// Import the functions you need from the SDKs you need

import { type FirebaseApp, initializeApp } from 'firebase/app';
import { type Auth, getAuth } from 'firebase/auth';
import { type Firestore, getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,

  appId: import.meta.env.VITE_FB_APP_ID,

  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,

  databaseURL: import.meta.env.VITE_FB_DATABASE_URL,

  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,

  projectId: import.meta.env.VITE_FB_PROJECT_ID,

  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
};

// Initialize Firebase

const FirebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth: Auth = getAuth(FirebaseApp);
export const FirebaseDB: Firestore = getFirestore(FirebaseApp);
