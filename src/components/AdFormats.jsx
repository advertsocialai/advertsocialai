import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AdFormats.css";

export default function AdFormats() {
  const formats = {
    popunder: {
      img: "/assets/images/img-first-tab-Popunder.svg",
      title: "Popunder / Pop Ads",
      desc: "Popunder or Onclick ads are a monetization powerhouse and one of our top-performing ad formats in terms of revenue.",
      features: [
        "These full-tab ads appear in the new browser tab, allowing you to monetize every visitor",
        "Fully compatible with banners & AdSense",
        "The CPM rates are always high",
      ],
    },
    push: {
      img: "/assets/images/push_notifications.svg",
      title: "Push Notifications",
      desc: "Push Ads are a high-engagement, permission-based ad format that delivers your message directly to users’ devices—even when they’re not browsing your site.",
      features: [
        "These native notifications appear on desktop and mobile, ensuring repeat visibility and strong click-through rates.",
        "Fully compatible with other ad formats & banner placements",
        "Consistent performance with stable CPM and CPC returns ",
      ],
    },
    vignette: {
      img: "/assets/images/vignetee.svg",
      title: "Vignette Banner Ads",
      desc: "Vignette Ads are full-screen, high-impact ads displayed during natural page transitions, maximizing attention without interrupting user experience.",
      features: [
        "These ads appear between page loads, allowing publishers to capture premium impressions effortlessly.",
        "Optimized for both mobile and desktop traffic",
        "Delivers exceptionally high CPMs with minimal UX friction",
      ],
    },
    inpage: {
      img: "/assets/images/inpush_add.svg",
      title: "In-Page Push Ads",
      desc: "In-Page Ads are native, seamlessly embedded ads that blend naturally within your website content for higher user engagement.",
      features: [
        "These ads maintain site aesthetics while ensuring strong visibility and scalable monetization.",
        "Fully responsive across all devices",
        "Ideal for long-session traffic and consistent revenue flow",
      ],
    },
    interstitial: {
      img: "/assets/images/Interstitial.svg",
      title: "Interstitial Ads",
      desc: "Interstitial Ads are full-screen immersive ads shown at strategic moments, delivering maximum impact and advertiser value.",
      features: [
        "These ads command full user attention, making them one of the highest-converting ad formats available.",
        "Perfect for app-like and mobile-first experiences",
        "Premium format with top-tier CPM rates",
      ],
    },
    smartlink: {
      img: "/assets/images/smart_link.svg",
      title: "SmartLink",
      desc: "Smartlink Ads are an intelligent, auto-optimizing monetization solution that routes traffic to the best-performing offers in real time.",
      features: [
        "With zero ad placement complexity, Smartlinks allow you to monetize every visitor instantly.",
        "Works across all geos and traffic types",
        "AI-driven optimization ensures maximum revenue per click. ",
      ],
    },
  };

  const tabs = Object.keys(formats);
  const [active, setActive] = useState("popunder");
  const [fade, setFade] = useState(false);
  const data = formats[active];

  const handleChange = (key) => {
    if (key === active) return;
    setFade(true);
    setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 200);
  };

  return (
    <div className="w-full bg-[#161313] py-[10px] flex justify-center max-md:py-[50px] max-sm:py-[40px] font-[Outfit]">
      <div
        className="
          w-full max-w-[1300px]
          bg-no-repeat bg-top bg-cover
          overflow-hidden
          px-[70px] pt-[80px] pb-[60px]

          max-xl:px-[50px]
          max-lg:px-[35px] max-lg:pt-[60px] max-lg:pb-[35px]
          max-md:px-[20px] max-md:pt-[50px]
          max-sm:px-[16px] max-sm:pt-[40px] max-sm:pb-[28px]
          adformats-container
        "
        style={{
          backgroundImage: "url('/assets/images/img-ad-formats.png')",
          backgroundSize: "100% auto",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "top",
        }}
      >
        <div className="text-center mb-[40px] max-md:mb-[30px]">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="
              text-[52px] leading-[1.1] font-medium text-black font-[Outfit]
              max-lg:text-[42px]
              max-md:text-[34px]
              max-sm:text-[28px]
              adformats-title
            "
          >
            Scale ad inventory with <br />
            <span className="font-bold">AI-enhanced ad formats</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[#6C6C6C] text-[16px] mt-3 max-w-[550px] mx-auto max-sm:text-[14px] font-[Outfit] adformats-sub-desc"
          >
            Cover 100% of your web, mobile & Telegram Mini App traffic with our smart and
            user-friendly solutions
          </motion.p>
        </div>

        <div className="bg-[#6A0DAD] rounded-lg px-4 py-4 flex justify-center gap-16 flex-wrap mb-[60px] max-md:gap-8 max-sm:gap-4 adformats-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleChange(tab)}
              className="text-white capitalize px-5 py-2 text-[16px] relative adformats-tab-btn"
            >
              {tab}
              {active === tab && (
                <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-[70px] h-[4px] bg-white rounded adformats-tab-indicator"></span>
              )}
            </button>
          ))}
        </div>

        <div
          className={`
            grid grid-cols-2 gap-[04px]
            max-lg:gap-[30px]
            max-md:grid-cols-1 max-md:gap-[24px]
            transition-all duration-300
            ${
              fade
                ? "opacity-0 scale-95 pointer-events-none"
                : "opacity-100 scale-100 pointer-events-auto"
            }
          `}
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center md:justify-start items-start  max-md:min-h-0 adformats-image adformats-image-wrapper"
          >
            <img
              src={data.img}
              alt={data.title}
              className={`object-contain max-md:translate-y-0 adformats-main-img
                ? "w-[520px] max-lg:w-[440px] max-md:w-[380px] max-sm:w-[320px] max-md:translate-y-[-40px]"
                : "w-[480px] max-lg:w-[400px] max-md:w-[340px] max-sm:w-[280px] max-md:translate-y-[-20px]"
                }`}
              style={{
                transform:
                  active === "push"
                    ? "translate(120px, 0px)"
                    : active === "popunder"
                      ? "translate(100px, 5px)"
                      : active === "vignette"
                        ? "translate(100px, -20px)"
                        : active === "inpage"
                          ? "translate(110px, 0px)"
                          : active === "interstitial"
                            ? "translate(120px, 0px)"
                            : active === "smartlink"
                              ? "translate(100px, -20px)"
                              : "translateY(30px)",
              }}
            />
          </motion.div>

          <motion.div
            key={data.title}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-left max-md:text-center max-md:mt-[-30px] adformats-text"
          >
            <h3
              className="text-[32px] font-bold mb-4 text-black
  max-md:text-white max-md:text-[26px] max-sm:text-[22px] font-[Outfit] adformats-content-title"
            >
              {data.title}
            </h3>

            <p className="text-[#4b4b4b] mb-6 text-[17px] leading-[1.6] max-md:text-white max-sm:text-[15px] font-[Outfit] adformats-content-desc">
              {data.desc}
            </p>

            <div className="space-y-4 max-sm:space-y-3 adformats-features">
              {data.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-start gap-3 max-md:justify-center feature-row"
                >
                  <img
                    src="/assets/images/Blue/tick-icon.png"
                    className="w-[20px] h-[20px] mt-[3px] adformats-feature-icon"
                    alt="check icon"
                  />
                  <span className="text-[16px] text-[#393939] max-md:text-white max-sm:text-[14px] font-[Outfit] adformats-feature-text">
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
