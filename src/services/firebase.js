import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyBOnvruUyZwhrosJ_OqVsMfsbxkaZgmzmQ",
    authDomain: "eventos-base-b72bb.firebaseapp.com",
    databaseURL: "https://eventos-base-b72bb.firebaseio.com",
    projectId: "eventos-base-b72bb",
    storageBucket: "eventos-base-b72bb.appspot.com",
    messagingSenderId: "16697795056",
    appId: "1:16697795056:web:0d01b6db5111e520367d35",
    measurementId: "G-ELER48HPTR",
});

const db = firebaseApp.firestore();

export { db };
