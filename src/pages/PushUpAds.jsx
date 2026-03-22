import React from "react";
import HeroPushAds from "../components/HeroPushAds";
import FeaturesPushAds from "../components/FeaturesPushAds";
import HowItWorksPushAds from "../components/HowItWorksPushAds";
import VerticalsPushAds from "../components/VerticalsPushAds";
import BenefitsPushAds from "../components/BenefitsPushAds";
import Contact from "../components/Contact";
import Research from "../components/Research";

export default function PushUpAds() {
  return (
    <>
      <HeroPushAds />
      <FeaturesPushAds />
      <HowItWorksPushAds />
      <VerticalsPushAds />
      <BenefitsPushAds />
      <Contact />
      <Research />
    </>
  );
}
