import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhx90XUStOn2kWYqlzri2MeBDZRngQrNU",
  authDomain: "sondenemespandau.firebaseapp.com",
  projectId: "sondenemespandau",
  storageBucket: "sondenemespandau.appspot.com",
  messagingSenderId: "443607964894",
  appId: "1:443607964894:web:6394ec917d833a1091f64f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
