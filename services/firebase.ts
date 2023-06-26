import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCOSsGTZNHP9YcLT1ycpxu0YYvPuWCaxlU",
    authDomain: "agendaaulanext-23eb9.firebaseapp.com",
    projectId: "agendaaulanext-23eb9",
    storageBucket: "agendaaulanext-23eb9.appspot.com",
    messagingSenderId: "583790651398",
    appId: "1:583790651398:web:a5685343d69e0bf5483b87"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

const database = firebase.database();

export {database, firebase};