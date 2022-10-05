import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCz3ZkDdd-XuxuFjpEF1YE_5a0zJE_nn_g",
  authDomain: "react-proyecto-5d580.firebaseapp.com",
  projectId: "react-proyecto-5d580",
  storageBucket: "react-proyecto-5d580.appspot.com",
  messagingSenderId: "767774221445",
  appId: "1:767774221445:web:71cd2968537ee1949235ec",
  measurementId: "G-PERBL3ZKL3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)