// This file initializes the Firebase app and sets up any necessary event listeners or application logic.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from './firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// Example event listener or application logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Firebase app initialized:', app);
    // Additional application logic can go here
});