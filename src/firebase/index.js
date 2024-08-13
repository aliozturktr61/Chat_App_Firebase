// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvvv_PwN3PoNISQeO5mK8VKDC0lrUBvUs",
  authDomain: "fir-1-d734f.firebaseapp.com",
  projectId: "fir-1-d734f",
  storageBucket: "fir-1-d734f.appspot.com",
  messagingSenderId: "730718281442",
  appId: "1:730718281442:web:eba8506d9c8183f88008bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase auth referansını al
export const auth = getAuth(app);

// google sağlayacısını kur
export const provider = new GoogleAuthProvider();

// firestore veritbanını referansını al
export const db = getFirestore(app);