import React from "react";
import { motion } from "framer-motion";
import "./CaseStudy.css";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const waveVariants = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 2.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CaseStudy = () => {
  const checklistItems = [
    "Publisher → +42% RPM in 90 days",
    "D2C Brand → 3.2x ROAS in Month 1",
    "OTT → 120% Inventory Uplift",
    "SaaS Campaign → -27% CAC & Higher Retention",
  ];

  return (
    <section className="casestudy-section">
      <motion.div
        className="casestudy-inner-container"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Background Doodle - Desktop Only */}
        <motion.img
          src="/assets/images/Blue/Dooodle.png"
          alt="Doodle"
          className="absolute z-1 hidden lg:block"
          style={{
            width: "1500px",
            height: "800px",
            left: "-100px",
            top: "-90px",
            opacity: 1,
            transform: "rotate(-5deg)",
          }}
          variants={waveVariants}
          animate="animate"
        />

        {/* Main Background Image */}
        <img src="/assets/images/howitworks.png" alt="Background" className="casestudy-bg-img" />

        {/* Title */}
        <motion.div className="casestudy-header-wrapper" variants={childVariants}>
          <h2 className="casestudy-title">Proof & Momentum (Case Study Teasers)</h2>
        </motion.div>

        {/* Content Body: Image + Checklist */}
        <div className="casestudy-body-content">
          {/* Image Wrapper */}
          <motion.div className="casestudy-image-wrapper" variants={childVariants}>
            <img src="/assets/images/casestudy.svg" className="casestudy-image" alt="Case Study" />
          </motion.div>

          {/* Info & Checklist Wrapper */}
          <motion.div className="casestudy-info-wrapper" variants={childVariants}>
            {checklistItems.map((text, idx) => (
              <div key={idx} className="casestudy-checklist-item">
                <div className="casestudy-check-icon-wrapper">
                  <img
                    src="/assets/images/Check Icon-tick.svg"
                    alt="check"
                    className="casestudy-check-icon"
                  />
                </div>
                <span className="casestudy-check-text">{text}</span>
              </div>
            ))}

            {/* CTA Button */}
            <button className="gradient-btn casestudy-cta-btn">
              <span>Learn More</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudy;
