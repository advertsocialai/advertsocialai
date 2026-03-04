import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    let cleanNumber = parseInt(target.replace(/\D/g, ""), 10);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) startCounting(cleanNumber);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  const startCounting = (end) => {
    let start = 1;
    setCount(1);
    let stepTime = Math.max(10, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
  };

  return { count, ref };
}



const waveVariants = {
  animate: {
    y: [0, -4, 0],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

import "./StoryAboutUs.css";

const StoryAboutUs = () => {
  return (
    <section className="story-about-root pt-6 sm:pt-8 md:pt-10 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-[120px]">

      <div className="story-about-container desktop px-4 sm:px-6 lg:px-0 hidden lg:block">

        <motion.img
          src="/assets/images/Blue/Dooodle.png"
          alt="Doodle"
          className="story-about-doodle absolute z-1 hidden lg:block"
          variants={waveVariants}
          animate="animate"
        />

        <img
          src="/assets/images/howitworks.png"
          alt="How it works background"
          className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-2"
        />

        <div className="story-about-title-wrapper absolute flex flex-col items-center">
          <span className="story-about-title-text">
            Numbers are Telling our Story
          </span>
        </div>

        <img
          src="/assets/images/Union.png"
          alt="Union"
          className="story-about-union absolute"
        />

        {/* COUNTERS (Desktop) */}
        <div className="story-about-counters-wrapper absolute flex justify-center items-center">
          <DesktopCounter
            icon="/assets/images/Blue/7billions.svg"
            number="7"
            label="Years of Prebid Experience"
            iconWidth="140px"
          />

          <Divider />

          <DesktopCounter
            icon="/assets/images/Blue/CPM,CPA,CPC.svg"
            number="500+"
            label="Active Websites"
            iconWidth="140px"
          />

          <Divider />

          <DesktopCounter
            icon="/assets/images/Blue/200+.svg"
            number="50"
            label="Employees"
            iconWidth="140px"
          />
        </div>
      </div>

      {/* ---------------- MOBILE---------------- */}
      <div className="w-full flex flex-col lg:hidden px-6 py-10 bg-[#f7f6ff] rounded-2xl gap-10">
        <h2 className="text-center text-[28px] font-semibold text-[#1B1A1A] leading-tight" style={{ fontFamily: 'Outfit' }}>
          Numbers are Telling our Story
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <MobileCounter
            icon="/assets/images/story-icon-1.png"
            number="7"
            label="Years of Prebid Experience"
          />

          <MobileCounter
            icon="/assets/images/Icon.png"
            number="500+"
            label="Active Websites"
          />
        </div>

        <div className="flex justify-center">
          <MobileCounter
            icon="/assets/images/story-icon-3.png"
            number="50"
            label="Employees"
          />
        </div>
      </div>

    </section>
  );
};

export default StoryAboutUs;

function DesktopCounter({ icon, number, label, iconWidth }) {
  const { count, ref } = useCounter(number, 3000);

  return (
    <div className="story-about-counter-item flex flex-col items-center">
      <div
        className="story-about-icon-box flex justify-center items-center"
        style={{ width: iconWidth }}
      >
        <img
          src={icon}
          className="w-[94px] h-[94px] object-contain"
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <span
          ref={ref}
          className="story-about-counter-number"
        >
          {count}
          {number.includes("+") ? "+" : ""}
        </span>

        <span className="story-about-counter-label">
          {label}
        </span>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="story-about-divider"></div>;
}

function MobileCounter({ icon, number, label }) {
  const { count, ref } = useCounter(number, 3000);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[120px] h-[120px] flex justify-center items-center rounded-xl border border-[#ccc] p-4">
        <img src={icon} className="w-[70px] h-[70px]" />
      </div>

      <span
        ref={ref}
        className="text-[48px] font-semibold text-[#1B1A1A]"
        style={{ fontFamily: 'Outfit' }}
      >
        {count}
        {number.includes("+") ? "+" : ""}
      </span>

      <span className="text-[16px] text-[#4B4B4B] text-center leading-[22px]" style={{ fontFamily: 'Outfit' }}>
        {label}
      </span>
    </div>
  );
}
