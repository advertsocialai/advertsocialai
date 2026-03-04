import React from "react";

export default function RewardSection() {
  return (
    <section
      className="
        relative overflow-hidden py-[120px] pb-[180px] text-white font-inter
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/assets/images/Subtract-unlock.png')",
      }}
    >
      <div className="relative z-[2] mx-auto max-w-[1600px] px-8 lg:px-12 xl:px-16 reward-wrapper">


        <div
          className="
            max-w-[700px] ml-[60px] mb-[60px]
            max-lg:ml-0 max-lg:text-left max-lg:px-0 max-lg:pl-0 max-lg:ml-0
            reward-heading
          "
        >
          <h2
            className="
              text-[48px] leading-[1.4] font-[500]
              max-md:text-[36px] max-sm:text-[28px] font-Outfit
              max-lg:text-left max-lg:ml-0 max-lg:pl-0
            "
          >
            Unlock additional opportunities with our{" "}
            <span className="text-[#00E676] font-[700] font-Outfit">
              Reward Programs for Publishers
            </span>
          </h2>
        </div>


        <div
          className="
            flex justify-between mt-[60px] gap-[60px] px-[5%]
            max-lg:flex-col max-lg:px-4 max-lg:gap-[40px]
            reward-content
          "
        >

          <div
            className="
              flex flex-col justify-center flex-[0.25]
              pr-[40px] border-r border-white/20
              max-lg:border-none max-lg:border-b max-lg:pb-[40px] max-lg:text-center
              reward-left
            "
          >
            <p className="text-[#d1d1d1] text-[16px] leading-[1.6] mb-[40px] font-Outfit">
              Free up your time to focus on growing <br />
              your business with <br />
              cost effective AI solutions!
            </p>

            <a
              href="/register"
              className="
                w-[132px] h-[148px] rounded-[70px]
                text-white text-center font-[600] text-[12px]
                flex flex-col items-center justify-center mx-auto
                gap-[12px]
                shadow-[0_4px_12px_rgba(255,97,29,0.3)]
                hover:scale-[1.05] transition-all font-Outfit
              "
              style={{
                paddingTop: '48px',
                paddingRight: '32px',
                paddingBottom: '48px',
                paddingLeft: '32px',
                background: 'linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)',
                opacity: 1,
                borderRadius: '70px',
              }}
            >
              <span
                style={{
                  width: '80px',
                  height: '26px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  fontStyle: 'bold',
                  fontSize: '14px',
                  lineHeight: '16px',
                  letterSpacing: 0,
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                  opacity: 1,
                }}
              >
                Get <br /> Started
              </span>
              <img
                src="/assets/images/img_arrowright.svg"
                className="w-[14px] h-[14px] mt-[6px]"
              />
            </a>
          </div>


          <div className="flex flex-1 justify-between gap-[40px] max-lg:flex-col reward-features">

            <div
              className="
                flex-1 pl-[40px] border-r border-white/20
                max-lg:border-none max-lg:pl-0 max-lg:text-center
                transition-all hover:-translate-y-[4px]
                reward-feature
              "
            >
              <h4 className="text-[18px] font-[600] mb-[16px] font-Outfit">
                Priority Program
              </h4>

              <div className="mb-[16px] flex max-lg:justify-center">
                <img
                  src="/assets/images/Blue/HomeReward-icon1.svg"
                  className="p-[10px] rounded-[12px]"
                />
              </div>

              <p className="text-[#cfcfcf] text-[16px] leading-[1.6] max-w-[360px] max-lg:mx-auto font-Outfit">
                All our publishers enjoy unlimited possibilities with our priority
                program, thoughtfully tailored to your needs.
              </p>
            </div>

            <div
              className="
                flex-1 pl-[40px]
                max-lg:pl-0 max-lg:text-center
                transition-all hover:-translate-y-[4px]
                reward-feature
              "
            >
              <h4 className="text-[18px] font-[600] mb-[16px] font-Outfit">
                Referral Program
              </h4>

              <div className="mb-[16px] flex max-lg:justify-center">
                <img
                  src="/assets/images/Blue/HomeReward-icon2.svg"
                  className="p-[10px] rounded-[12px]"
                />
              </div>

              <p className="text-[#cfcfcf] text-[16px] leading-[1.6] max-w-[360px] max-lg:mx-auto font-Outfit">
                Join our lucrative referral program and discover more ways to earn extra money.
              </p>
            </div>
          </div>
        </div>


        <div
          className="partners-box relative w-[85%] mx-auto mt-[180px] rounded-[24px] px-16 py-20"
          style={{
            backgroundImage: "url('/assets/images/img-unlock-inner.png')",
            width: "1280px",
            height: "288px",
          }}
        >
          <p className="partners-title text-[#d0d0d0] text-[18px] font-[300] absolute top-[25px] left-[150px] font-[Outfit]">
            Trusted by businesses big and small, everywhere!!
          </p>

          <div className="partners-scroll-container mt-[50px]">
            <div className="partners-track">
              <div className="partners-scroll">
                <img src="/assets/images/img_wire_fdjp_znd_1i6yux.png" />
                <img src="/assets/images/img_clip_path_group.svg" />
                <img src="/assets/images/img_capitalist_b67wzd_1_z1u9dzk.svg" />
                <img src="/assets/images/visa.png" />
                <img src="/assets/images/img_mastercard_btqqhid2_1rfgkg.svg" />
              </div>

              <div className="partners-scroll">
                <img src="/assets/images/img_wire_fdjp_znd_1i6yux.png" />
                <img src="/assets/images/img_clip_path_group.svg" />
                <img src="/assets/images/img_capitalist_b67wzd_1_z1u9dzk.svg" />
                <img src="/assets/images/visa.png" />
                <img src="/assets/images/img_mastercard_btqqhid2_1rfgkg.svg" />
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


      <style>
        {`
  @media (max-width: 768px) {

    /* Wrapper */
    .reward-wrapper {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    /* Heading stays left */
    .reward-heading {
      margin-left: auto !important;
      margin-right: auto !important;
      text-align: left !important;
    }

    /* Main content */
    .reward-content {
      align-items: flex-start !important;
      text-align: left !important;
    }

    /* CTA section */
    .reward-left {
      align-items: flex-start !important;
      text-align: left !important;
      padding-right: 0 !important;
    }

    /* CTA button left */
    .reward-left a {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    /* Features wrapper */
    .reward-features {
      align-items: flex-start !important;
      text-align: left !important;
    }

    /* Feature blocks */
    .reward-feature {
      padding-left: 0 !important;
      max-width: 420px;
      margin-left: 0 !important;
      margin-right: 0 !important;
      text-align: left !important;
    }

    /* Icons LEFT */
    .reward-feature > div {
      justify-content: flex-start !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    /* Titles LEFT */
    .reward-feature h4 {
      text-align: left !important;
    }

    /* Description text LEFT */
    .reward-left p,
    .reward-feature p {
      text-align: left !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      max-width: 100%;
      line-height: 1.6 !important;
    }

    /* Partners section */
    .partners-box {
      width: 100% !important;
      height: auto !important;
      padding: 24px !important;
      background-image: none !important;
      border-radius: 18px !important;
    }

    .partners-title {
      position: static !important;
      text-align: left !important;
      margin-bottom: 20px !important;
    }
  }

  .reward-heading {
    margin-left: 60px !important;
    margin-right: 0 !important;
    text-align: left !important;
  }

  `}
      </style>

      {/* Ultra-Wide Responsive Scaling */}
      <style>
        {`
/* 1440px - Small Desktop Scaling */
@media (min-width: 1440px) {
  .reward-wrapper 
  { max-width: 1700px !important; padding-left: 50px !important; padding-right: 50px !important; }

  .reward-heading
   { max-width: 745px !important; margin-left: 64px !important; margin-bottom: 64px !important; }

  .reward-heading h2 
  { font-size: 51px !important; }

  .reward-content 
  { margin-top: 64px !important; gap: 64px !important; }

  .reward-left 
  { padding-right: 43px !important; }

  .reward-left p
   { font-size: 17px !important; margin-bottom: 43px !important; }

  .reward-left a
   { width: 140px !important; height: 157px !important; padding: 51px 34px !important; }

  .reward-left a span
   { width: 85px !important; height: 28px !important; font-size: 15px !important; }

  .reward-left a img 
  { width: 15px !important; height: 15px !important; margin-top: 7px !important; }

  .reward-features 
  { gap: 43px !important; }

  .reward-feature
   { padding-left: 43px !important; }

  .reward-feature 
  h4 { font-size: 19px !important; margin-bottom: 17px !important; }

  .reward-feature p
   { font-size: 17px !important; max-width: 382px !important; }

  .reward-feature img 
  { padding: 11px !important; }

  .partners-box
   { width: 1360px !important; height: 306px !important; margin-top: 192px !important; padding: 68px !important; }

  .partners-title
   { font-size: 19px !important; top: 27px !important; left: 160px !important; }

  .partners-scroll-container 
  { margin-top: 53px !important; }
  .partners-scroll img 
  { height: 69px !important; padding-inline: 21px !important; }
   
  .partners-scroll { gap: 64px !important; }
}

/* 1920px - Full HD Scaling */
@media (min-width: 1920px) {
  .reward-wrapper { max-width: 2130px !important; padding-left: 64px !important; padding-right: 64px !important; }
  .reward-heading { max-width: 935px !important; margin-left: 80px !important; margin-bottom: 80px !important; }
  .reward-heading h2 { font-size: 64px !important; }
  .reward-content { margin-top: 80px !important; gap: 80px !important; }
  .reward-left { padding-right: 53px !important; }
  .reward-left p { font-size: 21px !important; margin-bottom: 53px !important; }
  .reward-left a { width: 176px !important; height: 198px !important; padding: 64px 43px !important; border-radius: 93px !important; }
  .reward-left a span { width: 107px !important; height: 35px !important; font-size: 19px !important; line-height: 21px !important; }
  .reward-left a img { width: 19px !important; height: 19px !important; margin-top: 8px !important; }
  .reward-features { gap: 53px !important; }
  .reward-feature { padding-left: 53px !important; }
  .reward-feature h4 { font-size: 24px !important; margin-bottom: 21px !important; }
  .reward-feature p { font-size: 21px !important; max-width: 480px !important; }
  .reward-feature img { padding: 13px !important; border-radius: 16px !important; }
  .partners-box { width: 1706px !important; height: 384px !important; margin-top: 240px !important; padding: 85px !important; border-radius: 32px !important; }
  .partners-title { font-size: 24px !important; top: 33px !important; left: 200px !important; }
  .partners-scroll-container { margin-top: 67px !important; }
  .partners-scroll img { height: 87px !important; padding-inline: 27px !important; }
  .partners-scroll { gap: 80px !important; }
}

/* 2560px - 2K/QHD Scaling */
@media (min-width: 2560px) {
  .reward-wrapper { max-width: 2560px !important; padding-left: 85px !important; padding-right: 85px !important; }
  .reward-heading { max-width: 1120px !important; margin-left: 96px !important; margin-bottom: 96px !important; }
  .reward-heading h2 { font-size: 77px !important; }
  .reward-content { margin-top: 96px !important; gap: 96px !important; }
  .reward-left { padding-right: 64px !important; }
  .reward-left p { font-size: 26px !important; margin-bottom: 64px !important; }
  .reward-left a { width: 211px !important; height: 237px !important; padding: 77px 51px !important; border-radius: 112px !important; }
  .reward-left a span { width: 128px !important; height: 42px !important; font-size: 23px !important; line-height: 26px !important; }
  .reward-left a img { width: 23px !important; height: 23px !important; margin-top: 10px !important; }
  .reward-features { gap: 64px !important; }
  .reward-feature { padding-left: 64px !important; }
  .reward-feature h4 { font-size: 29px !important; margin-bottom: 26px !important; }
  .reward-feature p { font-size: 26px !important; max-width: 576px !important; }
  .reward-feature img { padding: 16px !important; border-radius: 19px !important; }
  .partners-box { width: 2048px !important; height: 460px !important; margin-top: 288px !important; padding: 102px !important; border-radius: 38px !important; }
  .partners-title { font-size: 29px !important; top: 40px !important; left: 240px !important; }
  .partners-scroll-container { margin-top: 80px !important; }
  .partners-scroll img { height: 104px !important; padding-inline: 32px !important; }
  .partners-scroll { gap: 96px !important; }
}

/* 2700px - Maximum Scaling */
@media (min-width: 2700px) {
  .reward-wrapper { max-width: 2700px !important; padding-left: 90px !important; padding-right: 90px !important; }
  .reward-heading { max-width: 1190px !important; margin-left: 102px !important; margin-bottom: 102px !important; }
  .reward-heading h2 { font-size: 82px !important; }
  .reward-content { margin-top: 102px !important; gap: 102px !important; }
  .reward-left { padding-right: 68px !important; }
  .reward-left p { font-size: 27px !important; margin-bottom: 68px !important; }
  .reward-left a { width: 224px !important; height: 252px !important; padding: 82px 54px !important; border-radius: 119px !important; }
  .reward-left a span { width: 136px !important; height: 44px !important; font-size: 24px !important; line-height: 27px !important; }
  .reward-left a img { width: 24px !important; height: 24px !important; margin-top: 11px !important; }
  .reward-features { gap: 68px !important; }
  .reward-feature { padding-left: 68px !important; }
  .reward-feature h4 { font-size: 31px !important; margin-bottom: 27px !important; }
  .reward-feature p { font-size: 27px !important; max-width: 612px !important; }
  .reward-feature img { padding: 17px !important; border-radius: 20px !important; }
  .partners-box { width: 2176px !important; height: 490px !important; margin-top: 306px !important; padding: 108px !important; border-radius: 41px !important; }
  .partners-title { font-size: 31px !important; top: 43px !important; left: 255px !important; }
  .partners-scroll-container { margin-top: 85px !important; }
  .partners-scroll img { height: 111px !important; padding-inline: 34px !important; }
  .partners-scroll { gap: 102px !important; }
}
/* Fixed background scaling */
.partners-box { background-size: 100% 100% !important; background-repeat: no-repeat !important; }
        `}
      </style>

    </section>
  );
}