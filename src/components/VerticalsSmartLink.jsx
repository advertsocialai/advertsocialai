import React from "react";
import { motion } from "framer-motion";

const VerticalsSmartLink = () => {

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
    <section className="flex justify-center items-center w-full bg-white py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 lg:pb-12">
      <div
        className="relative bg-black lg:bg-transparent w-full max-w-[1520px] min-h-[650px] sm:min-h-[700px] lg:h-[1097px] rounded-[24px] px-6 sm:px-12 lg:px-[80px] py-12 sm:py-16 lg:py-[100px] flex flex-col items-start lg:bg-[url('/assets/images/vertical-subtract.png')] lg:bg-contain lg:bg-center lg:bg-no-repeat"
      >

        <div
          className="
    flex flex-col
    items-start     
    // lg:items-start      
    gap-6 sm:gap-8 lg:gap-[40px]
    w-full max-w-4xl lg:max-w-[1014px]
    mb-12 sm:mb-16 lg:mb-[80px]
    lg:ml-[50px]
    text-left lg:text-left
  "
        >
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight text-white text-center lg:text-left
    ml-0 lg:ml-[-32px]" style={{ fontFamily: 'Outfit' }}>
            <span className="text-[#00E676]" style={{ fontFamily: 'Outfit' }}>Top verticals</span>   Smart Link Traffic {" "}
            <br className="hidden sm:block" />

          </h2>


          <div className="w-full flex justify-start">
            <button className="flex items-center gap-2 sm:gap-[8px] bg-gradient-to-r from-[#00E676] to-[#6A0DAD] rounded-full px-6 sm:px-8 py-3 sm:py-4 w-fit hover:opacity-90 transition lg:ml-[-32px]">
              <span className="text-xs sm:text-sm font-bold text-white leading-4" style={{ fontFamily: 'Outfit' }}>
                Explore All Cases
              </span>
              <img
                src="/assets/images/arrow.png"
                alt="arrow"
                className="w-3 h-3 sm:w-[15px] sm:h-[14px]"
              />
            </button>
          </div>

        </div>


        <motion.div
          className="
    flex flex-col
    gap-12             
    sm:grid sm:grid-cols-2 sm:gap-8
    lg:flex lg:flex-row lg:gap-[40px]
    justify-center items-center w-full
  "
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.28 }}
        >

          <motion.div variants={cardVariants} className="w-full mt-0 lg:mt-[-32px]">
            <a href="/verticalsad" style={{ display: 'block', width: '100%' }}>
              <VerticalCard
                image="/assets/images/adchip-black.png"
                title="High-Performing Verticals"
                description={[
                  "Affiliate & Performance Marketing",
                  " Utilities & Software",
                  "Finance & Crypto",
                  "Sweepstakes & Lead Generation",
                  "E-commerce & Offers",

                ]}
              />
            </a>
          </motion.div>


          <motion.div variants={cardVariants} className="w-full mt-0 lg:mt-[-32px]" >
            <a href="/verticalssafead" style={{ display: 'block', width: '100%' }}>
              <VerticalCard
                image="/assets/images/clean.png"
                title="Clean & Safe Ads"
                description={[
                  "Finance & Crypto",
                  "E-commerce & Deals"
                ]}
              />
            </a>
          </motion.div>

          <motion.div variants={cardVariants} className="w-full mt-0 lg:mt-[-32px]" >
            <a href="/verticalstime" style={{ display: 'block', width: '100%' }}>
              <VerticalCard
                image="/assets/images/ontime.png"
                title="On-time & Fast payouts"
                description={[
                  "Mobile Apps & Gaming",
                  "Dating & Subscriptions"
                ]}
              />
            </a>
          </motion.div>
        </motion.div>


        <div className="relative w-full flex justify-center lg:justify-start mt-6 sm:mt-8 lg:mt-[60px] lg:ml-[40px] z-20">
          <div className="relative bg-black lg:bg-transparent px-4 py-2 sm:px-6 sm:py-3 lg:px-0 lg:py-0 rounded-lg lg:rounded-none">
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight font-semibold text-[#00E676] text-center lg:text-left" style={{ fontFamily: 'Outfit' }}>
              Interstitial formats excel  {" "}
              <span className="text-white font-normal" style={{ fontFamily: 'Outfit' }}>
                where attention and recall are critical.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const VerticalCard = ({ image, title, description }) => {
  return (
    <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-[400px] h-64 sm:h-80 lg:h-[400px] rounded-[16px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-auto">

      <img
        src="/assets/images/Subtract-white.png"
        alt="Subtract Shape"
        className="absolute inset-0 w-full h-full object-cover rounded-[16px] pointer-events-none group-hover:opacity-0 transition-opacity duration-300"
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[16px]"
        style={{
          background: "linear-gradient(45deg, #6549F6 0%, #FF611D 76.92%)",
          maskImage: "url(/assets/images/Subtract-white.png)",
          WebkitMaskImage: "url(/assets/images/Subtract-white.png)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />

      <div
        className="absolute bottom-6 sm:bottom-8 lg:bottom-[40px] left-4 sm:left-6 lg:left-[57px] flex flex-col gap-4 sm:gap-6 lg:gap-[32px] right-4 sm:right-6 lg:right-[57px] z-10 text-[#222222] group-hover:text-[#F9F9F9] transition-colors duration-200"
        style={{
          marginTop:
            title === "Clean & Safe Ads" || title === "On-time & Fast payouts"
              ? "-32px"
              : undefined,
        }}
      >
        <h3 className="text-base sm:text-lg lg:text-[20px] leading-tight font-medium text-[#222222] group-hover:text-white" style={{ fontFamily: 'Outfit' }}>
          {title}
        </h3>
        {Array.isArray(description) ? (
          <div style={{ width: "286px" }}>
            {description.map((line, idx) => (
              <div
                key={idx}
                style={{
                  lineHeight: "24px",
                  fontSize: "16px",
                  width: "286px",
                  color: "inherit",
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  marginBottom: "2px",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                }}
                className="group-hover:text-[#F9F9F9]"
              >
                {line}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed transition-colors duration-200" style={{ fontFamily: 'Outfit' }}>
            {description}
          </p>
        )}
      </div>

      <div className="absolute top-4 sm:top-6 lg:top-[66px] left-6 sm:left-8 md:left-12 lg:left-[66px] w-12 h-12 sm:w-14 sm:h-14 lg:w-[66px] lg:h-[66px] z-10">
        <img
          src={image}
          alt="icon"
          className="absolute w-full h-full transition-all duration-300 group-hover:invert group-hover:brightness-200"
        />
      </div>
    </div>
  );
};

export default VerticalsSmartLink;
