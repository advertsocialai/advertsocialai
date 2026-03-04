import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './SignUp.css';

const MySwal = withReactContent(Swal);

export default function SignUp({ onClose }) {
    const [form, setForm] = useState({ email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        if (!form.email.trim()) {
            MySwal.fire({
                icon: 'warning',
                title: 'Email Required',
                text: 'Please enter your company email to proceed.',
            });
            return;
        }

        if (!validateEmail(form.email)) {
            MySwal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid company email address.',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://bohrx.ai/backendadmin/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                await MySwal.fire({
                    icon: 'success',
                    title: 'Demo Booked!',
                    text: data.message || 'We have received your request and will contact you soon',
                    confirmButtonColor: '#00E676',
                });
                if (onClose) onClose();
            } else {
                await MySwal.fire({
                    icon: 'error',
                    title: 'Subscription Failed',
                    text: data.message || 'Something went wrong. Please try again.',
                });
            }
        } catch (error) {
            await MySwal.fire({
                icon: 'error',
                title: 'Network Error',
                text: 'Could not connect to the server. Please check your connection.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`signup-page ${onClose ? 'signup-modal-mode' : ''}`}>
            <div className="signup-wrapper">
                {/* Close Button if onClose is provided */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="signup-close-btn"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                )}

                {/* Background Shape */}
                <img
                    src="/assets/images/BG.svg"
                    alt="Background"
                    className="signup-bg"
                />

                {/* Content Flow */}
                <div className="signup-content-flow">
                    {/* Logo */}
                    <img
                        src="/assets/images/logo-signup.svg"
                        alt="AdvertSocial Logo"
                        className="signup-logo"
                    />

                    {/* Text Group */}
                    <div className="signup-text-group">
                        <h1 className="signup-title">
                            Not sure where to start? Let’s talk
                        </h1>
                        <p className="signup-subtitle">
                            Book a personalized walkthrough to see how advertsocial can help you find and win your best deals ever .
                        </p>
                    </div>

                    {/* Email Section (Aligned left-to-left) */}
                    <div className="email-section">
                        <div className="email-container">
                            {!form.email && <label className="email-label">Company Email</label>}
                            <input
                                type="email"
                                name="email"
                                className="email-input"
                                value={form.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Disclaimer aligned to Email Box */}
                        <p className="signup-disclaimer">
                            By Submitting this form, you will receive information, tips and Promotion from advertsocial. <br />
                            To learn More , see our <span className="privacy-link">Privacy Statement</span>
                        </p>
                    </div>

                    {/* Action Button */}
                    <button
                        className="cta-button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        <span>{isSubmitting ? 'Processing...' : 'Book a Free Demo'}</span>
                        {!isSubmitting && (
                            <img
                                src="/assets/images/arrow-right.png"
                                alt="Arrow Right"
                            />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
