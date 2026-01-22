import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY4ctohkJ7y334SxLWoz2mnZZQ5gZUTTA",
  authDomain: "zen-bonsai-online.firebaseapp.com",
  projectId: "zen-bonsai-online",
  storageBucket: "zen-bonsai-online.firebasestorage.app",
  messagingSenderId: "343390924774",
  appId: "1:343390924774:web:e0eec81d9729f06b47f027",
  measurementId: "G-YKYXYH5GBV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
