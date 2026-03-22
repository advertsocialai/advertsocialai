import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { API_ENDPOINTS, BLOG_IMAGE_BASE_URL } from "../lib/api";
import "./Research.css";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function LatestResearch() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.GET_ALL_BLOGS)
      .then((res) => {
        setBlogs(res.data.data || []);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="research-section">
      {/* Title Section */}
      <div className="research-header-wrapper">
        <h2 className="research-title">Latest Research and Publications</h2>
      </div>

      {/* Main Content White Card */}
      <div className="research-content-card">
        {/* Research Grid */}
        <div className="research-grid">
          {blogs.slice(0, 3).map((blog, i) => (
            <motion.article
              key={blog.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="research-card"
            >
              <div className="research-card-image-wrapper">
                <img
                  src={BLOG_IMAGE_BASE_URL + blog.image1}
                  alt={blog.name}
                  className="research-card-image"
                  onError={(e) => (e.target.src = "/assets/images/default-blog-image.jpg")}
                />
              </div>

              <div className="research-card-body">
                <h3 className="research-card-title">{blog.name}</h3>

                <div className="research-card-footer">
                  <div className="flex items-center">
                    <span className="research-card-author">Admin</span>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog/${blog.id}`);
                    }}
                    className="research-arrow-link"
                  >
                    <img src="/assets/images/img_arrowright.svg" className="research-arrow-icon" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="research-footer-wrapper">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/blog");
            }}
            className="research-btn"
          >
            Check All Posts
            <img src="/assets/images/img_arrowright_gray_900.svg" className="research-btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
