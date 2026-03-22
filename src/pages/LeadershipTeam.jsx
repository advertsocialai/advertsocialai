import React from "react";
import { motion } from "framer-motion";
import BannerAboutUs from "../components/BannerAboutUs";
import Contact from "../components/Contact";

const leaders = [
  {
    name: "Alexandra Reed",
    title: "Chief Executive Officer",
    bio: "Alexandra brings over 18 years of experience in digital advertising and AI strategy. She has led multiple successful ad-tech ventures and is passionate about building transparent, data-driven advertising ecosystems.",
    initials: "AR",
    color: "#6A0DAD",
  },
  {
    name: "Marcus Chen",
    title: "Chief Technology Officer",
    bio: "Marcus is an AI engineer with deep expertise in machine learning, neural networks, and programmatic advertising infrastructure. He leads the technical vision at Advert Social AI.",
    initials: "MC",
    color: "#00E676",
  },
  {
    name: "Priya Sharma",
    title: "Chief Operating Officer",
    bio: "Priya oversees global operations and publisher partnerships. With a background in media buying and operations, she ensures seamless delivery for both advertisers and publishers.",
    initials: "PS",
    color: "#6A0DAD",
  },
  {
    name: "James O'Brien",
    title: "VP of Product",
    bio: "James leads product strategy and roadmap. He is focused on building intuitive, powerful tools that enable publishers and advertisers to maximize their revenue potential.",
    initials: "JO",
    color: "#00E676",
  },
  {
    name: "Sofia Martinez",
    title: "VP of Sales & Partnerships",
    bio: "Sofia drives global revenue growth through strategic partnerships. Her expertise spans programmatic sales, media trading, and relationship management across Tier-1 markets.",
    initials: "SM",
    color: "#6A0DAD",
  },
  {
    name: "David Kim",
    title: "Head of AI Research",
    bio: "David leads our AI research lab, developing proprietary models for ad targeting, fraud detection, and audience segmentation that power the Advert Social AI platform.",
    initials: "DK",
    color: "#00E676",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function LeadershipTeam() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex justify-center items-center w-full overflow-hidden"
        style={{ minHeight: "400px", background: "#0E0F14" }}
      >
        <img
          src="/assets/images/contact-BG.png"
          alt="Hero Background"
          className="absolute hidden lg:block"
          style={{ width: "100%", top: 0, left: 0, opacity: 0.5, objectFit: "cover", height: "100%" }}
        />
        <div className="relative z-10 text-center px-6 py-20">
          <motion.p
            className="text-sm font-semibold tracking-widest mb-4"
            style={{ color: "#00E676", fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR PEOPLE
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Leadership Team
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Meet the visionaries and operators driving the future of AI-powered digital advertising.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: "#F9F9F9",
                  border: "1px solid #EBEBEB",
                  fontFamily: "Outfit",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: leader.color }}
                >
                  {leader.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-sm font-medium mt-1" style={{ color: leader.color }}>
                    {leader.title}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6" style={{ background: "#0E0F14" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Driven by Innovation. Guided by Integrity.
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg leading-relaxed"
            style={{ fontFamily: "Outfit" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our leadership team is united by a commitment to transparency, performance, and empowering every publisher and advertiser on our platform. We believe that great results come from combining cutting-edge AI with deep industry expertise.
          </motion.p>
        </div>
      </section>

      <BannerAboutUs />
      <Contact />
    </>
  );
}
