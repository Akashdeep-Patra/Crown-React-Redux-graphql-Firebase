import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyBoVc1PThEszMnv0Y1OsP8SmIQhjSM-V1k",
  authDomain: "crown-db-d3bdf.firebaseapp.com",
  databaseURL: "https://crown-db-d3bdf.firebaseio.com",
  projectId: "crown-db-d3bdf",
  storageBucket: "crown-db-d3bdf.appspot.com",
  messagingSenderId: "788813850384",
  appId: "1:788813850384:web:3e18af089682c0318ae795",
  measurementId: "G-ZH0PR1QMWH"
};
firebase.initializeApp(config);
// for authentication
export const auth = firebase.auth();
// for firestore data bse
export const firestore = firebase.firestore();
// google oauth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
