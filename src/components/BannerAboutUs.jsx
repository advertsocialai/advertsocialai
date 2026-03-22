import React from "react";

export default function BannerAboutUs() {
  return (
    <section className="bg-white h-[50vh] w-full flex justify-center items-center relative font-[Outfit] min-[2000px]:h-[40vh]">
      <div className="relative w-full max-w-[1650px] h-[250px] flex justify-center items-center min-[2000px]:max-w-[2200px] min-[2000px]:h-[350px] min-[2500px]:max-w-[2700px] min-[2500px]:h-[450px]">
        <div
          className="
            absolute whitespace-nowrap px-[80px] py-[20px]
            text-[48px] font-[700] tracking-[0.5px] rounded-[8px]
            bg-black text-white
            -translate-y-[50%] rotate-[1deg] -left-[10px] z-[1]
            max-md:text-[28px] max-md:px-[40px] max-md:w-[300%] // Retained width
            min-[2000px]:text-[64px] min-[2000px]:px-[100px] min-[2000px]:py-[30px]
            min-[2500px]:text-[80px] min-[2500px]:px-[120px] min-[2500px]:py-[40px]
            overflow-hidden
          "
          style={{ width: "100vw" }}
        >
          <div className="flex animate-marquee gap-0">
            <span className="pr-[60px] min-[2000px]:pr-[80px] min-[2500px]:pr-[100px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
            <span className="pr-[60px] min-[2000px]:pr-[80px] min-[2500px]:pr-[100px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
          </div>
        </div>

        <div
          className="
            absolute whitespace-nowrap px-[80px] py-[20px]
            text-[48px] font-[700] tracking-[0.5px] rounded-[8px]
            bg-[linear-gradient(69.88deg,_#00E676_2.47%,_#6A0DAD_50.45%,_#00E676_98.44%)] text-white
            translate-y-[20%] rotate-[-5deg] -left-[10px] z-[2] shadow-[0_6px_20px_rgba(0,0,0,0.3)]
            max-md:text-[28px] max-md:px-[40px] max-md:w-[300%] // Retained width
            min-[2000px]:text-[64px] min-[2000px]:px-[100px] min-[2000px]:py-[30px]
            min-[2500px]:text-[80px] min-[2500px]:px-[120px] min-[2500px]:py-[40px]
            overflow-hidden
          "
          style={{ width: "100vw" }}
        >
          <div
            className="
              absolute top-0 left-[-50%] w-[200%] h-full pointer-events-none
              bg-[linear-gradient(120deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05)_50%,transparent)]
              skew-x-[-20deg]
            "
          ></div>

          <div className="flex animate-marquee gap-0">
            <span className="pr-[60px] min-[2000px]:pr-[80px] min-[2500px]:pr-[100px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
            <span className="pr-[60px] min-[2000px]:pr-[80px] min-[2500px]:pr-[100px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @media (max-width: 900px) {
            .animate-marquee {
              animation-duration: 12s !important;
            }
          }
          @media (max-width: 600px) {
            .animate-marquee {
              animation-duration: 7s !important;
            }
          }
        `}
      </style>
    </section>
  );
}
