// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWVUSr_e8IDOGTnoTy-cgWNHg5aF9V45M",
  authDomain: "flick-gpt.firebaseapp.com",
  projectId: "flick-gpt",
  storageBucket: "flick-gpt.appspot.com",
  messagingSenderId: "742487613553",
  appId: "1:742487613553:web:ccbae26b7b98335557bbd0",
  measurementId: "G-RR5ZE3KMX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();