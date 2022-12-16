const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyBdspfH2bpFPkiu4l3sctXo42JfzkrzYKE",
  authDomain: "blog-like-platform.firebaseapp.com",
  projectId: "blog-like-platform",
  storageBucket: "blog-like-platform.appspot.com",
  messagingSenderId: "517821513102",
  appId: "1:517821513102:web:5599b97a5a6c0d44a478df",
  measurementId: "G-TKBKEL5QCT"
};

initializeApp(firebaseConfig);

// module.exports = firebaseAuth;

// const firebase = firebase.firebaseConfig(firebaseConfig);