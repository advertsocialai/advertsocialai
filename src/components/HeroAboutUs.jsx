import React from "react";
import { motion } from "framer-motion";
import "./HeroAboutUs.css";

export default function HeroAboutUs() {
    return (
        <section
            id="advertisers"
            className="hero-about-root relative flex justify-center items-center w-full overflow-hidden bg-white lg:bg-transparent"
        >

            {/* Background Image — DESKTOP ONLY */}
            <img
                src="/assets/images/contact-BG.png"
                alt="Hero Background"
                className="hero-about-bg absolute hidden lg:block"
            />

            {/* MOBILE Background */}
            <div
                className="absolute lg:hidden"
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
                    hero-about-container
                    relative z-10 
                    flex flex-col lg:flex-row 
                    justify-center items-center 
                    w-full 
                    px-4 sm:px-6 md:px-8 lg:px-[5%] 
                    gap-8 lg:gap-0 
                    pt-8 pb-8 lg:py-0 
                    text-center lg:text-left
                "
            >


                <motion.div
                    className="
                        hero-about-content
                        flex flex-col 
                        gap-4 sm:gap-6 lg:gap-10 
                        w-full 
                        text-center lg:text-left 
                        lg:max-w-[643px] lg:h-[366px]
                        order-1 lg:order-none
                        mt-8
                    "
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <h1
                        className="
                            hero-about-title
                            font-normal leading-tight 
                            text-3xl sm:text-4xl md:text-5xl 
                            lg:text-[72px]
                            text-white
                            mt-2 lg:mt-[-50px]
                            mx-auto lg:ml-[40px]
                        "
                        style={{ fontFamily: "Schibsted Grotesk" }}
                    >
                        About Us
                    </h1>


                    <p
                        className="
                            hero-about-desc
                            text-sm sm:text-base lg:text-lg 
                            leading-relaxed 
                            text-[#F9F9F9] 
                            mx-auto lg:ml-[40px] 
                            w-[90%] lg:w-[643px]
                            mb-6 lg:mb-[30px]
                        "
                        style={{ fontFamily: "Outfit", fontWeight: 500 }}
                    >
                        At Advertsocial, we offer content creators next-generation
                        adtech solutions, including light Prebid technology for
                        effective website monetization. Using intelligent tech and
                        strategies, we boost their ad earnings, allowing them to
                        return to their passion—content creation.
                    </p>


                    <a href="/faq" style={{ textDecoration: 'none' }}>
                        <button
                            className="
                                hero-about-btn
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
                    </a>
                </motion.div>


                <motion.img
                    src="/assets/images/Mask group.png"
                    alt="Popunder Graphic"
                    className="
                        hero-about-graphic
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

                    initial={{ opacity: 0, x: 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}

                    animate={{
                        scale: [1, 1.02, 1],
                        y: [0, -6, 0],
                    }}

                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            </div>

            {/* DESKTOP BREADCRUMBS */}
            <div
                className="hero-about-breadcrumbs absolute hidden lg:flex items-center gap-2 z-10"
                style={{
                    left: "calc(4px + 690px)",
                    bottom: "calc(0.5rem + 140px)",
                }}
            >
                <a href="/" style={{ textDecoration: 'none', color: '#222222', fontFamily: 'Outfit' }} className="text-xs sm:text-sm hover:underline cursor-pointer">Home</a>
                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>About Us</span>
            </div>

            {/* MOBILE BREADCRUMBS */}
            <div className="absolute lg:hidden flex items-center justify-center gap-2 z-10 bottom-4 left-0 right-0">
                <a href="/" style={{ textDecoration: 'none', color: '#222222', fontFamily: 'Outfit' }} className="text-xs hover:underline cursor-pointer">Home</a>
                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>About Us</span>
            </div>

        </section>
    );
}
