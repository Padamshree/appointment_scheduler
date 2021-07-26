const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDC9Z9Jd5v8w5QC0nEvjeWVF_L_CABsLgc",
    authDomain: "digi-task.firebaseapp.com",
    projectId: "digi-task",
    storageBucket: "digi-task.appspot.com",
    messagingSenderId: "938981883708",
    appId: "1:938981883708:web:d1d3e1e4d9be43a71ae839"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

module.exports = {
    db,
}