import React from "react";
import FAQget from "../components/publicFAQsget";
import HeroFAQs from "../components/FAQsHero";
import Banner from "../components/BannerAboutUs";

export default function PublicFAQ() {
  return (
    <>
      <HeroFAQs />
      <FAQget />
      <Banner />
    </>
  );
}
