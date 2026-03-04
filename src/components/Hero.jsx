import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();


    const leftVariants = {
        hidden: { opacity: 0, x: -80, y: -20 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.15,
            },
        },
    };


    const childVariants = {
        hidden: { opacity: 0, x: -40, y: -10 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.9, ease: "easeOut" },
        },
    };


    const rightVariants = {
        hidden: { opacity: 0, x: 100, y: -20 },
        visible: {
            opacity: 1,
            x: 0,
            y: [0, -6, 0],
            scale: [1, 1.02, 1],
            transition: {

                x: { duration: 1.2, ease: "easeOut" },

                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.2 },
            },
        },
    };

    return (
        <section
            id="advertisers"
            className="hero-section relative flex justify-center items-center w-full overflow-hidden mx-auto"
            style={{
                minHeight: "500px",
                height: "100vh",
                maxHeight: "720px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                margin: "0 auto",
                maxWidth: "calc(100vw - 20px)",
                padding: "0 10px",
            }}
        >

            <img
                src="/assets/images/Image BG.png"
                alt="Hero Background"
                className="hero-bg-image absolute bottom-0 left-0 w-full h-full object-cover sm:object-contain"
                style={{
                    borderRadius: "12px",
                    objectPosition: "bottom center",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />


            <div
                className="hero-content-wrapper relative z-10 flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-[5%] max-w-[1280px] gap-8 lg:gap-0"
            >


                <motion.div
                    className="hero-text-content flex flex-col gap-6 sm:gap-8 lg:gap-10 text-center lg:text-left max-w-full lg:max-w-[643px] lg:h-[366px]"
                    variants={leftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.h1
                        variants={childVariants}
                        className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
                        style={{ fontFamily: "Outfit", color: "#FFFFFF" }}
                    >
                        Popunder Ads:
                    </motion.h1>

                    <motion.h2
                        variants={childVariants}
                        className="hero-subtitle text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight"
                        style={{ fontFamily: "Outfit", color: "#FFFFFF" }}
                    >
                        Make Profit from Popunder Traffic with Advertsocial
                    </motion.h2>

                    <motion.p
                        variants={childVariants}
                        className="hero-desc text-sm sm:text-base lg:text-lg leading-relaxed"
                        style={{ fontFamily: "Outfit", fontWeight: 500, color: "#F9F9F9" }}
                    >
                        CPM and CPA campaigns for Popunder ads with ever-growing ROI.
                        35K+ high-quality Popunder traffic sources.
                    </motion.p>


                    <motion.button
                        variants={childVariants}
                        className="hero-btn flex items-center justify-center transition-transform hover:scale-105 w-full sm:w-auto mx-auto lg:mx-0"
                        style={{
                            minWidth: "140px",
                            maxWidth: "200px",
                            height: "50px",
                            borderRadius: "40px",
                            padding: "16px 24px",
                            background:
                                "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
                            color: "#FFFFFF",
                            cursor: "pointer",
                        }}
                    >
                        <span className="text-sm font-bold" style={{ fontFamily: "Outfit" }}>
                            Get Started
                        </span>
                        <img src="/assets/images/arrow.png" alt="Arrow" className="ml-2 w-3 h-3" />
                    </motion.button>
                </motion.div>


                <motion.img
                    src="/assets/images/popunderads.png"
                    alt="Popunder Graphic"
                    className="hero-image hidden lg:block w-full max-w-[400px] xl:max-w-[554px] h-auto"
                    style={{ aspectRatio: "554/453" }}

                    variants={rightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                />
            </div>


            <div
                className="hero-breadcrumbs absolute flex items-center bottom-2 left-4 sm:left-8 lg:left-[166px] gap-2 z-10"
            >

                <span
                    className="text-xs sm:text-sm cursor-pointer"
                    style={{ fontFamily: "Outfit", color: "#222222" }}
                    onClick={() => navigate("/")}
                >
                    Home
                </span>

                <img src="/assets/images/side-arrow.png" className="w-1 h-2" />

                <span className="text-xs sm:text-sm" style={{ fontFamily: "Outfit", color: "#4B4B4B" }}>
                    Services
                </span>
            </div>
        </section>
    );
}

export default Hero;

