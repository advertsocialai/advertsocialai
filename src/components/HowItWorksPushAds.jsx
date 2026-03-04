import React from "react";
import { motion } from "framer-motion";
import './HowItWorksPushAds.css';
import './HowItWorksPushAds.mobile.css';

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

const HowItWorksPushAds = () => {
  return (
    <section
      className="hiw-push-section relative w-full flex justify-center bg-white overflow-visible howitworks-pushads-mobile"
      style={{ fontFamily: "Outfit", }}
    >
      <motion.div
        className="hiw-main-container relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0"
        style={{ height: "680px", borderRadius: "20px" }}
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.img
          src="/assets/images/Blue/Dooodle.png"
          alt="Doodle"
          className="hiw-doodle absolute z-1 hidden lg:block"
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
          className="hiw-background-img absolute inset-0 w-full h-full object-cover rounded-[20px] z-0"
        />

        {/* TITLE */}
        <motion.div
          className="hiw-title-container absolute z-10 flex flex-col items-center text-center"
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
            className="hiw-title-text"
            style={{
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "61px",
              color: "#1B1A1A",
            }}
          >
            How Push Ads Work
            <br />
            <span className="hiw-title-subtext" style={{ fontWeight: 400 }}>(Web & Mobile Push Flow)</span>
          </h2>
        </motion.div>

        {/* CONTENT ROW */}
        <motion.div
          className="hiw-content-row absolute flex items-center justify-center gap-[40px] z-10 hiw-content"
          style={{
            width: "1118px",
            height: "388px",
            top: "219px",
            left: "80px",
          }}
          variants={childVariants}
        >
          {/* LEFT IMAGE */}
          <div
            className="hiw-left-image-container hidden lg:block flex items-center justify-center"
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
            className="hiw-center-content flex flex-col justify-center"
            style={{
              width: "496px",
              height: "388px",
              gap: "43px",
            }}
          >
            {/* TEXT PARAGRAPHS */}
            <div className="hiw-text-block flex flex-col gap-[12px]">
              {[
                "Push notification ads are consent-based messages delivered directly to users via browsers or mobile apps.",
                "Users explicitly opt in, creating a high-intent, permission-driven audience.",
                "Because delivery is consented, push ads achieve strong engagement and higher conversion rates.",
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="hiw-paragraph"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#4B4B4B",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* CHECK LIST */}
            <div
              className="hiw-checklist flex flex-col"
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
                  <div key={idx} className="hiw-check-item flex items-center gap-[12px]">
                    <span
                      className="hiw-check-icon-box"
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
                    >
                      <img
                        src="/assets/images/tick.png"
                        className="hiw-check-icon"
                        style={{ width: "9px", height: "8px" }}
                        alt="tick"
                      />
                    </span>
                    <span
                      className="hiw-check-text"
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        color: "#282828",
                      }}
                    >
                      <span style={{ fontWeight: 700 }}>{bold}:</span>
                      <span className="hiw-check-text-light" style={{ fontWeight: 400 }}>{rest}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="hiw-right-image-container hidden lg:block"
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

export default HowItWorksPushAds;
