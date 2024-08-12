// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnwJ_ux1RGK4fcIDBJs-zTVLQDd5AJM_o",
  authDomain: "inventory-management-c0f13.firebaseapp.com",
  projectId: "inventory-management-c0f13",
  storageBucket: "inventory-management-c0f13.appspot.com",
  messagingSenderId: "811420480088",
  appId: "1:811420480088:web:2dad1f2dbbaa6bfcf3502d",
  measurementId: "G-TYXQYEBQJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore};