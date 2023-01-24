import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEs0ilihBMALXZj63YyAttGmiN3hJgLS0",
    authDomain: "clone-36873.firebaseapp.com",
    projectId: "clone-36873",
    storageBucket: "clone-36873.appspot.com",
    messagingSenderId: "817533560203",
    appId: "1:817533560203:web:374f17353078e60f1cfb8e",
    measurementId: "G-QYMSYGP6HB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db,auth};