import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/storage";
//import "firebase/functions";
//import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLTgAPM8XK9roXlv7wJUvPI8Yin3EmhsU",
  authDomain: "buybio-7da47.firebaseapp.com",
  databaseURL:
    "https://buybio-7da47-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "buybio-7da47",
  storageBucket: "buybio-7da47.appspot.com",
  messagingSenderId: "747569582129",
  appId: "1:747569582129:web:4231df5648bb23d2888510",
  measurementId: "G-NTQS52225Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const auth = firebase.auth();
//const db = firebase.firestore();
//const storage = firebase.storage();
//const functions = firebase.functions();

//export const chatsRef = db.ref("chats");
//export { firebase, auth, db, storage, functions };
export default firebase;
