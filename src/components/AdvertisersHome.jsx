import React from "react";
import "./AdvertisersHome.css";

const AdvertisersSection = () => {
  const checklist = [
    "Programmatic Buying",
    "Audience Targeting & Retargeting",
    "Native & Sponsored Content",
    "Performance Creative",
    "Global Publishing Network Access",
    "Fast Campaign Launch & Optimization",
  ];

  return (
    <div className="advertisers-container">
      <div className="advertisers-content">
        {/* Title */}
        <h2 className="advertisers-title">Advertisers: Scale Without Waste</h2>

        {/* Description */}
        <p className="advertisers-description">
          Startups, D2C brands, SaaS companies, and enterprise advertisers rely on
          us for performance without waste.
        </p>

        {/* Bottom section */}
        <div className="advertisers-bottom-row">
          {/* Left empty space (hidden on mobile) */}
          <div className="advertisers-left-column" />

          {/* Right checklist */}
          <div className="advertisers-right-column">
            <div className="advertisers-provide-title">We Provide:</div>

            {checklist.map((item, index) => (
              <div key={index} className="advertisers-checklist-item">
                <div className="advertisers-check-icon-wrapper">
                  <img
                    src="/assets/images/Check Icon-tick.svg"
                    alt="check"
                    className="advertisers-check-icon-img"
                  />
                </div>
                <span className="advertisers-check-text">{item}</span>
              </div>
            ))}

            <div className="advertisers-measured-by">
              Measured By:
              <span className="advertisers-measured-span">
                ROAS, CAC, CTR, Conversion Rate & Brand Lift When creative meets
                media and data, scale happens.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisersSection;
