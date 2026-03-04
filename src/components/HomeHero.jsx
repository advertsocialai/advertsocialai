import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeaderHero() {
  const navigate = useNavigate();

  const cardItems = [
    { type: "website", img: "/assets/images/Blue/HomeHeroicon1.svg", clip: "clip-1" },
    { type: "telegram", img: "/assets/images/Blue/HomeHeroicon2.svg", clip: "clip-1" },
    { type: "paid", img: "/assets/images/Blue/HomeHeroicon3.svg", clip: "clip-1" },
    { type: "social", img: "/assets/images/Blue/HomeHeroicon4.svg", clip: "clip-1" },
    { type: "email", img: "/assets/images/Blue/HomeHeroicon5.svg", clip: "clip-2" },
    { type: "inventory", img: "/assets/images/Blue/HomeHeroicon6.svg", clip: "clip-1" },
  ];


  const directionMap = {
    0: { x: -80, y: 0 },
    1: { x: 0, y: -80 },
    2: { x: 80, y: 0 },
    3: { x: -80, y: 0 },
    4: { x: 0, y: 80 },
    5: { x: 80, y: 0 },
  };

  return (
    <section
      className="
        home-hero-section
        w-full py-12 flex justify-center items-start gap-10 font-inter
        flex-nowrap
        max-lg:flex-wrap max-lg:justify-center max-lg:text-center
        max-md:py-8
      "
      style={{ fontFamily: 'Outfit' }}
    >
      <style>{`
        /* TABLET - 769px to 1024px */
        @media (min-width: 769px) and (max-width: 1024px) {
          .home-hero-section {
            padding-left: 20px;
            padding-right: 20px;
            gap: 20px;
          }
          .home-hero-left {
            width: 48% !important;
            padding: 30px !important;
          }
          .home-hero-h1 {
            font-size: 44px !important;
            line-height: 54px !important;
          }
          .home-hero-right {
            width: 48% !important;
            padding: 20px !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .home-hero-card {
            width: 160px !important;
            height: 160px !important;
          }
        }

        /* 4K+ - 2560px to 2700px+ Scaling */
        @media (min-width: 1801px) {
          .home-hero-section {
            max-width: 2500px !important;
            margin: 0 auto !important;
            gap: 100px !important;
            padding-top: 120px !important;
            padding-bottom: 120px !important;
          }
          .home-hero-left {
            width: 850px !important;
            min-height: 850px !important;
            padding: 80px !important;
            border-radius: 50px !important;
          }
          .home-hero-h1 {
            font-size: 105px !important;
            line-height: 120px !important;
            margin-bottom: 40px !important;
          }
          .home-hero-p {
            font-size: 28px !important;
            max-width: 650px !important;
            margin-bottom: 60px !important;
          }
          .home-hero-btn {
            width: 320px !important;
            height: 85px !important;
            font-size: 26px !important;
          }
          .home-hero-btn img {
            width: 28px !important;
            height: 28px !important;
          }
          .home-hero-right {
            max-width: 1500px !important;
            min-height: 850px !important;
            gap: 50px !important;
            padding: 70px !important;
            border-radius: 50px !important;
          }
          .home-hero-card {
            width: 320px !important;
            height: 320px !important;
            border-radius: 40px !important;
          }
        }
      `}</style>

      <div
        className="
          home-hero-left
          w-[584px] min-h-[620px] rounded-3xl p-12 flex flex-col justify-center
          shadow-none bg-cover bg-center
          max-lg:w-full max-lg:p-10
          max-md:p-6
        "
        style={{
          backgroundImage: "url('/assets/images/Img-header-left.png')",
        }}
      >

        <motion.h1
          style={{ fontFamily: 'Outfit' }}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            home-hero-h1
            text-[60px] leading-[72px] font-[400] text-[#1b1a1a] mb-4
            max-lg:text-[44px] max-lg:leading-[54px]
            max-md:text-[32px] max-md:leading-[40px]
          "
        >
          Monetize every <br /> audience type
        </motion.h1>


        <motion.p
          style={{ fontFamily: 'Outfit' }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="
            home-hero-p
            text-[18px] text-[#555] leading-[1.6] mb-8 max-w-[420px]
            max-lg:max-w-full
            max-md:text-[16px]
          "
        >
          No matter what audience and web or mobile traffic you want to monetize,
          we are ready to meet your expectations for outstanding balance between
          revenue and experience for your users.
        </motion.p>


        <motion.button
          style={{ fontFamily: 'Outfit' }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          onClick={() => navigate("/contact")}
          className="
            home-hero-btn
            inline-flex items-center justify-center gap-3
            w-[200px] h-[60px]
            rounded-full
            text-white font-medium text-[16px]
            bg-gradient-to-r from-[#00E676] to-[#6A0DAD]
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
            max-lg:mx-auto
            max-md:w-[170px] max-md:h-[52px] max-md:text-[15px]
          "
        >
          Get Started
          <img
            src="/assets/images/arrow.png"
            alt="arrow-right"
            className="w-4 h-4 object-contain"
          />
        </motion.button>
      </div>


      <div
        className="
          home-hero-right
          relative w-full max-w-[968px] min-h-[620px] rounded-3xl
          grid grid-cols-3 hero-card-grid justify-items-center content-center
          gap-8 p-12 bg-cover bg-center overflow-hidden
          max-lg:h-auto max-lg:p-10 max-lg:grid-cols-2
          max-md:grid-cols-2  max-md:gap-y-6 max-md:gap-x-2 
          max-sm:grid-cols-1
        "
        style={{
          backgroundImage: "url('/assets/images/Ima-header-right.png')",
        }}
      >
        {cardItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, ...directionMap[index] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className={`
              home-hero-card
              w-[194px] h-[195px] rounded-2xl
              flex items-center justify-center
              bg-no-repeat bg-center bg-contain
              ${item.clip}

              max-lg:w-[180px] max-lg:h-[180px]
              max-md:w-[150px] max-md:h-[150px]
              max-sm:w-[200px] max-sm:h-[200px] max-sm:mx-auto
            `}
            style={{
              backgroundImage: `url('${item.img}')`,
              backgroundColor: "#1B1A1A",
            }}
          />
        ))}
      </div>
    </section>
  );
}
