import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="responsive-video">
        <source src="/image/tech.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <style jsx>{`
        .video-container {
          position: relative;
          overflow: hidden;
        }

        .responsive-video {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
