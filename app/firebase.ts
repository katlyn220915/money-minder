// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDC7PtWV2uYR-oOhimYsAJOCxh-l9EoePo",
  authDomain: "money-minder-4cb76.firebaseapp.com",
  projectId: "money-minder-4cb76",
  storageBucket: "money-minder-4cb76.appspot.com",
  messagingSenderId: "488148885900",
  appId: "1:488148885900:web:4971fdd4b0355e08fd76a9",
  measurementId: "G-T1MLXQ2RVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
