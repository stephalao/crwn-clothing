import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlCU_ACDYeSURnFtzluGO_6_BEOJpl_O0",
    authDomain: "crown-db-df2d7.firebaseapp.com",
    projectId: "crown-db-df2d7",
    storageBucket: "crown-db-df2d7.appspot.com",
    messagingSenderId: "383539481011",
    appId: "1:383539481011:web:523c0833265789a3a023c6",
    measurementId: "G-MG7B1ZHEF5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;