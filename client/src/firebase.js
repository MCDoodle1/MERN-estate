// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ba8a0.firebaseapp.com",
  projectId: "mern-estate-ba8a0",
  storageBucket: "mern-estate-ba8a0.appspot.com",
  messagingSenderId: "1029966025308",
  appId: "1:1029966025308:web:ae0c29e2d34549666c0c99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
