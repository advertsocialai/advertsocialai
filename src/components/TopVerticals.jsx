import React, { useEffect, useRef } from "react";
import "./TopVerticals.css";

export default function Verticals() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("opacity-100", "translate-y-0");
          } else {
            target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const gallery = [
    { src: "/assets/images/Img-vartical1.png", size: "large", alt: "Ecommerce" },
    { src: "/assets/images/Img-vartical2.png", size: "medium", alt: "Games" },
    { src: "/assets/images/Img-vartical3.png", size: "small", alt: "Betting" },
    { src: "/assets/images/Img-vartical4.png", size: "medium", alt: "iGaming" },
    { src: "/assets/images/Img-vartical5.png", size: "large", alt: "Webcam" },
  ];

  return (
    <section className="verticals-section bg-white pt-[25px] pb-[100px]">
      <div className="verticals-wrapper w-full px-[60px] max-lg:px-[40px] max-md:px-[20px] mx-auto">
        <div className="text-center mb-[30px] max-md:mb-[20px]">
          <h2
            className="verticals-title text-[72px] leading-[80px] text-[#1B1A1A] max-lg:text-[54px] max-lg:leading-[60px] max-md:text-[42px] max-sm:text-[32px]"
            style={{ fontFamily: "Outfit" }}
          >
            Top verticals
          </h2>

          <p
            className="verticals-desc text-[18px] font-[500] text-[#4B4B4B] max-w-[800px] mx-auto mt-[8px] max-md:text-[16px] max-sm:text-[14px]"
            style={{ fontFamily: "Outfit" }}
          >
            Advert Social AI knows how to crush it in top verticals like adult, dating, gaming, etc.
            helping you get the engagement and conversions you need.
          </p>
        </div>

        <div
          className="
            verticals-grid
            flex justify-center items-end gap-[14px] mt-[50px]
            overflow-visible w-full

            max-lg:flex-wrap max-lg:justify-center max-lg:gap-[20px]
            max-md:gap-[16px]
            max-sm:gap-[14px]
          "
        >
          {gallery.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`
                verticals-card
                relative rounded-[20px] overflow-hidden flex-shrink-0
                opacity-0 translate-y-[40px]
                transition-all duration-[900ms] ease-out

                hover:shadow-[20px_20px_40px_rgba(69,11,216,0.45)]

                ${item.size === "large" ? "h-[450px] min-[2000px]:h-[600px] min-[2500px]:h-[750px]" : ""}
                ${item.size === "medium" ? "h-[400px] min-[2000px]:h-[533px] min-[2500px]:h-[667px]" : ""}
                ${item.size === "small" ? "h-[350px] min-[2000px]:h-[467px] min-[2500px]:h-[583px]" : ""}

                w-[260px]
                min-[2000px]:w-[347px]
                min-[2500px]:w-[433px]

                max-lg:h-[300px]
                max-md:h-[240px]
                max-sm:h-[200px]
                max-md:w-[200px]
                max-sm:w-[160px]
              `}
              style={{
                transitionDelay:
                  index === 0 || index === 4
                    ? "0.3s"
                    : index === 1 || index === 3
                      ? "0.5s"
                      : "0.7s",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="
                  w-full h-full object-cover rounded-[20px]
                  transition-transform duration-300
                  hover:scale-[1.08]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
