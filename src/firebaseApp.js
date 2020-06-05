import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJnM3VBPQ2AxYj2H-r5dgKtkwsAA9aYQ",
  authDomain: "turnout-8cc9f.firebaseapp.com",
  databaseURL: "https://turnout-8cc9f.firebaseio.com",
  projectId: "turnout-8cc9f",
  storageBucket: "turnout-8cc9f.appspot.com",
  messagingSenderId: "789088800257",
  appId: "1:789088800257:web:f4a76ed5988b97a149fa00",
  measurementId: "G-KZEMK2KRY7"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
