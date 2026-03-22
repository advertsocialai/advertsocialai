import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroBlog from "../components/HeroBlog";
import Banner from "../components/BannerAboutUs";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS, BLOG_IMAGE_BASE_URL } from "../lib/api";
import "./BlogList.css";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.GET_ALL_BLOGS)
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <HeroBlog />

      <div
        className="bloglist-container max-w-[1400px] mx-auto px-5 md:px-10 py-3
  mt-4
  sm:-mt-[60px]
  md:-mt-[100px]"
      >
        <h1 className="bloglist-heading text-3xl md:text-4xl font-bold mb-10">Latest Blogs</h1>

        <div className="bloglist-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-200 p-5 relative flex flex-col"
            >
              <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
                <img
                  src={BLOG_IMAGE_BASE_URL + blog.image1}
                  alt={blog.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => (e.target.src = "/assets/images/default-blog-image.jpg")}
                />
              </div>

              <h2 className="blog-card-title text-xl font-semibold text-gray-900 mb-3">
                {blog.name}
              </h2>

              <p className="blog-card-desc text-gray-600 text-sm mb-10">{blog.shortdescription}</p>

              <button
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center 
                border border-gray-300 rounded-full text-xl 
                hover:bg-black hover:text-white hover:border-black transition-all"
              >
                ➜
              </button>
            </div>
          ))}
        </div>
      </div>
      <Banner />
    </div>
  );
}
