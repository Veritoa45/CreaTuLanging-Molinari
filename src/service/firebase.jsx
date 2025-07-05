import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDemr1oveQBJ1IXs2TssbUOixNiBFwmUY",
  authDomain: "coderhouse-ecommerce-cda58.firebaseapp.com",
  projectId: "coderhouse-ecommerce-cda58",
  storageBucket: "coderhouse-ecommerce-cda58.firebasestorage.app",
  messagingSenderId: "706199701430",
  appId: "1:706199701430:web:07877f2cb40c68a872a317",
  measurementId: "G-GEXWET3NBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
