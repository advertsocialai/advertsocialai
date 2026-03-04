import React from "react";
import HeroVignette from "../components/HeroVignette";
import FeaturesVignette from "../components/FeaturesVignette";
import HowItWorksVignette from "../components/HowItWorksVignette";
import VerticalsVignette from "../components/VerticalsVignette";
import BenefitsVignette from "../components/BenefitsVignette";
import Contact from "../components/Contact";
import Research from "../components/Research";

export default function Vignette() {
    return (
        <>
        <HeroVignette />
        <FeaturesVignette />
        <HowItWorksVignette />
        <VerticalsVignette />
        <BenefitsVignette />
        <Contact />
        <Research />
        </>
    );
}