import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    // Check local storage for the user object
    const storedUserStr = localStorage.getItem("admin_user");
    if (storedUserStr) {
      try {
        const storedUser = JSON.parse(storedUserStr);
        if (storedUser.role === "admin") {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (e) {
        setIsAuthorized(false);
      }
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Still checking Auth State
  if (isAuthorized === null) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100 text-xl">
        Checking permissions...
      </div>
    );
  }

  // Not an Admin
  if (!isAuthorized) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 font-outfit px-4 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-red-100">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Unauthorised Access</h1>
          <p className="text-gray-500 mb-8">
            You do not have the necessary admin privileges to view this page.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-gray-900 border border-transparent rounded-xl shadow-sm py-3 px-4 text-white hover:bg-gray-800 transition-colors font-medium"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-gray-100 font-outfit"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      {/* SIDEBAR - Fixed on desktop, sliding on mobile */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* RIGHT SIDE (Navbar + Content) */}
      <div className="flex flex-col flex-1 h-screen relative lg:ml-[260px]">
        {/* NAVBAR */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* DISPLAY AREA */}
        <main className="flex-1 overflow-auto p-4 md:p-6 mt-[70px] transition-all duration-300">
          <Outlet />
        </main>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
