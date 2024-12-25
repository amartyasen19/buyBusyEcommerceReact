// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2JIiCxRrmOfRysYVKNEYM1IoDFvMk2w",
  authDomain: "buybusy-c4b8f.firebaseapp.com",
  projectId: "buybusy-c4b8f",
  storageBucket: "buybusy-c4b8f.firebasestorage.app",
  messagingSenderId: "994713008971",
  appId: "1:994713008971:web:f180192d5fa12e1cf0c6ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
