import React from "react";
import "./HeroAdvertisers.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function HeroAdvertisers() {
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
    <section
      id="advertisers"
      className="relative flex justify-center items-center w-full overflow-hidden mx-auto min-h-[520px] lg:min-h-0 hero-advertisers-section"
      style={{
        minHeight: "500px",
        height: "100vh",
        maxHeight: "720px",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        margin: "0 auto",
        maxWidth: "calc(100vw - 20px)",
        padding: "0 10px",
      }}
    >
      <img
        src="/assets/images/Image BG.png"
        alt="Hero Background"
        className="absolute bottom-0 left-0 w-full h-full object-cover sm:object-contain hero-advertisers-bg"
        style={{
          borderRadius: "12px",
          objectPosition: "bottom center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-[5%] max-w-[1280px] hero-advertisers-container">


        <motion.div
          className="
    hero-push-text flex flex-col
    w-full
    max-w-full
    px-4
    text-center
    lg:text-left
    ml-0
    lg:ml-[-40px]
  "
          style={{
            width: "643px",
            height: "360px",
            gap: "40px",
            marginLeft: "-40px",
          }}
        >

          <motion.h1
            variants={childVariants}
            className="
    hero-push-title w-full
    lg:w-[643px]
    h-auto
    lg:h-[51px]
    text-[28px] sm:text-[32px] lg:text-[72px]
    leading-tight
    break-words
    text-center
    lg:text-left
  "
            style={{
              width: "643px",
              height: "51px",
              fontFamily: "Outfit",
              fontWeight: 400,
              fontSize: "72px",
              lineHeight: "80px",
              color: "#FFFFFF",
            }}
          >
            Advertisers:
          </motion.h1>

          <motion.h2
            variants={childVariants}
            className="
    hero-push-subtitle w-full
    lg:w-[643px]
    h-auto
    lg:h-[34px]
    text-[16px] sm:text-[20px] lg:text-[48px]
    leading-snug
    break-words
    text-center
    lg:text-left
  "
            style={{
              width: "643px",
              height: "34px",
              fontFamily: "Outfit",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "62px",
              color: "#FFFFFF",
            }}
          >
            Direct Engagement at Scale
          </motion.h2>


          <motion.p
            variants={childVariants}
            className="
    hero-push-desc w-full
    lg:w-[600px]
    h-auto
    lg:h-[97px]
    text-sm sm:text-base lg:text-lg
    leading-relaxed
    break-words
    text-center
    lg:text-left
  "
            style={{
              width: "600px",
              height: "97px",
              fontFamily: "Outfit",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#F9F9F9",
            }}
          >


            Advert Social AI delivers performance-driven Push Advertising solutions
            that enable advertisers to reach opted-in users directly on their
            devices. Push Ads offer immediate visibility, strong click-through
            rates, and scalable global reach across desktop and mobile.
          </motion.p>

          <motion.button
            variants={childVariants}
            className="mx-auto lg:mx-0 flex items-center justify-center hero-push-btn"
            style={{
              width: "168px",
              height: "58px",
              gap: "8px",
              borderRadius: "40px",
              padding: "24px 32px",
              background:
                "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
              color: "#FFFFFF",
            }}
          >
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "Outfit" }}
            >
              Get Started
            </span>
            <img
              src="/assets/images/arrow.png"
              alt="Arrow"
              className="w-3 h-3"
            />
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src="/assets/images/HeroPushAds.png"
          alt="Push Ads Graphic"
          className="hidden lg:block hero-push-graphic"
          style={{
            width: "582px",
            height: "567px",
            marginRight: "100px",
          }}
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      {/* BREADCRUMB */}
      <div className="absolute flex items-center bottom-2 left-4 sm:left-8 lg:left-[166px] gap-2 z-10 hero-breadcrumb">
        <span
          className="text-xs sm:text-sm cursor-pointer"
          style={{ fontFamily: "Outfit", color: "#222222" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
        <span
          className="text-xs sm:text-sm"
          style={{ fontFamily: "Outfit", color: "#4B4B4B" }}
        >
          Services
        </span>
      </div>

      <style>
        {`
  @media (max-width: 1023px) {
    .hero-push-text {
      width: 100% !important;
      height: auto !important;
      margin-left: 0 !important;
      text-align: center !important;
    }

    .hero-push-title {
      font-size: 40px !important;
      line-height: 47px !important;
      font-weight: 600 !important;
      width: 100% !important;
      height: auto !important;
    }

    .hero-push-subtitle {
      font-size: 30px !important;
      line-height: 38px !important;
      font-weight: 500 !important;
      width: 100% !important;
      height: auto !important;
    }

    .hero-push-desc {
      font-size: 17px !important;
      line-height: 28px !important;
      font-weight: 400 !important;
      width: 100% !important;
      height: auto !important;
      opacity: 0.95 !important;
    }
  }
`}
      </style>

    </section>
  );
}

export default HeroAdvertisers;
