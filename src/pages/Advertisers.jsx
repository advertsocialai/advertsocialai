import React from "react";
import HeroAdvertisers from "../components/HeroAdvertisers";
import FeaturesAdvertisers from "../components/FeaturesAdvertisers";
import HowItWorksAdvertisers from "../components/HowItWorksAdvertisers";
import BenefitsAdvertisers from "../components/BenefitsAdvertisers";
import VerticalsAdvertisers from "../components/VerticalsAdvertisers";
import Contact from "../components/Contact";
import Research from "../components/Research";
import BannerAboutUs from "../components/BannerAboutUs";

export default function Advertisers() {
  return (
    <>
      <HeroAdvertisers />
      <FeaturesAdvertisers />
      <HowItWorksAdvertisers />
      <VerticalsAdvertisers />
      <BenefitsAdvertisers />
      <Contact />
      <Research />
      <BannerAboutUs />
    </>
    // <div style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     minHeight: '60vh',
    //     // background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
    // }}>
    //     <div style={{
    //         background: '#fff',
    //         borderRadius: '1.5rem',
    //         boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    //         padding: '3rem 4rem',
    //         textAlign: 'center',
    //         border: '1px solid #e0e7ff',
    //         maxWidth: '400px',
    //     }}>
    //         <h1 style={{
    //             fontWeight: 700,
    //             fontSize: '2rem',
    //             color: '#6366f1',
    //             margin: 0,
    //         }}>
    //             Advertisers Page coming soon!!
    //         </h1>
    //     </div>
    // </div>
  );
}
