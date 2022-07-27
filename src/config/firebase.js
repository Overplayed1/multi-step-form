import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig = {
    apiKey: "AIzaSyBQUm_N2jd0sa_xvMwqWvysF7jMGptIbv8",
    authDomain: "multi-steps-form-ff6b0.firebaseapp.com",
    projectId: "multi-steps-form-ff6b0",
    storageBucket: "multi-steps-form-ff6b0.appspot.com",
    messagingSenderId: "1046382008043",
    appId: "1:1046382008043:web:7fa03616b5be39cbf1d0ae"
};

firebase.initializeApp(firebaseConfig);

export default firebase;