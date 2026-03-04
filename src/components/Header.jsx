import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationPage from "../pages/Registration-page";
import SignUp from "../pages/SignUp";
import "./Header.css";

export default function Header({ setIsVerticalsOpen }) {
  const [open, setOpen] = useState(false);
  const [showVerticals, setShowVerticals] = useState(false);
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  function handleNavClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  function VerticalsTabs({ onItemClick }) {
    const verticals = [
      { title: "Popunder", desc: "High-volume traffic source with maximum reach.", path: "/popunderads" },
      { title: "Push", desc: "Reach opted-in users with high engagement.", path: "/pushupads" },
      { title: "Vignette", desc: "Full-screen ads for premium visibility.", path: "/vignette" },
      { title: "Inpage", desc: "Native placements without browser restrictions.", path: "/inpage" },
      { title: "Interstitial", desc: "High-impact ads between content transitions.", path: "/interstitial" },
      { title: "Smartlink", desc: "Auto-optimized traffic routing for best ROI.", path: "/smartlink" },
    ];

    return (
      <div className="verticals-list grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8" style={{ fontFamily: 'Outfit' }}>
        {verticals.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (typeof onItemClick === "function") {
                onItemClick(item.path);
              }
            }}
            className="vertical-item flex flex-col gap-1 text-left rounded-xl px-4 py-3 transition-all duration-200 hover:bg-[#6A0DAD]"
          >
            <h4 className="vertical-item-title font-semibold text-white text-sm">
              {item.title}
            </h4>
            <p className="vertical-item-desc text-gray-400 text-xs leading-relaxed max-w-[360px]">
              {item.desc}
            </p>
          </button>
        ))}
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-30 bg-white" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="header-container flex items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-16 lg:py-6" style={{ minHeight: "60px", justifyContent: "space-between" }}>

          <a href="/" className="header-logo flex items-center w-40 h-10 sm:w-44 sm:h-12 md:w-48 md:h-14 lg:w-[220px] lg:h-[60px]">
            <img src="/assets/images/Blue/Logo.svg" alt="AdvertSocial" className="object-contain w-full h-full" />
          </a>

          {/* NAV + CTA (desktop) */}
          <div className="hidden lg:flex items-center justify-between gap-4 xl:gap-8">
            <nav className="flex items-center justify-center gap-4 xl:gap-8">

              <button onClick={() => navigate("/advertisers")} className="nav-btn cursor-pointer" style={{ width: "104px", height: "34px", padding: "12px" }}>
                <span className="nav-text" style={{ width: "80px", fontSize: "1.1rem", fontFamily: "Outfit" }}>Advertisers</span>
              </button>

              <button onClick={() => navigate("/publishers")} className="nav-btn" style={{ width: "72px", height: "26px", paddingTop: "8px", paddingBottom: "8px" }}>
                <span className="nav-text" style={{ width: "72px", fontSize: "1.1rem", fontFamily: "Outfit" }}>Publishers</span>
              </button>

              {/* Verticals Trigger Area */}
              <div
                className="relative group"
                onMouseEnter={() => {
                  // Only use hover-to-open for screens smaller than 4K (2560px)
                  if (window.innerWidth < 1601) {
                    setShowVerticals(true);
                    setIsVerticalsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  setShowVerticals(false);
                  setIsVerticalsOpen(false);
                }}
              >
                <div
                  className="nav-btn flex items-center gap-2 cursor-pointer"
                  style={{
                    height: "26px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    marginLeft: "20px",
                    zIndex: 1002,
                    position: "relative"
                  }}
                  onClick={(e) => {
                    // For 4K and 2K screens (>= 1601px), click explicitly OPENS the dropdown
                    if (window.innerWidth >= 1601) {
                      setShowVerticals(true);
                      setIsVerticalsOpen(true);
                    }
                    // For Mobile, keep toggle behavior
                    else if (window.innerWidth <= 768) {
                      const newState = !showVerticals;
                      setShowVerticals(newState);
                      setIsVerticalsOpen(newState);
                    }
                  }}
                >
                  <span className="nav-text" style={{ fontSize: "1.1rem", fontFamily: "Outfit" }}>Verticals</span>
                  <img
                    src="/assets/images/arrow-down.svg"
                    alt="dropdown arrow"
                    style={{
                      width: "10px", height: "10px", objectFit: "contain",
                      transition: "transform 0.2s ease",
                      transform: showVerticals ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>

                {/* Robust Bridge for 4K stability */}
                {showVerticals && (
                  <div
                    className="dropdown-bridge absolute left-1/2 -translate-x-1/2"
                    style={{
                      top: "100%",
                      width: "800px",
                      height: "100px", // Increased height to ensure overlap
                      zIndex: 999,
                    }}
                  />
                )}

                {showVerticals && (
                  <div
                    className="verticals-dropdown absolute bg-[#0E0F14] text-white shadow-2xl rounded-[20px]"
                    style={{
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "760px",
                      padding: "16px",
                      zIndex: 1001,
                    }}
                  >
                    <VerticalsTabs
                      onItemClick={(path) => {
                        navigate(path);
                        setShowVerticals(false);
                        setIsVerticalsOpen(false);
                      }}
                    />
                  </div>
                )}
              </div>

              <button onClick={() => navigate("/blog")} className="nav-btn cursor-pointer" style={{ width: "30px", height: "26px", paddingTop: "8px", paddingBottom: "8px" }}>
                <span className="nav-text" style={{ width: "30px", fontSize: "1.1rem", fontFamily: "Outfit" }}>Blog</span>
              </button>

              <button onClick={() => navigate("/faq")} className="nav-btn" style={{ width: "48px", height: "26px", paddingTop: "8px", paddingBottom: "8px" }}>
                <span className="nav-text" style={{ width: "48px", fontSize: "1.1rem", fontFamily: "Outfit" }}>FAQ</span>
              </button>

              <button onClick={() => navigate("/about")} className="nav-btn" style={{ width: "67px", height: "26px", paddingTop: "8px", paddingBottom: "8px" }}>
                <span className="nav-text" style={{ width: "67px", fontSize: "1.1rem", fontFamily: "Outfit" }}>Company</span>
              </button>
            </nav>

            <button
              onClick={() => setShowRegister(true)}
              className="get-started-btn flex items-center justify-center rounded-[24px] bg-[#6A0DAD] text-white px-4 py-2 lg:px-5 lg:py-4 text-sm lg:text-base font-bold transition-transform hover:scale-105 cursor-pointer"
              style={{
                fontFamily: "Outfit", lineHeight: "16px", marginRight: "-20px", marginLeft: "40px",
                width: "161px", height: "42px", opacity: 1, transform: "rotate(0deg)",
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => setShowSignUp(true)}
              className="get-started-btn flex items-center justify-center rounded-[24px] bg-[#6A0DAD] text-white px-4 py-2 lg:px-5 lg:py-4 text-sm lg:text-base font-bold transition-transform hover:scale-105 cursor-pointer"
              style={{
                fontFamily: "Outfit", lineHeight: "16px", marginRight: "-20px", marginLeft: "40px",
                width: "161px", height: "42px", opacity: 1, transform: "rotate(0deg)",
              }}
            >
              Sign In
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden p-2 ml-2 text-xl sm:text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>

          {/* MOBILE MENU */}
          {open && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden z-50">
              <div className="flex flex-col p-4 sm:p-6">
                <button onClick={() => { navigate("/advertisers"); setOpen(false); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">Advertisers</button>
                <hr />
                <button onClick={() => { navigate("/publishers"); setOpen(false); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">Publishers</button>
                <hr />
                <button onClick={() => { setShowVerticals(prev => { const next = !prev; setIsVerticalsOpen(next); return next; }); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">Verticals</button>
                {showVerticals && (
                  <div className="pl-0 pt-2 pb-2">
                    <div className="bg-[#0E0F14] text-white shadow-2xl rounded-[20px] p-4">
                      <VerticalsTabs onItemClick={(path) => { navigate(path); setShowVerticals(false); setIsVerticalsOpen(false); setOpen(false); }} />
                    </div>
                  </div>
                )}
                <hr />
                <button onClick={() => { navigate("/blog"); setOpen(false); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">Blog</button>
                <hr />
                <button onClick={() => { navigate("/faq"); setOpen(false); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">FAQ</button>
                <hr />
                <button onClick={() => { navigate("/about"); setOpen(false); }} className="py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#222222] hover:text-[#6549f6] text-left font-Outfit">Company</button>
                <button onClick={() => { setShowRegister(true); setOpen(false); }} className="mt-4 px-6 py-3 sm:px-7 rounded-[40px] bg-[#6A0DAD] text-white text-sm sm:text-base font-bold text-center hover:bg-[#333333] font-Outfit">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {showRegister && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 1040 }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowRegister(false)} />
          <div className="relative w-[90vw] max-w-[720px] flex justify-center" style={{ zIndex: 1050 }}>
            <RegistrationPage onClose={() => setShowRegister(false)} />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 1040 }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowSignUp(false)} />
          <div className="relative z-[1050]">
            <SignUp onClose={() => setShowSignUp(false)} />
          </div>
        </div>
      )}
    </>
  );
}