
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDt3IoRdK_bTB35JKekmT9WvCtnW1yW3X8",
  authDomain: "pr-13--authentication-16f62.firebaseapp.com",
  projectId: "pr-13--authentication-16f62",
  storageBucket: "pr-13--authentication-16f62.appspot.com",
  messagingSenderId: "36252756985",
  appId: "1:36252756985:web:e3a30ed577eb73baca6b28",
  measurementId: "G-9Y6V83FB6Y"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();