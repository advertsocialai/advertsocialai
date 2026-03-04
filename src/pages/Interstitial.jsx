import React from "react";
import  HeroInterstitial from "../components/HeroInterstitial"
import FeaturesInterstitial from "../components/FeaturesInterstitial";
import HowItWorksInterstitial from "../components/HowItWorksInterstitial";
import VerticalsInterstitial from "../components/VerticalsInterstitial";
import BenefitsInterstitial from "../components/BenefitsInterstitial";
import Contact from "../components/Contact";
import Research from "../components/Research";

export default function Interstitial() {
    return (
        <>
        <HeroInterstitial />
        <FeaturesInterstitial />
        <HowItWorksInterstitial />
        <VerticalsInterstitial />
        <BenefitsInterstitial />
        <Contact />
        <Research />
        </>
    );
}