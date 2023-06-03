// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCuIEaj3Y4jMUollscYjI0g1y1zEpF6cK8",
  authDomain: "bohratraders-e1026.firebaseapp.com",
  projectId: "bohratraders-e1026",
  storageBucket: "bohratraders-e1026.appspot.com",
  messagingSenderId: "984661342642",
  appId: "1:984661342642:web:a880360d9b912614430cab",
  measurementId: "G-X47FZH8W8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)