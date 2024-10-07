// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG16cwI5mVkCbGMBgdp1C70ur368zn1tI",
    authDomain: "netflix-gpt-metin.firebaseapp.com",
    projectId: "netflix-gpt-metin",
    storageBucket: "netflix-gpt-metin.appspot.com",
    messagingSenderId: "1055211713990",
    appId: "1:1055211713990:web:1f34f82bd67950e0a56ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();