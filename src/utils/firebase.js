// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQtyRQk3C8XErt9piNwFWHJkXk-MgHfk",
  authDomain: "netflixgptreact-1e623.firebaseapp.com",
  projectId: "netflixgptreact-1e623",
  storageBucket: "netflixgptreact-1e623.firebasestorage.app",
  messagingSenderId: "869176748639",
  appId: "1:869176748639:web:aa3553ac6c004bb9a549ea",
  measurementId: "G-9VM9KNSJ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };