import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD5yGjWU84GEFT-FZ5i6IW61rBeJUIRbgA",
    authDomain: "practice1-b75e9.firebaseapp.com",
    projectId: "practice1-b75e9",
    storageBucket: "practice1-b75e9.appspot.com",
    messagingSenderId: "767212796358",
    appId: "1:767212796358:web:86d5d2a2fc94541a879ac7",
    measurementId: "G-XN741R3YHQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;