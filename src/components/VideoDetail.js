import React from 'react';
import './VideoDetail.css';
const VideoDetail = ({video}) => {
  if(!video) {
    return (
      <div className="block">
        {/*<span className="loader"></span>*/}
        <h4 className="title is-2 is-unselectable is-centered">
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </h4>
      </div>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail columns">
      <div className="column is-8">
        <div className="video-container">
          <iframe title="video_yt" src={url} width="700" height="350"/>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;