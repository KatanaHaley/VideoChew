// import firebase from "firebase";


// //Get elements
// const uploader = document.getElementById("uploader");
// const fileButton = document.getElementById("fileButton");

// // Listen for file selection
// fileButton.addEventListener("change", function Upload (event) {
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

// Create a function and pass that function into the quotes of onclick"" in VideoSidebar.js


import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import React from 'react';


const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  )
}

<MyUploader />