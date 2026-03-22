import React from 'react'
import Hero from '../components/HeroContact'
import GetInTouch from '../components/GetInTouchContact'
import FAQget from '../components/publicFAQsget'


export default function ContactUs() {
    return (
      <>
        <Hero/>
        <GetInTouch/>
        <FAQget limit={5}
        imageSrc="public/assets/images/question-mark.png"
        />
        {/* <FAQ/> */}
        
      </>
    )
}
