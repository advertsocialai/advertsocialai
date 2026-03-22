import React, { useState } from "react";
import { motion } from "framer-motion";
import BannerAboutUs from "../components/BannerAboutUs";

const openings = [
  {
    department: "Engineering",
    roles: [
      {
        title: "Senior Machine Learning Engineer",
        location: "Remote / New York",
        type: "Full-time",
        description:
          "Design and develop ML models for ad targeting, fraud detection, and audience segmentation. Work alongside our AI research team to bring new models to production at scale.",
      },
      {
        title: "Full-Stack Developer (React + Node.js)",
        location: "Remote",
        type: "Full-time",
        description:
          "Build and maintain publisher-facing dashboards, advertiser portals, and internal tools. Strong focus on performance, accessibility, and clean UI.",
      },
    ],
  },
  {
    department: "Sales & Partnerships",
    roles: [
      {
        title: "Publisher Development Manager",
        location: "London / Remote",
        type: "Full-time",
        description:
          "Identify, onboard, and grow relationships with premium publishers globally. Drive revenue through direct partnerships and programmatic integrations.",
      },
      {
        title: "Advertiser Success Manager",
        location: "Remote",
        type: "Full-time",
        description:
          "Manage advertiser campaigns end-to-end, ensuring KPIs are met. Collaborate with internal teams to optimize performance and expand accounts.",
      },
    ],
  },
  {
    department: "Product & Design",
    roles: [
      {
        title: "Product Manager – Ad Platform",
        location: "Remote / San Francisco",
        type: "Full-time",
        description:
          "Own the roadmap for our core ad platform. Work with engineering, design, and stakeholders to ship features that create measurable value for publishers and advertisers.",
      },
    ],
  },
  {
    department: "Marketing",
    roles: [
      {
        title: "Content Marketing Specialist",
        location: "Remote",
        type: "Full-time",
        description:
          "Create high-quality content—blog posts, whitepapers, case studies, and social media—that positions Advert Social AI as a thought leader in the ad-tech space.",
      },
    ],
  },
];

const perks = [
  { icon: "🌍", title: "Remote-First", desc: "Work from anywhere in the world with flexible hours." },
  { icon: "📈", title: "Growth Equity", desc: "Competitive equity packages for all full-time team members." },
  { icon: "🏥", title: "Health Benefits", desc: "Full medical, dental, and vision coverage for you and your family." },
  { icon: "📚", title: "Learning Budget", desc: "$2,000 annual budget for courses, conferences, and books." },
  { icon: "🤝", title: "Inclusive Culture", desc: "We celebrate diversity and foster an environment of belonging." },
  { icon: "⚡", title: "High Impact", desc: "Your work directly shapes the future of AI-powered advertising." },
];

export default function Careers() {
  const [openDept, setOpenDept] = useState(null);

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
            JOIN OUR TEAM
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Careers at Advert Social AI
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Help us build the next generation of AI-powered advertising technology. We hire curious, driven people who want to make a real impact.
          </motion.p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Work With Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-3"
                style={{ background: "#F9F9F9", border: "1px solid #EBEBEB", fontFamily: "Outfit" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-3xl">{perk.icon}</span>
                <h3 className="text-base font-bold text-gray-900">{perk.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-6" style={{ background: "#F4F4F4" }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Open Positions
          </motion.h2>
          <div className="flex flex-col gap-4">
            {openings.map((dept, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #DCDCDC", background: "#fff", fontFamily: "Outfit" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  onClick={() => setOpenDept(openDept === i ? null : i)}
                >
                  <span className="text-lg font-bold text-gray-900">{dept.department}</span>
                  <span
                    className="text-2xl font-bold transition-transform"
                    style={{
                      color: "#6A0DAD",
                      transform: openDept === i ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    +
                  </span>
                </button>
                {openDept === i && (
                  <div className="px-7 pb-6 flex flex-col gap-5">
                    {dept.roles.map((role, j) => (
                      <div
                        key={j}
                        className="rounded-xl p-5"
                        style={{ background: "#F9F9F9", border: "1px solid #EBEBEB" }}
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-base font-bold text-gray-900">{role.title}</h4>
                          <span
                            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                            style={{ background: "#6A0DAD" }}
                          >
                            {role.type}
                          </span>
                          <span className="text-xs text-gray-500">{role.location}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{role.description}</p>
                        <a
                          href="/contact"
                          className="inline-block text-sm font-semibold px-5 py-2 rounded-full text-white"
                          style={{ background: "#6A0DAD" }}
                        >
                          Apply Now
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10 text-sm" style={{ fontFamily: "Outfit" }}>
            Don't see a role that fits?{" "}
            <a href="/contact" className="font-semibold" style={{ color: "#6A0DAD" }}>
              Send us your CV anyway
            </a>{" "}
            — we're always looking for exceptional talent.
          </p>
        </div>
      </section>

      <BannerAboutUs />
    </>
  );
}
