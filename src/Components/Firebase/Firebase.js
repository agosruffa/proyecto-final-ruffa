import firebase from 'firebase/app';
import 'firebase/firestore';

//cambiar var por const en -- const firebaseConfig = {

const firebaseConfig = {
    apiKey: "AIzaSyA9ArDl843okbl_cPiNR3ZFMJNEerwt9ig",
    authDomain: "shopping-cart-react-d5da6.firebaseapp.com",
    projectId: "shopping-cart-react-d5da6",
    storageBucket: "shopping-cart-react-d5da6.appspot.com",
    messagingSenderId: "316858858605",
    appId: "1:316858858605:web:b27a58a4a52f8674fd9364"
  };
  // Initialize Firebase
  const firebasedb = firebase.initializeApp(firebaseConfig);

  export const db = firebasedb.firestore();

  