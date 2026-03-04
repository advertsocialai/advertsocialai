import React from "react";
import HeroPublishers from "../components/HeroPublishers";
import FeaturesPublishers from "../components/FeaturesPublishers";
import HowItWorksPublishers from "../components/HowItWorksPublishers";
import BenefitsPublishers from "../components/BenefitsPublishers";
import VerticalsPublishers from "../components/VerticalsPublishers";
import Contact from "../components/Contact";
import Research from "../components/Research";
import BannerAboutUs from "../components/BannerAboutUs";

export default function Publishers() {
    return (

        <>
            <HeroPublishers />
            <FeaturesPublishers />
            <HowItWorksPublishers />
            <VerticalsPublishers />
            <BenefitsPublishers />
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
        //             Publishers Page coming soon!!
        //         </h1>
        //     </div>
        // </div>
    )
}