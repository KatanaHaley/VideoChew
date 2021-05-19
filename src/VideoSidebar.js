import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { getStorage, ref } from "firebase/storage";
import Upload from "./Upload";


function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

 

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">

        <Fab onclick="Upload" color="transparent" aria-label="add" size="small">
          <form>
            <input type="file" id="actual-btn" hidden />
            <label for="actual-btn">➕</label>
          </form>
        </Fab>
     
      </div>

      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <ChatIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
