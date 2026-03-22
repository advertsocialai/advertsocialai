// src/admin/pages/BlogList.jsx

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../lib/api";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Prevent duplicate API calls 
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; // block second call
    effectRan.current = true;

    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.GET_ALL_BLOGS);
      setBlogs(res.data.data || []);
    } catch (err) {
    }
  };

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(API_ENDPOINTS.DELETE_BLOG(id));

      alert("Blog deleted successfully!");
      loadBlogs(); // refresh table
    } catch (err) {
      alert("Failed to delete blog!");
    }
  };

  const filtered = blogs.filter((b) =>
    b.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen p-4 md:p-8 bg-[#f7f7f7]">

      {/* SEARCH BAR */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mb-6">
        <input
          type="text"
          placeholder=" Search All"
          className="w-full p-4 border rounded-lg text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4 w-[70%]">Blog Title</th>
              <th className="p-4 text-center">Image</th>
              <th className="p-4 text-center">Update</th>
              <th className="p-4 text-center">View</th>
              <th className="p-4 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">

                {/* NAME */}
                <td className="p-4 text-lg">{blog.name}</td>

                {/* IMAGE PREVIEW (optional) */}
                <td className="p-4 text-center"></td>

                {/* UPDATE BUTTON */}
                <td className="p-4 text-center">
                  <FiEdit2
                    size={20}
                    onClick={() => navigate(`/admin/blog/update/${blog.id}`)}
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                  />
                </td>

                {/* VIEW BUTTON */}
                <td className="p-4 text-center">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => navigate(`/admin/blog/view/${blog.id}`)}
                  >
                    View
                  </button>
                </td>

                {/* DELETE BUTTON */}
                <td className="p-4 text-center">
                  <FiTrash2
                    size={20}
                    onClick={() => handleDelete(blog.id)}
                    className="text-red-600 cursor-pointer hover:text-red-800"
                  />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
