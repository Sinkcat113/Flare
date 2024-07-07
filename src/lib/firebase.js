import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    // Your firebase config here
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
