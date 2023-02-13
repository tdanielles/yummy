// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEZJAjBfaj5PjM1Pn60jQvP_zTFZM5vEs",
  authDomain: "yummy-d3836.firebaseapp.com",
  projectId: "yummy-d3836",
  storageBucket: "yummy-d3836.appspot.com",
  messagingSenderId: "355424233136",
  appId: "1:355424233136:web:507c16c0439665169ffd75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
