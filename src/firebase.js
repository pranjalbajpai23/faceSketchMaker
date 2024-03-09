// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAOrpU3-yo8QaCkPAY2mO3tMt7aniAayM",
    authDomain: "facesketchmaker-e89a6.firebaseapp.com",
    projectId: "facesketchmaker-e89a6",
    storageBucket: "facesketchmaker-e89a6.appspot.com",
    messagingSenderId: "117181518069",
    appId: "1:117181518069:web:827d3110a5e9807070f5bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
