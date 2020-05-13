import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBY7CjKJI6_Yo_12UNfzHCIGzWs3LMoq-0',
  authDomain: 'vw-clothing.firebaseapp.com',
  databaseURL: 'https://vw-clothing.firebaseio.com',
  projectId: 'vw-clothing',
  storageBucket: 'vw-clothing.appspot.com',
  messagingSenderId: '710703383483',
  appId: '1:710703383483:web:c11a350aac21622d49ba9e',
  measurementId: 'G-N1CCMTXHX7',
};
// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
