// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJIPwzULmOYXXYLtFzq24GNJgnl46pHQY",
  authDomain: "genius-car-abe54.firebaseapp.com",
  projectId: "genius-car-abe54",
  storageBucket: "genius-car-abe54.appspot.com",
  messagingSenderId: "963941416863",
  appId: "1:963941416863:web:1b12fee2e4b20b2e3247aa",
  measurementId: "G-74SY2ZZTM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;
