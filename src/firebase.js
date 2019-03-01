import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA5lvVetS_nHttoDZZFWDf5jyYZNHOu36g',
  authDomain: 'wacre-slack.firebaseapp.com',
  databaseURL: 'https://wacre-slack.firebaseio.com',
  projectId: 'wacre-slack',
  storageBucket: 'wacre-slack.appspot.com',
  messagingSenderId: '637011457265'
};

firebase.initializeApp(config);

export default firebase;
