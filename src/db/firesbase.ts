import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAE-R-f6wUijtaoXuke0zmd3byIgrkXjU",
  authDomain: "modsen-twitter-f0831.firebaseapp.com",
  projectId: "modsen-twitter-f0831",
  storageBucket: "modsen-twitter-f0831.appspot.com",
  messagingSenderId: "726629435487",
  appId: "1:726629435487:web:236deb025ded536333f3ea",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
