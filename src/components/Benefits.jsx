import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Benefits.css";

const items = [
  {
    icon: "/assets/images/selfservice.png",
    title: "Self-Service Platform",
    desc: "An advanced control center. Launch campaigns, fine-tune bids, tweak targeting, and enhance your campaigns' efficiency.",
  },
  {
    icon: "/assets/images/traffic.png",
    title: "Bids and traffic optimization",
    desc: "Smart tools like Smart CPM, CPA Goal help save money and allocate budgets wisely.",
  },
  {
    icon: "/assets/images/rtb.png",
    title: "RTB algorithm",
    desc: "Optimize your budgets with automatic auctions for traffic (RTB).",
  },
  {
    icon: "/assets/images/api.png",
    title: "API & Conversion tracking",
    desc: "Use API to export data & statistics. Add your Voluum, Binom, Bemob or other tracker to control all CPA conversions.",
  },
  {
    icon: "/assets/images/campaign.png",
    title: "Experienced campaign management",
    desc: "Full transparency and detailed reporting. Our expert managers successfully run worldwide-reach campaigns for direct advertisers and agencies.",
  },
  {
    icon: "/assets/images/live.png",
    title: "Live support and dedicated managers",
    desc: "Our multilingual managers assist in campaigns launch and advise on creatives, sources whitelists, and top performing offers.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CardAnimated = ({ index, children }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default function Benefits() {
  return (
    <div className="benefits-container w-full min-h-screen pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 sm:pb-16 md:pb-18 lg:pb-20 relative mx-auto flex flex-col items-center justify-center gap-12 sm:gap-14 md:gap-16 lg:gap-[72px] overflow-hidden px-4 sm:px-6 lg:px-8 font-[Outfit]">
      <section className="benefits-section flex flex-col justify-center items-center w-full max-w-7xl">
        <h2 className="benefits-heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#1B1A1A] mb-10 sm:mb-12 md:mb-14 lg:mb-16 max-w-5xl px-4 sm:px-6">
          Benefits of Advertsocial Popunder ads for advertisers and publishers
        </h2>

        <div className="benefits-grid-container w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:hidden">
            {items.map((item, index) => (
              <CardAnimated index={index} key={item.title}>
                <BenefitCard item={item} />
              </CardAnimated>
            ))}
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 lg:gap-12">
            {items.map((item, index) => (
              <CardAnimated index={index} key={item.title}>
                <BenefitCard item={item} />
              </CardAnimated>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-12 xl:gap-16 mb-12">
              {items.slice(0, 3).map((item, index) => (
                <CardAnimated index={index} key={item.title}>
                  <div className="relative">
                    <BenefitCard item={item} />
                    {index < 2 && (
                      <div className="benefit-divider-vertical absolute right-[-24px] xl:right-[-32px] top-0 w-px h-full bg-[#EAEAEA]" />
                    )}
                  </div>
                </CardAnimated>
              ))}
            </div>

            <div className="benefit-divider-horizontal w-full max-w-4xl h-px bg-[#EAEAEA] mx-auto mb-12" />

            <div className="grid grid-cols-3 gap-12 xl:gap-16">
              {items.slice(3, 6).map((item, index) => (
                <CardAnimated index={index + 3} key={item.title}>
                  <div className="relative">
                    <BenefitCard item={item} />
                    {index < 2 && (
                      <div className="benefit-divider-vertical absolute right-[-24px] xl:right-[-32px] top-0 w-px h-full bg-[#EAEAEA]" />
                    )}
                  </div>
                </CardAnimated>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const BenefitCard = ({ item }) => {
  return (
    <div className="benefit-card flex flex-col items-start text-left gap-4 sm:gap-5 md:gap-6 p-6 sm:p-7 md:p-8 lg:p-0 bg-white rounded-[24px] sm:rounded-[20px] md:rounded-[18px] lg:rounded-none border border-gray-100 sm:border-gray-100 md:border-gray-100 lg:border-0 shadow-sm sm:shadow-sm md:shadow-sm lg:shadow-none">
      <img
        src={item.icon}
        alt=""
        className="benefit-icon w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"
      />
      <h3
        className="benefit-title font-semibold text-lg sm:text-xl md:text-xl lg:text-lg text-gray-800 leading-tight"
        style={{ fontFamily: "Outfit" }}
      >
        {item.title}
      </h3>
      <p
        className="benefit-desc text-gray-600 text-sm sm:text-base md:text-base lg:text-sm leading-relaxed"
        style={{ fontFamily: "Outfit" }}
      >
        {item.desc}
      </p>
    </div>
  );
};
