// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsbLgpty0zMQ1h58dftY-hcsc0V9KyDsg",
    authDomain: "summer-camp-client-e60d7.firebaseapp.com",
    projectId: "summer-camp-client-e60d7",
    storageBucket: "summer-camp-client-e60d7.appspot.com",
    messagingSenderId: "881364334593",
    appId: "1:881364334593:web:e0af1f53eb898bc04ca800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;