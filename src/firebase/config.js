import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD20sa-jRq6Xv-64Qfo910n05YpsROnrvE",
    authDomain: "save-notes-f5b3e.firebaseapp.com",
    databaseURL: "https://save-notes-f5b3e.firebaseio.com",
    projectId: "save-notes-f5b3e",
    storageBucket: "save-notes-f5b3e.appspot.com",
    messagingSenderId: "908489973378",
    appId: "1:908489973378:web:eb401dfb833df208819e9b",
    measurementId: "G-JHZNS5J5XM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };