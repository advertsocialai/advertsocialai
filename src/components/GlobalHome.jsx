import React from "react";
import "./GlobalHome.css";

const GlobalHome = () => {
  return (
    <div className="global-container">
      {/* Left Content */}
      <div className="global-left-content">
        <h2 className="global-title">
          Global by Intent,
          <br />
          US by Design
        </h2>

        <p className="global-description">
          Headquartered in the US and serving globally, we operate where digital
          commerce happens without borders, boundaries, or limitations.
          <br />
          <br />
          Growth is global. So are we.
        </p>
      </div>

      {/* Right Image */}
      <div className="global-right-image-wrapper">
        <img
          src="/assets/images/Globe.svg"
          alt="Global Presence"
          className="global-globe-image"
        />
      </div>
    </div>
  );
};

export default GlobalHome;
