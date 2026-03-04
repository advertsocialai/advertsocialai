import React, { useState } from "react";
import "./FAQAboutUs.css";

export default function FAQAboutUs() {
    const [openIndex, setOpenIndex] = useState(null);

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

    return (
        <div className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-8 faq-about-root">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 lg:gap-28 mx-auto max-w-7xl faq-about-container">

                <div className="w-full lg:w-auto flex justify-center lg:justify-start max-w-xl faq-image-wrapper">
                    <div className="relative w-full overflow-visible rounded-3xl faq-image-inner" style={{ maxWidth: "620px", aspectRatio: "620/520" }}>
                        <img
                            src="/assets/images/FAQ AboutUs.png"
                            alt="Question Mark"
                            className="w-full h-full object-cover"
                        // style={{ animation: "gentlePulse 3s ease-in-out infinite", transformOrigin: "center center" }}
                        />
                    </div>
                </div>


                <div className="w-full lg:w-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 max-w-xl faq-content-wrapper">

                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">

                        <h3
                            className="text-3xl sm:text-4xl lg:text-5xl leading-tight faq-main-heading"
                            style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                color: "#1B1A1A",
                            }}
                        >
                            We're here to answer all your questions
                        </h3>


                        <p
                            className="text-base sm:text-lg faq-description"
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


                    <div className="flex flex-col gap-0">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-200 faq-item"
                            >

                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between text-left py-6 transition-colors faq-toggle-btn"
                                >
                                    <span
                                        className="faq-question"
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
                                            className="faq-toggle-icon"
                                        />
                                    </div>
                                </button>


                                {openIndex === index && (
                                    <div
                                        className="pb-6 transition-all duration-300 ease-in-out faq-answer"
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
                    <div className="flex justify-start faq-btn-container">
                        <button className="gradient-btn faq-contact-btn">
                            <span>Still Need Help? Contact Us Now</span>
                        </button>
                        {/* <button
                            className="flex items-center gap-2 px-6 py-3 border-2 transition-all hover:opacity-80"
                            style={{
                                fontFamily: "DM Sans",
                                fontWeight: 500,
                                fontSize: "16px",
                                borderRadius: "8px",
                                borderStyle: "solid",
                                borderWidth: "2px",
                                borderImage: "linear-gradient(69.88deg, #6549F6 2.47%, #FF611D 78.28%) 1",
                                background: "linear-gradient(69.88deg, #6549F6 2.47%, #FF611D 78.28%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Still Need Help? Contact Us Now
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="2.47%" stopColor="#6549F6" />
                                        <stop offset="78.28%" stopColor="#FF611D" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button> */}

                    </div>
                </div>
            </div>
        </div>
    );
}
