// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmTlEy-1t5j2FmtvO8WJV71XPsz43JP8",
  authDomain: "duplo-90301.firebaseapp.com",
  projectId: "duplo-90301",
  storageBucket: "duplo-90301.appspot.com",
  messagingSenderId: "21743775766",
  appId: "1:21743775766:web:367e2a942f223f40394537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)