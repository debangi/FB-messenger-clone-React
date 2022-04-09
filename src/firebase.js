import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAXjA2TpB5GIumbxsv6Ukhx_lmEq1epBA',
  authDomain: 'facebook-messenger-clone-422b9.firebaseapp.com',
  projectId: 'facebook-messenger-clone-422b9',
  storageBucket: 'facebook-messenger-clone-422b9.appspot.com',
  messagingSenderId: '977849720747',
  appId: '1:977849720747:web:ca7ac6adbd9afaa3a6bcee',
  measurementId: 'G-7J3KKBF9Y1',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
