import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDT6jUuCmzyFyIc0zL-t0zMgykPT16N4iI",
  authDomain: "dgcloud1-b1c43.firebaseapp.com",
  projectId: "dgcloud1-b1c43",
  storageBucket: "dgcloud1-b1c43.appspot.com",
  messagingSenderId: "535145899737",
  appId: "1:535145899737:web:cd25cdc54f79f0429bc0c8",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const auth = app.auth();
const projectFirestore = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const db = app.firestore();
export { projectStorage, projectFirestore, timestamp, auth };
