// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRermAXf47JJwlldq9d-IMGncWc46-sN0",
  authDomain: "aplusacademy-rabbi.firebaseapp.com",
  projectId: "aplusacademy-rabbi",
  storageBucket: "aplusacademy-rabbi.appspot.com",
  messagingSenderId: "543045290885",
  appId: "1:543045290885:web:e9b229ce158f811008d2ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;