import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_GHKEY,
  authDomain: 'gh-carder.firebaseapp.com',
  databaseURL: 'https://gh-carder.firebaseio.com',
};

firebase.initializeApp(config);

export const { auth } = firebase;
export const db = firebase.database();
