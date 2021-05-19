import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";
// import { app } from './firebaserc';
//import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);
 // const [fileUrl, setFileUrl] = React.useState(null)

  // const onFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = db.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file).then(() => {
  //     console.log("Uploaded file", file.name)
  //     setFileUrl(await fileRef.getDownloadUrl())
  //   })
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const username = e.target.username.value;
  //   if(username){
  //     return
  //   }
  //   db.collection("users").doc(username).set({
  //     name: username,
  //     avatar: fileUrl
  //   })
  // };

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, [videos]);

  


  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
     
      </div>
    </div>
  );
}

export default App;
