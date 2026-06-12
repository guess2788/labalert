// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4kZeQeiItAnqFmS9RMJN6RqMHEycBV6g",
  authDomain: "labalert-10041.firebaseapp.com",
  projectId: "labalert-10041",
  storageBucket: "labalert-10041.firebasestorage.app",
  messagingSenderId: "48162281989",
  appId: "1:48162281989:web:b1ec3c665bacd2b2b15a6c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
