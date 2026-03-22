import React from "react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: "/assets/images/Blue/HomeBenefits-icon1.svg",
      title: "Worldwide Ad coverage",
      desc: "Our publishers monetize 100% of their traffic right now. We have a massive number of advertisers in every country, so no impressions are being wasted.",
      btn: true,
    },
    {
      icon: "/assets/images/Blue/HomeBenefits-icon2.svg",
      title: "Clean & Safe Ads",
      desc: "We work only with trusted hand-picked advertisers. All ads are automatically monitored 24/7 by world-leading anti-ad fraud and malware prevention solutions.",
    },
    {
      icon: "/assets/images/Blue/HomeBenefits-icon3.svg",
      title: "Publisher Community",
      desc: "Be a part of the biggest online publisher community! We nurture innovative ideas to help you earn more and learn about the most effective ways to monetize.",
    },
    {
      icon: "/assets/images/Blue/HomeBenefits-icon4.svg",
      title: "On-time & Fast payouts",
      desc: "Get the fastest weekly payouts across the globe with the flexible payment methods and the minimal $5 withdrawal amount.",
    },
    {
      icon: "/assets/images/Blue/HomeBenefits-icon5.svg",
      title: "Solutions for Telegram Mini Apps",
      desc: "Benefit from top-performing ads for Telegram Mini Applications. Stable income and simple integration!",
    },
    {
      icon: "/assets/images/Blue/HomeBenefits-icon6.svg",
      title: "A wide range of integrations",
      desc: "Take advantage of a wide range of integration methods (API, XML, Smartlink), best CPM rates, and convenient payment options.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="bg-white py-[100px] pb-[25px] mt-[-3px]" style={{ fontFamily: "Outfit" }}>
      <div className="mx-auto px-[20px] max-w-[1280px] min-[2000px]:max-w-[1900px] min-[2500px]:max-w-[2400px] min-[3840px]:max-w-none min-[3840px]:px-[120px]">
        <div className="text-left pl-[30px]">
          <h2
            className="text-[48px] font-[400] leading-[1.15] text-[#1b1a1a] max-w-[800px] min-[2000px]:text-[60px] min-[2000px]:max-w-[1000px] min-[2500px]:text-[72px] min-[2500px]:max-w-[1200px] min-[3840px]:text-9xl min-[3840px]:max-w-[1600px]"
            style={{ fontFamily: "Outfit" }}
          >
            Why we are the <span className="font-[700]">favorite</span> <br />
            <span className="font-[700]">monetization platform</span> <br />
            for publishers worldwide
          </h2>
        </div>

        <div
          className="
            grid grid-cols-3 gap-[32px] mt-[64px]
            min-[2000px]:gap-[48px]
            min-[2500px]:gap-[64px]
            min-[3840px]:gap-[80px]
            max-lg:grid-cols-2
            max-md:grid-cols-1
          "
        >
          {benefits.map((b, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              className="
                group
  bg-[url('/assets/images/img_subtract_gray_50_01.png')]
  bg-no-repeat
  bg-center
  p-[40px]
  flex flex-col justify-between text-left
  transition-all duration-300
  hover:bg-[url('/assets/images/Subtract-benifit-black.png')]
  hover:text-white hover:shadow-xl hover:-translate-y-1

                max-lg:h-[450px]
                max-md:h-[450px]

                max-md:p-[28px]
                max-sm:p-[22px]
                
                min-[2000px]:!w-[550px] min-[2000px]:!h-[600px] min-[2000px]:p-[56px]
                min-[2500px]:!w-[700px] min-[2500px]:!h-[750px] min-[2500px]:p-[70px]
                min-[3840px]:!w-[900px] min-[3840px]:!h-[950px] min-[3840px]:p-[90px]"
              style={{
                width: "400px",
                height: "450px",
                borderRadius: "16px",
                opacity: 1,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transform: "rotate(0deg)",
                ...((index === 0 || index === 1 || index === 2) && { marginTop: 0 }),
              }}
            >
              <h3
                className="text-[20px] font-[500] mb-[16px] text-[#1b1a1a] group-hover:text-white text-left min-[2000px]:text-[28px] min-[2500px]:text-[36px] min-[3840px]:text-7xl"
                style={{ fontFamily: "Outfit", width: "320px" }}
              >
                {b.title}
              </h3>
              <img
                src={b.icon}
                alt={b.title}
                className="w-[86px] h-[86px] mb-[32px] transition-all duration-300 text-left mx-0 min-[2000px]:w-[120px] min-[2000px]:h-[120px] min-[2500px]:w-[150px] min-[2500px]:h-[150px] min-[3840px]:w-40 min-[3840px]:h-40"
              />
              <p
                className="text-[16px] leading-[1.5] text-[#4b4b4b] mb-[24px] group-hover:text-white text-left min-[2000px]:text-[20px] min-[2500px]:text-[24px] min-[3840px]:text-4xl"
                style={{ fontFamily: "Outfit" }}
              >
                {b.desc}
              </p>
              {b.btn && (
                <a
                  href="#explore"
                  className="inline-flex items-center justify-center gap-3 w-fit bg-[#1B1A1A] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:bg-white group-hover:text-[#1B1A1A] text-left mx-0"
                  style={{ fontFamily: "Outfit" }}
                >
                  <span className="text-[16px] md:text-[18px]" style={{ fontFamily: "Outfit" }}>
                    Explore More
                  </span>
                  <div className="relative w-4 h-4">
                    <img
                      src="/assets/images/arrow.png"
                      alt="arrow"
                      className="
                        absolute inset-0 w-4 h-4 object-contain
                        opacity-100 group-hover:opacity-0
                        transition-opacity duration-300
                      "
                    />
                    <img
                      src="/assets/images/arrow-Explore.png"
                      alt="arrow-hover"
                      className="
                        absolute inset-0 w-4 h-4 object-contain
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    />
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
