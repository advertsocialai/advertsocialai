import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HowToStart() {
  const navigate = useNavigate();

  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const centerVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        className="howtostart-section bg-no-repeat bg-cover py-[80px] pb-[90px] max-lg:py-[70px] max-md:py-[50px]"
        style={{
          backgroundImage: "url('/assets/images/Blue/Dooodle.png')",
          backgroundPositionY: "-200px",
          backgroundPositionX: "0px",
          fontFamily: "Outfit",
        }}
        animate={{ backgroundPositionY: ["0px", "-20px", "0px"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1320px] mx-auto max-xl:w-[95%] max-lg:w-[90%] howtostart-wrapper">
          <div className="howtostart-container grid grid-cols-[400px_1fr_400px] bg-[rgba(247,246,255,0.97)] items-center h-[582px] w-full rounded-[25px] gap-[90px] max-xl:gap-[50px]">
            {/* Advertisers */}
            <motion.div
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="howtostart-card rounded-[24px] p-[30px] pr-[66px] text-center ml-[50px]"
            >
              <div className="howtostart-img w-[250px] h-[150px] mx-auto">
                <img
                  src="/assets/images/Blue/Howtostart-icon1.svg"
                  alt="Advertisers"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="howtostart-title text-[36px] font-medium mt-[10px] mb-[12px]">
                Advertisers
              </h3>

              <p className="howtostart-text text-[18px] text-[#4B4B4B] mb-4">
                Reach millions of users every day with top-quality traffic!
              </p>

              <button
                onClick={() => navigate("/advertisers")}
                className="howtostart-btn inline-flex items-center gap-3 bg-gradient-to-r from-[#00E676] to-[#6A0DAD] text-white px-10 py-4 rounded-full text-[16px] font-medium transition-transform duration-300 hover:scale-[1.03]"
              >
                Get Started
                <img src="/assets/images/arrow.png" alt="arrow" className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Center */}
            <motion.div
              variants={centerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="howtostart-center text-center"
            >
              <h2 className="howtostart-heading text-[70px] leading-[74px] font-medium mb-[20px]">
                How to Start?
              </h2>

              <p className="howtostart-sub text-[18px] text-[#4B4B4B]">
                Starting with Advert Social AI is easier than you think.
              </p>
            </motion.div>

            {/* Publishers */}
            <motion.div
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="howtostart-card rounded-[24px] p-[30px] pr-[66px] text-center mr-[50px]"
            >
              <div className="howtostart-img w-[250px] h-[150px] mx-auto">
                <img
                  src="/assets/images/Blue/Howtostart-icon2.svg"
                  alt="Publishers"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="howtostart-title text-[36px] font-medium mt-[10px] mb-[12px]">
                Publishers
              </h3>

              <p className="howtostart-text text-[18px] text-[#4B4B4B] mb-4">
                Maximize the value of your resources.
              </p>

              <button
                onClick={() => navigate("/publishers")}
                className="howtostart-btn inline-flex items-center gap-3 bg-gradient-to-r from-[#00E676] to-[#6A0DAD] text-white px-10 py-4 rounded-full text-[16px] font-medium transition-transform duration-300 hover:scale-[1.03]"
              >
                Get Started
                <img src="/assets/images/arrow.png" alt="arrow" className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🔽 MOBILE MEDIA QUERIES (DESKTOP UNTOUCHED) */}
      <style>
        {`
        .howtostart-card {
          border: 1px solid #C0C0C0 !important;
          box-shadow: none !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1024px) {
          .howtostart-container {
            grid-template-columns: 1fr !important;
            height: auto !important;
            padding: 30px 0;
            gap: 30px;
          }

          .howtostart-card {
            margin: 0 !important;
            width: 75%;
            border: 1px solid #C0C0C0 !important;
          }

          .howtostart-center {
            order: -1;
          }
        }

       @media (max-width: 768px) {
          .howtostart-card {
            width: 408px;
            height: 472px;
            border-radius: 24px;
            border: 1px solid #C0C0C0 !important;
            box-shadow: none !important;
            opacity: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #C0C0C0;
            text-align: center;
          }

          .howtostart-title {
            font-size: 28px !important;
          }

          .howtostart-text,
          .howtostart-sub {
            font-size: 16px !important;
          }

          .howtostart-img {
            width: 200px !important;
            height: 120px !important;
          }

          .howtostart-btn {
            padding: 12px 26px !important;
            font-size: 15px !important;
          }
        }

        @media (max-width: 480px) {
          .howtostart-card {
            width: 95%;
            margin-left: auto ;
            margin-right: auto ;
            border: 1px solid #C0C0C0 !important;
          }

          .howtostart-heading {
            font-size: 36px !important;
            line-height: 42px !important;
          }
        }

        /* 4K+ / 2700px Scaling */
        @media (min-width: 1801px) {
          .howtostart-section {
            background-size: 100% auto !important;
            background-position-x: center !important;
            padding-top: 150px !important;
            padding-bottom: 150px !important;
          }
          .howtostart-wrapper {
            width: 2100px !important;
            max-width: 2200px !important;
          }
          .howtostart-container {
            height: 850px !important;
            grid-template-columns: 600px 1fr 600px !important;
            gap: 120px !important;
            border-radius: 60px !important;
          }
          .howtostart-heading {
            font-size: 110px !important;
            line-height: 120px !important;
          }
          .howtostart-sub {
            font-size: 30px !important;
          }
          .howtostart-card {
            padding: 60px !important;
            border-radius: 40px !important;
          }
          .howtostart-title {
            font-size: 56px !important;
          }
          .howtostart-text {
            font-size: 26px !important;
          }
          .howtostart-img {
            width: 400px !important;
            height: 250px !important;
          }
          .howtostart-btn {
            padding: 24px 60px !important;
            font-size: 24px !important;
          }
          .howtostart-btn img {
            width: 24px !important;
            height: 24px !important;
          }
        }
        `}
      </style>
    </>
  );
}
