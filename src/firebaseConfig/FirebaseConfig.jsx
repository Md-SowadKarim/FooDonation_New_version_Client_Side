// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYLJn2c1n1OVn0T38ghSgiRJnhI93Sxxw",
  authDomain: "ph-assignment-11-2979c.firebaseapp.com",
  projectId: "ph-assignment-11-2979c",
  storageBucket: "ph-assignment-11-2979c.appspot.com",
  messagingSenderId: "356639794731",
  appId: "1:356639794731:web:ab9ac1354a0fec23392c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)