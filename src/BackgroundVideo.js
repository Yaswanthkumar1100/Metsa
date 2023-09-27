import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video>
        <source src="../assets/video/backvideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;