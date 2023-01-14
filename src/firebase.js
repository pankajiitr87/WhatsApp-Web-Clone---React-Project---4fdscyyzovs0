import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAuAVlyBI7YcZneLSrPs_aMCAkb6oRhRhw",
  authDomain: "whatsappclonep.firebaseapp.com",
  projectId: "whatsappclonep",
  storageBucket: "whatsappclonep.appspot.com",
  messagingSenderId: "217757530542",
  appId: "1:217757530542:web:78b642f86635bcab85f03f",
  measurementId: "G-XDFSB29S58"
};
// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
