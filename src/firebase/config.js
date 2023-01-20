import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from"firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: 'hbsistemas-682ce.appspot.com',
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const firestore = getFirestore(app);
