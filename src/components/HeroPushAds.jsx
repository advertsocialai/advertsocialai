import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroPushAds.css";

function HeroPushAds() {
  const navigate = useNavigate();

  const leftVariants = {
    hidden: { opacity: 0, x: -80, y: -20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -40, y: -10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100, y: -20 },
    visible: {
      opacity: 1,
      x: 0,
      y: [0, -6, 0],
      scale: [1, 1.02, 1],
      transition: {
        x: { duration: 1.2, ease: "easeOut" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 1.2 },
      },
    },
  };

  return (
    <section id="advertisers" className="hero-push-ads-section">
      <img src="/assets/images/Image BG.png" alt="Hero Background" className="hero-push-ads-bg" />

      <div className="hero-push-ads-container">
        <motion.div
          className="hero-push-ads-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
        >
          <motion.h1 variants={childVariants} className="hero-push-ads-title">
            Push Ads:
          </motion.h1>

          <motion.h2 variants={childVariants} className="hero-push-ads-subtitle">
            Direct Engagement at Scale
          </motion.h2>

          <motion.p variants={childVariants} className="hero-push-ads-desc">
            Advert Social AI delivers performance-driven Push Advertising solutions that enable
            advertisers to reach opted-in users directly on their devices. Push Ads offer immediate
            visibility, strong click-through rates, and scalable global reach across desktop and
            mobile.
          </motion.p>

          <motion.button variants={childVariants} className="hero-push-ads-btn">
            <span className="text-sm font-bold" style={{ fontFamily: "Outfit" }}>
              Get Started
            </span>
            <img src="/assets/images/arrow.png" alt="Arrow" className="w-3 h-3" />
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src="/assets/images/HeroPushAds.png"
          alt="Push Ads Graphic"
          className="hero-push-ads-image hidden lg:block"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {/* BREADCRUMB */}
      <div className="hero-push-ads-breadcrumb">
        <span
          className="text-xs sm:text-sm cursor-pointer"
          style={{ fontFamily: "Outfit", color: "#222222" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
        <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
          Services
        </span>
      </div>
    </section>
  );
}

export default HeroPushAds;
