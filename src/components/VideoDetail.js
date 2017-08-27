import React from 'react';
import Timestamp from 'react-timestamp';

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
        <br/>
        <div className="box video-meta">
          <div className="video-title">
            {video.snippet.title}
          </div>
          <div>
            <small>by {video.snippet.channelTitle}, Published on <Timestamp time={video.snippet.publishedAt} precision={2}/></small>
          </div>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>{video.snippet.description}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;