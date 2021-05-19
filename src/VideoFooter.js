import React from "react";
import "./VideoFooter.css";
//import InsertCommentIcon from "@material-ui/icons/InsertComment";
// import AlbumIcon from "@material-ui/icons/Album";
//import MusicVideoSharpIcon from "@material-ui/icons/MusicVideoSharp";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import Ticker from "react-ticker";
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import Badge from '@material-ui/core/Badge';
//import Upload from "./Upload";
//import Box from '@material-ui/core/Box';
//import { flexbox } from '@material-ui/system';




function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <p>{song}</p>
        <div style={{ width: '100%'}}>
          
          </div>
        <div className="videoFooter_ticker">
          <QueueMusicIcon className="videoFooter_ticker"></QueueMusicIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}🎜</p>
              </>
            )}
          </Ticker>
         
        </div>
      </div>

      <img
        className="musicVideo"
        src="https://api.iconify.design/emojione-v1:glowing-star.svg"
        alt=""
        
      />
      {/* <MusicVideoSharpIcon className="musicVideo" color="action" /> */}
    </div>
  );
}

export default VideoFooter;
