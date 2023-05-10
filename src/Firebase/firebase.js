// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXKHYgzeLj601kxdpZ97xqYwv4dBkOgtk",
  authDomain: "spotify-clone-ca252.firebaseapp.com",
  projectId: "spotify-clone-ca252",
  storageBucket: "spotify-clone-ca252.appspot.com",
  messagingSenderId: "1028235711917",
  appId: "1:1028235711917:web:55bb7c4c7bf4ed7d8ebd24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
