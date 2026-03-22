import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { supabase } from "../lib/supabase";
import { API_ENDPOINTS } from "../lib/api";

// Update these paths if you use different locations
const BG_IMAGE = "/assets/images/login-bg.png";

const MySwal = withReactContent(Swal);

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" }); // Reset to empty as requested
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    // --- VALIDATION ---
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;

      if (!emailRegex.test(form.email) && !phoneRegex.test(form.email)) {
        newErrors.email = "Enter a valid email ";
      }
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // If errors → show them inline
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // clear errors
    setIsLoading(true);

    // --- API CALL ---
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      // Handling the specific response format provided: data.status, data.message, data.data.token, data.data.user
      if (response.ok && data.status) {
        const user = data.data.user;

        // Log successful login attempt to Supabase
        await supabase.from("login_attempts").insert([{ email: form.email, success: true }]);

        // CHECK ROLE
        if (user.role !== "admin") {
          MySwal.fire({
            icon: "error",
            title: "Unauthorised",
            text: "You do not have permission to access the admin panel.",
          });
          setErrors({ api: "Unauthorised access. Admins only." });
          setIsLoading(false);
          return;
        }

        // Store token and user info
        localStorage.setItem("admin_token", data.data.token);
        localStorage.setItem("admin_user", JSON.stringify(user));

        // SweetAlert success
        await MySwal.fire({
          icon: "success",
          title: "Login successful",
          text: data.message || "You have logged in successfully.",
          confirmButtonText: "Continue",
        });

        // Route to admin panel
        navigate("/admin");
      } else {
        // Log failed login attempt to Supabase
        await supabase.from("login_attempts").insert([{ email: form.email, success: false }]);

        const message = data.message || "Login failed";
        MySwal.fire({
          icon: "error",
          title: "Login failed",
          text: message,
        });
        setErrors({ api: message });
      }
    } catch (err) {
      const msg = "Network error. Try again.";
      MySwal.fire({
        icon: "error",
        title: "Network error",
        text: msg,
      });
      setErrors({ api: msg });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#1B1A1A] relative overflow-hidden"
      style={{ fontFamily: "Outfit" }}
    >
      {/* dynamic background blobs for depth (matching homepage feel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6A0DAD]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00E676]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-4">
        {/* Refined Glass card */}
        <div
          className="mx-auto rounded-[32px] p-10 border border-white/10 relative overflow-hidden shadow-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {/* Subtle internal gloss */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            {/* small circular avatar outline (logo) */}
            <div className="flex justify-center mb-4">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center border border-white/10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3)",
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M4 20c2.5-3.5 7-5 8-5s5.5 1.5 8 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center mb-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
              <p className="text-white/50 text-sm mt-1">Please enter your credentials</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-white/60 ml-4 uppercase tracking-wider">
                Email{" "}
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full h-12 rounded-2xl px-5 text-base bg-white/5 border border-white/10 text-white outline-none transition-all focus:border-[#00E676]/50 focus:bg-white/10"
                autoComplete="username"
              />
              {errors.email && (
                <p className="text-red-400 text-[11px] ml-4 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5 relative">
              <label className="text-xs font-semibold text-white/60 ml-4 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  className="w-full h-12 rounded-2xl px-5 text-base bg-white/5 border border-white/10 text-white outline-none transition-all focus:border-[#6A0DAD]/50 focus:bg-white/10"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 p-1 transition-colors"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3l18 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 10.5a3 3 0 103 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5 12a9 9 0 01-1.5 3M12 18a9 9 0 01-5-1.5M4.5 12a9 9 0 011.5-3M12 6a9 9 0 015 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-[11px] ml-4 font-medium">{errors.password}</p>
              )}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[60px] rounded-2xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-lg shadow-black/20"
                style={{
                  background: "linear-gradient(to right, #00E676, #6A0DAD)",
                }}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Log In"
                )}
              </button>
              {errors.api && (
                <p className="text-red-400 text-center text-xs mt-3 font-semibold">{errors.api}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/40 mt-2 px-2">
              <span className="font-semibold uppercase tracking-widest text-white/30">
                AdvertSocial
              </span>
              <span>© 2026</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
