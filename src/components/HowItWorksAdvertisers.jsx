import React from "react";
import { motion } from "framer-motion";
import './HowItWorksPushAds.mobile.css';
import './HowItWorksAdvertisers.css';

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

const HowItWorksAdvertisers = () => {
  return (
    <section
      className="relative w-full flex justify-center bg-white overflow-visible howitworks-pushads-mobile hiw-advertisers-section"
      style={{ fontFamily: "Outfit", }}
    >
      <motion.div
        className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 hiw-advertisers-container"
        style={{ height: "680px", borderRadius: "20px" }}
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.img
          src="/assets/images/Blue/Dooodle.png"
          alt="Doodle"
          className="absolute z-1 hidden lg:block hiw-doodle-image"
          style={{
            width: "1500px",
            height: "800px",
            left: "0px",
            top: "-90px",
            opacity: 1,
            transform: "rotate(-5deg)",
          }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* BACKGROUND */}
        <img
          src="/assets/images/howitworks.png"
          alt="How it works background"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-0"
        />

        {/* TITLE */}
        <motion.div
          className="absolute hiw-title z-10 flex flex-col items-center text-center hiw-title-container"
          style={{
            width: "100%",
            top: "50px",
            left: 0,
            gap: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={childVariants}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "61px",
              color: "#1B1A1A",
            }}
            className="text-[28px] sm:text-[36px] lg:text-[48px]"
          >
            How Advertisers Work
            <br />
            <span style={{ fontWeight: 400 }}>(Web & Mobile Push Flow)</span>
          </h2>
        </motion.div>

        {/* CONTENT ROW */}
        <motion.div
          className="absolute flex items-center justify-center gap-[40px] z-10 hiw-content hiw-content-row"
          style={{
            width: "1118px",
            height: "388px",
            top: "219px",
            left: "80px",
            // border: "2px solid #2D6AFF",
            // borderRadius: "24px",
            // background: "#fff",
            // boxSizing: "border-box",
            // boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)",
          }}
          variants={childVariants}
        >
          {/* LEFT IMAGE */}
          <div
            className="hidden lg:block flex items-center justify-center hiw-left-image-box"
            style={{
              width: "330px",
              height: "388px",
              borderRadius: "50px",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/images/mobilepushads.png"
              alt="Mobile Push Ads"
              className="w-full h-full object-cover"
              style={{ height: "100%" }}
            />
          </div>

          {/* CENTER CONTENT */}
          <div
            className="flex flex-col justify-center hiw-text-box"
            style={{
              width: "496px",
              height: "388px",
              gap: "43px",
            }}
          >
            {/* TEXT PARAGRAPHS */}
            <div className="flex flex-col gap-[12px]">
              {[
                "Push notification ads are consent-based messages delivered directly to users via browsers or mobile apps.",
                "Users explicitly opt in, creating a high-intent, permission-driven audience.",
                "Because delivery is consented, push ads achieve strong engagement and higher conversion rates.",
              ].map((text, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#4B4B4B",
                  }}
                  className="hiw-text-paragraph"
                >
                  {text}
                </p>
              ))}
            </div>

            {/* CHECK LIST */}
            <div
              className="flex flex-col hiw-list-container"
              style={{
                width: "496px",
                height: "145px",
                gap: "5px",
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            >
              {[
                "Permission-Based Reach: Ads are delivered only to users who have opted in.",
                "High Engagement: Notification placement ensures immediate visibility.",
                "Conversion-Focused: Ideal for re-engagement, offers, and retention campaigns.",
              ].map((item, idx) => {
                const [bold, rest] = item.split(":");
                return (
                  <div key={idx} className="flex items-center gap-[12px] hiw-list-item">
                    <span
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "30px",
                        padding: "9px",
                        background: "var(--Colors-Main-Color, #6549F6)",
                        transform: "rotate(0deg)",
                        opacity: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="hiw-icon-box"
                    >
                      <img
                        src="/assets/images/tick.png"
                        style={{ width: "9px", height: "8px" }}
                        alt="tick"
                      />
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        color: "#282828",
                      }}
                      className="hiw-list-text"
                    >
                      <span style={{ fontWeight: 700 }}>{bold}:</span>
                      <span style={{ fontWeight: 400 }}>{rest}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="hidden lg:block hiw-right-image-box"
            style={{
              width: "212px",
              height: "388px",
              borderRadius: "50px",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/images/mobile-rightpushads.png"
              alt="Mobile Push Right"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* MOBILE STACK */}
        {/* <div className="lg:hidden flex flex-col gap-6  px-4">
          <img
            src="/assets/images/mobilepushads.png"
            className="w-full rounded-[30px] hiw-main-image"
            alt="mobile"
          /> */}
        {/* <div className="flex flex-col gap-4 text-center">
            {[
              "Push notification ads are consent-based messages delivered directly to users via browsers or mobile apps.",
              "Users explicitly opt in, creating a high-intent, permission-driven audience.",
              "Because delivery is consented, push ads achieve strong engagement and higher conversion rates.",
            ].map((text, i) => (
              <p key={i} className="text-sm leading-relaxed text-[#4B4B4B]">
                {text}
              </p>
            ))}
          </div> */}
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default HowItWorksAdvertisers;
