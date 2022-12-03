import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4ZEgROG8FGnFHGyTPixRtUn6c4YNBZ3Q",
  authDomain: "my-blogging-8826d.firebaseapp.com",
  projectId: "my-blogging-8826d",
  storageBucket: "my-blogging-8826d.appspot.com",
  messagingSenderId: "612886986550",
  appId: "1:612886986550:web:266ceddfe6df4aa5613d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
