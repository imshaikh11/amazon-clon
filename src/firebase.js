import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_hEYa1G1J_eCHj-QQMmf93DFpQV3QZWk",
  authDomain: "project-23930.firebaseapp.com",
  projectId: "project-23930",
  storageBucket: "project-23930.appspot.com",
  messagingSenderId: "271847472626",
  appId: "1:271847472626:web:423d839fc57cbf820fbf6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };