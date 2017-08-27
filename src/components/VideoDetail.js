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
};

export default VideoDetail;