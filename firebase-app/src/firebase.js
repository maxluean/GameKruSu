import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyXYgdCdAk6RyrkuVu6c9u0wwf6-MzViQ",
    authDomain: "gamekrusu.firebaseapp.com",
    projectId: "gamekrusu",
    storageBucket: "gamekrusu.firebasestorage.app",
    messagingSenderId: "585661378023",
    appId: "1:585661378023:web:ad66e67afbcd529815a142",
    measurementId: "G-RSC048FR5H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firebase app and services
export { app, db, auth };