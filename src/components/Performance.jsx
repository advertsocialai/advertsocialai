import React from "react";
import "./Performance.mobile.css";

const checklist = [
  "Smarter optimization, not just more inventory",
  "Richer creative, not just generic banners",
  "Faster execution, not endless campaign cycles",
  "Real metrics, not vanity reports",
];

const Performance = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden performance-mobile">
      <div className="performance-scaling-wrapper">
        {/* TOP CURVE */}
        <img
          src="/assets/images/performance-vector1.svg"
          alt="top curve"
          className="performance-top-curve absolute top-0 left-1/2 -translate-x-1/2 w-[1629px] z-20 pointer-events-none"
        />
        {/* MAIN CONTENT */}
        <div
          className="relative mx-auto w-[1605px] h-[1116px] bg-no-repeat bg-cover pt-[190px] z-10 performance-bg-mobile"
          style={{
            backgroundImage: "url('/assets/images/performance-bg.svg')",
          }}
        >
          {/* Heading */}
          <h2 className="text-center font-outfit text-[80px] font-normal leading-none text-[#01E676] performance-heading-mobile">
            Premium Means Performance
          </h2>
          {/* Subheading */}
          <p className="mt-6 text-center font-outfit text-[40px] font-medium text-white performance-subheading-mobile">
            To us, premium isn’t aesthetic it’s outcome.
          </p>
          {/* Middle Content */}
          <div className="mt-[120px] flex gap-[70px] px-[120px] performance-content-wrapper performance-checklist-mobile">
            {/* Card */}
            <div
              className="relative w-[400px] h-[400px] bg-no-repeat bg-cover p-[36px_28px] performance-card-mobile"
              style={{
                top: "-60px",
                left: "-35px",
                transform: "rotate(0deg)",
                opacity: 1,
                backgroundImage:
                  "url('/assets/images/performance-card.svg')",
              }}
            >
              <h3
                className="performance-card-title absolute text-white "
                style={{
                  width: "316px",
                  height: "37px",
                  top: "68px",
                  left: "60px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "Outfit",
                  fontWeight: 500,
                  fontStyle: "Medium",
                  fontSize: "40px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  leadingTrim: "CAP_HEIGHT",
                }}
              >
                Premium means:
              </h3>
              <div className="performance-card-list flex flex-col gap-4 mt-[100px] ml-[20px] performance-checklist-mobile">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="performance-check-icon w-[25px] h-[25px] rounded-full bg-[#6712AC] flex items-center justify-center">
                      <img
                        src="/assets/images/Check Icon-tick.svg"
                        alt="tick"
                        className="w-[9px] h-[8px]"
                      />
                    </div>
                    <p
                      className="performance-check-text font-outfit text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-white"
                      style={
                        item === "Smarter optimization, not just more inventory" ||
                          item === "Richer creative, not just generic banners" ||
                          item === "Faster execution, not endless campaign cycles"
                          ? {
                            width: "285px",
                            height: "34px",
                            transform: "rotate(0deg)",
                            opacity: 1,
                          }
                          : {}
                      }
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              {/* CTA (desktop only, now hidden on mobile) */}
              <button
                className="gradient-btn performance-btn-desktop"
                style={{
                  width: "237px",
                  height: "58px",
                  padding: "24px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "40px",
                  fontSize: "18px",
                  marginTop: "120px",
                  marginLeft: "40px",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "233px",
                    height: "10px",
                    transform: "rotate(0deg) translateY(-6px)",
                    opacity: 1,
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "14px",
                    leadingTrim: "CAP_HEIGHT",
                    lineHeight: "16px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "var(--Colors-White, #FFFFFF)"
                  }}
                >Start Monetizing Smarter</span>
              </button>
            </div>
            {/* CTA (mobile only, outside card) */}
            <button
              className="gradient-btn performance-btn-mobile performance-btn-mobileonly"
              style={{
                width: "237px",
                height: "58px",
                padding: "24px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "40px",
                fontSize: "18px",
                marginTop: "24px",
                marginLeft: "0px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: "233px",
                  height: "10px",
                  transform: "rotate(0deg) translateY(-6px)",
                  opacity: 1,
                  fontFamily: "Outfit",
                  fontWeight: 700,
                  fontStyle: "Bold",
                  fontSize: "14px",
                  leadingTrim: "CAP_HEIGHT",
                  lineHeight: "16px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "var(--Colors-White, #FFFFFF)"
                }}
              >Start Monetizing Smarter</span>
            </button>

            {/* Right Gradient Box */}
            <div
              className="performance-gradient-box absolute w-[906px] h-[357px]"
              style={{
                top: "451px",
                left: "770px",
                transform: "rotate(0deg)",
                opacity: 1,
                background:
                  "linear-gradient(269.89deg, #470084 7.45%, #004C30 49.69%, #000000 85.26%)",
                boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
              }}
            />
          </div>
          {/* Bottom Text */}
          <div className="mt-[-50px] text-center ml-[120px] performance-bottom-mobile">
            <p className="font-outfit text-[36px] text-white">
              We design for:
            </p>
            <p className="mt-4 font-outfit text-[40px] font-medium text-white">
              Revenue <span className="font-bold">.</span> ROAS{" "}
              <span className="font-bold">.</span> RPM{" "}
              <span className="font-bold">.</span> CAC efficiency{" "}
              <span className="font-bold">.</span> Yield
            </p>
          </div>
        </div>
        {/* BOTTOM CURVE (UPSIDE DOWN) */}
        <img
          src="/assets/images/performance-vector2.svg"
          alt="bottom curve"
          className="performance-bottom-curve absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[1600px] z-20 pointer-events-none"
        />
      </div>
    </section>

  );
};

export default Performance;