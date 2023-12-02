// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKStHqVrHSGfA24KaXG4ZiP33OB7djbHc",
  authDomain: "netflix-9a235.firebaseapp.com",
  projectId: "netflix-9a235",
  storageBucket: "netflix-9a235.appspot.com",
  messagingSenderId: "1088952414797",
  appId: "1:1088952414797:web:d982ae78c7f6c8f369e204",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
