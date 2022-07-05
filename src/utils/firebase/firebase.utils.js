// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW3JOBmjacH9-DrUrO_cx41qAijn516uE",
  authDomain: "rg-crown-db.firebaseapp.com",
  projectId: "rg-crown-db",
  storageBucket: "rg-crown-db.appspot.com",
  messagingSenderId: "730470921395",
  appId: "1:730470921395:web:2da6b442fc42eecb422cc6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopPopup = () => signInWithPopup(auth, provider);