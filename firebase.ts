import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
 
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTD
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxz9gaxfrVawSjTfmVCBStzpxzyHsgA90",
  authDomain: "manpreet-singh-portfolio.firebaseapp.com",
  databaseURL: "https://manpreet-singh-portfolio-default-rtdb.firebaseio.com",
  projectId: "manpreet-singh-portfolio",
  storageBucket: "manpreet-singh-portfolio.appspot.com",
  messagingSenderId: "247351620469",
  appId: "1:247351620469:web:d619a60b237f1c3380193c",
  measurementId: "G-EMX5Q2DY92"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);
