import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Verticals from '../components/Verticals'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Research from '../components/Research'

export default function LandingPage() {
    return (
      <main
        className="relative mx-auto overflow-x-hidden"
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
          overflowX: "hidden",
        }}
      >
        <div id="advertisers" />
        <Hero />
        <Features />
        <HowItWorks />
        <Verticals />
        <Benefits />
        <Contact />
        <Research />
      </main>
    )
}
