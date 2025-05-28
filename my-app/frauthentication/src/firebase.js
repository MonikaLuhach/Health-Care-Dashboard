// import firebase from 'firebase';
// import 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
apiKey: "AIzaSyCIZm-F9gcuslllGPC0c3b3O0sACUrAZDM",
authDomain: "frauthentication-bac35.firebaseapp.com",
projectId: "frauthentication-bac35",
storageBucket: "frauthentication-bac35.firebasestorage.app",
messagingSenderId: "1014055647497",
appId: "1:1014055647497:web:df489e971a5bd585993bd8",
measurementId: "G-LFJ12VWQS6"
};

// var fireobj = firebase.initializeApp(firebaseConfig);


// export default fireobj;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { app, auth }; // Export what you need