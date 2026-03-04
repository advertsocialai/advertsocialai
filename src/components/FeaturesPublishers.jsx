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

const FeaturesPublishers = () => {
  return (
    <section className="features-push-section relative w-full bg-white overflow-hidden py-10 sm:py-16 lg:py-20 font-[Outfit]">


      <div className="absolute w-[2082px] h-[1328px] top-[881px] left-[-301px] -z-10">
        <img
          src="/assets/images/Mesh-Grad.png"
          alt="Mesh Gradient"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-[1212px] h-[1088px] top-[1121px] left-[-301px] opacity-[0.05] bg-gradient-to-tr from-[#6549F6] to-[#FF611D] rotate-180 -z-10" />
      <div className="absolute w-[1212px] h-[1088px] top-[881px] left-[569px] opacity-[0.05] bg-gradient-to-tr from-[#6549F6] to-[#FF611D] -z-10" />


      <div
        className="flex flex-col items-center text-center mx-auto px-4
    gap-4 sm:gap-6 lg:gap-[40px]
    w-full max-w-full lg:w-[916px]"
        style={{
          width: "916px",
          gap: "40px",
        }}
      >
        <h2
          style={{
            fontFamily: "Outfit",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "60px",
            color: "#1B1A1A",
          }}
          className="text-[26px] sm:text-[32px] lg:text-[48px]"
        >
          Why are <span className="font-bold">Publishers so effective?</span>
        </h2>

        <p
          className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[28px]"
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            // fontSize: "18px",
            // lineHeight: "28px",
            color: "#4B4B4B",
          }}
        >
          Permission-Based. High CTR. Always Visible.
        </p>

        <p
          className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] lg:leading-[28px]"
          style={{
            fontFamily: "Outfit",
            fontWeight: 400,
            // fontSize: "18px",
            // lineHeight: "28px",
            color: "#4B4B4B",
          }}
        >
          Publishers are delivered to users who have explicitly opted in to receive
          notifications, ensuring higher engagement and intent compared to
          traditional display formats.
        </p>
      </div>


      <div
        className="features-pushads-desktop mx-auto mt-20 hidden lg:flex flex-col"
        style={{
          width: "1280px",
          height: "785px",
          top: "1144px",
          left: "143px",
          gap: "24px",
        }}
      >

        <div
          className="flex justify-between"
          style={{ width: "1280px", height: "547px" }}
        >
          <FeatureCardAnimated index={0}>
            <FeatureCard
              image="/assets/images/highcpm.png"
              title="High Visibility & Attention"
              description={<span style={{ textAlign: 'center', display: 'block' }}>Always Seen, Never Buried Push ads appear as notification-style messages that stand out from page layouts and content clutter.</span>}
              height="427px"
            />
          </FeatureCardAnimated>

          <FeatureCardAnimated index={1}>
            <div style={{ marginTop: "-40px" }}>
              <FeatureCard
                image="/assets/images/adblock.png"
                title="Fast Testing & Precise Targeting"
                description={<span style={{ textAlign: 'left', display: 'block' }}>Test, Learn, and Optimize Quickly Push creatives are lightweight and quick to deploy. Combined with precise targeting—geo, device, OS, language, behavior—you can test multiple angles in a single day and double down on winners.</span>}
                height="547px"
              />
            </div>
          </FeatureCardAnimated>
        </div>


        <div
          className="flex mx-auto"
          style={{
            width: "628px",
            height: "571px",
            gap: "24px",
            marginTop: "-420px",
          }}
        >
          <FeatureCardAnimated index={2}>
            <FeatureCard
              image="/assets/images/extraspace.png"
              title="Permissioned & Trust-Based Reach"
              description={<span style={{ textAlign: 'left', display: 'block' }}>Users Opted In to Receive Messages <br /> Web Push and App Push are delivered only to users who have explicitly granted permission, while In-Page Push uses native placements without subscriptions.<br />This creates a trust-based channel with stronger intent.</span>}
              height="571px"
            />
          </FeatureCardAnimated>

          <FeatureCardAnimated index={3}>
            <div style={{ marginTop: "50px" }}>
              <FeatureCard
                image="/assets/images/impression.png"
                title="Performance-Friendly Economics"
                description={<span style={{ textAlign: 'left', display: 'block' }}>Pay for Clicks, Not Guesswork Push ads are typically bought on a CPC model, allowing advertisers to start small, control spend, and scale only what converts.</span>}
                height="451px"
              />
            </div>
          </FeatureCardAnimated>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-10">
        {[
          {
            img: "/assets/images/highcpm.png",
            title: "High Visibility & Attention",
            desc: "Always Seen, Never Buried Push ads appear as notification-style messages that stand out from page layouts and content clutter.",
          },
          {
            img: "/assets/images/adblock.png",
            title: "Fast Testing & Precise Targeting",
            desc: "Test, Learn, and Optimize Quickly Push creatives are lightweight and quick to deploy. Combined with precise targeting—geo, device, OS, language, behavior—you can test multiple angles in a single day and double down on winners.",
          },
          {
            img: "/assets/images/extraspace.png",
            title: "Permissioned & Trust-Based Reach",
            desc: "Users Opted In to Receive Messages Web Push and App Push are delivered only to users who have explicitly granted permission, while In-Page Push uses native placements without subscriptions. This creates a trust-based channel with stronger intent.",
          },
          {
            img: "/assets/images/impression.png",
            title: "Performance-Friendly Economics",
            desc: "Pay for Clicks, Not Guesswork Push ads are typically bought on a CPC model, allowing advertisers to start small, control spend, and scale only what converts.",
          },
        ].map((card, i) => (
          <FeatureCardAnimated key={i} index={i}>
            <FeatureCardResponsive
              image={card.img}
              title={card.title}
              description={card.desc}
            />
          </FeatureCardAnimated>
        ))}
      </div>
    </section>
  );
};

const FeatureCardAnimated = ({ index, children }) => (
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

const FeatureCardResponsive = ({ image, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="
  feature-card-mobile
    rounded-2xl
    p-4 sm:p-6
    items-start        
    text-left 
    flex flex-col items-center text-center
    gap-3 sm:gap-4
  "      style={{
        background: hover
          ? "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box"
          : "#FFFFFF",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="w-10 h-10 sm:w-12 sm:h-12" />
      <h3 className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] font-medium text-[#1B1A1A]" >
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] leading-[20px] sm:leading-[22px] text-[#4B4B4B]">
        {description}
      </p>
    </div>
  );
};

const FeatureCard = ({ image, title, description, height }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "302px",
        height,
        padding: "64px 48px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "48px",
        border: hover ? "1px solid transparent" : "1px solid #EAEAEA",
        background: hover
          ? "linear-gradient(#ffffff,#ffffff) padding-box, linear-gradient(69.88deg,#6549F6, #FF611D) border-box"
          : "#FFFFFF",
        transition: "all 0.3s ease",
      }}
    >
      <img src={image} alt={title} style={{ width: 46, height: 46 }} />
      <div style={{ maxWidth: "206px" }}>
        <h3 className="text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] font-medium text-[#1B1A1A]" style={{ marginBottom: "16px" }}>
          {title}
        </h3>
        <p className="text-[14px] sm:text-[15px] leading-[20px] sm:leading-[22px] text-[#4B4B4B]">
          {description}
        </p>
      </div>
    </div>

  );

};
<style>
  {`
/* 
   Features Publishers – Mobile Only
    */

@media (max-width: 1024px) {

  .features-pushads-desktop {
    display: none !important;
  }

}

@media (max-width: 768px) {

  section {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .feature-card-mobile {
    padding: 20px !important;
    gap: 12px !important;
  }

  .feature-card-mobile h3 {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  .feature-card-mobile p {
    font-size: 14px !important;
    line-height: 20px !important;
  }

}

@media (max-width: 1024px) {
  .features-push-section {
    overflow: visible !important;
  }
}

@media (max-width: 1024px) {
  .feature-card-mobile {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.06);
  }
}


`}
</style>


export default FeaturesPublishers;
