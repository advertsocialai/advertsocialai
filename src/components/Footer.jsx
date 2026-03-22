import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="w-full mt-auto flex justify-center items-center px-0 py-0 text-sm lg:text-base">
      <div
        className="footer-root relative min-h-fit sm:min-h-fit md:min-h-fit lg:h-[561px] rounded-[32px] sm:rounded-[36px] lg:rounded-[24px] max-w-[1520px] w-full bg-white flex flex-col mx-auto"
        style={{
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      >
        <img
          src="/assets/images/Subtract-footer.png"
          alt="Footer background"
          className="footer-bg-image absolute inset-0  object-cover object-center z-0 pointer-events-none select-none bg-white hidden lg:block"
        />

        <div className="absolute inset-0 w-full h-full bg-black rounded-[32px] sm:rounded-[36px] lg:hidden z-0"></div>

        <div className="lg:hidden relative z-10 text-white p-6 sm:p-8 flex flex-col min-h-full">
          <div
            className="flex flex-col items-center justify-center text-center mx-auto w-full pt-2 pb-2"
            style={{
              width: "100%",
              transform: "rotate(0deg)",
              opacity: 1,
              gap: "12px",
              margin: "0 auto",
            }}
          >
            <img
              src="/assets/images/Blue/Logo-white.svg"
              alt="AdvertSocial"
              className="w-32 h-auto object-contain mb-1 sm:w-24"
              style={{ maxWidth: "150px", marginBottom: "4px" }}
            />
            <div
              className="text-xs sm:text-sm text-[#F9F9F9] whitespace-nowrap overflow-hidden text-ellipsis px-0"
              style={{
                fontFamily: "Outfit",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                marginBottom: "2px",
                fontSize: "0.85rem",
              }}
            >
              Embrace the future of Ads artificial intelligence!
            </div>
            <span
              className="text-[#00E676] text-xs sm:text-sm"
              style={{
                fontFamily: "Outfit",
                display: "block",
                marginBottom: "2px",
                fontSize: "0.85rem",
              }}
            >
              info@advertsocial.ai
            </span>
            <span
              className="text-white text-xs sm:text-sm"
              style={{ fontFamily: "Outfit", display: "block", fontSize: "0.85rem" }}
            >
              +1 (800) 246-7090
            </span>
          </div>

          <div className="flex flex-col w-full">
            <div className="text-left mb-7 flex flex-col gap-4 [@media(max-width:500px)]:pl-0 [@media(max-width:500px)]:w-auto [@media(max-width:500px)]:h-auto">
              <h4 className="text-sm sm:text-base font-medium text-[#F9F9F9]">About</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src="/assets/images/arrow.png" alt="arrow" className="w-3 h-2.5" />
                  <span
                    className="text-xs font-bold text-white cursor-pointer"
                    onClick={() => (window.location.href = "/about")}
                  >
                    About Us
                  </span>
                </div>
                {["Leadership Team", "Case Studies", "Contact Us", "Careers"].map((item, i) =>
                  item === "Contact Us" ? (
                    <span
                      key={i}
                      className="text-xs font-bold text-white cursor-pointer"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      {item}
                    </span>
                  ) : item === "Case Studies" ? (
                    <span
                      key={i}
                      className="text-xs font-bold text-white cursor-pointer"
                      onClick={() => (window.location.href = "/blog")}
                    >
                      {item}
                    </span>
                  ) : (
                    <span key={i} className="text-xs font-bold text-white">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="text-left mb-7 flex flex-col gap-4 [@media(max-width:500px)]:w-auto [@media(max-width:500px)]:h-auto">
              <h4 className="text-sm sm:text-base font-medium text-[#F9F9F9]">Services</h4>
              <div className="flex flex-col gap-3">
                {[
                  "AI Model Development",
                  "AI Integration solutions",
                  "AI Strategy Consulting",
                  "Machine Learning",
                  "Data Monitoring",
                  "Neural Network",
                ].map((item, i) => (
                  <span key={i} className="text-xs font-bold text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-left mb-7 flex flex-col gap-4 [@media(max-width:500px)]:ml-0 [@media(max-width:500px)]:w-auto [@media(max-width:500px)]:h-auto">
              <h4 className="text-sm sm:text-base font-medium text-[#F9F9F9]">Resources</h4>
              <div className="flex flex-col gap-3">
                {["News & Media", "Popunder ADS", "Advertising", "Best Push", "Native Traffic"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold text-white cursor-pointer"
                      onClick={() => {
                        if (item === "Popunder ADS") {
                          window.location.href = "/popunderads";
                        }
                        if (item === "Advertising") {
                          window.location.href = "/advertisers";
                        }
                      }}
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="text-left mb-8 flex flex-col gap-4 [@media(max-width:500px)]:w-auto [@media(max-width:500px)]:h-auto">
              <h4 className="text-sm sm:text-base font-medium text-white mb-5">Stay Updated</h4>
              <div className="flex flex-col items-start gap-4">
                <p className="text-xs sm:text-sm text-[#F9F9F9] leading-relaxed">
                  Subscribe to our newsletter and receive the latest news on products, services &
                  more.
                </p>
                <form className="flex flex-col gap-3 w-full">
                  <div className="flex items-center justify-between bg-[#282828] border border-[#4C4C4C] rounded-xl p-3 h-12 w-full">
                    <input
                      type="email"
                      placeholder="Type your email"
                      className="flex-1 bg-transparent outline-none text-[#F9F9F9] text-xs"
                    />

                    <button className="w-8 h-6 bg-[#6A0DAD] rounded-full flex items-center justify-center">
                      <img src="/assets/images/arrow.png" className="w-3 h-3" />
                    </button>
                  </div>

                  <p className="text-xs text-[#BBBABA]">
                    By subscribing, you accept the Privacy Policy
                  </p>
                </form>

                <div className="flex items-center gap-4 mt-2">
                  {[
                    "Facebook Icon.png",
                    "X Icon.png",
                    "In Icon.png",
                    "Instagram Icon.png",
                    "YouTube Icon.png",
                  ].map((icon, i) => {
                    if (icon === "Instagram Icon.png") {
                      return (
                        <a
                          key={i}
                          href="https://www.instagram.com/advertsocialai/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                        </a>
                      );
                    }
                    if (icon === "X Icon.png") {
                      return (
                        <a
                          key={i}
                          href="https://x.com/advertsocialai"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                        </a>
                      );
                    }
                    if (icon === "In Icon.png") {
                      return (
                        <a
                          key={i}
                          href="https://www.linkedin.com/company/advert-social-ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                        </a>
                      );
                    }
                    if (icon === "Facebook Icon.png") {
                      return (
                        <a
                          key={i}
                          href="https://www.facebook.com/profile.php?id=61586193000605"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                        </a>
                      );
                    }
                    if (icon === "YouTube Icon.png") {
                      return (
                        <a
                          key={i}
                          href="https://youtube.com/@advertsocialai?si=F0DDRn4XCs9xEsui"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                        </a>
                      );
                    }
                    return <img key={i} src={`/assets/images/${icon}`} className="w-5 h-5" />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-700/60 space-y-4 text-center pb-4">
            <p className="text-xs sm:text-sm text-gray-400">
              ©2025 Advert Social AI, All Rights Reserved. With Love by{" "}
              <span style={{ color: "#00E676" }}>advertsocial.ai</span>
            </p>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-400">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block absolute inset-0 z-10">
          <div
            className="footer-scaling-content absolute top-[120px] left-1/2 transform -translate-x-1/2 flex flex-row gap-[120px] text-white"
            style={{ width: "min(95%, 1200px)" }}
          >
            <div className="footer-brand-container flex flex-col gap-6 max-w-[200px]">
              <img
                src="/assets/images/Blue/Logo-white.svg"
                alt="AdvertSocial"
                className="w-[115px] h-auto object-contain"
              />
              <div
                className="text-base leading-relaxed text-[#F9F9F9]"
                style={{ fontFamily: "Outfit" }}
              >
                Embrace the future of Ads artificial intelligence!
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[#00E676] text-base" style={{ fontFamily: "Outfit" }}>
                  info@advertsocial.ai
                </span>
                <span
                  className="footer-phone-text text-white text-base"
                  style={{ fontFamily: "Outfit" }}
                >
                  (800) 246-7090
                </span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-10 gap-10">
              <div className="flex flex-col gap-8 col-span-2">
                <h4
                  className="text-sm font-medium text-[#F9F9F9]"
                  style={{ fontFamily: "Outfit", fontSize: "1rem" }}
                >
                  About
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src="/assets/images/arrow.png" alt="arrow" className="w-3 h-2.5" />
                    <span
                      className="text-xs font-bold text-white cursor-pointer"
                      style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                      onClick={() => (window.location.href = "/about")}
                    >
                      About Us
                    </span>
                  </div>
                  {["Leadership Team", "Case Studies", "Contact Us", "Careers"].map((item, i) =>
                    item === "Contact Us" ? (
                      <span
                        key={i}
                        className="text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors"
                        style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                        onClick={() => (window.location.href = "/contact")}
                      >
                        {item}
                      </span>
                    ) : item === "Case Studies" ? (
                      <span
                        key={i}
                        className="text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors"
                        style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                        onClick={() => (window.location.href = "/blog")}
                      >
                        {item}
                      </span>
                    ) : (
                      <span
                        key={i}
                        className="text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors"
                        style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-8  col-span-2" style={{ marginLeft: "0px" }}>
                <h4
                  className="text-sm font-medium text-[#F9F9F9]"
                  style={{ fontFamily: "Outfit", fontSize: "1rem" }}
                >
                  Services
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    "AI Model Development",
                    "AI Integration Solutions",
                    "AI Strategy Consulting",
                    "Machine Learning",
                    "Data Monitoring",
                    "Neural Network",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className={
                        item === "AI Integration Solutions"
                          ? "text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors whitespace-nowrap"
                          : "text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors"
                      }
                      style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8 col-span-3" style={{ marginLeft: "50px" }}>
                <h4
                  className="text-sm font-medium text-[#F9F9F9]"
                  style={{ fontFamily: "Outfit", fontSize: "1rem" }}
                >
                  Resources
                </h4>
                <div className="flex flex-col gap-4">
                  {[
                    "News & Media",
                    "Popunder ADS",
                    "Advertising",
                    "Best Push",
                    "Native Traffic",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold text-white cursor-pointer hover:text-[#FF611D] transition-colors"
                      style={{ fontFamily: "Outfit", fontSize: "0.85rem" }}
                      onClick={() => {
                        if (item === "Popunder ADS") {
                          window.location.href = "/popunderads";
                        }
                        if (item === "Advertising") {
                          window.location.href = "/advertisers";
                        }
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8 col-span-3">
                <h4
                  className="text-xs font-medium text-white"
                  style={{ fontFamily: "Outfit", fontSize: "1rem" }}
                >
                  Stay Updated
                </h4>
                <div className="flex flex-col gap-4">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <p
                      className="footer-newsletter-text text-xs font-semibold leading-[20px] text-[#F9F9F9]"
                      style={{ fontFamily: "Outfit", maxWidth: "400px", fontSize: "0.9rem" }}
                    >
                      subscribe to our newsletter and receive the latest news on products, services
                      & more.
                    </p>

                    <div className="footer-input-container flex items-center justify-between bg-[#282828] border border-[#4C4C4C] rounded-xl p-4 h-[59px] w-full max-w-sm">
                      <input
                        type="email"
                        placeholder="Type your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-[#F9F9F9] text-xs"
                        style={{ fontFamily: "Outfit", fontSize: "0.95rem" }}
                      />

                      <button
                        type="submit"
                        className="w-[46px] h-[32px] bg-[#6A0DAD] rounded-full border-none flex items-center justify-center cursor-pointer hover:bg-[#5439e6] transition-colors"
                        style={{
                          minWidth: "46px",
                          width: "46px",
                          height: "32px",
                          justifyContent: "center",
                          display: "flex",
                          padding: 0,
                          marginLeft: "-45px",
                        }}
                      >
                        <img
                          src="/assets/images/arrow.png"
                          alt="arrow"
                          className="w-[15px] h-[14px] object-contain"
                        />
                      </button>
                    </div>
                    <p
                      className="text-xs text-[#BBBABA]"
                      style={{ fontFamily: "Outfit", fontSize: "0.82rem" }}
                    >
                      By subscribing, you accept the Privacy Policy
                    </p>
                  </form>
                  <div className="flex gap-4">
                    {[
                      "Facebook Icon.png",
                      "X Icon.png",
                      "In Icon.png",
                      "Instagram Icon.png",
                      "YouTube Icon.png",
                    ].map((icon, i) => {
                      if (icon === "Instagram Icon.png") {
                        return (
                          <a
                            key={i}
                            href="https://www.instagram.com/advertsocialai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={`/assets/images/${icon}`}
                              alt="social"
                              className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          </a>
                        );
                      }
                      if (icon === "X Icon.png") {
                        return (
                          <a
                            key={i}
                            href="https://x.com/advertsocialai"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={`/assets/images/${icon}`}
                              alt="social"
                              className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          </a>
                        );
                      }
                      if (icon === "In Icon.png") {
                        return (
                          <a
                            key={i}
                            href="https://www.linkedin.com/company/advert-social-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={`/assets/images/${icon}`}
                              alt="social"
                              className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          </a>
                        );
                      }
                      if (icon === "Facebook Icon.png") {
                        return (
                          <a
                            key={i}
                            href="https://www.facebook.com/profile.php?id=61586193000605"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={`/assets/images/${icon}`}
                              alt="social"
                              className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          </a>
                        );
                      }
                      if (icon === "YouTube Icon.png") {
                        return (
                          <a
                            key={i}
                            href="https://youtube.com/@advertsocialai?si=F0DDRn4XCs9xEsui"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={`/assets/images/${icon}`} className="w-5 h-5" />
                          </a>
                        );
                      }
                      return (
                        <img
                          key={i}
                          src={`/assets/images/${icon}`}
                          alt="social"
                          className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="footer-bottom-bar absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex justify-between text-gray-400 text-sm pt-4"
                style={{ width: "min(1200px, calc(100% - 60px))", fontSize: "0.95rem" }}
              >
                <p>
                  ©2025 Advert Social AI, All Rights Reserved. With Love by{" "}
                  <span style={{ color: "#00E676" }}>advertsocial.ai</span>
                </p>
                <div className="flex gap-4">
                  <span className="cursor-pointer hover:text-[#FF611D] transition-colors">
                    Terms & Conditions
                  </span>
                  <span className="cursor-pointer hover:text-[#FF611D] transition-colors">
                    Privacy Policy
                  </span>
                  <span className="cursor-pointer hover:text-[#FF611D] transition-colors">
                    Sitemap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed flex justify-center items-center"
          style={{
            position: "fixed",
            bottom: "40px",
            right: "60px",
            zIndex: 50,
            width: "46px",
            height: "63px",
            borderRadius: "35px",
            paddingTop: "24px",
            paddingRight: "16px",
            paddingBottom: "24px",
            paddingLeft: "16px",
            background: "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <img
            src="/assets/images/arrow-up.png"
            alt="up arrow"
            style={{
              width: "14px",
              height: "15px",
              // transform: "rotate(-90deg)",
              opacity: 1,
              color: " #FFFFFF",
              borderRadius: "2px",
              padding: "1px",
            }}
          />
        </button>
      )}
    </footer>
  );
}
