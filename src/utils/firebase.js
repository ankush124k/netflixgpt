// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqVa-iL3CvQ-bt-zeHRQOGCbctCiP7YXc",
  authDomain: "netflixgpt-6ec8e.firebaseapp.com",
  projectId: "netflixgpt-6ec8e",
  storageBucket: "netflixgpt-6ec8e.appspot.com",
  messagingSenderId: "702736143091",
  appId: "1:702736143091:web:c5915af9ebd76a43f55d86",
  measurementId: "G-6J9GKQQGZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();