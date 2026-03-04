import React from "react";
import "./Publishers.css";

const PublishersSection = () => {
  const checklist = [
    "Programmatic Display & Video",
    "OTT & Premium Video Inventory",
    "DOOH Extensions",
    "Header Bidding & Ad Operations",
    "AI Yield Optimization",
    "Real-Time Analytics",
  ];

  return (
    <div className="publishers-container">
      <div className="publishers-content">
        {/* Title */}
        <h2 className="publishers-title">
          Publishers: Monetize Without Complexity
        </h2>

        {/* Description */}
        <p className="publishers-description">
          Small and mid-size publishers deserve the same access to premium demand
          as media giants.
          <br />
          <br />
          We make it possible through:
        </p>

        {/* Checklist */}
        {checklist.map((item, index) => (
          <div key={index} className="publishers-checklist-item">
            <div className="publishers-check-icon-wrapper">
              <img
                src="/assets/images/Check Icon-tick.svg"
                alt="check"
                className="publishers-check-icon-img"
              />
            </div>
            <span className="publishers-check-text">{item}</span>
          </div>
        ))}

        {/* Outcome Metrics */}
        <div className="publishers-outcome">
          Outcome Metrics Include:
          <span>
            Higher RPM, eCPM, Fill Rates, Viewability & Net Revenue
            <br />
            Your content drives attention we help ensure it creates income.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PublishersSection;
