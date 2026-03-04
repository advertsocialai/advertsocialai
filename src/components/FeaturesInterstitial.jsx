import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

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

const FeaturesInterstitial = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10 sm:py-16 md:py-20 lg:py-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12 font-[Outfit]">

      <div className="absolute w-[1500px] sm:w-[1800px] lg:w-[2082px] h-[800px] sm:h-[1000px] lg:h-[1328px] top-[400px] sm:top-[600px] lg:top-[881px] left-[-150px] sm:left-[-200px] lg:left-[-301px] opacity-100 -z-10">
        <img
          src="/assets/images/Mesh-Grad.png"
          alt="Mesh Gradient"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="absolute w-[800px] sm:w-[1000px] lg:w-[1212px] h-[600px] sm:h-[800px] lg:h-[1088px] top-[500px] sm:top-[800px] lg:top-[1121px] left-[-150px] sm:left-[-200px] lg:left-[-301px] opacity-[0.05] bg-gradient-to-tr from-[#6549F6] to-[#FF611D] rotate-180 -z-10"></div>
      <div className="absolute w-[800px] sm:w-[1000px] lg:w-[1212px] h-[600px] sm:h-[800px] lg:h-[1088px] top-[400px] sm:top-[600px] lg:top-[881px] left-[300px] sm:left-[400px] lg:left-[569px] opacity-[0.05] bg-gradient-to-tr from-[#6549F6] to-[#FF611D] -z-10"></div>


      <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10 max-w-[90%] sm:max-w-[600px] lg:max-w-[916px] mx-auto mb-12 sm:mb-16 lg:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1B1A1A] font-Outfit">
          Why are <span className="font-bold"> Interstitial Ads so effective?</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#4B4B4B]  font-Outfit">
          Interstitial ads occupy the entire screen for a short duration, capturing user focus during moments
when attention is naturally available.
        </p>
      </div>


      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">


          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:hidden">
            <FeatureCardAnimated index={0}>
              <FeatureCardResponsive
                image="/assets/images/highcpm.png"
                title="Always High CPMs"
                description="Full-screen immersive format
Shown at natural navigation points"
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={1}>
              <FeatureCardResponsive
                image="/assets/images/adblock.png"
                title="Anti-AdBlock Solution"
                description="Ideal for branding and awareness campaigns Vignette ads deliver premium exposure without intrusiveness."
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={2}>
              <FeatureCardResponsive
                image="/assets/images/extraspace.png"
                title="No need for extra ad space"
                description="High viewability and engagement
Works across web, mobile, and apps"
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={3}>
              <FeatureCardResponsive
                image="/assets/images/impression.png"
                title="Get Paid For Every Impression"
                description="Ideal for both branding and performance
Interstitial ads balance impact and UX compliance."
              />
            </FeatureCardAnimated>
          </div>


          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCardAnimated index={0}>
              <FeatureCardResponsive
                image="/assets/images/highcpm.png"
                title="Always High CPMs"
                description="Full-screen immersive format
Shown at natural navigation points"
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={1}>
              <FeatureCardResponsive
                image="/assets/images/adblock.png"
                title="Anti-AdBlock Solution"
                description="Ideal for branding and awareness campaigns Vignette ads deliver premium exposure without intrusiveness."
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={2}>
              <FeatureCardResponsive
                image="/assets/images/extraspace.png"
                title="No need for extra ad space"
                description="High viewability and engagement
Works across web, mobile, and apps"
              />
            </FeatureCardAnimated>

            <FeatureCardAnimated index={3}>
              <FeatureCardResponsive
                image="/assets/images/impression.png"
                title="Get Paid For Every Impression"
                description="Ideal for both branding and performance
Interstitial ads balance impact and UX compliance."
              />
            </FeatureCardAnimated>
          </div>


          <div className="hidden lg:block relative max-w-[1280px] mx-auto" style={{ height: "445px" }}>


            <div className="flex justify-between items-center" style={{ width: "1280px", height: "375px" }}>
              <FeatureCardAnimated index={0}>
                <FeatureCard
                  image="/assets/images/highcpm.png"
                  title="Always High CPMs"
                  description="Full-screen immersive format
Shown at natural navigation points"
                  height="303px"
                />
              </FeatureCardAnimated>

              <div style={{ marginTop: "-30px" }}>
                <FeatureCardAnimated index={1}>
                  <FeatureCard
                    image="/assets/images/adblock.png"
                    title="Anti-AdBlock Solution"
                    description="Ideal for branding and awareness campaigns Vignette ads deliver premium exposure without intrusiveness."
                    height="375px"
                  />
                </FeatureCardAnimated>
              </div>
            </div>


            <div
              style={{
                width: "628px",
                height: "379px",
                position: "absolute",
                top: "50px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                zIndex: 1,
              }}
            >
             
              <div style={{ marginTop: "32px" }}>
                <FeatureCardAnimated index={2}>
                  <FeatureCard
                    image="/assets/images/extraspace.png"
                    title="No need for extra ad space"
                    description="High viewability and engagement
Works across web, mobile, and apps"
                    height="331px"
                    textGap="60px"
                  />
                </FeatureCardAnimated>
              </div>


             
                <FeatureCardAnimated index={3}>
                  <FeatureCard
                    image="/assets/images/impression.png"
                    title="Get Paid For Every Impression"
                    description="Ideal for both branding and performance
Interstitial ads balance impact and UX compliance."
                    height="379px"
                    textGap="60px"
                  />
                </FeatureCardAnimated>
              </div>
            </div>
          </div>
        </div>
      
      
    </section>
  );
};


const FeatureCardAnimated = ({ index, children }) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};


const FeatureCardResponsive = ({ image, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full max-w-sm mx-auto h-auto min-h-[300px] sm:min-h-[320px] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col items-center text-center gap-6 sm:gap-8 bg-white transition-all duration-300 border border-[#EAEAEA] hover:border-transparent hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: hover
          ? "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box"
          : "#FFFFFF",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="w-10 h-10 sm:w-12 sm:h-12" />

      <div className="flex flex-col gap-4 sm:gap-6">
        <h3 className="text-lg sm:text-xl leading-tight text-[#1B1A1A] font-medium">
          {title}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-[#4B4B4B]">
          {description}
        </p>
      </div>
    </div>
  );
};


const FeatureCard = ({ image, title, description, height, textGap }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    width: "302px",
    height: height,
    borderRadius: "16px",
    padding: "48px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "32px",
    background: "#FFFFFF",
    transition: "all 0.3s ease",
    transform: hover ? "translateY(-6px)" : "none",
    boxShadow: hover ? "0 10px 25px rgba(0,0,0,0.08)" : "none",
    ...(hover
      ? {
        border: "1px solid transparent",
        background:
          "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box",
        backgroundClip: "padding-box, border-box",
      }
      : { border: "1px solid #EAEAEA" }),
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} style={{ width: 46, height: 46 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: textGap || "32px", maxWidth: 206 }}>
        <h3 className="text-[20px] leading-[28px] text-[#1B1A1A] font-medium">
          {title}
        </h3>
        <p
          className="text-[16px] leading-[24px] text-[#4B4B4B]"
          style={{
            marginTop:
              title === "No need for extra ad space" || title === "Get Paid For Every Impression"
                ? "-32px"
                : undefined,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesInterstitial;
