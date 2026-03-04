import React from "react";
import HeroSmartLink from "../components/HeroSmartLink";
import FeaturesSmartLink from "../components/FeaturesSmartLink";
import HowItWorksSmartLink from "../components/HowItWorksSmartLink";
import VerticalsSmartLink from "../components/VerticalsSmartLink";
import BenefitsSmartLink from "../components/BenefitsSmartLink";
import Contact from "../components/Contact";
import Research from "../components/Research";

export default function SmartLink() {
    return (
        <>
            <HeroSmartLink />
            <FeaturesSmartLink />
            <HowItWorksSmartLink />
            <VerticalsSmartLink />
             <BenefitsSmartLink /> 
            <Contact />
            <Research />
        </>
    );
}