// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_4yi9Lo2jPWK4-DHV3e8XvNZjf_jXn4U",
    authDomain: "wayfarer-d29dc.firebaseapp.com",
    projectId: "wayfarer-d29dc",
    storageBucket: "wayfarer-d29dc.firebaseapp.com",
    messagingSenderId: "897335632665",
    appId: "1:897335632665:web:8962a7876305d5198d5b88",
    measurementId: "G-HFV10L4F7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db }; 