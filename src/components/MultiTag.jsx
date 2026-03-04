import React from "react";
import "./MultiTag.css";

export default function MultiTag() {
  return (
    <section
      className="
        relative overflow-hidden bg-[#161313] bg-clip-padding text-white
        pt-[140px] pb-[50px]

        max-lg:pt-[110px] max-lg:pb-[40px]
        max-md:pt-[90px]  max-md:pb-[30px]
        max-sm:pt-[70px]  max-sm:pb-[20px]
      "
      style={{ fontFamily: 'Outfit' }}
    >

      <div
        className="
          absolute top-[-1px] left-0 w-full h-[142px]
          bg-no-repeat bg-top bg-cover z-[1]
          max-sm:h-[112px]
          multitag-curve-bg
        "
        style={{ backgroundImage: "url('/assets/images/Vector.png')" }}
      />

      <div className="container mx-auto relative z-[2] px-[20px] max-sm:px-[10px] multitag-mobile-root">
        {/* DESKTOP */}
        <div className="multitag-desktop">
          <div
            className="
            text-center
            mt-[40px]
            max-md:mt-[40px]
            max-sm:mt-[30px]
            multitag-title-container
          "
          >
            <h2
              className="multitag-main-title"
              style={{
                width: '1252px',
                height: '131px',
                opacity: 1,
                fontFamily: 'Outfit',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '72px',
                lineHeight: '80px',
                letterSpacing: 0,
                textAlign: 'center',
                margin: '0 auto',
                display: 'block',
              }}
            >
              <span
                className="bg-gradient-to-r from-[#00E676] to-[#00E676] bg-clip-text text-transparent"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontStyle: 'SemiBold',
                  fontSize: '72px',
                  lineHeight: '80px',
                  letterSpacing: 0,
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                MultiTag – Your master key <span style={{ fontWeight: 400, color: '#FFFFFF' }} >to</span>
              </span>
              <span
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: '72px',
                  leadingTrim: 'CAP_HEIGHT',
                  lineHeight: '80px',
                  letterSpacing: '0%',
                  textAlign: 'center',
                }}
              >
                intelligent ad inventory monetization
              </span>
            </h2>

            <p
              className="multitag-subtitle-p"
              style={{
                width: '1008px',
                height: '41px',
                opacity: 1,
                fontFamily: 'Outfit',
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: 0,
                textAlign: 'center',
                margin: '0 auto',
                display: 'block',
                color: '#f5f5f5',
              }}
            >
              <span
                className="bg-gradient-to-r from-[#00E676] to-[#00E676] bg-clip-text text-transparent"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontStyle: 'SemiBold',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: 0,
                  textAlign: 'center',
                  display: 'inline',
                  marginTop: '60px',
                  position: 'relative',
                  top: '48px',
                }}
              >
                An AI-based technology
              </span>{' '}
              <span
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 500,
                  fontStyle: 'Medium',
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: 0,
                  textAlign: 'center',
                  display: 'inline',
                  marginTop: '60px',
                  position: 'relative',
                  top: '48px',
                }}
              >
                that leverages ad formats to help you monetize every aspect of your ad inventory, automates ad selection, and boosts CPM rates.
              </span>
            </p>
          </div>

          <div className="multitag-flow">
            <div
              className=" flex items-stretch justify-between max-lg:flex-wrap max-md:flex-col max-md:items-center max-md:text-center multitag-main-layout multitag-flow-container-wrapper"
              style={{
                width: '742px',
                height: '806px',
                opacity: 1,
                borderWidth: '1px',
                borderRadius: '20px',
                borderColor: 'transparent',
                boxSizing: 'border-box',
                transform: 'rotate(0deg)',
                position: 'relative',
                top: 0,
                left: 0,
                marginTop: '100px',
                gap: '127px',
              }}
            >

              <div className="flex-1 rounded-[20px] p-[24px] text-center max-lg:w-full max-md:p-[18px]">
                <div className="multitag-flow">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      style={{
                        width: '282px',
                        height: '86px',
                        position: 'relative',
                        top: '-7px',
                        left: '2px',
                        opacity: 1,
                        borderRadius: '9px',
                        paddingTop: '34px',
                        paddingRight: '27px',
                        paddingBottom: '34px',
                        paddingLeft: '27px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        background: 'linear-gradient(90deg, #00E676 0%, #6A0DAD 100%)',
                        fontWeight: 600,
                        fontSize: '20px',
                        color: '#fff',
                        fontFamily: 'Outfit',
                      }}
                      className="multitag-advertisers-campaigns-box"
                    >
                      Advertisers’ campaigns
                    </div>

                    <div
                      style={{
                        width: '318px',
                        height: '20px',
                        position: 'relative',
                        top: '130px',
                        left: '10px',
                        opacity: 1,
                        borderWidth: '1px',
                        borderStyle: 'dashed',
                        borderColor: '#FFFFFF',
                        borderRadius: 0,
                        borderTop: '1px dashed #FFFFFF',
                        borderImage: 'repeating-linear-gradient(90deg, #fff 0 6px, transparent 6px 12px) 1',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderBottom: 'none',
                        transform: 'rotate(-90deg)',
                        margin: '0 auto',
                        background: 'none',
                      }}
                    />

                    <div
                      style={{
                        width: '442px',
                        height: '139px',
                        position: 'relative',
                        top: '10px',
                        left: '10px',
                        opacity: 1,
                        borderRadius: '9px',
                        paddingTop: '26px',
                        paddingRight: '54px',
                        paddingBottom: '26px',
                        paddingLeft: '54px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        background: '#fff',
                        color: '#111',
                        fontWeight: 600,
                        fontSize: '20px',
                        fontFamily: 'Outfit',
                        textAlign: 'center',
                      }}
                      className="multitag-algo-box"
                    >
                      <span style={{ fontWeight: 600 }}>The Smart Auto-Optimization</span>
                      <span
                        style={{
                          fontFamily: 'Outfit',
                          fontWeight: 600,
                          fontStyle: 'SemiBold',
                          fontSize: '20px',
                          lineHeight: '36px',
                          letterSpacing: '0%',
                          textAlign: 'center',
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>Algorithm</span> <span style={{ fontWeight: 400 }}>selects the most suitable</span>
                      </span>
                      <span
                        style={{
                          fontFamily: 'Outfit',
                          fontWeight: 400,
                          fontStyle: 'Regular',
                          fontSize: '20px',
                          lineHeight: '36px',
                          letterSpacing: '0%',
                          textAlign: 'center',
                        }}
                      >
                        ads for each user
                      </span>
                    </div>

                    {/* <div className="w-[1px] h-[20px] border-l-2 border-dashed border-white/60" /> */}



                    {/* DASHED BORDER WRAPPER */}
                    <div
                      className="relative mx-auto multitag-dashed-wrapper"
                      style={{
                        width: "742px",
                        height: "367px",
                        marginTop: "80px",
                      }}
                    >
                      {/* DASHED BORDER (SVG – FIGMA PERFECT) */}
                      <svg
                        className="absolute inset-0 multitag-dashed-svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 742 367"
                        preserveAspectRatio="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="741"
                          height="366"
                          rx="38"
                          ry="38"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1"
                          strokeDasharray="7 7"
                        />
                      </svg>
                      <div className="relative z-10 w-full h-full">

                        <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 z-20">
                          <div
                            className="flex items-center justify-center multitag-label
               w-[192px] h-[79px]
               rounded-[9px]
               bg-[#00E676]
               text-black font-bold text-[25px]"
                            style={{ fontFamily: 'Outfit', top: '-90px', position: 'relative' }}
                          >
                            MultiTag
                          </div>
                        </div>




                        <div className="multitag-row multitag-tag-row-upper" style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '24px', marginTop: '90px' }}>
                          <div
                            className="bg-white text-[#111] text-[15px] font-medium flex items-center"
                            style={{
                              fontFamily: 'Outfit',
                              width: '149px',
                              height: '55px',
                              borderRadius: '6px',
                              paddingTop: '15px',
                              paddingRight: '17px',
                              paddingBottom: '15px',
                              paddingLeft: '17px',
                              gap: '10px',
                              opacity: 1,
                              justifyContent: 'center',
                              minWidth: 'unset',
                            }}
                          >
                            <img
                              src="/assets/images/Blue/tick-icon.png"
                              alt="tick"
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '30px',
                                padding: '9px',
                                opacity: 1,
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                background: 'none',
                              }}
                            />
                            Interstitial
                          </div>
                          <div
                            className="bg-white text-[#111] text-[15px] font-medium flex items-center"
                            style={{
                              fontFamily: 'Outfit',
                              width: '208px',
                              height: '55px',
                              borderRadius: '6px',
                              paddingTop: '15px',
                              paddingRight: '17px',
                              paddingBottom: '15px',
                              paddingLeft: '17px',
                              gap: '10px',
                              opacity: 1,
                              justifyContent: 'center',
                              minWidth: 'unset',
                            }}
                          >
                            <img
                              src="/assets/images/Blue/tick-icon.png"
                              alt="tick"
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '30px',
                                padding: '9px',
                                opacity: 1,
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                background: 'none',
                              }}
                            />
                            Push Notifications
                          </div>
                          <div
                            className="bg-white text-[#111] text-[15px] font-medium flex items-center"
                            style={{
                              fontFamily: 'Outfit',
                              width: '171px',
                              height: '55px',
                              borderRadius: '6px',
                              paddingTop: '15px',
                              paddingRight: '17px',
                              paddingBottom: '15px',
                              paddingLeft: '17px',
                              gap: '10px',
                              opacity: 1,
                              justifyContent: 'center',
                              minWidth: 'unset',
                            }}
                          >
                            <img
                              src="/assets/images/Blue/tick-icon.png"
                              alt="tick"
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '30px',
                                padding: '9px',
                                opacity: 1,
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                background: 'none',
                              }}
                            />
                            In-Page Push
                          </div>
                        </div>
                        <div className="multitag-tag-row-lower" style={{ display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center' }}>
                          <div
                            className="bg-white text-[#111] text-[15px] font-medium flex items-center"
                            style={{
                              fontFamily: 'Outfit',
                              width: '219px',
                              height: '55px',
                              borderRadius: '6px',
                              paddingTop: '15px',
                              paddingRight: '17px',
                              paddingBottom: '15px',
                              paddingLeft: '17px',
                              gap: '10px',
                              opacity: 1,
                              justifyContent: 'center',
                              minWidth: 'unset',
                            }}
                          >
                            <img
                              src="/assets/images/Blue/tick-icon.png"
                              alt="tick"
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '30px',
                                padding: '9px',
                                opacity: 1,
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                background: 'none',
                              }}
                            />
                            Popunder (OnClick)
                          </div>
                          <div
                            className="bg-white text-[#111] text-[15px] font-medium flex items-center"
                            style={{
                              fontFamily: 'Outfit',
                              width: '193px',
                              height: '55px',
                              borderRadius: '6px',
                              paddingTop: '15px',
                              paddingRight: '17px',
                              paddingBottom: '15px',
                              paddingLeft: '17px',
                              gap: '10px',
                              opacity: 1,
                              justifyContent: 'center',
                              minWidth: 'unset',
                            }}
                          >
                            <img
                              src="/assets/images/Blue/tick-icon.png"
                              alt="tick"
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '30px',
                                padding: '9px',
                                opacity: 1,
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                background: 'none',
                              }}
                            />
                            Vignette Banner
                          </div>
                        </div>
                        <div className="absolute -bottom-[32px] left-1/2 -translate-x-1/2 z-20">
                          <div
                            className="multitag-bottom-card"
                            style={{
                              width: '442px',
                              height: '139px',
                              position: 'absolute',
                              top: '-190px',
                              left: '-220px',
                              gap: '10px',
                              opacity: 1,
                              borderRadius: '9px',
                              paddingTop: '26px',
                              paddingRight: '47px',
                              paddingBottom: '26px',
                              paddingLeft: '47px',
                              background: 'linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)',
                              color: '#fff',
                              fontWeight: 600,
                              fontSize: '18px',
                              textAlign: 'center',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <span>
                              <span style={{ fontWeight: 600 }}>High Ad Relevance</span> <span style={{ fontWeight: 400 }}>leads</span>
                            </span>
                            <span style={{ fontWeight: 400 }}>
                              to increased CPM rates
                            </span>
                            <span style={{ fontWeight: 400 }}>
                              and maximum audience monetization
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


              <div
                className="
              flex-1 flex flex-col justify-center gap-8
              mt-[60px]
              max-xl:mt-[70px]
              max-lg:mt-[40px]
              max-md:mt-[20px]
              max-sm:gap-6
            "
              >
                <div
                  className=" multitag-side-card flex items-center flex items-center transition-all hover:-translate-y-1 max-md:h-[120px] max-sm:h-auto max-sm:p-6 max-sm:flex-col max-sm:text-center"
                  style={{
                    fontFamily: 'Outfit',
                    width: '584px',
                    height: '194px',
                    position: 'absolute',
                    top: '179.38px',
                    left: '869px',
                    gap: '32px',
                    opacity: 1,
                    borderWidth: '0px',
                    borderRadius: '16px',
                    padding: '48px',
                    background: 'linear-gradient(142.13deg, rgba(254, 248, 255, 0.21) 1.8%, rgba(254, 248, 255, 0) 99.75%)',
                    borderStyle: 'solid',
                    borderImage: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, rgba(255, 255, 255, 0.22) 0%, rgba(15, 17, 19, 0.13) 100%) 1',
                    backdropFilter: 'blur(87.96089935302734px)',
                    WebkitBackdropFilter: 'blur(87.96089935302734px)',
                    boxSizing: 'border-box',
                    transform: 'rotate(0deg)',
                  }}
                >
                  <img src="/assets/images/mult1.png" className="w-[35px] h-[30px]" />
                  <p className="text-[20px] max-md:text-[18px] max-sm:text-[16px]" style={{ fontFamily: 'Outfit' }}>
                    The most advanced{" "}
                    <span className="bg-gradient-to-r from-[#00E676] to-[#00E676] bg-clip-text text-transparent font-semibold">
                      intellectual algorithm
                    </span>{" "}
                    of advertising delivery
                  </p>
                </div>

                <div
                  className="multitag-side-card flex items-center flex items-center transition-all hover:-translate-y-1 max-md:h-[120px] max-sm:h-auto max-sm:p-6 max-sm:flex-col max-sm:text-center"
                  style={{
                    fontFamily: 'Outfit',
                    width: '584px',
                    height: '194px',
                    position: 'absolute',
                    top: '432.63px',
                    left: '869px',
                    gap: '32px',
                    opacity: 1,
                    borderWidth: '0px',
                    borderRadius: '16px',
                    padding: '48px',
                    background: 'linear-gradient(142.13deg, rgba(254, 248, 255, 0.21) 1.8%, rgba(254, 248, 255, 0) 99.75%)',
                    borderStyle: 'solid',
                    borderImage: 'radial-gradient(78.99% 95.57% at 17.38% 2.08%, rgba(255, 255, 255, 0.22) 0%, rgba(15, 17, 19, 0.13) 100%) 1',
                    backdropFilter: 'blur(87.96089935302734px)',
                    WebkitBackdropFilter: 'blur(87.96089935302734px)',
                    boxSizing: 'border-box',
                    transform: 'rotate(0deg)',
                  }}
                >
                  <img src="/assets/images/multi2.png" className="w-[35px] h-[30px]" />
                  <p className="text-[20px] max-md:text-[18px] max-sm:text-[16px]" style={{ fontFamily: 'Outfit' }}>
                    Generate higher yield{" "}
                    <span className="bg-gradient-to-r from-[#00E676] to-[#00E676] bg-clip-text text-transparent font-semibold">
                      by up to 53%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DESKTOP END */}

        {/* MOBILE START  */}
        <div className="multitag-mobile">
          <div className="flex flex-col items-center gap-6 mt-16">

            {/* MOBILE TITLE + DESCRIPTION */}
            <div className="text-center px-4 mb-8">
              <h2 className="text-[32px] leading-tight font-semibold">
                <span className="text-[#00E676] block">
                  MultiTag – Your master key
                </span>
                <span className="block font-normal text-white">
                  to intelligent ad inventory monetization
                </span>
              </h2>

              <p className="mt-4 text-[14px] leading-[22px] text-[#f5f5f5]">
                <span className="text-[#00E676] font-semibold">
                  An AI-based technology
                </span>{" "}
                that leverages ad formats to help you monetize every aspect of your ad
                inventory, automates ad selection, and boosts CPM rates.
              </p>
            </div>

            {/* <div className="flex flex-col items-center gap-6 mt-16"> */}

            <div className="w-[90%] max-w-[320px] bg-gradient-to-r from-[#00E676] to-[#6A0DAD] text-white rounded-lg py-4 text-center font-semibold">
              Advertisers’ campaigns
            </div>
            <div className="mobile-dashed-line" />


            <div className="w-[90%] max-w-[360px] bg-white text-black rounded-lg p-4 text-center">
              <b>The Smart Auto-Optimization Algorithm</b><br />
              selects the most suitable ads for each user
            </div>
            <div className="mobile-dashed-line" />


            <div className="flex flex-col gap-3 w-full items-center">
              {[
                "Interstitial",
                "Push Notifications",
                "In-Page Push",
                "Popunder (OnClick)",
                "Vignette Banner",
              ].map((item) => (
                <div
                  key={item}
                  className="w-[90%] max-w-[280px] bg-white text-black rounded-md py-3 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mobile-dashed-line" />


            <div className="w-[90%] max-w-[360px] bg-gradient-to-r from-[#00E676] to-[#6A0DAD] text-white rounded-lg p-4 text-center font-semibold">
              High Ad Relevance leads to increased CPM rates and maximum audience monetization
            </div>

          </div>
        </div>
        {/*  MOBILE END */}

      </div>
    </section>
  );
}
