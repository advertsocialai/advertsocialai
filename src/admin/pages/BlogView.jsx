import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_ENDPOINTS, BLOG_IMAGE_BASE_URL } from "../../lib/api";

export default function BlogView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.GET_ALL_BLOGS);

      const found = res.data.data.find((b) => String(b.id) === id);
      setBlog(found || null);
    } catch (err) {}
  };

  if (!blog) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-4 md:p-10 bg-[#f7f7f7] w-full min-h-screen">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">{blog.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          <div>
            <p className="font-semibold">Category:</p>
            {blog.category}
          </div>

          <div>
            <p className="font-semibold">Blog URL:</p>
            {blog.blogurl}
          </div>

          <div>
            <p className="font-semibold">Short Description:</p>
            {blog.shortdescription}
          </div>

          <div>
            <p className="font-semibold">Status:</p>
            {blog.status}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          <div>
            <p className="font-semibold mb-2">Image 1:</p>
            {blog.image1 ? (
              <img
                src={`${BLOG_IMAGE_BASE_URL}${blog.image1}`}
                className="w-full max-w-xs rounded-xl shadow"
              />
            ) : (
              "No Image"
            )}
          </div>

          <div>
            <p className="font-semibold mb-2">Image 2:</p>
            {blog.image2 ? (
              <img
                src={`${BLOG_IMAGE_BASE_URL}${blog.image2}`}
                className="w-full max-w-xs rounded-xl shadow"
              />
            ) : (
              "No Image"
            )}
          </div>
        </div>

        <div
          className="prose max-w-full bg-gray-50 p-6 rounded-xl"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />

        <button
          onClick={() => navigate("/admin/bloglist")}
          className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}
