import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiLogOut, FiLock, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Navbar({ toggleSidebar }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You are about to log out of the admin panel.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 
        w-full
        h-[70px] bg-white/95 backdrop-blur-md shadow-sm 
        flex items-center justify-between px-4 md:px-6 
        z-40 border-b border-gray-100
      "
    >
      {/* LEFT: Logo + Menu Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FiMenu size={22} />
        </button>
        <a href="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="AdvertSocial"
            className="w-[120px] md:w-[150px] h-auto object-contain"
          />
        </a>
      </div>

      {/* RIGHT: PROFILE DROPDOWN */}
      <div ref={menuRef} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 md:gap-3 cursor-pointer select-none group px-2 py-1.5 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <div className="relative">
            <img
              src="/assets/images/profile.png"
              alt="profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 shadow-sm object-cover"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>

          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="font-bold text-gray-800 text-sm">Hello Admin</span>
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
              Super Admin
            </span>
          </div>

          <FiChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in duration-200">
            <div className="px-4 py-3 border-b border-gray-50 mb-1">
              <p className="text-xs text-gray-400 font-semibold mb-1 uppercase tracking-wider">
                Account
              </p>
              <p className="text-sm font-bold text-gray-700 truncate">admin@advertsocial.ai</p>
            </div>

            <button className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-gray-50 text-gray-600 transition-colors text-sm font-medium">
              <FiLock size={16} className="text-gray-400" />
              Security Settings
            </button>

            <div className="h-px bg-gray-50 my-1 mx-2" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-gray-50 text-red-500 transition-colors text-sm font-bold"
            >
              <FiLogOut size={16} />
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
