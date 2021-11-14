// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeKxllzHmOU4rchXSLlR_lvroKN6ecxoc",
  authDomain: "t0-d0-2c460.firebaseapp.com",
  projectId: "t0-d0-2c460",
  storageBucket: "t0-d0-2c460.appspot.com",
  messagingSenderId: "77674323720",
  appId: "1:77674323720:web:5a31b108633d5a4784d6bd",
  measurementId: "G-2VWK4DS02F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export default db;
