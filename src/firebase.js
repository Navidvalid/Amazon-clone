import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBkQaUiN7b_1oYZnkjnvq6hC1D0_NLg8Kc',
  authDomain: 'clone-d0cd5.firebaseapp.com',
  projectId: 'clone-d0cd5',
  storageBucket: 'clone-d0cd5.appspot.com',
  messagingSenderId: '1090483228552',
  appId: '1:1090483228552:web:01ab6198677451e403343d',
  measurementId: 'G-9PJXBHCP5F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
