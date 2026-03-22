import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Research from "../components/Research";

// ─── Animation variants ────────────────────────────────────────────────────────
const childVariants = {
  hidden: { opacity: 0, x: -40, y: -10 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
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

const cardFadeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideUp = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

// ─── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      className="relative flex justify-center items-center w-full overflow-hidden mx-auto min-h-[520px] lg:min-h-0"
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
        className="absolute bottom-0 left-0 w-full h-full object-cover sm:object-contain"
        style={{ borderRadius: "12px", objectPosition: "bottom center", zIndex: 0, pointerEvents: "none" }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-[5%] max-w-[1280px]">
        <motion.div
          className="hero-wa-text flex flex-col w-full px-4 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, x: -80, y: -20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 } } }}
          style={{ width: "643px", height: "474px", display: "flex", flexDirection: "column", gap: "40px", marginLeft: "-60px", marginTop: "20px" }}
        >
          <motion.h1
            variants={childVariants}
            style={{ width: "643px", height: "131px", fontFamily: "Outfit", fontWeight: 400, fontSize: "72px", lineHeight: "80px", letterSpacing: "0%", color: "#FFFFFF" }}
            className="w-full lg:w-[643px] h-auto lg:h-[51px] text-[28px] sm:text-[32px] lg:text-[72px] leading-tight break-words text-center lg:text-left"
          >
            Worldwide Ads Coverage
          </motion.h1>

          <motion.h2
            variants={childVariants}
            style={{ width: "643px", height: "96px", fontFamily: "Outfit", fontWeight: 400, fontSize: "48px", lineHeight: "62px", letterSpacing: "0%", color: "#FFFFFF" }}
            className="w-full lg:w-[643px] h-auto text-[16px] sm:text-[20px] lg:text-[48px] leading-snug break-words text-center lg:text-left"
          >
            Reach Every Corner of the Globe
          </motion.h2>

          <motion.p
            variants={childVariants}
            style={{ width: "643px", height: "69px", fontFamily: "Outfit", fontWeight: 500, fontSize: "18px", lineHeight: "28px", letterSpacing: "0%", color: "#F9F9F9" }}
            className="w-full lg:w-[600px] h-auto text-sm sm:text-base lg:text-lg leading-relaxed break-words text-center lg:text-left"
          >
            Advert Social AI connects advertisers with premium publishers across 195+ countries,
            delivering high-quality traffic at massive global scale.
          </motion.p>

          <motion.button
            variants={childVariants}
            className="mx-auto lg:mx-0 flex items-center justify-center"
            style={{ width: "168px", height: "58px", gap: "8px", borderRadius: "40px", padding: "24px 32px", background: "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)", color: "#FFFFFF" }}
          >
            <span className="text-sm font-bold" style={{ fontFamily: "Outfit" }}>Get Started</span>
            <img src="/assets/images/arrow.png" alt="Arrow" className="w-3 h-3" />
          </motion.button>
        </motion.div>

        <motion.img
          src="/assets/images/HeroVignette.png"
          alt="Worldwide Ads Coverage Graphic"
          className="hidden lg:block"
          style={{ width: "500px", height: "500px", borderRadius: "67px", marginLeft: "100px", marginTop: "30px" }}
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      <div className="absolute flex items-center bottom-2 left-4 sm:left-8 lg:left-[166px] gap-2 z-10">
        <span className="text-xs sm:text-sm cursor-pointer" style={{ fontFamily: "Outfit", color: "#222222" }} onClick={() => navigate("/")}>
          Home
        </span>
        <img src="/assets/images/side-arrow.png" className="w-1 h-2" alt="" />
        <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
          Worldwide Ads Coverage
        </span>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-wa-text { width: 100% !important; height: auto !important; margin-left: 0 !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────────
const featureItems = [
  { image: "/assets/images/highcpm.png", title: "195+ Countries Covered", description: "Access premium inventory from publishers worldwide with localized targeting and geo-specific optimization." },
  { image: "/assets/images/adblock.png", title: "Multi-Language Targeting", description: "Reach audiences in their native language with multilingual campaign support and localized creatives." },
  { image: "/assets/images/extraspace.png", title: "Cross-Device Reach", description: "Seamlessly deliver ads across desktop, mobile, and tablet with consistent quality and performance." },
  { image: "/assets/images/impression.png", title: "Premium Publisher Network", description: "Partner with a curated network of high-quality publishers generating millions of daily impressions." },
];

const FeatureCardHover = ({ image, title, description, height, textGap }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        width: "302px", height, borderRadius: "16px", padding: "48px 32px",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "32px",
        background: "#FFFFFF", transition: "all 0.3s ease", transform: hover ? "translateY(-6px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(0,0,0,0.08)" : "none",
        ...(hover ? { border: "1px solid transparent", background: "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box", backgroundClip: "padding-box, border-box" } : { border: "1px solid #EAEAEA" }),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} style={{ width: 46, height: 46 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: textGap || "32px", maxWidth: 206 }}>
        <h3 className="text-[20px] leading-[28px] text-[#1B1A1A] font-medium">{title}</h3>
        <p className="text-[16px] leading-[24px] text-[#4B4B4B]">{description}</p>
      </div>
    </div>
  );
};

const FeatureCardResponsive = ({ image, title, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-full max-w-sm mx-auto h-auto min-h-[300px] sm:min-h-[320px] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-6 bg-white transition-all duration-300 border border-[#EAEAEA] hover:border-transparent hover:-translate-y-1 hover:shadow-lg"
      style={{ background: hover ? "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box" : "#FFFFFF" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="w-10 h-10 sm:w-12 sm:h-12" />
      <div className="flex flex-col gap-4 sm:gap-6">
        <h3 className="text-lg sm:text-xl leading-tight text-[#1B1A1A] font-medium">{title}</h3>
        <p className="text-sm sm:text-base leading-relaxed text-[#4B4B4B]">{description}</p>
      </div>
    </div>
  );
};

const CardAnimated = ({ index, children }) => (
  <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={cardFadeVariants}>
    {children}
  </motion.div>
);

function FeaturesSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 sm:py-16 lg:py-20 pb-6 sm:pb-8 lg:pb-12 font-[Outfit]">
      <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10 max-w-[90%] sm:max-w-[600px] lg:max-w-[916px] mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1B1A1A] font-[Outfit]">
          Why choose <span className="font-bold">Worldwide Ads Coverage?</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#4B4B4B] font-[Outfit]">
          Our global network ensures your campaigns reach the right audiences at scale, with
          consistent quality and performance across every market.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:hidden">
            {featureItems.map((item, i) => (
              <CardAnimated key={item.title} index={i}>
                <FeatureCardResponsive {...item} />
              </CardAnimated>
            ))}
          </div>

          {/* Tablet */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featureItems.map((item, i) => (
              <CardAnimated key={item.title} index={i}>
                <FeatureCardResponsive {...item} />
              </CardAnimated>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block relative max-w-[1280px] mx-auto" style={{ height: "445px" }}>
            <div className="flex justify-between items-center" style={{ width: "1280px", height: "375px" }}>
              <CardAnimated index={0}>
                <FeatureCardHover {...featureItems[0]} height="303px" />
              </CardAnimated>
              <div style={{ marginTop: "-30px" }}>
                <CardAnimated index={1}>
                  <FeatureCardHover {...featureItems[1]} height="375px" />
                </CardAnimated>
              </div>
            </div>
            <div style={{ width: "628px", height: "379px", position: "absolute", top: "50px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "24px", alignItems: "flex-start", zIndex: 1 }}>
              <div style={{ marginTop: "32px" }}>
                <CardAnimated index={2}>
                  <FeatureCardHover {...featureItems[2]} height="331px" textGap="60px" />
                </CardAnimated>
              </div>
              <CardAnimated index={3}>
                <FeatureCardHover {...featureItems[3]} height="379px" textGap="60px" />
              </CardAnimated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
const howItWorksSteps = [
  "Advertisers define targeting: geo, device, language, and vertical",
  "Our AI matches campaigns to premium publisher inventory in real time",
  "Ads are delivered globally with full reporting and optimization",
];

function HowItWorksSection() {
  return (
    <section className="relative w-full flex justify-center pt-6 sm:pt-8 lg:pt-16 pb-12 sm:pb-16 lg:pb-[20px] overflow-visible bg-white" style={{ fontFamily: "Outfit" }}>
      <motion.div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0"
        style={{ minHeight: "400px", height: "680px", borderRadius: "20px" }}
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src="/assets/images/howitworks.png"
          alt="How it works background"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-[2]"
        />

        <motion.div className="absolute top-8 sm:top-12 lg:top-[67px] left-4 sm:left-8 lg:left-[182px] w-[90%] sm:w-[80%] lg:w-[916px] px-4 sm:px-0 z-10" variants={slideUp}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-[48px] font-bold text-[#1B1A1A] text-center leading-tight xl:leading-[61px]" style={{ fontFamily: "Outfit" }}>
            <span className="font-bold">How Worldwide Ads Delivery Works</span>
            <br className="hidden sm:block" />
            <span className="font-normal">(Global Campaign Flow)</span>
          </h2>
        </motion.div>

        {/* Mobile / Tablet */}
        <div className="block lg:hidden absolute inset-0 flex flex-col items-start justify-center gap-6 sm:gap-8 pt-36 sm:pt-44 pb-12 px-2 sm:px-4 ml-2 sm:ml-4">
          <motion.div className="w-full max-w-sm sm:max-w-md flex-shrink-0" variants={slideUp}>
            <div className="relative w-full" style={{ aspectRatio: "447/385" }}>
              <img src="/assets/images/Play Reel.png" className="w-full h-full object-contain" alt="Global Campaign" />
              <img src="/assets/images/media-video.png" className="absolute w-8 h-8 sm:w-10 sm:h-10" style={{ top: "calc(62% + 21px)", left: "calc(26% + 4px)", transform: "translate(-50%, -50%)" }} alt="Play" />
            </div>
          </motion.div>
          <motion.div className="w-full max-w-lg flex-shrink-0 text-center" variants={slideUp}>
            <p className="text-sm sm:text-base leading-relaxed text-[#333] mb-4" style={{ fontFamily: "Outfit" }}>
              Real-time bidding and AI-powered matching ensure maximum fill rates worldwide.
            </p>
            <ul className="flex flex-col gap-4 sm:gap-5">
              {howItWorksSteps.map((item, idx) => (
                <motion.li key={idx} className="flex items-center gap-3 sm:gap-4" variants={slideUp}>
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#6549F6] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/assets/images/tick.png" className="w-2 h-2 sm:w-2.5 sm:h-2.5" alt="tick" />
                  </span>
                  <span className="font-bold text-sm sm:text-base text-[#222] leading-relaxed text-left" style={{ fontFamily: "Outfit" }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <motion.div className="absolute" style={{ top: "237px", left: "109px", width: "447px", height: "385px" }} variants={slideUp}>
            <img src="/assets/images/Play Reel.png" className="w-full h-full" alt="Global Campaign" />
            <img src="/assets/images/media-video.png" className="absolute" style={{ width: "48px", height: "48px", top: "62%", left: "22%" }} alt="Play" />
          </motion.div>
          <motion.div className="absolute" style={{ top: "246px", left: "674px", width: "496px", height: "auto" }} variants={slideUp}>
            <p className="text-[16px] leading-[28px] text-[#333] mb-[16px]" style={{ fontFamily: "Outfit" }}>
              Real-time bidding and AI-powered matching ensure<br />maximum fill rates worldwide.
            </p>
            <ul className="flex flex-col gap-[20px] mt-[40px]">
              {howItWorksSteps.map((item, idx) => (
                <motion.li key={idx} className="flex items-center gap-[16px]" variants={slideUp}>
                  <span className="w-[25px] h-[25px] bg-[#6549F6] rounded-full flex items-center justify-center">
                    <img src="/assets/images/tick.png" className="w-[9px] h-[8px]" alt="tick" />
                  </span>
                  <span className="font-normal text-[15px] text-[#222] leading-[32px]" style={{ fontFamily: "Outfit" }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────────
const benefitItems = [
  { icon: "/assets/images/selfservice.png", title: "Global Scale", desc: "Access billions of daily impressions across desktop and mobile worldwide with consistent quality." },
  { icon: "/assets/images/traffic.png", title: "Premium Traffic Quality", desc: "All publisher traffic is vetted and filtered to ensure brand safety and high engagement rates." },
  { icon: "/assets/images/rtb.png", title: "Real-Time Bidding", desc: "AI-driven RTB technology ensures competitive pricing and maximum fill rates in every market." },
  { icon: "/assets/images/api.png", title: "Advanced Geo Targeting", desc: "Target by country, region, city, or carrier with precision geo controls for every campaign." },
  { icon: "/assets/images/campaign.png", title: "Expert Campaign Management", desc: "Dedicated account managers with global market expertise help you optimize across all regions." },
  { icon: "/assets/images/live.png", title: "24/7 Multilingual Support", desc: "Our international team provides round-the-clock support in multiple languages for global clients." },
];

const BenefitCard = ({ item }) => (
  <div className="flex flex-col items-start text-left gap-4 sm:gap-5 p-6 sm:p-7 lg:p-0 bg-white rounded-[24px] sm:rounded-[20px] lg:rounded-none border border-gray-100 sm:border-gray-100 lg:border-0 shadow-sm sm:shadow-sm lg:shadow-none">
    <img src={item.icon} alt="" className="w-11 h-11 sm:w-12 sm:h-12" />
    <h3 className="font-semibold text-lg sm:text-xl lg:text-lg text-gray-800 leading-tight" style={{ fontFamily: "Outfit" }}>{item.title}</h3>
    <p className="text-gray-600 text-sm sm:text-base lg:text-sm leading-relaxed" style={{ fontFamily: "Outfit" }}>{item.desc}</p>
  </div>
);

const BenefitCardAnimated = ({ index, children, className }) => (
  <motion.div className={className} custom={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={cardFadeVariants}>
    {children}
  </motion.div>
);

function BenefitsSection() {
  return (
    <div className="w-full min-h-screen pt-6 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 relative mx-auto flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-[72px] overflow-hidden px-4 sm:px-6 lg:px-8 font-[Outfit]">
      <section className="flex flex-col justify-center items-center w-full max-w-7xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#1B1A1A] mb-10 sm:mb-12 lg:mb-16 max-w-5xl px-4 sm:px-6">
          Benefits of Worldwide Ads Coverage
        </h2>
        <div className="w-full max-w-6xl">
          {/* Mobile */}
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:hidden">
            {benefitItems.map((item, index) => (
              <BenefitCardAnimated index={index} key={item.title}>
                <BenefitCard item={item} />
              </BenefitCardAnimated>
            ))}
          </div>
          {/* Tablet */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            {benefitItems.map((item, index) => (
              <BenefitCardAnimated index={index} key={item.title}>
                <BenefitCard item={item} />
              </BenefitCardAnimated>
            ))}
          </div>
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-12 xl:gap-16 mb-12">
              {benefitItems.slice(0, 3).map((item, index) => (
                <BenefitCardAnimated index={index} key={item.title} className="relative">
                  <div className="relative">
                    <BenefitCard item={item} />
                    {index < 2 && <div className="absolute right-[-24px] xl:right-[-32px] top-0 w-px h-full bg-[#EAEAEA]" />}
                  </div>
                </BenefitCardAnimated>
              ))}
            </div>
            <div className="w-full max-w-4xl h-px bg-[#EAEAEA] mx-auto mb-12" />
            <div className="grid grid-cols-3 gap-12 xl:gap-16">
              {benefitItems.slice(3, 6).map((item, index) => (
                <BenefitCardAnimated index={index + 3} key={item.title} className="relative">
                  <div className="relative">
                    <BenefitCard item={item} />
                    {index < 2 && <div className="absolute right-[-24px] xl:right-[-32px] top-0 w-px h-full bg-[#EAEAEA]" />}
                  </div>
                </BenefitCardAnimated>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Verticalsad() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <Contact />
      <Research />
    </>
  );
}
