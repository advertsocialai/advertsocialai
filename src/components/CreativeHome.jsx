import React from "react";
import "./CreativeHome.css";

const CreativeHome = () => {
  return (
    <div className="creative-container">
      <div className="creative-content">
        {/* Title */}
        <h2 className="creative-title">Creative That Converts</h2>

        {/* Description */}
        <p className="creative-paragraph">
          Creative isn’t decoration it’s conversion infrastructure.
          <br />
          Our enriched formats are built to capture attention, communicate value,
          and drive measurable action.
        </p>

        {/* Whitespace span (as per Figma) */}
        <span className="creative-spacer" />

        {/* Final line */}
        <p className="creative-paragraph">
          From enriched media to interactive storytelling, creativity is our
          multiplier.
        </p>
      </div>
    </div>
  );
};

export default CreativeHome;
