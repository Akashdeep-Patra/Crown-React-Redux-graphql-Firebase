import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { TimeStamp } from "firebase/firebase-firestore";
const config = {
  apiKey: "AIzaSyBoVc1PThEszMnv0Y1OsP8SmIQhjSM-V1k",
  authDomain: "crown-db-d3bdf.firebaseapp.com",
  databaseURL: "https://crown-db-d3bdf.firebaseio.com",
  projectId: "crown-db-d3bdf",
  storageBucket: "crown-db-d3bdf.appspot.com",
  messagingSenderId: "788813850384",
  appId: "1:788813850384:web:3e18af089682c0318ae795",
  measurementId: "G-ZH0PR1QMWH",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {
      uid,
      phoneNumber,
      photoURL,
      email,
      displayName,
      emailVerified,
    } = userAuth;
    // const createdAt = new Date();
    try {
      await userRef.set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        phoneNumber,
        photoURL,
        email,
        emailVerified,
        displayName,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating new user");
      console.log(error);
    }
  }
  return userRef;
  //   console.log(snapShot);
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
