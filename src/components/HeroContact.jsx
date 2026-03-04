import React from "react";
import { motion } from "framer-motion";
import "./HeroContact.css";

export default function HeroContact() {

    const leftParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };


    const leftChild = {
        hidden: { opacity: 0, x: -80, y: -16 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.85, ease: "easeOut" },
        },
    };


    const buttonVariant = {
        hidden: { opacity: 0, x: -18, y: -6, scale: 0.995 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { duration: 0.32, ease: "easeOut" },
        },
    };


    const rightVariants = {
        hidden: { opacity: 0, x: 80, y: -20, scale: 0.98 },
        visible: {
            opacity: 1,
            x: 0,
            y: [0, -6, 0],
            scale: [1, 1.02, 1],
            transition: {

                x: { duration: 0.9, ease: "easeOut" },
                opacity: { duration: 0.9 },

                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
            },
        },
    };

    return (
        <section
            id="advertisers"
            className="hero-contact-section relative flex justify-center items-center w-full overflow-hidden"
            style={{
                height: window.innerWidth >= 1024 ? "100vh" : "auto",
                maxHeight: window.innerWidth >= 1024 ? "720px" : "none",
                minHeight: window.innerWidth >= 1024 ? "600px" : "100vh",
                backgroundColor: "#FFFFFF",
                margin: "0",
                marginTop: "0",
                maxWidth: "100%",
                padding: "0",
            }}
        >

            <img
                src="/assets/images/contact-BG.png"
                alt="Hero Background"
                className="hero-contact-bg absolute hidden lg:block"
                style={{
                    width: "1568px",
                    height: "547px",
                    top: "0px",
                    left: "16px",
                    opacity: 1,
                    zIndex: 0,
                    pointerEvents: "none",
                    paddingRight: "32px",
                }}
            />

            {/* Mobile Background */}
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
                className="hero-contact-content relative z-10 flex flex-col lg:flex-row justify-between lg:justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-[5%] max-w-[1280px] gap-8 lg:gap-0 pt-20 pb-20 lg:py-0"
            >

                <motion.div
                    className="hero-contact-left flex flex-col gap-4 sm:gap-6 lg:gap-10 text-center lg:text-left w-full lg:max-w-[643px] lg:h-[366px] order-1 lg:order-none lg:-mt-[520px]"
                    style={{
                        marginTop: window.innerWidth >= 1024 ? "0" : "0",
                    }}
                    variants={leftParent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.h1
                        variants={leftChild}
                        className="hero-contact-title font-normal leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[72px]"
                        style={{
                            fontFamily: "Outfit",
                            color: "#FFFFFF",
                            maxWidth: "100%",
                            width: window.innerWidth >= 1024 ? "643px" : "100%",
                            height: window.innerWidth >= 1024 ? "51px" : "auto",
                            fontSize: window.innerWidth >= 1024 ? "72px" : undefined,
                            marginBottom: window.innerWidth >= 1024 ? "20px" : "0",
                        }}
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        variants={leftChild}
                        className="hero-contact-desc text-sm sm:text-base lg:text-lg leading-relaxed"
                        style={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            color: "#F9F9F9",
                            maxWidth: "100%",
                            width: window.innerWidth >= 1024 ? "643px" : "100%",
                            height: window.innerWidth >= 1024 ? "69px" : "auto",
                            fontSize: window.innerWidth >= 1024 ? "18px" : undefined,
                            marginBottom: window.innerWidth >= 1024 ? "17px" : "0",
                        }}
                    >
                        Our expertise and authenticity are remarkable and always strive to beat and outperform to build a safe and beneficial AI systems while observing how we help others!!
                    </motion.p>


                    <a href="/faq" style={{ textDecoration: 'none' }}>
                        <motion.button
                            variants={buttonVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            className="hero-contact-btn flex items-center justify-center transition-transform hover:scale-105 w-full sm:w-auto mx-auto lg:mx-0 mt-14 lg:mt-0"
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
                            <span
                                className="text-sm font-bold"
                                style={{
                                    fontFamily: "Outfit",
                                }}
                            >
                                Help & FAQs
                            </span>
                            <img
                                src="/assets/images/arrow.png"
                                alt="Arrow Right"
                                className="ml-2 w-3 h-3"
                            />
                        </motion.button>
                    </a>
                </motion.div>


                <motion.img
                    src="/assets/images/header-girl.png"
                    alt="Popunder Graphic"
                    className="hero-contact-girl block w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[554px] h-auto order-2 lg:order-none mt-[50px] lg:-mt-[70px] lg:ml-36"
                    style={{
                        aspectRatio: "534/383",
                    }}
                    variants={rightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                />
            </div>

            {/* Breadcrumbs */}
            <div
                className="hero-contact-breadcrumbs absolute hidden lg:flex items-center gap-2 z-10"
                style={{ left: "calc(4px + 650px)", bottom: "calc(0.5rem + 140px)" }}
            >
                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#222222" }}>
                    <a href="/" style={{ textDecoration: 'none', color: '#222222', fontFamily: 'Outfit' }} className="text-xs sm:text-sm hover:underline cursor-pointer">
                        Home
                    </a>
                </span>

                <img
                    src="/assets/images/side-arrow.png"
                    alt="side arrow"
                    className="w-1 h-2"
                />

                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
                    Services
                </span>

                <img
                    src="/assets/images/side-arrow.png"
                    alt="side arrow"
                    className="w-1 h-2"
                />

                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
                    Contact Us
                </span>
            </div>

            {/* Mobile Breadcrumbs */}
            <div
                className="absolute lg:hidden flex items-center justify-center gap-2 z-10 bottom-4 left-0 right-0 order-3"
            >
                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#222222" }}>
                    Home
                </span>

                <img
                    src="/assets/images/side-arrow.png"
                    alt="side arrow"
                    className="w-1 h-2"
                />

                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
                    Services
                </span>

                <img
                    src="/assets/images/side-arrow.png"
                    alt="side arrow"
                    className="w-1 h-2"
                />

                <span className="text-xs" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
                    Contact Us
                </span>
            </div>
        </section>
    );
}
