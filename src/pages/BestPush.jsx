import React from "react";
import { motion } from "framer-motion";
import BannerAboutUs from "../components/BannerAboutUs";
import Contact from "../components/Contact";

const tips = [
  {
    number: "01",
    title: "Craft Compelling Headlines",
    description:
      "Your headline is the first thing users see. Keep it under 50 characters, use action verbs, and create a sense of urgency or curiosity. A/B test multiple variants to find what resonates with your audience.",
  },
  {
    number: "02",
    title: "Use High-Impact Visuals",
    description:
      "Push notifications with icon images see up to 30% higher click-through rates. Use bright, clear imagery that aligns with your brand and the offer. Avoid cluttered or overly complex visuals.",
  },
  {
    number: "03",
    title: "Personalize Your Message",
    description:
      "Leverage audience segmentation to deliver personalized notifications. Tailor messaging based on user behavior, location, device type, or interests for maximum relevance and engagement.",
  },
  {
    number: "04",
    title: "Optimize Delivery Timing",
    description:
      "Send push notifications when your audience is most active. Analyze your audience's timezone and behavioral patterns. Typically, midday and early evening show the highest engagement rates.",
  },
  {
    number: "05",
    title: "Keep Frequency in Check",
    description:
      "Over-sending push notifications leads to opt-outs. Limit notifications to 2–4 per week per user. Use frequency capping and respect quiet hours to maintain subscriber trust.",
  },
  {
    number: "06",
    title: "Include a Clear Call-to-Action",
    description:
      "Every push notification should have a single, clear CTA. Use action-oriented language like 'Shop Now', 'Claim Offer', or 'Read More'. Avoid vague CTAs that leave users unsure of what to do next.",
  },
];

const stats = [
  { value: "7.8%", label: "Average CTR for push ads vs 0.1% for display" },
  { value: "90%", label: "Of push notifications are delivered within 3 seconds" },
  { value: "50%", label: "Higher opt-in rates with personalized messaging" },
  { value: "3x", label: "More conversions vs email for time-sensitive offers" },
];

export default function BestPush() {
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
            PUSH ADVERTISING
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Best Push Ad Practices
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Unlock the full potential of push notifications. Follow these proven strategies to drive higher click-through rates, engagement, and conversions.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 px-6" style={{ background: "#6A0DAD" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ fontFamily: "Outfit" }}
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tips Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            6 Strategies for Push Ad Success
          </motion.h2>
          <motion.p
            className="text-gray-500 text-center mb-14 max-w-xl mx-auto"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Apply these best practices to your campaigns to see measurable improvements in engagement and ROI.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-8 flex gap-5"
                style={{ background: "#F9F9F9", border: "1px solid #EBEBEB", fontFamily: "Outfit" }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
              >
                <span
                  className="text-4xl font-black flex-shrink-0"
                  style={{ color: "#6A0DAD", lineHeight: 1 }}
                >
                  {tip.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6" style={{ background: "#0E0F14" }}>
        <div className="max-w-3xl mx-auto text-center" style={{ fontFamily: "Outfit" }}>
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Launch High-Performing Push Campaigns?
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Advert Social AI gives you the tools, targeting, and intelligence to run push ads that convert.
          </motion.p>
          <motion.a
            href="/pushupads"
            className="inline-block font-bold px-8 py-3 rounded-full text-white"
            style={{ background: "#6A0DAD" }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore Push Ads
          </motion.a>
        </div>
      </section>

      <BannerAboutUs />
      <Contact />
    </>
  );
}
