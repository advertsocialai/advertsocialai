import React from "react";
import HeroInPage from "../components/HeroInPage";
import FeaturesInPage from "../components/FeaturesInPage";
import HowItWorksInPage from "../components/HowItWorksInPage";
import VerticalsInPage from "../components/VerticalsInPage";
import BenefitsInPage from "../components/BenefitsInPage";
import Contact from "../components/Contact";
import Research from "../components/Research";

export default function InPage() {
    return (
        <>
        <HeroInPage />
        <FeaturesInPage />
        <HowItWorksInPage />
        <VerticalsInPage />
        <BenefitsInPage />
        <Contact />
        <Research />
        </>
    );
}