import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import Advertisers from "./pages/Advertisers";
import Publishers from "./pages/Publishers";
import Verticalsad from "./pages/Verticalsad";
import Verticalssafead from "./pages/Verticals-safe-ad";
import Verticalstime from "./pages/Vericals-time";
import PushUpAds from "./pages/PushUpAds";
import Vignette from "./pages/Vignette";
import InPage from "./pages/InPage";
import Interstitial from "./pages/Interstitial";
import SmartLink from "./pages/SmartLink";
import SignUp from "./pages/SignUp";

// Admin
import AdminLayout from "./admin/AdminLayout";
import Employees from "./admin/pages/Employees";
import Contacts from "./admin/pages/Contacts";
import PagesTable from "./admin/pages/AllPages";
import Dashboard from "./admin/pages/Dashboard";
import FAQs from "./admin/pages/FAQs";
import Pages from "./admin/pages/Pages";
import Users from "./admin/pages/Users";
import Blog from "./admin/pages/Blog";
import BlogView from "./admin/pages/BlogView";
import BlogUpdate from "./admin/pages/BlogUpdate";
import AdminBlogList from "./admin/pages/AdminBlogList";
import PageUpdate from "./admin/pages/PageUpdate";
import NewsletterAdmin from "./admin/pages/Newsletter";
import JobPost from "./admin/pages/JobPost";
import JobsTable from "./admin/pages/JobsTable";
import RegisterTable from "./admin/pages/RegisterTable";

// Public
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import PublicFAQ from "./pages/PublicFAQ";
import RegistrationPage from "./pages/Registration-page";
import LeadershipTeam from "./pages/LeadershipTeam";
import Careers from "./pages/Careers";
import BestPush from "./pages/BestPush";
import NativeTraffic from "./pages/NativeTraffic";

export default function App() {
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ loader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader time

    return () => clearTimeout(timer);
  }, []);

  // ✅ show loader
  if (loading) return <Loader />;

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden">
        <div className="mx-auto w-full app-main-container">
          <Routes>
            {/* ADMIN */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="employees" element={<Employees />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="all-pages" element={<PagesTable />} />
              <Route path="page-update/:id" element={<PageUpdate />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="pages" element={<Pages />} />
              <Route path="users" element={<Users />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/view/:id" element={<BlogView />} />
              <Route path="blog/update/:id" element={<BlogUpdate />} />
              <Route path="bloglist" element={<AdminBlogList />} />
              <Route path="newsletter" element={<NewsletterAdmin />} />
              <Route path="jobpost" element={<JobPost />} />
              <Route path="jobpost/:id" element={<JobPost />} />
              <Route path="jobstable" element={<JobsTable />} />
              <Route path="registertable" element={<RegisterTable />} />
            </Route>

            {/* AUTH */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />

            {/* PUBLIC */}
            <Route
              path="/*"
              element={
                <>
                  <Header setIsVerticalsOpen={setIsVerticalsOpen} />
                  <main
                    className={`transition-all duration-200 ${isVerticalsOpen ? "app-blur" : ""}`}
                  >
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutUs />} />
                      <Route path="/advertisers" element={<Advertisers />} />
                      <Route path="/publishers" element={<Publishers />} />
                      <Route path="/verticalsad" element={<Verticalsad />} />
                      <Route path="/verticalssafead" element={<Verticalssafead />} />
                      <Route path="/verticalstime" element={<Verticalstime />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/popunderads" element={<LandingPage />} />
                      <Route path="/pushupads" element={<PushUpAds />} />
                      <Route path="/vignette" element={<Vignette />} />
                      <Route path="/inpage" element={<InPage />} />
                      <Route path="/interstitial" element={<Interstitial />} />
                      <Route path="/smartlink" element={<SmartLink />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/blog" element={<BlogList />} />
                      <Route path="/blog/:id" element={<BlogDetail />} />
                      <Route path="/faq" element={<PublicFAQ />} />
                      <Route path="/leadership" element={<LeadershipTeam />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/bestpush" element={<BestPush />} />
                      <Route path="/nativetraffic" element={<NativeTraffic />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
