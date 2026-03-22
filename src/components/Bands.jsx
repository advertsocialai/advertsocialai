import React from "react";

export default function BannerMarquee() {
  return (
    <section className="bg-white h-[50vh] w-full flex justify-center items-center relative font-[Outfit]">
      <div className="relative w-full max-w-[1650px] h-[250px] flex justify-center items-center">
        <div
          className="
            absolute w-full whitespace-nowrap px-[80px] py-[20px]
            text-[48px] font-[700] tracking-[0.5px] rounded-[8px]
            bg-black text-white
            -translate-y-[40%] rotate-[-6deg] z-[1]
            max-md:text-[28px] max-md:px-[40px] max-md:w-[220%]
            overflow-hidden
          "
        >
          <div className="flex animate-marquee gap-0">
            <span className="pr-[60px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
            <span className="pr-[60px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
          </div>
        </div>

        <div
          className="
            absolute w-full whitespace-nowrap px-[80px] py-[20px]
            text-[48px] font-[700] tracking-[0.5px] rounded-[8px]
            bg-[linear-gradient(69.88deg,_#00E676_2.47%,_#6A0DAD_50.45%,_#00E676_98.44%)] text-white
            translate-y-[40%] rotate-[6deg] z-[2] shadow-[0_6px_20px_rgba(0,0,0,0.3)]
            max-md:text-[28px] max-md:px-[40px] max-md:w-[220%]
            overflow-hidden
          "
        >
          <div
            className="
              absolute top-0 left-[-50%] w-[200%] h-full pointer-events-none
              bg-[linear-gradient(120deg,rgba(255,255,255,0.15),rgba(255,255,255,0.05)_50%,transparent)]
              skew-x-[-20deg]
            "
          ></div>

          <div className="flex animate-marquee gap-0">
            <span className="pr-[60px]">
              Advert Social Empowers Publishers • Advert Social Empowers Publishers •
            </span>
            <span className="pr-[60px]">
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
        `}
      </style>
    </section>
  );
}
