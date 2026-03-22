import React from "react";
import HeaderHero from "../components/HomeHero";
import Partners from "../components/Partners";
import Performance from "../components/Performance";
import HowToStart from "../components/HowToStart";
import Publishers from "../components/Publishers";
import AdvertisersSection from "../components/AdvertisersHome";
import VideoSection from "../components/VideoSection";
import GlobalHome from "../components/GlobalHome";
import CreativeHome from "../components/CreativeHome";
import MultiTag from "../components/MultiTag";
import AdFormats from "../components/AdFormats";
import StatsSection from "../components/StatsSection";
import Benefits from "../components/HomeBenefit";
import Verticals from "../components/TopVerticals";
import Contact from "../components/Contact";
import RewardSection from "../components/RewardSection";
import LatestResearch from "../components/Research";
import CaseStudy from "../components/CaseStudy";
import Banner from "../components/BannerAboutUs";

export default function HomePage() {
  return (
    <>
      <HeaderHero />
      <Partners />
      <Performance />
      <HowToStart />
      <div style={{ height: "80px" }} />
      <Publishers />
      <div style={{ height: "120px" }} />
      <AdvertisersSection />
      <div style={{ height: "120px" }} />
      <VideoSection />
      <Banner />
      <CreativeHome />
      <div style={{ height: "90px" }} />
      <GlobalHome />
      <div style={{ height: "60px" }} />
      <MultiTag />
      <AdFormats />
      <StatsSection />
      <Benefits />
      <Verticals />
      <Contact />
      {/* <BannerMarquee/> */}
      <Banner />

      <RewardSection />
      <div style={{ height: "60px" }} />
      <LatestResearch />
      {/* <div style={{ height: "60px" }} /> */}
      <CaseStudy />
      <div style={{ height: "60px" }} />
    </>
  );
}
