import React from "react";
import { motion } from "framer-motion";
import "./FAQsHero.css";

export default function HeroFAQs() {
    return (
        <section
            id="advertisers"
            className="faqshero-section relative flex justify-center items-center w-full overflow-hidden bg-white lg:bg-transparent"
        >
            {/* Background Image — DESKTOP ONLY */}
            <img
                src="/assets/images/contact-BG.png"
                alt="Hero Background"
                className="faqshero-bg absolute hidden lg:block"
            />

            {/* MOBILE Background */}
            <div
                className="faqshero-bg-mobile absolute lg:hidden"
                style={{
                    background: "#000000",
                    zIndex: 0,
                    top: "10px",
                    left: "10px",
                    right: "10px",
                    bottom: "10px",
                    borderRadius: "16px",
                }}
            />


            <div
                className="
                    faqshero-content
                    relative z-10 
                    flex flex-col lg:flex-row 
                    justify-center items-center 
                    w-full 
                    px-4 sm:px-6 md:px-8 lg:px-[5%] 
                    max-w-[1280px] 
                    gap-8 lg:gap-0 
                    pt-8 pb-8 lg:py-0 
                    text-center lg:text-left
                "
            >

                <div
                    className="
                        faqshero-text-container
                        flex flex-col 
                        gap-4 sm:gap-6 lg:gap-10 
                        w-full 
                        text-center lg:text-left 
                        lg:max-w-[643px] lg:h-[366px]
                        order-1 lg:order-none
                        lg-mt-0
                        mt-8
                    "
                >

                    <h3
                        className="
                            faqshero-title
                            font-normal leading-tight 
                            text-3xl sm:text-4xl md:text-5xl 
                            lg:text-[72px]
                            text-white
                            mt-2 lg:mt-[-50px]
                            mx-auto lg:ml-[40px]
                        "
                        style={{ fontFamily: "Outfit" }}
                    >
                        FAQs
                    </h3>


                    <p
                        className="
                            faqshero-desc
                            text-sm sm:text-base lg:text-lg 
                            leading-relaxed 
                            text-[#F9F9F9] 
                            mx-auto lg:ml-[40px] 
                            w-[90%] lg:w-[643px]
                            mb-3 lg:mb-[30px]
                        "
                        style={{ fontFamily: "Outfit", fontWeight: 480 }}
                    >
                        Advertsocial equips creators with innovative
                        monetization tools, including a streamlined
                        Prebid solution that enhances ad performance.
                        Our intelligent technology boosts earnings automatically,
                        freeing creators to focus entirely on producing great content.
                    </p>


                    <button
                        className="
        faqshero-btn
        flex items-center justify-center 
        transition-transform hover:scale-105 
        w-full sm:w-auto 
        mx-auto lg:ml-[40px] 
        mt-6 lg:-mt-6
    "
                        style={{
                            minWidth: "171px",
                            maxWidth: "200px",
                            height: "58px",
                            borderRadius: "40px",
                            padding: "16px 24px",
                            background:
                                "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
                            color: "#FFFFFF",
                            cursor: "pointer",
                        }}
                        onClick={() => window.location.href = '/contact'}
                    >
                        <span className="text-sm font-bold" style={{ fontFamily: "Outfit" }}>
                            Help & FAQs
                        </span>
                        <img
                            src="/assets/images/arrow.png"
                            alt="Arrow Right"
                            className="ml-2 w-3 h-3"
                        />
                    </button>
                </div>


                <motion.img
                    src="/assets/images/Mask group.png"
                    alt="Popunder Graphic"
                    className="
                        faqshero-graphic
                        block
                        w-full 
                        max-w-[260px] sm:max-w-[300px] md:max-w-[360px]
                        lg:max-w-[400px] xl:max-w-[554px]
                        h-auto
                        order-2 lg:order-none
                        mt-8 lg:mt-[-150px]
                        mx-auto lg:ml-36
                    "
                    style={{ aspectRatio: "534/383" }}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.02, 1],
                        y: [0, -6, 0],
                    }}
                    transition={{
                        duration: 1,
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            </div>

            {/* DESKTOP BREADCRUMBS */}
            <div className="faqshero-breadcrumbs absolute hidden lg:flex items-center gap-2 z-10">
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#222222" }}>Home</span>
                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B", cursor: "pointer" }} onClick={() => window.location.href = '/about'}>About Us</span>
            </div>

            {/* MOBILE BREADCRUMBS */}
            <div className="faqshero-breadcrumbs-mobile absolute lg:hidden flex items-center justify-center gap-2 z-10 bottom-4 left-0 right-0">
                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#222222" }}>Home</span>
                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>Pages</span>
                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>About Us</span>
            </div>
        </section>
    );
}
