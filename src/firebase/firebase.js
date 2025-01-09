// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk63apN3cAZgP0ouKyEahMnYM5paoq1bs",
  authDomain: "fir-auth-f1bea.firebaseapp.com",
  projectId: "fir-auth-f1bea",
  storageBucket: "fir-auth-f1bea.firebasestorage.app",
  messagingSenderId: "929382482017",
  appId: "1:929382482017:web:ac5dc972b990013bd66a20",
  measurementId: "G-8C8X7SJL40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }