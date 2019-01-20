import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAt3vy0z4Dds4fE-P28aJWSQZ8GUja97wg',
  authDomain: 'holasaigon.firebaseapp.com',
  databaseURL: 'https://holasaigon.firebaseio.com',
  projectId: 'holasaigon',
  storageBucket: 'holasaigon.appspot.com',
  messagingSenderId: '5260222191',
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;
