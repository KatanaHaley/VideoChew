import firebase from "firebase";
import "firebase/storage";
//import firebase from 'firebase/app';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

//Get elements
// const uploader = document.getElementById("uploader");
// const fileButton = document.getElementById("fileButton");

// // Listen for file selection
// fileButton.addEventListener("change", function (event) {
//   // Get file
//   const file = event.target.files[0];
//   // Create a storage reference
//   const storageRef = firebase.storage().ref("user_uploads/" + file.name);
//   // Upload file
//   const task = storageRef.put(file);
//   // Update progress bar
//   task.on(
//     "state_changed",

//     function progress(snapshot) {
//       const percentage = (snapshot.bytesTransferred / snapshot.toalBytes) * 100;
//       uploader.value = percentage;
//     },

//     function error(err) {},

//     function complete() {}
//   );
// });


export default db;
