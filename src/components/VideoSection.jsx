import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const containerStyle = {
    width: "1518px",
    height: "854px",
    borderRadius: "20px",
    overflow: "hidden",
    opacity: 1,
    backgroundImage: "url(/assets/images/Video.jsx.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
  };

  return (
    <section className="video-section-parent">
      <div className="video-section-scaling-wrapper">
        <div className="video-section-container" style={containerStyle} />
      </div>
    </section>
  );
};

export default VideoSection;
