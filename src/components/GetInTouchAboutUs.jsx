import React, { useState } from "react";
import "./GetInTouchAboutUs.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';


const MySwal = withReactContent(Swal);

export default function GetInTouch() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [serviceOpen, setServiceOpen] = useState(false);

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
            newErrors.name = 'Name is required.';
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+(com|net|org|edu|gov|mil|int|co|io|ai|in|us|uk|ca|de|fr|au|jp|cn|ru|br|za|info|biz|me|tv|xyz|site|online|store|tech|app|pro|dev|cloud|digital|group|media|solutions|systems|world|today|news|live|center|company|consulting|design|events|finance|health|marketing|network|partners|services|space|support|technology|ventures|zone))$/i.test(form.email)) {
            newErrors.email = 'Please enter a valid email address with a recognized domain.';
        }
        if (!form.phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!isValidPhoneNumber(form.phone)) {
            newErrors.phone = 'Enter a valid phone number.';
        }
        else {
            const digitsOnly = form.phone.replace(/\D/g, '');
            if (!validatePhoneNumber(form.phone) || digitsOnly.length < 10) {
                newErrors.phone = 'Enter a valid phone number with country code (if any) and at least 10 digits.';
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

        fetch('https://bohrx.ai/backendadmin/api/contacts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);

                if (data.status === true) {

                    MySwal.fire({
                        icon: 'success',
                        title: 'Thank you!',
                        text: 'Thank you for your submission! We will get back to you soon.',
                    });

                    setForm({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: '',
                        message: '',
                    });
                } else {

                    let errorMessage = data.message || 'Submission failed';


                    if (data.error && typeof data.error === 'object') {
                        errorMessage = Object.values(data.error).flat().join('\n');
                    }

                    MySwal.fire({
                        icon: 'error',
                        title: 'Submission Failed',
                        text: errorMessage,
                    });
                }
            })
    }

    return (

        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-[20px] mx-auto max-sm:items-start get-in-touch-root" style={{ maxWidth: "1520px" }}>
            <section
                id="contact"
                className="relative flex justify-center items-center py-12 sm:py-14 md:py-16 lg:py-20 rounded-[24px] sm:rounded-[22px] md:rounded-[20px] lg:rounded-[12px] get-in-touch-section"
                style={{
                    width: "100%",
                    minHeight: "600px",
                    overflow: "hidden",
                    position: "relative",
                    backgroundImage: "url('/assets/images/getintouch.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "transparent",
                }}
            >
                {/* Main Container */}
                <div
                    className="relative flex flex-col xl:flex-row justify-center items-start gap-10 sm:gap-12 lg:gap-14 xl:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl mx-auto max-sm:items-start get-in-touch-container"
                    style={{
                        background: "transparent",
                        zIndex: 2,
                    }}
                >
                    {/* --- LEFT SIDE: Features Section --- */}
                    <div
                        className="flex flex-col justify-between w-full xl:w-auto xl:max-w-[550px] text-center xl:text-left gap-8 sm:gap-10 lg:gap-12max-sm:text-left max-sm:items-start get-in-touch-features"
                    >

                        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[40px] max-sm:items-start">

                            <h3
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal px-2 sm:px-0 max-sm:text-left title get-in-touch-heading"
                                style={{ fontFamily: "Outfit", color: "#1B1A1A" }}
                            >
                                Join Advert Social AI <br /> today
                            </h3>

                            <p
                                className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto xl:mx-0 px-2 sm:px-0 max-sm:text-left get-in-touch-desc"
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    color: "#4B4B4B",
                                }}
                            >
                                Buy and sell worldwide premium traffic in just a few clicks.
                                Our platform is easy-to-use for both beginners and expert media buyers.
                            </p>

                            <div
                                className="flex flex-col max-sm:items-start max-sm:w-full max-sm:gap-6"
                                style={{ width: "100%", gap: "48px" }}
                            >

                                <div className="flex max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-4" style={{ width: "100%", gap: "48px" }}>


                                    <div
                                        className="flex flex-col max-sm:text-left max-sm:items-start max-sm:w-full max-sm:gap-2 contact-info get-in-touch-info-item"
                                        style={{ width: "100%", gap: "10px" }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                color: "#1B1A1A",
                                            }}
                                        >
                                            Contact Info
                                        </h3>

                                        <a
                                            href="mailto:Spark@7oroof.com"
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#00E676",
                                                textDecoration: "none",
                                            }}
                                        >
                                            info@advertsocial.ai
                                        </a>

                                        <a
                                            href="tel:6194399675"
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#222222",
                                                textDecoration: "none",
                                            }}
                                        >
                                            +1 (619) 439-9675
                                        </a>
                                    </div>


                                    <div
                                        className="flex flex-col max-sm:text-left max-sm:items-start max-sm:w-full max-sm:gap-2 address get-in-touch-info-item"
                                        style={{ width: "100%", gap: "10px" }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                color: "#1B1A1A",
                                            }}
                                        >
                                            Address
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 400,
                                                fontSize: "15px",
                                                color: "#4B4B4B",
                                                margin: 0,
                                            }}
                                        >
                                            3300 Tuscany Hills Ct, Missouri, MO, 63044
                                        </p>
                                    </div>
                                </div>


                                <div className="flex max-sm:flex-col max-sm:items-start max-sm:w-full max-sm:gap-4" style={{ width: "100%", gap: "48px" }}>


                                    <div
                                        className="flex flex-col max-sm:text-left max-sm:items-start max-sm:w-full max-sm:gap-2 support-hours get-in-touch-info-item"
                                        style={{ width: "100%", gap: "10px" }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                color: "#1B1A1A",
                                            }}
                                        >
                                            Support Hours
                                        </h3>

                                        <p
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                color: "#4B4B4B",
                                                margin: 0,
                                            }}
                                        >
                                            Mon-Fri 9:00am – 5:00pm EST <br />
                                            <span style={{ color: "red" }}>*Excludes Holidays*</span>
                                        </p>
                                    </div>


                                    <div
                                        className="flex flex-col max-sm:text-left max-sm:items-start max-sm:w-full max-sm:gap-2 social-media-icons get-in-touch-info-item"
                                        style={{ width: "100%", gap: "10px" }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily: "Outfit",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                color: "#1B1A1A",
                                            }}
                                        >
                                            Social Media
                                        </h3>

                                        <div className="flex max-sm:justify-start max-sm:w-full max-sm:gap-2" style={{ width: "100%", gap: "16px" }}>
                                            <a href="https://www.facebook.com/profile.php?id=61586193000605" target="_blank" rel="noopener noreferrer">
                                                <img src="/assets/images/Facebook.png" className="get-in-touch-social-icon" style={{ width: 44, height: 44 }} />
                                            </a>
                                            <a href="https://x.com/advertsocialai" target="_blank" rel="noopener noreferrer">
                                                <img src="/assets/images/X (Twitter).png" className="get-in-touch-social-icon" style={{ width: 44, height: 44 }} />
                                            </a>
                                            <a href="https://www.linkedin.com/company/advert-social-ai/" target="_blank" rel="noopener noreferrer">
                                                <img src="/assets/images/LinkedIn.png" className="get-in-touch-social-icon" style={{ width: 44, height: 44 }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* --- RIGHT SIDE: Contact Form --- */}
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 xl:p-14 w-full xl:w-auto xl:max-w-[620px] get-in-touch-form-container"
                    >
                        <div className="flex flex-col gap-6">
                            <h6
                                className="text-xl sm:text-2xl font-medium"
                                style={{
                                    fontFamily: "Outfit",
                                    color: "#1B1A1A",
                                }}
                            >
                                Get in touch
                            </h6>

                            <p
                                className="text-base sm:text-lg leading-relaxed"
                                style={{
                                    fontFamily: "Outfit",
                                    color: "#282828",
                                }}
                            >
                                Just fill out the form and our global experts will be in touch
                                right away with package and price solution to help you!
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 sm:gap-6 mt-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium text-gray-700 mb-1 get-in-touch-label">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className={`h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border ${errors.name ? 'border-red-500' : 'border-[#F6F6F6]'} hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60 get-in-touch-input`}
                                        />
                                        {errors.name && (
                                            <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium text-gray-700 mb-1 get-in-touch-label">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Email Address"
                                            className={`h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border ${errors.email ? 'border-red-500' : 'border-[#F6F6F6]'} hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60 get-in-touch-input`}
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium text-gray-700 mb-1 get-in-touch-label">
                                            Company
                                        </label>
                                        <input
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="h-12 sm:h-14 px-4 sm:px-6 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none transition-colors placeholder-[#282828]/60 get-in-touch-input"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label className="text-sm font-medium text-gray-700 mb-1 get-in-touch-label">
                                            Phone <span className="text-red-500">*</span>
                                        </label>

                                        <div
                                            className={`h-12 sm:h-14 rounded-xl bg-[#F6F6F6] px-4 sm:px-6 flex items-center
                                                    border ${errors.phone ? 'border-red-500' : 'border-[#F6F6F6]'}
                                                    hover:border-[#282828] focus-within:border-[#6549F6] get-in-touch-phone-container`}
                                        >
                                            <PhoneInput
                                                international
                                                defaultCountry="US"
                                                value={form.phone}
                                                onChange={(value) =>
                                                    setForm((f) => ({ ...f, phone: value || "" }))
                                                }
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
                                    <label className="text-sm font-medium text-gray-700 mb-1 get-in-touch-label">
                                        Service
                                    </label>

                                    <div className="relative">

                                        <button
                                            type="button"
                                            onClick={() => setServiceOpen((p) => !p)}
                                            className=" h-12 sm:h-14 w-full px-4 sm:px-6 pr-12 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none text-left transition-colors get-in-touch-service-btn"
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
                                            className={`pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 w-4 h-2 opacity-70 transition-transform ${serviceOpen ? "rotate-180" : ""
                                                }`}
                                        />


                                        {serviceOpen && (
                                            <div
                                                className=" absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-[#EAEAEA] max-h-60 overflow-y-auto sm:max-h-none sm:overflow-visible"
                                            >
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
                                    className="h-24 sm:h-28 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-[#F6F6F6] border border-[#F6F6F6] hover:border-[#282828] focus:border-[#6549F6] outline-none resize-none transition-colors placeholder-[#282828]/60 get-in-touch-textarea"
                                />

                                <div className="flex justify-start mt-2">
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[40px] bg-black text-white font-bold text-xs sm:text-sm transition-transform hover:scale-105 hover:bg-gray-800 get-in-touch-submit-btn"
                                        style={{ fontFamily: 'Outfit' }}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                        ) : (
                                            'Submit Request'
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

                {/*  mobile view */}
                <style>
                    {`
                @media (max-width: 480px) {
                    /* Center title in mobile view */
                    .title {
                        text-align: center !important;
                        margin: 0 auto !important;
                    }

                    /* Reduce spacing between sections in mobile view */
                    .contact-info,
                    .address,
                    .support-hours,
                    .social-media-icons {
                        margin-bottom: -40px !important;
                    }

                    /* Left align address and support hours on mobile */
                    .address,
                    .support-hours {
                        align-items: flex-start !important;
                        text-align: left !important;
                        margin-left: -10px !important;
                    }
                    .address > *,
                    .support-hours > * {
                        text-align: left !important;
                        align-items: flex-start !important;
                        margin-left: 0 !important;
                    }
                }
                `}
                </style>


                <style>
                    {`
              @media (max-width: 480px) {
                /* Ensure headings are grouped with their respective descriptions */
                .contact-info,
                .address,
                .support-hours,
                .social-media-icons {
                  display: flex !important;
                  flex-direction: column !important;
                  align-items: flex-start !important;
                  gap: 15px !important;
                }
              }
              `}
                </style>


                <style>
                    {`
              @media (max-width: 480px) {
                /* Add gap between headings and descriptions */
                .contact-info > h3,
                .address > h3,
                .support-hours > h3,
                .social-media-icons > h3 {
                  margin-bottom: 5px !important;
                }
              }
              `}
                </style>


                <style>
                    {`
              @media (max-width: 480px) {
                /* Add alternating gaps between heading, description, and repeated sections */
                .contact-info > h3,
                .address > h3,
                .support-hours > h3,
                .social-media-icons > h3 {
                  margin-bottom: 5px !important;
                }

                .contact-info > p,
                .address > p,
                .support-hours > p,
                .social-media-icons > div {
                  margin-bottom: 5px !important;
                }
              }
              `}
                </style>


                <style>
                    {`
              @media (max-width: 480px) {
                /* Ensure consistent spacing between sections */
                .contact-info,
                .address,
                .support-hours,
                .social-media-icons {
                  margin-bottom: 10px !important;
                }

                /* Tighten spacing between social media heading and icons */
                .social-media-icons > h3 {
                  margin-bottom: 5px !important;
                }

                /* Adjust button alignment in the form */
                .form-button {
                  margin-top: 20px !important;
                  text-align: center !important;
                }
              }
              `}
                </style>
            </section>
        </div>
    );
}