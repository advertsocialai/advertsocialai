import React from "react";
import { motion } from "framer-motion";
import "./VerticalsPushAds.css";
import "./VerticalsAdvertisers.css";
const VerticalsAdvertisers = () => {
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.22,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -80, y: -18, scale: 0.995 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="flex justify-center items-center w-full bg-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12 verticals-advertisers-section">
      <div
        className="relative flex flex-col items-start justify-start verticals-pushads-wrapper"
        style={{
          width: "1520px",
          height: "1391px",
          borderRadius: "24px",
          backgroundImage: "url('/assets/images/Subtract-PushAds.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "100px 80px",
        }}
      >
        <div
          className="flex flex-col gap-[32px] items-start justify-start verticals-header-text"
          style={{
            width: "1014px",
            marginTop: "32px",
            marginLeft: "20px",
            paddingLeft: "0px",
          }}
        >
          <h2
            className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight text-white verticals-title"
            style={{ fontFamily: "Outfit" }}
          >
            <span className="text-[#00E676]" style={{ fontFamily: "Outfit" }}>
              Top verticals
            </span>{" "}
            that thrive on <br className="hidden sm:block 2xl:hidden" />
            Advertisers
          </h2>

          <button className="flex items-center gap-2 sm:gap-[8px] bg-gradient-to-r from-[#00E676] to-[#6A0DAD] rounded-full px-6 sm:px-8 py-3 sm:py-4 w-fit hover:opacity-90 transition mx-auto lg:mx-0 verticals-cta-btn">
            <span
              className="text-xs sm:text-sm font-bold text-white leading-4"
              style={{ fontFamily: "Outfit" }}
            >
              Explore All Cases
            </span>
            <img
              src="/assets/images/arrow.png"
              alt="arrow"
              className="w-3 h-3 sm:w-[15px] sm:h-[14px]"
            />
          </button>
        </div>

        <motion.div
          className="flex justify-center w-full"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.28 }}
        >
          <div
            className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-6 sm:gap-8 lg:gap-[40px] justify-center items-center verticals-cards-grid"
            style={{
              width: "1280px",
              marginTop: "60px",
            }}
          >
            <motion.div variants={cardVariants} className="w-full">
              <a
                href="/verticalsad"
                style={{ display: "block", width: "100%", fontFamily: "Outfit" }}
              >
                <VerticalCard
                  image="/assets/images/adchip-black.png"
                  title="Web Push Ads"
                  description={[
                    "Web Push Ads are consent-based notifications delivered through desktop and mobile browsers.",
                    "Users explicitly opt in to receive alerts, and ads appear in the browser or system notification tray—outside the webpage itself.",
                  ]}
                  bestFor={[
                    "Performance campaigns",
                    "Re-engagement and offers",
                    "Desktop + Android web traffic",
                  ]}
                />
              </a>
            </motion.div>

            <motion.div variants={cardVariants} className="w-full">
              <a href="/verticalssafead" style={{ display: "block", width: "100%" }}>
                <VerticalCard
                  image="/assets/images/clean.png"
                  title="In-Page Push Ads"
                  description={[
                    "In-Page Push Ads look like push notifications but are embedded directly within website content.",
                    "No subscription or browser permission is required, making them scalable and compliant across all devices, including iOS.",
                  ]}
                  bestFor={[
                    "iOS traffic",
                    "Cookieless environments",
                    "Native, high-CTR placements",
                  ]}
                />
              </a>
            </motion.div>

            <motion.div variants={cardVariants} className="w-full">
              <a href="/verticalstime" style={{ display: "block", width: "100%" }}>
                <VerticalCard
                  image="/assets/images/ontime.png"
                  title="App Push Ads"
                  description={[
                    "App Push Ads are delivered through installed mobile applications using system-level permissions.",
                    "They function closer to CRM than traditional ads and are ideal for retention, reactivation, and lifecycle messaging.",
                  ]}
                  bestFor={[
                    "Retention & reactivation",
                    "Personalized messaging",
                    "Long-term user engagement",
                  ]}
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative w-full flex justify-center lg:justify-start mt-6 sm:mt-8 lg:mt-[60px] lg:ml-[40px] z-20 verticals-tip-text">
          <div className="relative bg-black lg:bg-transparent px-4 py-2 sm:px-6 sm:py-3 lg:px-0 lg:py-0 rounded-lg lg:rounded-none">
            <p
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight font-semibold text-[#00E676] text-center lg:text-left"
              style={{ fontFamily: "Outfit" }}
            >
              Advertising is especially effective for{" "}
              <span className="text-white font-normal" style={{ fontFamily: "Outfit" }}>
                time-sensitive, performance-driven offers.
              </span>
            </p>
          </div>
        </div>
      </div>
      <style>{`
@media (max-width: 768px) {

  /* 1. Use a NORMAL rectangle card on mobile */
  .verticals-pushads-wrapper .group img[alt="Case Study Card"] {
    // content: url("/assets/images/CaseStudyCard-Mobile.png");
  }

  /* 2. Keep icon position simple */
  .vertical-card-icon {
    top: 24px !important;
    left: 24px !important;
    width: 56px !important;
    height: 56px !important;
  }

  /* 3. Left align text */
  .verticals-pushads-wrapper .group h3,
  .verticals-pushads-wrapper .group p,
  .verticals-pushads-wrapper .group li {
    text-align: left !important;
  }
}
  @media (max-width: 768px) {

  /* 1️⃣ Hide icon ONLY on mobile */
@media (max-width: 768px) {

  .vertical-card-icon {
    position: static !important;
    width: 40px !important;
    height: 40px !important;
    margin-bottom: 12px;
  }

}
  /* 2️⃣ Give text breathing space from left */
  .verticals-pushads-wrapper .group > div:last-child {
    left: 24px !important;
    width: calc(100% - 48px) !important;
  }

  /* 3️⃣ Force clean left alignment */
  .verticals-pushads-wrapper .group h3,
  .verticals-pushads-wrapper .group p,
  .verticals-pushads-wrapper .group li {
    text-align: left !important;
  }
}
  /* ===============================
   MOBILE: FLAT RECTANGLE CARD
   DESKTOP UNTOUCHED
   =============================== */
@media (max-width: 768px) {

  /* Remove decorative cut background */
  .verticals-pushads-wrapper .group > img {
    display: none !important;
  }

  /* Remove gradient mask layer */
  .verticals-pushads-wrapper .group > div[style*="maskImage"] {
    display: none !important;
  }

  /* Make card a clean rectangle */
  .verticals-pushads-wrapper .group {
    background: #ffffff !important;
    border-radius: 16px !important;
    overflow: hidden !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  }

}


`}</style>
    </section>
  );
};

const VerticalCard = ({ image, title, description, bestFor }) => {
  return (
    <div
      className="relative group transition-transform duration-300 hover:scale-105 hover:shadow-2xl
 overflow-hidden rounded-[16px] vertical-card-main"
      style={{
        width: "400px",
        height: "633px",
        borderRadius: "16px",
      }}
    >
      <img
        src="/assets/images/Case Study Card 1.png"
        alt="Case Study Card"
        className="absolute inset-0 w-full h-full object-cover rounded-[16px] vertical-card-bg"
      />

      <div
        className="absolute z-20 vertical-card-icon vertical-card-icon-box"
        style={{
          top: "66px",
          left: "46px",
          width: "66px",
          height: "66px",
        }}
      >
        <img
          src={image}
          alt="icon"
          className="w-full h-full transition-all duration-300 group-hover:invert group-hover:brightness-200"
        />
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[16px] max-md:mask-none max-md:[-webkit-mask:none] vertical-card-mask"
        style={{
          background: "linear-gradient(45deg, #6549F6 0%, #FF611D 76.92%)",
          maskImage: "url(/assets/images/SubtractGradient-Verticals.png)",
          WebkitMaskImage: "url(/assets/images/SubtractGradient-Verticals.png)",
          // maskSize: "cover",
          // WebkitMaskSize: "cover",
          // maskRepeat: "no-repeat",
          // WebkitMaskRepeat: "no-repeat",
          // maskPosition: "center",
          // WebkitMaskPosition: "center",
        }}
      />

      <div
        className="absolute z-10 flex flex-col vertical-card-content vertical-card-text"
        style={{
          bottom: "40px",
          left: "40px",
          width: "286px",
          gap: "32px",
        }}
      >
        <h3
          className=" text-[#222222] font-medium transition-colors duration-300 group-hover:text-[#F9F9F9]"
          style={{
            fontSize: "20px",
            lineHeight: "28px",
            // color: "#1B1A1A",
            fontFamily: "Outfit",
          }}
        >
          {title}
        </h3>

        <div className="flex flex-col gap-2">
          {description.map((text, idx) => (
            <p
              key={idx}
              className=" text-[#222222] transition-colors duration-300 group-hover:text-[#F9F9F9]"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                // color: "#222222",
                fontFamily: "Outfit",
              }}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p
            className=" text-[#222222] transition-colors duration-300 group-hover:text-[#F9F9F9]"
            style={{
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              // color: "#1B1A1A",
              fontFamily: "Outfit",
            }}
          >
            Best for
          </p>

          <ul className="list-disc pl-4">
            {bestFor.map((item, idx) => (
              <li
                key={idx}
                className=" text-[#222222] transition-colors duration-300 group-hover:text-[#F9F9F9]"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  // color: "#1B1A1A",
                  fontFamily: "Outfit",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalsAdvertisers;
