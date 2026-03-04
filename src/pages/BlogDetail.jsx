import React, { useEffect, useState } from "react";
import "./BlogDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Banner from "../components/BannerAboutUs";
import HeroBlog from "../components/HeroBlog";
import { FiClock } from "react-icons/fi";


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [contents, setContents] = useState([]);
  const [activeId, setActiveId] = useState(null);




  const IMAGE_BASE_URL = "https://bohrx.ai/backendadmin/public/Blog/";

  useEffect(() => {
    loadBlog();
  }, [id]);

  useEffect(() => {
    if (!blog) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanDescription;

    const headings = tempDiv.querySelectorAll("h2, h3");

    const extracted = Array.from(headings).map((heading, index) => {
      const cleanText = heading.innerText.replace(/^\d+\.\s*/, "");

      return {
        id: heading.id || `section-${index}`,
        text: cleanText,
      };
    });

    setContents(extracted);
  }, [blog]);

  useEffect(() => {
    if (!contents.length) return;

    const scrollContainer = document.getElementById("blog-content-scroll");
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (!scrollContainer) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const containerTop = scrollContainer.getBoundingClientRect().top;


      if (scrollTop + clientHeight >= scrollHeight - 40) {
        if (contents.length > 0) {
          setActiveId(contents[contents.length - 1].id);
          return;
        }
      }


      const activeThreshold = 160;
      let active = "introduction";

      for (const item of contents) {
        const el = document.getElementById(item.id);
        if (el) {
          const relativeTop = el.getBoundingClientRect().top - containerTop;
          if (relativeTop <= activeThreshold) {
            active = item.id;
          } else {
            break;
          }
        }
      }
      setActiveId(active);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [contents]);



  const loadBlog = async () => {
    try {
      const res = await axios.get(
        `https://bohrx.ai/backendadmin/api/getblogs/${id}`
      );
      setBlog(res.data.data);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  if (!blog) {
    return <p className="p-10 text-center">Loading...</p>;
  }
  const currentUrl = window.location.href;


  const cleanDescription = blog
    ? (() => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = blog.description;

      // const firstHeading = tempDiv.querySelector("h2, h3");
      // if (firstHeading) firstHeading.remove();

      tempDiv.querySelectorAll("h2, h3").forEach((heading, index) => {
        heading.id = `section-${index}`;
        heading.style.scrollMarginTop = "140px";
      });

      return tempDiv.innerHTML;
    })()
    : "";



  return (
    <div className="bg-gray-50 ">

      {/* Hero Section */}
      <HeroBlog blog={blog} />
      {/* MAIN BLOG LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4 flex blog-detail-layout">
        <div className="flex w-full min-h-screen gap-10 lg:gap-16">
          <div className="w-[280px] flex-shrink-0 sticky top-36 self-start mt-10 hidden lg:block overflow-visible blog-detail-sidebar">
            <div className="relative pl-6">
              {/* VERTICAL PROGRESS LINE */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-100 blog-progress-line" />

              {/* ACTIVE INDICATOR */}
              <div
                className="absolute left-0 w-[3px] bg-purple-600 transition-all duration-300 ease-in-out rounded-full z-10 shadow-[0_0_10px_rgba(147,51,234,0.3)] blog-active-indicator"
                style={{
                  top: activeId === "introduction"
                    ? "var(--toc-offset-top, 8px)"
                    : `calc(( ${contents.findIndex(c => c.id === activeId) + 1} * var(--toc-item-height, 52px)) + var(--toc-offset-top, 8px))`,
                  height: "var(--toc-indicator-height, 28px)"
                }}
              />

              <ul className="space-y-2 relative">
                {/* Introduction */}
                <li className="h-11 flex items-center">
                  <a
                    href="#introduction"
                    className={`block px-5 py-2 transition-all duration-300 text-[15px] leading-tight blog-toc-link ${activeId === "introduction"
                      ? "font-bold text-purple-700 translate-x-1"
                      : "text-gray-500 hover:text-black hover:translate-x-1"
                      }`}
                  >
                    Introduction
                  </a>
                </li>
                {contents.map((item) => {
                  const isActive = activeId === item.id;

                  return (
                    <li key={item.id} className="h-11 flex items-center">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setActiveId(item.id)}
                        className={`block px-5 py-2 transition-all duration-300 text-[15px] leading-tight blog-toc-link ${isActive
                          ? "font-bold text-purple-700 translate-x-1"
                          : "text-gray-500 hover:text-black hover:translate-x-1"
                          }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div
            id="blog-content-scroll"
            className="flex-1 min-w-0 h-[calc(100vh-120px)] overflow-y-auto scroll-smooth pr-0 blog-content-scroll"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >

            <style dangerouslySetInnerHTML={{
              __html: `
              #blog-content-scroll::-webkit-scrollbar { display: none !important; width: 0 !important; }
              #blog-content-scroll { -ms-overflow-style: none !important; scrollbar-width: none !important; }
            ` }} />
            <div className="bg-white p-6 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-2 blog-content-card">
              {/* Blog Title */}
              <h1
                id="introduction"
                className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 scroll-mt-[140px] blog-detail-title"
              >
                {blog.name}
              </h1>
              <div id="intro-sentinel" className="h-[1px]" />

              <p className="text-gray-500 mb-6 flex items-center gap-3 blog-detail-meta">
                <span>{blog.category}</span>

                <span className="flex items-center gap-1 text-sm text-gray-400">
                  <FiClock className="w-4 h-4" />
                  {blog.readtime}  read
                </span>
              </p>


              {/* Social Media Share Buttons */}
              <div className="flex gap-4 mb-6 blog-share-container">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full flex items-center justify-center"
                  title="Share on Facebook"
                >
                  <FaFacebookF />
                </a>

                {/* Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full flex items-center justify-center"
                  title="Share on Twitter"
                >
                  <FaTwitter />
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full flex items-center justify-center"
                  title="Share on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.name + " " + currentUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center"
                  title="Share on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>



              <div
                className="prose prose-lg max-w-none pb-32 blog-prose-content"
                dangerouslySetInnerHTML={{ __html: cleanDescription }}
              />

            </div>
          </div>
        </div>
      </div>


      {/* Banner Section */}
      <Banner />
    </div>
  );
}
