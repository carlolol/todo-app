import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhyF5L3cUApWTJdwMzxsnC58ZpmRLDPTw",
  authDomain: "todo-app-42c90.firebaseapp.com",
  databaseURL: "https://todo-app-42c90.firebaseio.com",
  projectId: "todo-app-42c90",
  storageBucket: "todo-app-42c90.appspot.com",
  messagingSenderId: "532380287812",
  appId: "1:532380287812:web:e83cc122ed39f3a3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;