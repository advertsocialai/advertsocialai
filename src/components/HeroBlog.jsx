import React from "react";
import { motion } from "framer-motion";
import "./HeroBlog.css";

export default function HeroBlog({ blog }) {
  const title = blog?.name || "BLOG's";
  const description =
    blog?.shortdescription ||
    "Discover actionable blogs designed for publishers, advertisers, and creators looking to maximize performance through smart ad technology and AI-driven solutions.";

  return (
    <section
      id="advertisers"
      className="heroblog-section relative flex justify-center items-center w-full overflow-hidden bg-white lg:bg-transparent"
    >
      {/* Desktop Background */}
      <img
        src="/assets/images/contact-BG.png"
        alt="Hero Background"
        className="heroblog-bg absolute hidden lg:block"
      />

      {/* Mobile Background */}
      <div
        className="heroblog-bg-mobile absolute lg:hidden"
        style={{
          background: "#000000",
          zIndex: 0,
          top: "10px",
          left: "10px",
          right: "10px",
          bottom: "10px",
          borderRadius: "16px",
        }}
      />

      <div
        className="
                    heroblog-content
                    relative z-10 
                    flex flex-col lg:flex-row 
                    justify-center items-center 
                    w-full 
                    px-4 sm:px-6 md:px-8 lg:px-[5%] 
                    max-w-[1280px] 
                    gap-8 lg:gap-0 
                    pt-4 pb-12 lg:py-0 
                    text-center lg:text-left
                "
      >
        <motion.div
          className="
                        heroblog-text-container
                        flex flex-col 
                        gap-4 sm:gap-6 lg:gap-10 
                        w-full 
                        text-center lg:text-left 
                        lg:max-w-[760px] lg:h-[420px]
                        order-1 lg:order-none
                        mt-8 lg:mt-20
                        lg:ml-0
                    "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="
                            heroblog-title
                            font-normal leading-tight 
                            text-3xl sm:text-4xl md:text-5xl 
                            lg:text-[52px] xl:text-[56px]
                            text-white
                            mt-4 lg:mt-[-50px]
                            mx-auto lg:ml-0
                            break-words
                        "
            style={{ fontFamily: "Outfit" }}
          >
            {title}
          </h1>

          <p
            className="
                            heroblog-desc
                            text-base sm:text-lg lg:text-xl 
                            leading-relaxed 
                            text-[#F9F9F9] 
                            mx-auto lg:ml-0 
                            w-[90%] lg:w-[600px]
                            mb-0 lg:mb-0
                        "
            style={{ fontFamily: "Outfit", fontWeight: 500 }}
          >
            {description}
          </p>
        </motion.div>

        <motion.img
          src="/assets/images/Mask group.png"
          alt="Popunder Graphic"
          className="
                        heroblog-graphic
                        block
                        w-full 
                        max-w-[260px] sm:max-w-[300px] md:max-w-[360px]
                        lg:max-w-[400px] xl:max-w-[554px]
                        h-auto
                        order-2 lg:order-none
                        mt-6 lg:mt-[-200px]
                        mx-auto lg:ml-60
                    "
          style={{ aspectRatio: "534/383" }}
        />
      </div>

      {/* DESKTOP BREADCRUMBS */}
      <div className="heroblog-breadcrumbs absolute hidden lg:flex items-center gap-2 z-10">
        <a href="/" className="text-xs sm:text-sm hover:underline">
          Home
        </a>
        <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
        <a href="/blog" className="text-xs sm:text-sm hover:underline cursor-pointer">
          Blogs
        </a>
      </div>

      {/* MOBILE BREADCRUMBS */}
      <div className="heroblog-breadcrumbs-mobile absolute lg:hidden flex items-center justify-center gap-2 z-10 bottom-4 left-0 right-0">
        <a href="/" className="text-xs hover:underline">
          Home
        </a>
        <img src="/assets/images/side-arrow.png" className="w-1 h-2" />
        <a href="/blog" className="text-xs sm:text-sm hover:underline cursor-pointer">
          Blogs
        </a>
      </div>
    </section>
  );
}
