import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./publicFAQsget.css";


export default function FAQget({
  apiUrl = "https://bohrx.ai/backendadmin/api/faqs",
  imageSrc = "/assets/images/FAQ AboutUs.png",
  navigateTo = "/contact",
  showIllustration = true,
  containerClass = "",
  limit = null,
}) {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        if (!mounted) return;
        const payload = Array.isArray(response.data) ? response.data : response.data?.data || [];
        setFaqs(payload);
        setError(null);
      } catch (err) {
        console.error("FAQ Fetch Error:", err);
        setError("Failed to load FAQs");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchFAQs();
    return () => (mounted = false);
  }, [apiUrl]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const displayFaqs = (typeof limit === "number" && limit > 0) ? faqs.slice(0, limit) : faqs;

  return (
    <section
      className={`faq-section w-full bg-white py-8 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 ${containerClass}`}
      style={{ fontFamily: 'Outfit' }}
    >
      <div className="faq-container flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 lg:gap-28 mx-auto max-w-7xl">

        {showIllustration && (
          <div className="faq-illustration-wrapper w-full lg:w-auto flex justify-center lg:justify-start max-w-xl">
            <div className="relative w-full overflow-visible rounded-3xl" style={{ maxWidth: "620px", aspectRatio: "620/520" }}>
              <img
                src={imageSrc}
                alt="FAQ Illustration"
                className="w-full h-full object-cover"
                style={{ animation: "gentlePulse 3s ease-in-out infinite" }}
              />
            </div>
          </div>
        )}

        <div className="faq-content-wrapper w-full lg:w-auto flex flex-col gap-12 sm:gap-16 lg:gap-20 max-w-xl">

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <h3 className="faq-heading text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'Outfit', fontWeight: 400, color: '#1B1A1A' }}>
              We're here to answer all your questions
            </h3>

            <p className="faq-description text-base sm:text-lg" style={{ maxWidth: '550px', fontFamily: 'Outfit', fontWeight: 400, fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '28px', color: '#4B4B4B' }}>
              Advertsocial is an ad tech company helping publishers maximize ad revenue through programmatic advertising solutions.Have questions or need Support? Fill Out the Contact form and connect with our Team.
            </p>
          </div>

          {loading && <p className="text-gray-500 text-lg" style={{ fontFamily: 'Outfit' }}>Loading FAQs...</p>}
          {error && <p className="text-red-500 text-lg" style={{ fontFamily: 'Outfit' }}>{error}</p>}

          {!loading && !error && (
            <div className="faq-accordion flex flex-col gap-0">
              {displayFaqs.length === 0 ? (
                <p className="text-gray-600" style={{ fontFamily: 'Outfit' }}>No FAQs available.</p>
              ) : (
                displayFaqs.map((faq, index) => (
                  <div key={faq.id || index} className="faq-item border-b border-gray-200">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="faq-question-btn w-full flex items-center justify-between text-left py-6 transition-colors focus:outline-none"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="faq-question-text" style={{ fontFamily: 'Outfit', fontWeight: 500, fontSize: '18px', color: '#1B1A1A' }}>
                        {faq.question}
                      </span>

                      <div className="faq-toggle-icon flex items-center justify-center rounded-full transition-all flex-shrink-0 ml-4" style={{ width: "32px", height: "32px", backgroundColor: "#6549F6" }}>
                        <img
                          src={openIndex === index ? "/assets/images/Icon-minus.png" : "/assets/images/Icon-plus.png"}
                          alt={openIndex === index ? "collapse" : "expand"}
                          style={{ width: "18px", height: "18px" }}
                        />
                      </div>
                    </button>

                    {openIndex === index && (
                      <div id={`faq-answer-${index}`} className="faq-answer pb-6 transition-all duration-300 ease-in-out" style={{ fontFamily: 'Outfit', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#4B4B4B' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* <div className="flex items-center gap-4">
            <button className="gradient-btn" onClick={() => navigate(navigateTo)}>
              <span>Still Need Help? Contact Us Now</span>
            </button> */}

          {/* If limit is used (e.g. on About/Contact), optionally show a link to full FAQ page */}
          {/* {typeof limit === "number" && limit > 0 && (
              <button onClick={() => navigate("/faq")} className="text-sm underline">
                View all FAQs
              </button>
            )} */}
        </div>

      </div>
      {/* </div> */}
    </section>
  );
}
