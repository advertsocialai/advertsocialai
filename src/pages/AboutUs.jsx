import React from 'react'
import Hero from '../components/HeroAboutUs'
import Result from '../components/ResultAboutUs'
import Story from '../components/StoryAboutUs.jsx'
import Reward from '../components/RewardAboutUs.jsx'
import FAQget from '../components/publicFAQsget'
// import FAQ from '../components/FAQAboutUs'
import Banner from '../components/BannerAboutUs'
import GetInTouch from '../components/GetInTouchAboutUs'




export default function AboutUs() {
    return (
      <>
        <Hero/>
        <Result/>
        <Story/>
        <Reward/>
        <FAQget limit={5}/>
        {/* <FAQ/> */}
        <Banner/>
        <div style={{ marginBottom: '40px' }}></div>
        <GetInTouch/>
        <div style={{ marginBottom: '80px' }}></div>
        
      </>
    )
}
