import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section
      className="relative flex justify-center items-center w-full overflow-hidden"
      style={{ minHeight: "80vh", background: "#0E0F14", fontFamily: "Outfit" }}
    >
      <img
        src="/assets/images/contact-BG.png"
        alt="Background"
        className="absolute hidden lg:block"
        style={{ width: "100%", top: 0, left: 0, opacity: 0.35, objectFit: "cover", height: "100%" }}
      />

      <div className="relative z-10 text-center px-6 py-20 flex flex-col items-center gap-6">
        <motion.p
          className="text-8xl md:text-[10rem] font-black"
          style={{ color: "#6A0DAD", lineHeight: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/"
            className="inline-block font-bold px-8 py-3 rounded-full text-white"
            style={{ background: "#6A0DAD" }}
          >
            Go Home
          </a>
          <a
            href="/contact"
            className="inline-block font-bold px-8 py-3 rounded-full text-white"
            style={{ background: "transparent", border: "2px solid #fff" }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
