import React from "react";

export default function Partners() {
  const logos = [
    "/assets/images/Frame 21.png",
    "/assets/images/Frame 22.png",
    "/assets/images/Frame 23.png",
    "/assets/images/Frame 24.png",
    "/assets/images/Frame 25.png",
    "/assets/images/Frame 26.png",
  ];

  return (
    <section
      className="partners-section bg-white py-6 overflow-hidden w-full max-sm:py-4"
      style={{ fontFamily: "Outfit" }}
    >
      <style>{`
        /* 4K+ / 2700px Scaling */
        @media (min-width: 1801px) {
          .partners-section {
            padding: 60px 0 !important;
          }
          .partners-logo {
            height: 140px !important;
            margin-left: 60px !important;
            margin-right: 60px !important;
          }
        }
      `}</style>
      <div className="relative w-full">
        {/* Marquee Wrapper */}
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`partner-logo-${index + 1}`}
              className="
                partners-logo
                h-20 mx-8 object-contain inline-block
                max-md:h-14 max-md:mx-4
                max-sm:h-10 max-sm:mx-3
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
