import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { API_ENDPOINTS } from "../lib/api";

const MySwal = withReactContent(Swal);

export default function Contact() {
  const navigate = useNavigate();
  const [serviceOpen, setServiceOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function validatePhoneNumber(phone) {
    const internationalPattern = /^\+?[1-9]\d{0,14}([\s\-()]?\d+)*$/;

    if (internationalPattern.test(phone)) {
      return true;
    }
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+(com|net|org|edu|gov|mil|int|co|io|ai|in|us|uk|ca|de|fr|au|jp|cn|ru|br|za|info|biz|me|tv|xyz|site|online|store|tech|app|pro|dev|cloud|digital|group|media|solutions|systems|world|today|news|live|center|company|consulting|design|events|finance|health|marketing|network|partners|services|space|support|technology|ventures|zone))$/i.test(
        form.email
      )
    ) {
      newErrors.email = "Please enter a valid email address with a recognized domain.";
    }
    if (!form.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    } else {
      const digitsOnly = form.phone.replace(/\D/g, "");
      if (!validatePhoneNumber(form.phone) || digitsOnly.length < 10) {
        newErrors.phone =
          "Enter a valid phone number with country code (if any) and at least 10 digits.";
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    const payload = {
      Firstname: form.name,
      EmailAddress: form.email,
      Phoneno: form.phone,
      Location: form.company,
      Message: form.message,
    };

    fetch(API_ENDPOINTS.ADD_CONTACT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        if (data.status === true) {
          MySwal.fire({
            icon: "success",
            title: "Thank you!",
            text: "Thank you for your submission! We will get back to you soon.",
          });

          setForm({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            message: "",
          });
        } else {
          let errorMessage = data.message || "Submission failed";

          if (data.error && typeof data.error === "object") {
            errorMessage = Object.values(data.error).flat().join("\n");
          }

          MySwal.fire({
            icon: "error",
            title: "Submission Failed",
            text: errorMessage,
          });
        }
      });
  }

  const featuresParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const featureChild = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <div
      className="px-4 sm:px-6 lg:px-8 xl:px-[20px] mx-auto max-w-[1520px] contact-root-container"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="contact-scaling-wrapper">
        <section
          id="contact"
          className="contact-section relative flex justify-center items-center py-12 sm:py-14 md:py-16 lg:py-20"
          style={{
            width: "100%",
            minHeight: "600px",
            overflow: "hidden",
            position: "relative",
            backgroundImage: "url('/assets/images/getintouch.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "transparent",
          }}
        >
          <div
            className="contact-wrapper relative flex flex-col xl:flex-row justify-between items-start gap-10 sm:gap-12 lg:gap-14 xl:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl"
            style={{
              background: "transparent",
              zIndex: 2,
            }}
          >
            <div className="flex flex-col justify-between w-full xl:w-auto xl:max-w-[550px] text-center xl:text-left gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[40px]">
                <h3
                  className="contact-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal px-2 sm:px-0"
                  style={{
                    fontFamily: "Outfit",
                    color: "#1B1A1A",
                  }}
                >
                  Join Advert Social AI
                  <br />
                  today
                </h3>

                <p
                  className="contact-desc text-base sm:text-lg leading-relaxed max-w-2xl mx-auto xl:mx-0 px-2 sm:px-0"
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    color: "#4B4B4B",
                  }}
                >
                  Buy and sell worldwide premium traffic in just a few clicks. Our platform is
                  easy-to-use for both beginners and expert media buyers.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 justify-center xl:justify-start">
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-[40px] text-sm font-bold transition-transform hover:scale-105 w-full sm:w-auto whitespace-nowrap"
                    style={{
                      background: "linear-gradient(69.88deg, #00E676 2.47%, #6A0DAD 78.28%)",
                      color: "#FFFFFF",
                      fontFamily: "Outfit",
                      fontSize: "18px", // Set font size to 18px
                    }}
                  >
                    Get Started
                    <img
                      src="/assets/images/arrow.png"
                      alt="arrow-right"
                      className="ml-2 w-3 h-3"
                    />
                  </button>

                  <div className="flex justify-start">
                    <button
                      className="gradient-btn"
                      style={{
                        height: "48px",
                        padding: "0 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "40px",
                        fontSize: "18px",
                      }}
                      onClick={() => navigate("/about")}
                    >
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>

              <motion.div
                className="contact-features flex flex-col gap-8 sm:gap-9 md:gap-10 lg:gap-12"
                variants={featuresParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
                  variants={featureChild}
                >
                  <img
                    src="/assets/images/Blue/icon-robot.svg"
                    alt="icon-robot"
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex-shrink-0"
                  />

                  <div className="flex flex-col gap-4 text-left items-start">
                    <h3
                      className="text-lg sm:text-xl font-medium"
                      style={{
                        fontFamily: "Outfit",
                        color: "#1B1A1A",
                      }}
                    >
                      Envision The Extraordinary
                    </h3>

                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        fontFamily: "Outfit",
                        color: "#4B4B4B",
                      }}
                    >
                      Design beautiful artwork, digital sketches, or illustrations that match your
                      style while boosting creativity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8"
                  variants={featureChild}
                >
                  <img
                    src="/assets/images/Blue/icon-eye.svg"
                    alt="icon-eye"
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex-shrink-0"
                  />

                  <div className="flex flex-col gap-4 text-left items-start">
                    <h3
                      className="text-lg sm:text-xl font-medium"
                      style={{
                        fontFamily: "Outfit",
                        color: "#1B1A1A",
                      }}
                    >
                      Immersive Creative Process
                    </h3>

                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{
                        fontFamily: "Outfit",
                        color: "#4B4B4B",
                      }}
                    >
                      Erase distractions, adjust dimensions and finesse every detail of your designs
                      quickly all under one roof with full control.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* --- RIGHT SIDE: Contact Form --- */}
            <div className="contact-form-box bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 xl:p-14 w-full xl:w-auto xl:max-w-[620px]">
              <div className="flex flex-col gap-6">
                <h6
                  className="contact-form-title text-xl sm:text-2xl font-medium"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    color: "#1B1A1A",
                  }}
                >
                  Get in touch
                </h6>

                <p
                  className="contact-form-desc text-base sm:text-lg leading-relaxed"
                  style={{
                    fontFamily: "Outfit",
                    color: "#282828",
                  }}
                >
                  Just fill out the form and our global experts will be in touch right away with
                  package and price solution to help you!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border ${errors.name ? "border-red-500" : "border-[#F6F6F6]"} hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60`}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                      )}
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email Address"
                        className={`h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border ${errors.email ? "border-red-500" : "border-[#F6F6F6]"} hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700 mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`h-12 sm:h-14 rounded-xl bg-[#F6F6F6] px-4 sm:px-6 flex items-center
                                    border ${errors.phone ? "border-red-500" : "border-[#F6F6F6]"}
                                    hover:border-[#282828] focus-within:border-[#6549F6]`}
                      >
                        <PhoneInput
                          international
                          defaultCountry="US"
                          countrySelectProps={{
                            searchable: true,
                            preferredCountries: ["US", "IN", "GB", "AE", "CA"],
                          }}
                          value={form.phone}
                          onChange={(value) => setForm((f) => ({ ...f, phone: value || "" }))}
                          placeholder="Phone number"
                          className="w-full bg-transparent outline-none text-sm"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="text-sm font-medium text-gray-700 mb-1">Service</label>

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setServiceOpen((p) => !p)}
                        className=" h-12 sm:h-14 w-full px-4 sm:px-6 pr-12 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none text-left transition-colors"
                        style={{
                          fontFamily: "Outfit",
                          color: form.service ? "#282828" : "rgba(40,40,40,0.6)",
                        }}
                      >
                        {form.service || "Service"}
                      </button>

                      <img
                        src="/assets/images/arrow-down.png"
                        alt="dropdown arrow"
                        className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 w-4 h-2 opacity-70 transition-transform ${
                          serviceOpen ? "rotate-180" : ""
                        }`}
                      />

                      {serviceOpen && (
                        <div className=" absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-[#EAEAEA] max-h-60 overflow-y-auto sm:max-h-none sm:overflow-visible">
                          {[
                            "AI Integration solutions",
                            "Chatbot Integration",
                            "AI Ad Optimization",
                            "Predictive Analytics",
                            "AI Marketing Automation",
                            "Recommendation Engine",
                            "Custom AI Solutions",
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => {
                                setForm((f) => ({ ...f, service: item }));
                                setServiceOpen(false);
                              }}
                              className=" w-full text-left px-5 py-3 text-sm hover:bg-[#6549F6] hover:text-white transition"
                              style={{ fontFamily: "Outfit", color: "#282828" }}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Kindly provide enough information about your business..."
                    className="h-24 sm:h-28 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none resize-none transition-colors placeholder-[#282828]/60"
                  />

                  <div className="flex justify-start mt-2">
                    <button
                      type="submit"
                      className="contact-submit flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[40px] bg-black text-white font-bold text-xs sm:text-sm transition-transform hover:scale-105 hover:bg-gray-800"
                      style={{ fontFamily: "Outfit" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      ) : (
                        "Submit Request"
                      )}
                      {!loading && (
                        <img
                          src="/assets/images/arrow.png"
                          alt="arrow-up"
                          className="ml-2 w-3 h-3"
                        />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
