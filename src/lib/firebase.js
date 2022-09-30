import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDEQs6I8Y6lZNomJWS9ES-RxSJSZOjeXlU",
    authDomain: "instagram-d2ed1.firebaseapp.com",
    projectId: "instagram-d2ed1",
    storageBucket: "instagram-d2ed1.appspot.com",
    messagingSenderId: "776344973979",
    appId: "1:776344973979:web:741bfa60c5a951cd8bcc3e"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
