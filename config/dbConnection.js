const { initializeApp } = require('firebase/app');
const { getFirestore } = require("firebase/firestore");

// require('firebase');

require("dotenv").config();


const firebaseConfig = {
  apiKey: "AIzaSyBdspfH2bpFPkiu4l3sctXo42JfzkrzYKE",
  authDomain: "blog-like-platform.firebaseapp.com",
  projectId: "blog-like-platform",
  storageBucket: "blog-like-platform.appspot.com",
  messagingSenderId: "517821513102",
  appId: "1:517821513102:web:5599b97a5a6c0d44a478df",
  measurementId: "G-TKBKEL5QCT"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// console.log(db);
// db.settings({timestampsInSnapshots: true});

// const db = firebase.firestore();

module.exports = {db};

// const firebase = firebase.firebaseConfig(firebaseConfig);