import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAGQAWV2ab2nyKVFlrgiC0iM31eJHBY9qg",
  authDomain: "sharon-yi-project-five.firebaseapp.com",
  databaseURL: "https://sharon-yi-project-five.firebaseio.com",
  projectId: "sharon-yi-project-five",
  storageBucket: "sharon-yi-project-five.appspot.com",
  messagingSenderId: "904259431353",
  appId: "1:904259431353:web:eb9005fae3099c4792e468",
  measurementId: "G-6JYB1TDCRD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;