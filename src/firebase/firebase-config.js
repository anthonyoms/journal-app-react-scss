import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6dkd4os7ZcXV6UHQu2EslMqCH6SrwiQo",
  authDomain: "react-apps-course-f25ab.firebaseapp.com",
  projectId: "react-apps-course-f25ab",
  storageBucket: "react-apps-course-f25ab.appspot.com",
  messagingSenderId: "346043970939",
  appId: "1:346043970939:web:cddaaf037fbf0dd2d579de",
};

const firebaseConfigTesting = {
  apiKey: "AIzaSyAu2_CfY1vJK_RpRWKyskQrgbs7WVfmx3A",
  authDomain: "redux-demo-fda2f.firebaseapp.com",
  projectId: "redux-demo-fda2f",
  storageBucket: "redux-demo-fda2f.appspot.com",
  messagingSenderId: "120826571427",
  appId: "1:120826571427:web:5fc1be9d59a2d88ccd2d16",
};

if (process.env.NODE_ENV === "test") {
  firebase.initializeApp(firebaseConfigTesting);
} else {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
