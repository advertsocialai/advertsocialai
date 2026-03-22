import React from "react";
import { motion } from "framer-motion";
import BannerAboutUs from "../components/BannerAboutUs";
import Contact from "../components/Contact";

const features = [
  {
    icon: "/assets/images/Check Icon.png",
    title: "Seamless User Experience",
    description:
      "Native ads blend naturally into the surrounding content, making them feel organic rather than intrusive. Users engage with native placements at significantly higher rates than traditional display ads.",
  },
  {
    icon: "/assets/images/Check Icon.png",
    title: "AI-Powered Targeting",
    description:
      "Our platform analyzes contextual signals, user behavior, and audience segments to serve native ads that are highly relevant to each visitor — maximizing engagement and conversion potential.",
  },
  {
    icon: "/assets/images/Check Icon.png",
    title: "Cross-Device Reach",
    description:
      "Reach users across desktop, mobile, and tablet environments with consistent, adaptive native placements that automatically adjust to fit the host content and screen size.",
  },
  {
    icon: "/assets/images/Check Icon.png",
    title: "Brand-Safe Environments",
    description:
      "All native traffic is sourced from verified, premium publishers. Our multi-layer brand safety filters ensure your ads appear only in contextually appropriate, reputable environments.",
  },
  {
    icon: "/assets/images/Check Icon.png",
    title: "Real-Time Optimization",
    description:
      "Campaigns are continuously optimized using real-time performance data. Our AI automatically reallocates budget toward top-performing placements to maximize your ROI.",
  },
  {
    icon: "/assets/images/Check Icon.png",
    title: "Transparent Reporting",
    description:
      "Get full visibility into your campaign performance with detailed dashboards showing impressions, clicks, CTR, conversions, and spend — updated in real time.",
  },
];

const steps = [
  {
    step: "01",
    title: "Define Your Audience",
    description: "Set targeting parameters including demographics, interests, geography, device type, and contextual keywords.",
  },
  {
    step: "02",
    title: "Upload Your Creatives",
    description: "Submit headlines, descriptions, and images. Our platform auto-adapts formats to match each native placement.",
  },
  {
    step: "03",
    title: "AI Places Your Ads",
    description: "Our AI matches your ads to the most relevant placements across our premium publisher network in real time.",
  },
  {
    step: "04",
    title: "Measure & Scale",
    description: "Monitor performance live and scale winning campaigns. Our optimization engine continuously improves delivery.",
  },
];

const formats = [
  { name: "In-Feed Ads", desc: "Appear within editorial content streams on news sites, blogs, and social platforms." },
  { name: "Content Recommendation", desc: "Displayed as 'Recommended For You' widgets at the end of articles." },
  { name: "Sponsored Content", desc: "Long-form brand stories that match the editorial style of the host publication." },
  { name: "Search & Promoted Listings", desc: "Appear within search results and product listing pages in a native style." },
];

export default function NativeTraffic() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex justify-center items-center w-full overflow-hidden"
        style={{ minHeight: "420px", background: "#0E0F14" }}
      >
        <img
          src="/assets/images/contact-BG.png"
          alt="Hero Background"
          className="absolute hidden lg:block"
          style={{ width: "100%", top: 0, left: 0, opacity: 0.45, objectFit: "cover", height: "100%" }}
        />
        <div className="relative z-10 text-center px-6 py-20">
          <motion.p
            className="text-sm font-semibold tracking-widest mb-4"
            style={{ color: "#00E676", fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NATIVE ADVERTISING
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Native Traffic
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Drive high-quality, engaged audiences to your brand through ads that feel like natural content — powered by AI-driven targeting and premium publisher partnerships.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mt-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/advertisers"
              className="inline-block font-bold px-8 py-3 rounded-full text-white"
              style={{ background: "#6A0DAD", fontFamily: "Outfit" }}
            >
              Start Advertising
            </a>
            <a
              href="/contact"
              className="inline-block font-bold px-8 py-3 rounded-full text-white"
              style={{ background: "transparent", border: "2px solid #fff", fontFamily: "Outfit" }}
            >
              Talk to Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* What is Native Traffic */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What is Native Traffic?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Native traffic refers to visitors driven to your content or landing page through native advertising — paid placements that match the look, feel, and function of the media format in which they appear. Unlike traditional banner ads, native ads don't look like ads. They fit naturally within editorial feeds, recommendation widgets, and sponsored content sections, resulting in lower ad fatigue, higher trust, and significantly better engagement metrics.
          </motion.p>
        </div>
      </section>

      {/* Native Ad Formats */}
      <section className="py-16 px-6" style={{ background: "#F4F4F4" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Native Ad Formats We Support
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formats.map((format, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: "#fff", border: "1px solid #DCDCDC", fontFamily: "Outfit" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{format.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Platform Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-3"
                style={{ background: "#F9F9F9", border: "1px solid #EBEBEB", fontFamily: "Outfit" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#6A0DAD20" }}
                >
                  <span className="text-lg font-bold" style={{ color: "#6A0DAD" }}>✓</span>
                </div>
                <h3 className="text-base font-bold text-gray-900">{feat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6" style={{ background: "#0E0F14" }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-7"
                style={{ background: "#1A1B22", border: "1px solid #2E2E3A", fontFamily: "Outfit" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl font-black mb-3" style={{ color: "#6A0DAD" }}>{step.step}</p>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BannerAboutUs />
      <Contact />
    </>
  );
}
