import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD8-XC9wmv-KTsvXF9dK-070xdIcdnvSE",
  authDomain: "twitter-clone-158fc.firebaseapp.com",
  projectId: "twitter-clone-158fc",
  storageBucket: "twitter-clone-158fc.appspot.com",
  messagingSenderId: "1059518496382",
  appId: "1:1059518496382:web:fafa42c0bea62111b9222f",
  measurementId: "G-8Q97L44V33",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
