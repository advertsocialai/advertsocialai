import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";
import { API_ENDPOINTS } from "../../lib/api";

export default function Blog() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    shortdescription: "",
    blogurl: "",
    description: "",
    status: "draft",
    visible: 1,
    image1: null,
    image2: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Blog Name is required";
    if (!form.category.trim()) newErrors.category = "Category is required";
    if (!form.shortdescription.trim()) newErrors.shortdescription = "Short description is required";
    if (!form.blogurl.trim()) newErrors.blogurl = "Blog URL is required";

    if (!form.description.trim() || form.description === "<p><br></p>")
      newErrors.description = "Description cannot be empty";

    if (!form.image1) newErrors.image1 = "Image 1 is required";
    if (!form.image2) newErrors.image2 = "Image 2 is required";

    const maxSize = 2 * 1024 * 1024;

    if (form.image1 && form.image1.size > maxSize) {
      Swal.fire("Image Too Large!", "Image 1 must be less than 2MB", "error");
      return false;
    }

    if (form.image2 && form.image2.size > maxSize) {
      Swal.fire("Image Too Large!", "Image 2 must be less than 2MB", "error");
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("category", form.category);
      fd.append("shortdescription", form.shortdescription);
      fd.append("blogurl", form.blogurl);
      fd.append("description", form.description);
      fd.append("status", form.status);
      fd.append("visible", form.visible);
      fd.append("image1", form.image1);
      fd.append("image2", form.image2);

      await axios.post(API_ENDPOINTS.CREATE_BLOG, fd);

      Swal.fire({
        icon: "success",
        title: "Blog Added!",
        text: "Your blog has been successfully created.",
      });

      setForm({
        name: "",
        category: "",
        shortdescription: "",
        blogurl: "",
        description: "",
        status: "draft",
        visible: 1,
        image1: null,
        image2: null,
      });

      setErrors({});
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: err.response?.data?.message || "Something went wrong while adding the blog.",
      });
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-10 bg-[#f7f7f7]">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-10">ADD BLOG</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          <div>
            <label className="font-semibold text-lg">Blog Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg mt-2 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="font-semibold text-lg">Category:</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg mt-2 ${
                errors.category ? "border-red-500" : ""
              }`}
            />
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          <div>
            <label className="font-semibold text-lg">Blog URL:</label>
            <input
              type="text"
              name="blogurl"
              value={form.blogurl}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg mt-2 ${
                errors.blogurl ? "border-red-500" : ""
              }`}
            />
            {errors.blogurl && <p className="text-red-500 text-sm mt-1">{errors.blogurl}</p>}
          </div>

          <div>
            <label className="font-semibold text-lg">Short Description:</label>
            <input
              type="text"
              name="shortdescription"
              value={form.shortdescription}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg mt-2 ${
                errors.shortdescription ? "border-red-500" : ""
              }`}
            />
            {errors.shortdescription && (
              <p className="text-red-500 text-sm mt-1">{errors.shortdescription}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="font-semibold text-lg block mb-2">Description:</label>

          <div
            className={`border rounded-lg overflow-hidden ${
              errors?.description ? "border-red-500" : "border-gray-300"
            }`}
          >
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={(value) => setForm({ ...form, description: value })}
              style={{ height: "300px" }}
            />
          </div>

          {errors?.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <div>
            <label className="font-semibold text-lg block mb-2">Image 1:</label>
            <input
              type="file"
              onChange={(e) => setForm({ ...form, image1: e.target.files[0] })}
              className={`w-full p-2 border rounded-lg ${
                errors?.image1 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.image1 && <p className="text-red-500 text-sm mt-1">{errors.image1}</p>}
          </div>

          <div>
            <label className="font-semibold text-lg block mb-2">Image 2:</label>
            <input
              type="file"
              onChange={(e) => setForm({ ...form, image2: e.target.files[0] })}
              className={`w-full p-2 border rounded-lg ${
                errors?.image2 ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors?.image2 && <p className="text-red-500 text-sm mt-1">{errors.image2}</p>}
          </div>
        </div>

        <div className="w-[300px] mb-10">
          <label className="font-semibold text-lg">Status:</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-2"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
