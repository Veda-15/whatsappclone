// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDle9eGa_Q1yNuqmKgim1tGK9YGcINgAHA",
  authDomain: "whatsapp-clone-d1acc.firebaseapp.com",
  projectId: "whatsapp-clone-d1acc",
  storageBucket: "whatsapp-clone-d1acc.appspot.com",
  messagingSenderId: "911402730781",
  appId: "1:911402730781:web:578257a2cfef38e677cdf4",
  measurementId: "G-F7B7EZ1L3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
