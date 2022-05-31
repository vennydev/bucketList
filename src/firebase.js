// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA57Zt8oW0_FgcZv2WaVGgcQxBF0avks4Q",
  authDomain: "sparta-react-4a3ba.firebaseapp.com",
  projectId: "sparta-react-4a3ba",
  storageBucket: "sparta-react-4a3ba.appspot.com",
  messagingSenderId: "142106056815",
  appId: "1:142106056815:web:6a33ccc5fe988f121b159a",
  measurementId: "G-PFEP1ZSS8Z"
};

initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();