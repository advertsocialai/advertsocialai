import React from "react";
import { motion } from "framer-motion";
import "./HowItWorksVignette.css";

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

const HowItWorksVignette = () => {
  return (
    <section className="hiwv-section relative w-full flex justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-[20px] overflow-visible bg-white" style={{ fontFamily: 'Outfit' }}>

      <motion.div
        className="hiwv-wrapper relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0"
        style={{
          minHeight: "400px",
          height: "680px",
          borderRadius: "20px",
        }}
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >

        <motion.img
          src="/assets/images/Blue/Dooodle.png"
          alt="Doodle"
          className="hiwv-doodle absolute z-1 hidden lg:block"
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


        <img
          src="/assets/images/howitworks.png"
          alt="How it works background"
          className="hiwv-bg-img absolute inset-0 w-full h-full object-cover rounded-[20px] z-2"
        />


        <motion.div
          className="hiwv-header absolute top-8 sm:top-12 lg:top-[67px] left-4 sm:left-8 lg:left-[182px] w-[90%] sm:w-[80%] lg:w-[916px] px-4 sm:px-0 z-10"
          variants={childVariants}
        >
          <h2
            className="hiwv-title text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[48px] font-bold text-[#1B1A1A] text-center lg:text-center leading-tight sm:leading-tight md:leading-tight xl:leading-[61px]"
            style={{ fontFamily: 'Outfit' }}
          >
            <span className="font-bold" style={{ fontFamily: 'Outfit' }}>
              How Vignette Banner AdsWork
            </span>
            <br className="hidden sm:block" />
            <span className="font-normal" style={{ fontFamily: 'Outfit' }}>
              (Full-Screen Interstitial Flow)
            </span>
          </h2>
        </motion.div>

        {/* MOBILE AND TABLET LAYOUT */}
        <div className="block lg:hidden absolute inset-0 flex flex-col items-start justify-center gap-6 sm:gap-8 pt-36 sm:pt-44 md:pt-48 pb-12 px-2 sm:px-4 ml-2 sm:ml-4">

          {/* LEFT IMAGE - Mobile/Tablet */}
          <motion.div
            className="hiwv-mobile-image-block w-full max-w-sm sm:max-w-md flex-shrink-0"
            variants={childVariants}
          >
            <div className="relative w-full" style={{ aspectRatio: "447/385" }}>
              <img src="/assets/images/Play Reel.png" className="w-full h-full object-contain" alt="Play Reel" />
              <img
                src="/assets/images/media-video.png"
                className="hiwv-mobile-play-icon absolute w-8 h-8 sm:w-10 sm:h-10"
                style={{
                  top: "calc(62% + 21px)",
                  left: "calc(26% + 4px)",
                  transform: "translate(-50%, -50%)",
                }}
                alt="Play Icon"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT - Mobile/Tablet */}
          <motion.div className="hiwv-mobile-text-block w-full max-w-lg flex-shrink-0 text-center" variants={childVariants}>
            <motion.p className="hiwv-mobile-desc text-sm sm:text-base leading-relaxed text-[#333] mb-4" style={{ fontFamily: 'Outfit' }} variants={childVariants}>
              Vignette banners are time-bound, skippable, and UX-compliant.
            </motion.p>

            {/* <motion.p className="text-sm sm:text-base leading-relaxed text-[#333] mb-8" style={{ fontFamily: 'Outfit' }} variants={childVariants}>
              Use Popunder advertising instead of Pop-up ads to get the best
              non-intrusive result on mobile devices.
            </motion.p> */}

            <ul className="hiwv-mobile-list flex flex-col gap-4 sm:gap-5">
              {[
                "A user navigates between pages or sessions",
                "A full-screen vignette banner appears briefly",
                "The user views or interacts, then continues browsing",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="hiwv-mobile-list-item flex items-center gap-3 sm:gap-4"
                  variants={childVariants}
                >
                  <span className="hiwv-mobile-tick-box w-6 h-6 sm:w-7 sm:h-7 bg-[#6549F6] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/images/tick.png"
                      className="hiwv-mobile-tick-icon w-2 h-2 sm:w-2.5 sm:h-2.5"
                      alt="tick"
                    />
                  </span>

                  <span
                    className="hiwv-mobile-item-text font-bold text-sm sm:text-base text-[#222] leading-relaxed text-left"
                    style={{ fontFamily: 'Outfit' }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT - Original Positioning */}
        <div className="hidden lg:block">
          {/* LEFT IMAGE - Desktop */}
          <motion.div
            className="hiwv-image-block absolute"
            style={{
              top: "237px",
              left: "109px",
              width: "447px",
              height: "385px",
            }}
            variants={childVariants}
          >
            <img src="/assets/images/Play Reel.png" className="w-full h-full" alt="Play Reel" />
            <img
              src="/assets/images/media-video.png"
              className="hiwv-play-icon absolute"
              style={{
                width: "48px",
                height: "48px",
                top: "62%",
                left: "22%",
              }}
              alt="Play Icon"
            />
          </motion.div>

          {/* RIGHT TEXT - Desktop */}
          <motion.div
            className="hiwv-text-block absolute"
            style={{
              top: "246px",
              left: "674px",
              width: "496px",
              height: "auto",
            }}
            variants={childVariants}
          >
            <motion.p className="hiwv-desc text-[16px] leading-[28px] text-[#333] mb-[16px]" style={{ fontFamily: 'Outfit' }} variants={childVariants}>
              Vignette banners are time-bound, skippable, and UX-<br>
              </br>compliant.
            </motion.p>

            {/* <motion.p className="text-[16px] leading-[28px] text-[#333]" style={{ fontFamily: 'Outfit' }} variants={childVariants}>
              Use Popunder advertising instead of Pop-up ads to get the best
              non-intrusive result on mobile devices.
            </motion.p> */}

            <ul className="hiwv-list flex flex-col gap-[20px] mt-[40px]">
              {[
                "A user navigates between pages or sessions",
                "A full-screen vignette banner appears briefly",
                "The user views or interacts, then continues browsing",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="hiwv-list-item flex items-center gap-[16px]"
                  variants={childVariants}
                >
                  <span className="hiwv-tick-box w-[25px] h-[25px] bg-[#6549F6] rounded-full flex items-center justify-center">
                    <img
                      src="/assets/images/tick.png"
                      className="hiwv-tick-icon w-[9px] h-[8px]"
                      alt="tick"
                    />
                  </span>


                  <span
                    className="hiwv-item-text font-normal text-[15px] text-[#222] leading-[32px]"
                    style={{ fontFamily: 'Outfit' }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksVignette;
