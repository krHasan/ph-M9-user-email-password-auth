// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNSZj_SBhSup1YIg6klB_zSu_dGjPEDfY",
  authDomain: "user-email-password-auth-cbe66.firebaseapp.com",
  projectId: "user-email-password-auth-cbe66",
  storageBucket: "user-email-password-auth-cbe66.appspot.com",
  messagingSenderId: "251744997440",
  appId: "1:251744997440:web:ead2adc9cbbb14ee1c0fa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;