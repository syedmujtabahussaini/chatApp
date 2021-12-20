// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFrcy_mBCJdX1hmjCMlHPjTmFJBv7IVdg",
  authDomain: "database-31474.firebaseapp.com",
  projectId: "database-31474",
  storageBucket: "database-31474.appspot.com",
  messagingSenderId: "1026708996029",
  appId: "1:1026708996029:web:f5d5e3eb4902b4a5c39cd4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export { auth, db };
