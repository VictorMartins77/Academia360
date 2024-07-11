// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-7o5zRbF2Br3w7CMWKSCpMv-aTbEQ2bM",
  authDomain: "academia360-56754.firebaseapp.com",
  projectId: "academia360-56754",
  storageBucket: "academia360-56754.appspot.com",
  messagingSenderId: "934203901179",
  appId: "1:934203901179:web:14819bc92df6ddf96a5c5e",
  measurementId: "G-ZPESMHN00R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);