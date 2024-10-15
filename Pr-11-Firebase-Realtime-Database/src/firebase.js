
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_N9wEvi4wuJZdMMKMOr2-xlEIRgCStyw",
  authDomain: "pr-11-firebase-realtime-db.firebaseapp.com",
  databaseURL: "https://pr-11-firebase-realtime-db-default-rtdb.firebaseio.com",
  projectId: "pr-11-firebase-realtime-db",
  storageBucket: "pr-11-firebase-realtime-db.appspot.com",
  messagingSenderId: "910880930932",
  appId: "1:910880930932:web:747e64258bdeeeec56a521",
  measurementId: "G-9KTCGSBV8R"
};


export const app = initializeApp(firebaseConfig);
