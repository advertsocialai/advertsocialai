import React from "react";
import { motion } from "framer-motion";
import "./ResultAboutUs.css";

export default function Result() {
  return (
    <section
      className="
        result-about-root
        pt-2 md:pt-4 lg:pt-6 
        pb-24 md:pb-28 lg:pb-32 
      "
    >
      <div
        className="
          result-about-container
          flex flex-col lg:flex-row 
          items-center 
          justify-center lg:justify-between 
          gap-10 lg:gap-12
          px-4 sm:px-6 md:px-10
        "
      >
        <div className="result-about-left w-full lg:w-[600px] flex justify-center lg:justify-start">
          <motion.img
            src="/assets/images/Results.png"
            alt="Results illustration"
            className="result-about-image w-full max-w-[600px] rounded-[20px] object-cover"
            initial={{ opacity: 0, x: -120, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: [1, 1.02, 1],
              y: [0, -8, 0],
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 1, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>

        <div className="result-about-right flex flex-col w-full lg:w-[550px] gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="result-about-title text-[#1B1A1A] font-normal">
              <span className="block text-[32px] leading-[40px] sm:text-[40px] lg:text-[48px] lg:leading-[60px] font-Outfit ">
                We do monetization better...
              </span>
              <span className="block text-[32px] leading-[40px] sm:text-[40px] lg:text-[48px] lg:leading-[60px] font-Outfit ">
                Results that make a difference
              </span>
            </h2>
          </div>

          <div className="result-about-buttons flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
            <button
              className="
                result-about-btn-primary
                w-full sm:w-auto 
                flex items-center justify-center 
                px-6 sm:px-8 
                py-3 sm:py-4 
                rounded-[40px] 
                text-sm font-bold 
                transition-transform 
                hover:scale-105
                text-white
              "
              style={{
                background: "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
                fontFamily: "Outfit",
              }}
            >
              Get Started
              <img src="/assets/images/arrow.png" alt="arrow" className="ml-2 w-3 h-3" />
            </button>

            <div className="flex justify-start">
              <button
                className="result-about-btn-secondary gradient-btn"
                style={{
                  width: "141px",
                  height: "58px",
                  padding: "0 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "40px",
                  whiteSpace: "nowrap",
                  fontFamily: "Outfit",
                }}
                onClick={() => (window.location.href = "/about")}
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>

          <div className="result-about-checklist flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
              <CheckItem
                textBold="Self"
                textNormal="– independent decision-making and problem-solving"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <CheckItem textBold="Environment" textNormal="– finding personal development path" />
            </motion.div>

            <motion.div
              className="result-about-check-item-3 hidden lg:flex items-start gap-3 whitespace-nowrap"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <div className="result-about-check-icon-container w-7 h-7 bg-[#6A0DAD] rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/assets/images/tick.png" className="result-about-check-icon w-3 h-3" />
              </div>

              <p
                className="result-about-check-text text-[#1B1A1A]"
                style={{
                  fontFamily: "Outfit",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <span className="font-semibold">Time & Trust</span> – flexibility in all aspects,
                reliable and efficient
              </p>
            </motion.div>

            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <CheckItem
                textBold="Time & Trust"
                textNormal="– flexibility in all aspects, reliable and efficient"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ textBold, textNormal }) {
  return (
    <div className="flex items-start gap-3">
      <div className="result-about-check-icon-container w-6 h-6 sm:w-7 sm:h-7 bg-[#6A0DAD] rounded-full flex items-center justify-center flex-shrink-0">
        <img
          src="/assets/images/tick.png"
          className="result-about-check-icon w-2 h-2 sm:w-2.5 sm:h-2.5"
        />
      </div>

      <p
        className="result-about-check-text text-[#1B1A1A]"
        style={{
          fontFamily: "Outfit",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        <span className="font-semibold">{textBold}</span>{" "}
        <span className="font-medium">{textNormal}</span>
      </p>
    </div>
  );
}
