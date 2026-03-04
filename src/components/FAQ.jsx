import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null); // No FAQ open by default

    const faqs = [
        {
            question: "How do I integrate the Web Mediation tool?",
            answer: "Integrating the Web Mediation tool is a simple process that requires only one line of JavaScript code. Our team will guide you through the implementation, ensuring a smooth integration."
        },
        {
            question: "How do I integrate the Web Mediation tool?",
            answer: "Integrating the Web Mediation tool is a simple process that requires only one line of JavaScript code. Our team will guide you through the implementation, ensuring a smooth integration."
        },
        {
            question: "How do I integrate the Web Mediation tool?",
            answer: "Integrating the Web Mediation tool is a simple process that requires only one line of JavaScript code. Our team will guide you through the implementation, ensuring a smooth integration."
        },
        {
            question: "How do I integrate the Web Mediation tool?",
            answer: "Integrating the Web Mediation tool is a simple process that requires only one line of JavaScript code. Our team will guide you through the implementation, ensuring a smooth integration."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Motion variants for the left image (slide up every time in view)
    const imageVariants = {
      hidden: { opacity: 0, y: 36 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }
    };

    return (
        <div className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 lg:gap-28 mx-auto max-w-7xl">
                {/* Left Side - Image (animated from bottom, replays every time in view) */}
                <motion.div
                  className="w-full lg:w-auto flex justify-center lg:justify-start max-w-xl"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="relative w-full overflow-visible rounded-3xl" style={{ maxWidth: "620px", aspectRatio: "620/520" }}>
                        <img
                            src="/assets/images/question-mark.png"
                            alt="Question Mark"
                            className="w-full h-full object-cover"
                            style={{ animation: "gentlePulse 3s ease-in-out infinite", transformOrigin: "center center" }}
                        />
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 max-w-xl">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                        {/* Title */}
                        <h3
                            className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
                            style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                color: "#1B1A1A",
                            }}
                        >
                            We're here to answer all your questions
                        </h3>

                        {/* Description */}
                        <p
                            className="text-base sm:text-lg"
                            style={{
                                maxWidth: "550px",
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "clamp(16px, 2vw, 18px)",
                                lineHeight: "28px",
                                letterSpacing: "0%",
                                color: "#4B4B4B",
                            }}
                        >
                            Advertsocial is an ad tech company helping publishers maximize ad revenue through advanced programmatic advertising solutions. We have a suite of products, ranging from managed service to completely automated self-serve.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="flex flex-col gap-0">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left py-6 transition-colors"
                                >
                                    <span
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 500,
                                            fontSize: "18px",
                                            lineHeight: "28px",
                                            color: "#1B1A1A",
                                        }}
                                    >
                                        {faq.question}
                                    </span>
                                    <div
                                        className="flex items-center justify-center rounded-full transition-all flex-shrink-0 ml-4"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            backgroundColor: "#6549F6",
                                        }}
                                    >
                                        <img
                                            src={openIndex === index ? "/assets/images/Icon-plus.png" : "/assets/images/Icon-minus.png"}
                                            alt={openIndex === index ? "Collapse" : "Expand"}
                                            style={{
                                                width: "30px",
                                                height: "30px",
                                            }}
                                        />
                                    </div>
                                </button>

                                {/* Answer */}
                                {openIndex === index && (
                                    <div
                                        className="pb-6 transition-all duration-300 ease-in-out"
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            color: "#4B4B4B",
                                            animation: "fadeIn 0.3s ease-in-out",
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="flex justify-start">
                        <button className="gradient-btn">
                          <span>Still Need Help? Contact Us Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
