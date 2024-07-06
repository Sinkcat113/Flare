import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCozpomyy6Y6H8pSMa4BKBlIIQpi7egRdI",
    authDomain: "flare-cccd9.firebaseapp.com",
    databaseURL: "https://flare-cccd9-default-rtdb.firebaseio.com",
    projectId: "flare-cccd9",
    storageBucket: "flare-cccd9.appspot.com",
    messagingSenderId: "528255933039",
    appId: "1:528255933039:web:487a3546f4681a4c37cb9a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)