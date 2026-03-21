import React, { useState, useEffect } from "react";
import "./Registration-page.css";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { supabase } from "../lib/supabase";

export default function RegistrationPage({ onClose }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!form.companyName.trim())
      newErrors.companyName = "Company name is required.";

    if (!form.email.trim())
      newErrors.email = "Email is required.";
    else if (!isValidEmail(form.email))
      newErrors.email = "Enter a valid email address.";

    if (!form.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Enter a valid phone number with country code.";
    }

    if (!form.password)
      newErrors.password = "Password is required.";
    else if (form.password.length < 6)
      newErrors.password = "Minimum 6 characters.";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!form.acceptTerms)
      newErrors.terms = "You must accept the terms & conditions.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const payload = {
      company_name: form.companyName,
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      phone: form.phone,
      password: form.password,
      password_confirmation: form.confirmPassword,
      terms: form.acceptTerms,
    };

    try {
      // Save to Supabase registrations table
      const { error: dbError } = await supabase.from("registrations").insert([
        {
          first_name: form.firstname,
          last_name: form.lastname,
          company_name: form.companyName,
          email: form.email,
          phone: form.phone,
        },
      ]);

      if (dbError) throw new Error(dbError.message);

      // Send email notification via Edge Function
      await supabase.functions.invoke("send-registration-email", {
        body: {
          first_name: form.firstname,
          last_name: form.lastname,
          company_name: form.companyName,
          email: form.email,
          phone: form.phone,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      setForm({
        firstname: "",
        lastname: "",
        companyName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      });
    } catch (err) {
      Swal.fire("Error", err.message || "Registration failed. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className="relative w-full max-w-[720px] rounded-2xl shadow-2xl px-6 py-8 sm:px-6 sm:py-10 flex flex-col items-center registration-root"
      style={{
        backgroundColor: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(6px)",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl registration-close-btn"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-center registration-title">
        Create your account
      </h2>
      <p className="mb-5 text-center text-sm text-gray-600 registration-subtitle">
        Join Advert Social AI and get started today.
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">

        {[
          { name: "firstname", placeholder: "First Name" },
          { name: "lastname", placeholder: "Last Name" },
          { name: "companyName", placeholder: "Company Name" },
          { name: "email", placeholder: "Work Email Address" },
        ].map((field) => (
          <div key={field.name} className="w-full">
            <input
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={errors[field.name] || field.placeholder}
              className={`p-3 w-full rounded-xl border ${errors[field.name]
                ? "border-red-500 placeholder-red-500 placeholder:text-xs"
                : "border-gray-200 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-black bg-[rgba(255,255,255,0.6)]
              font-semibold text-base registration-input`}
            />
          </div>
        ))}

        {/* PHONE INPUT */}
        <div className="w-full">
          <div
            className={`rounded-xl bg-[rgba(255,255,255,0.6)] border ${errors.phone ? "border-red-500" : "border-gray-200"
              } focus-within:ring-2 focus-within:ring-black px-3 py-2 registration-phone-container`}
          >
            <PhoneInput
              international
              defaultCountry="US"
              value={form.phone}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, phone: value || "" }))
              }
              placeholder="Phone number"
              className="w-full bg-transparent outline-none text-base font-semibold"
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder={errors.password || "Password"}
            className={`p-3 w-full rounded-xl border ${errors.password
              ? "border-red-500 placeholder-red-500 placeholder:text-xs"
              : "border-gray-200 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-black bg-[rgba(255,255,255,0.6)]
            font-semibold text-base registration-input`}
          />
          <img
            src={
              showPassword
                ? "/assets/images/eye-open.png"
                : "/assets/images/eye-closed.png"
            }
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer registration-eye-icon"
          />
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative w-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder={errors.confirmPassword || "Confirm Password"}
            className={`p-3 w-full rounded-xl border ${errors.confirmPassword
              ? "border-red-500 placeholder-red-500 placeholder:text-xs"
              : "border-gray-200 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-black bg-[rgba(255,255,255,0.6)]
            font-semibold text-base registration-input`}
          />
          <img
            src={
              showConfirmPassword
                ? "/assets/images/eye-open.png"
                : "/assets/images/eye-closed.png"
            }
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer registration-eye-icon"
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* TERMS */}
        <label className="flex items-center gap-2 text-sm mt-1 registration-terms-label">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
          />
          <span>I agree to the Terms & Conditions</span>
        </label>

        {errors.acceptTerms && (
          <p className="text-xs text-black-500">{errors.acceptTerms}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full py-3 bg-black text-white rounded-full font-semibold registration-submit-btn"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
