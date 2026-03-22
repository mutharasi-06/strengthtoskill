// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAeFrQa1ytdOlqxaNakx3v703LSbqQFSd0",
    authDomain: "quiz-system-dd8b6.firebaseapp.com",
    projectId: "quiz-system-dd8b6",
    storageBucket: "quiz-system-dd8b6.firebasestorage.app",
    messagingSenderId: "317332860631",
    appId: "1:317332860631:web:99334cae10f105cecb8a92"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);