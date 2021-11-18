import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6dkd4os7ZcXV6UHQu2EslMqCH6SrwiQo",
  authDomain: "react-apps-course-f25ab.firebaseapp.com",
  projectId: "react-apps-course-f25ab",
  storageBucket: "react-apps-course-f25ab.appspot.com",
  messagingSenderId: "346043970939",
  appId: "1:346043970939:web:cddaaf037fbf0dd2d579de",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
