import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFwJL7LVMGiAGWXjNadzO0QF4p7qxuPC8",
  authDomain: "theclone-c8ae3.firebaseapp.com",
  databaseURL: "https://theclone-c8ae3.firebaseio.com",
  projectId: "theclone-c8ae3",
  storageBucket: "theclone-c8ae3.appspot.com",
  messagingSenderId: "250016754152",
  appId: "1:250016754152:web:55e40c63c0816c41ea5c5d",
  measurementId: "G-ZLVYH2VXJH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };