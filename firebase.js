import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyD1FmIA5edpRxTsfvoakTTf5hNtiEgNm5U",
  authDomain: "rocketjournal-b9099.firebaseapp.com",
  databaseURL: "https://rocketjournal-b9099.firebaseio.com",
  projectId: "rocketjournal-b9099",
  storageBucket: "rocketjournal-b9099.appspot.com",
  messagingSenderId: "619223257171",
  appId: "1:619223257171:web:2ee975ca9b83e2395636a6",
  measurementId: "G-HE0EC0Q2PH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db  = firebase.firestore()
const boardsRef = db.collection('boards')
const listsRef = db.collection('lists')
const cardsRef = db.collection('cards')

export {boardsRef, listsRef, cardsRef}
