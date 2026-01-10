import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDRJEA2ogYCVthjn9rxgUWdtfcEyvYaF3g",
    authDomain: "ronit-portfolio.firebaseapp.com",
    projectId: "ronit-portfolio",
    storageBucket: "ronit-portfolio.firebasestorage.app",
    messagingSenderId: "91054286716",
    appId: "1:91054286716:web:0491da2121a85391ef66f9",
    measurementId: "G-CBEBEJQJ8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
