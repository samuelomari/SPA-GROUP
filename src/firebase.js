import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "spa-coffe-shop.firebaseapp.com",
  projectId: "spa-coffe-shop",
  storageBucket: "spa-coffe-shop.firebasestorage.app",
  messagingSenderId: "815520998395",
  appId: "1:815520998395:web:9d440e5d68a27ca2ba215e"
};

const app = initializeApp(firebaseConfig);

export default app;