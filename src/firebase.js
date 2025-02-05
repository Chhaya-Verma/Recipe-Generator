// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7YsDpWlzyEtmdctaFNmUUn6fIlZWLaVQ",
  authDomain: "recipe-generator-72e76.firebaseapp.com",
  projectId: "recipe-generator-72e76",
  storageBucket: "recipe-generator-72e76.firebasestorage.app",
  messagingSenderId: "500336012341",
  appId: "1:500336012341:web:36d1c9e8103770437b157c",
  measurementId: "G-87DYM20FV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
