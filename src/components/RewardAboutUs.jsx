import React from "react";
import { motion } from "framer-motion";
import "./RewardAboutUs.css";

export default function RewardAboutUs() {

  const featureAnimation = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      className="
        relative overflow-hidden text-white font-inter
        pt-[140px] pb-[140px]
        bg-transparent reward-about-root
      "
    >

      {/* Desktop background */}
      <div
        className="subtract-bg reward-subtract-bg absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
        style={{
          width: "1520px",
          height: "1177px",
          backgroundImage: "url('/assets/images/Subtract-Reward.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      ></div>


      <div className="reward-mobile-card reward-content-wrapper relative z-[2] container mx-auto px-6">
        <style>{`
          @media (max-width: 900px) {
            .getstarted-btn-container {
              margin-left: 0 !important;
              margin-right: auto !important;
              align-self: flex-start !important;
              display: block !important;
            }
            .flex.flex-col.gap-[50px] {
              display: flex !important;
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}</style>


        <div
          className="philosophy-section reward-philosophy-section flex justify-between gap-[46px] px-[5%]"
          style={{ width: "1296px", margin: "0 auto" }}
        >


          <div className="flex flex-col gap-[50px] reward-left-content" style={{ width: "440px" }}>
            <h1
              className="reward-main-heading"
              style={{
                fontFamily: "Outfit",
                fontSize: "48px",
                fontWeight: 400,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Our core values
            </h1>

            <p
              className="reward-description"
              style={{
                fontFamily: "Outfit",
                color: "#F9F9F9",
                fontSize: "20px",
                lineHeight: "28px",
                textAlign: "left",
              }}
            >
              Boost your ROI with our global
              <br />
              strategy today
            </p>

            <div className="getstarted-btn-container reward-cta-container relative w-[132px] h-[148px] cursor-pointer">
              <motion.img
                src="/assets/images/Blue/Button Circle.svg"
                alt="Get Started"
                style={{ width: "132px", height: "148px" }}
                className="cursor-pointer"
                whileHover={{
                  scale: 1.12,
                  filter: "brightness(1.35)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
            </div>
          </div>


          <div
            className="features-grid reward-features-grid flex flex-wrap gap-[40px] pl-[72px]"
            style={{
              width: "810px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              borderLeft: "1px solid #4C4C4C"
            }}
          >
            {["Clients", "Quality", "Teamwork", "Responsibility"].map(
              (feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item reward-feature-item flex flex-col gap-[16px]"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.25, duration: 0.7 }}
                >
                  <img
                    className="reward-feature-icon"
                    src={
                      index === 0
                        ? "/assets/images/robot-icon.png"
                        : index === 1
                          ? "/assets/images/quality.png"
                          : index === 2
                            ? "/assets/images/Teamwork.png"
                            : "/assets/images/Responsbility.png"
                    }
                    style={{ width: "46px", height: "46px" }}
                  />

                  <h2
                    className="reward-feature-title"
                    style={{
                      fontFamily: "Outfit",
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    {feature}
                  </h2>

                  <p
                    className="reward-feature-desc"
                    style={{
                      fontFamily: "Outfit",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {feature === "Clients"
                      ? "Our clients’ interest is always top priority. Clients build their business with us, so their success is our success."
                      : feature === "Quality"
                        ? "Whatever we do, we do it well. Here, we value quality over quantity."
                        : feature === "Teamwork"
                          ? "The complexity of our business demands a team effort. No individual can be successful if the whole team fails."
                          : "We’re not afraid neither to bring fresh ideas to the table nor to take responsibility for their implementation."}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>


        <div className="partners-box reward-partners-box relative w-[85%] mx-auto mt-[180px] rounded-[24px] px-16 py-20"
          style={{
            backgroundImage: "url('/assets/images/img-unlock-inner.png')",
            width: "1280px",
            height: "288px",
          }}
        >
          <p className="partners-title reward-partners-title text-[#d0d0d0] text-[18px] font-[300] absolute top-[25px] left-[150px] font-[Outfit]">
            Trusted by businesses big and small, everywhere!!
          </p>


          <div className="partners-scroll-container mt-[50px]">
            <div className="partners-track">

              <div className="partners-scroll">
                <img className="reward-partner-img" src="/assets/images/img_wire_fdjp_znd_1i6yux.png" />
                <img className="reward-partner-img" src="/assets/images/img_clip_path_group.svg" />
                <img className="reward-partner-img" src="/assets/images/img_capitalist_b67wzd_1_z1u9dzk.svg" />
                <img className="reward-partner-img" src="/assets/images/visa.png" />
                <img className="reward-partner-img" src="/assets/images/img_mastercard_btqqhid2_1rfgkg.svg" />
              </div>


              <div className="partners-scroll">
                <img className="reward-partner-img" src="/assets/images/img_wire_fdjp_znd_1i6yux.png" />
                <img className="reward-partner-img" src="/assets/images/img_clip_path_group.svg" />
                <img className="reward-partner-img" src="/assets/images/img_capitalist_b67wzd_1_z1u9dzk.svg" />
                <img className="reward-partner-img" src="/assets/images/visa.png" />
                <img className="reward-partner-img" src="/assets/images/img_mastercard_btqqhid2_1rfgkg.svg" />
              </div>
            </div>
          </div>
        </div>

      </div>


      <style>
        {`
        .partners-scroll-container {
          overflow: hidden;
          width: 100%;
        }

        .partners-track {
          display: flex;
          width: max-content;
          animation: scroll-marquee 10s linear infinite;
        }

        .partners-scroll {
          display: flex;
          gap: 60px;
        }

        .partners-scroll img {
          height: 65px;
          flex-shrink: 0;
          object-fit: contain;
          padding-inline: 20px;
        }

        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

      {/* MOBILE CSS  */}
      <style>
        {`
  @media (max-width: 768px) {

    /* Hide large background */
    .subtract-bg {
      display: none !important;
    }

    /* Card wrapper */
    .reward-mobile-card {
      background: #111 !important;
      padding: 24px !important;
      border-radius: 18px !important;
    }

    /* Main section layout */
    .philosophy-section {
      flex-direction: column !important;
      width: 100% !important;
      padding: 0 !important;
      gap: 36px !important;
    }

    /* Left content */
    .philosophy-section > div:first-child {
      width: 100% !important;
      gap: 28px !important;
    }

    /* Heading */
    .philosophy-section h1 {
      font-size: 32px !important;
      white-space: normal !important;
      text-align: left !important;
    }

    /* Sub text */
    .philosophy-section p {
      font-size: 16px !important;
      line-height: 24px !important;
    }

    /* CTA button center */
    .philosophy-section .relative {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    /* Features grid */
    .features-grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 40px !important;
      border-left: none !important;
      padding-left: 0 !important;
      width: 100% !important;
    }

    /* Feature item */
    .feature-item {
      width: 100% !important;
      align-items: flex-start !important;
      text-align: left !important;
    }

    /* Feature icons */
    .feature-item img {
      width: 42px !important;
      height: 42px !important;
    }

    /* Feature text */
    .feature-item h2 {
      font-size: 18px !important;
    }

    .feature-item p {
      font-size: 14px !important;
      line-height: 22px !important;
    }

    /* Partners section */
    .partners-box {
      background: #1b1b1b !important;
      width: 100% !important;
      height: auto !important;
      padding: 24px !important;
      border-radius: 18px !important;
      background-image: none !important;
      margin-top: 80px !important;
    }

    .partners-title {
      position: static !important;
      text-align: left !important;
      margin-bottom: 20px !important;
      font-size: 16px !important;
    }
  }

  @media (max-width: 480px) {

    .reward-mobile-card {
      padding: 20px !important;
    }

    .philosophy-section h1 {
      font-size: 28px !important;
    }

    .partners-box {
      padding: 20px !important;
    }
  }

  .philosophy-section .relative {
  margin-left: auto !important;
  margin-right: auto !important;
}

  `}
      </style>


    </section>
  );
}