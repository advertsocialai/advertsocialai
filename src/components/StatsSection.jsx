import React, { useEffect, useState, useRef } from "react";


function useCountUp(shouldStart, start = 0, end, duration = 2000) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!shouldStart) {
      setValue(start);
      return;
    }

    let current = start;
    const increment = (end - start) / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setValue(end);
      } else {
        setValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [shouldStart, start, end, duration]);

  return value;
}


export default function StatsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      iconType: "border",
      icon: "/assets/images/Blue/7billions.svg",
      number: "7 billions",
      startValue: 1,
      endValue: 7,
      text: "Over 7 billion daily ad impressions",
    },
    {
      iconType: "solid",
      icon: "/assets/images/Blue/CPM,CPA,CPC.svg",
      number: "CPM, CPC, CPA",
      startValue: 1,
      endValue: 3,
      text: "Select the optimal pricing model tailored to your needs",
    },
    {
      iconType: "border",
      icon: "/assets/images/Blue/200+.svg",
      number: "200+",
      startValue: 1,
      endValue: 200,
      text: "Your advertisement will be seen in over 200 countries",
    },
  ];

  return (
    <>

      <section
        ref={sectionRef}
        className="
          stats-section relative text-white overflow-visible
          py-[70px] pb-[90px]
          max-md:py-[55px] max-md:pb-[70px]
          max-sm:py-[45px] max-sm:pb-[60px]
        "
        style={{ backgroundColor: "#161313" }}
      >

        <div
          className="stats-wave absolute bottom-0 left-0 w-full h-[90px] bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/img_wave_pattern.svg')",
          }}
        />


        <div className="stats-title-wrapper text-center max-w-[780px] mx-auto mb-[45px]">
          <h2 className="stats-title text-[32px] leading-[1.4] font-[400]" style={{ fontFamily: 'Outfit' }}>
            Reach millions of users, monetize your inventory, and reach for the
            stars!
          </h2>
        </div>


        <div
          className="
            stats-grid
            flex justify-center items-stretch gap-[50px]
            max-lg:gap-[35px]
            max-md:gap-[30px]
            max-sm:flex-col max-sm:gap-[40px] max-sm:items-center
          "
        >
          {stats.map((item, index) => {
            const animatedValue = useCountUp(
              inView,
              item.startValue,
              item.endValue
            );

            return (
              <div
                key={index}
                className="stats-item relative text-center flex-1 max-w-[260px] px-[10px]"
              >

                {item.iconType === "border" ? (
                  <div
                    className="stats-icon-box mx-auto mb-[22px] flex items-center justify-center"
                    style={{
                      width: '120px',
                      height: '120px',
                      gap: '10px',
                      opacity: 1,
                      borderRadius: '12px',
                      padding: '24px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: '#161313',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: '80%',
                          height: '80%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="stats-icon-box mx-auto mb-[22px] flex items-center justify-center"
                    style={{
                      width: '110px',
                      height: '110px',
                      gap: '10px',
                      opacity: 1,
                      borderRadius: '12px',
                      padding: '26px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        width: '90%',
                        height: '90%',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: '90%',
                          height: '90%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  </div>
                )}


                <div
                  className="stats-number text-[36px] font-[500] mb-[10px] mx-auto"
                  style={{
                    fontFamily: 'Outfit',
                    textAlign: 'center',
                    width: '200px',
                    marginTop: '-20px',
                  }}
                >
                  {item.number.includes("billions")
                    ? `${animatedValue} billions`
                    : item.number.includes("+")
                      ? `${animatedValue}+`
                      : item.number}
                </div>


                <p className="stats-desc text-[16px] text-[#cfcfcf] leading-[1.6] max-w-[220px] mx-auto" style={{ fontFamily: 'Outfit' }}>
                  {item.text}
                </p>


                {index !== stats.length - 1 && (
                  <div className="stats-divider absolute right-[-25px] top-1/2 -translate-y-1/2 h-[60px] w-[1px] bg-white/20 max-sm:hidden"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#161313" }}
      >
        <img
          src="/assets/images/Vector2.png"
          alt="wave"
          className="
      w-full
      block
      relative
      -top-[-1.5px]
    "
        />
      </div>


      {/* Ultra-Wide & 4K Responsive Scaling */}
      <style>
        {`
/* 2560px - 2K/QHD Scaling */
@media (min-width: 2560px) {
  .stats-section { padding-top: 140px !important; padding-bottom: 180px !important; }
  .stats-wave { height: 180px !important; }
  .stats-title-wrapper { max-width: 1560px !important; margin-bottom: 90px !important; }
  .stats-title { font-size: 64px !important; }
  .stats-grid { gap: 100px !important; }
  .stats-item { max-width: 520px !important; padding: 20px !important; }
  .stats-icon-box { width: 240px !important; height: 240px !important; padding: 48px !important; margin-bottom: 44px !important; border-radius: 24px !important; }
  .stats-number { font-size: 72px !important; width: 400px !important; margin-top: -40px !important; margin-bottom: 20px !important; }
  .stats-desc { font-size: 32px !important; max-width: 440px !important; }
  .stats-divider { height: 120px !important; right: -50px !important; width: 2px !important; }
}

/* 2700px - Maximum Scaling */
@media (min-width: 2700px) {
  .stats-section { padding-top: 150px !important; padding-bottom: 190px !important; }
  .stats-wave { height: 190px !important; }
  .stats-title-wrapper { max-width: 1650px !important; margin-bottom: 95px !important; }
  .stats-title { font-size: 68px !important; }
  .stats-grid { gap: 110px !important; }
  .stats-item { max-width: 550px !important; }
  .stats-icon-box { width: 250px !important; height: 250px !important; padding: 50px !important; margin-bottom: 46px !important; }
  .stats-number { font-size: 76px !important; width: 420px !important; margin-top: -42px !important; }
  .stats-desc { font-size: 34px !important; max-width: 460px !important; }
  .stats-divider { height: 130px !important; right: -55px !important; width: 2px !important; }
}

/* 3840px - 4K Scaling */
@media (min-width: 3840px) {
  .stats-section { padding-top: 210px !important; padding-bottom: 270px !important; }
  .stats-wave { height: 270px !important; }
  .stats-title-wrapper { max-width: 2340px !important; margin-bottom: 135px !important; }
  .stats-title { font-size: 96px !important; }
  .stats-grid { gap: 150px !important; }
  .stats-item { max-width: 780px !important; padding: 30px !important; }
  .stats-icon-box { width: 360px !important; height: 360px !important; padding: 72px !important; margin-bottom: 66px !important; border-radius: 36px !important; }
  .stats-number { font-size: 108px !important; width: 600px !important; margin-top: -60px !important; margin-bottom: 30px !important; }
  .stats-desc { font-size: 48px !important; max-width: 660px !important; }
  .stats-divider { height: 180px !important; right: -75px !important; width: 3px !important; }
}
        `}
      </style>
    </>
  );
}
