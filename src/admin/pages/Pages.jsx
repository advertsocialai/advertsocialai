import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { API_ENDPOINTS } from "../../lib/api";

export default function Pages() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    servicesTitle: "",
    navbarText: "",
    category: "",
    subcategory: "",
    servicesUrl: "",
    bannerTitle: "",
    homeDesc: "",
    servicesText: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    profilePhoto: null,
    bannerImage: null,
    iconImage: null,
    multipleImages: [],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error for this field on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function handleFileChange(e) {
    const { name, files } = e.target;

    if (name === "multipleImages") {
      setForm({ ...form, multipleImages: files });
    } else {
      setForm({ ...form, [name]: files[0] });
    }
  }

  // POST FUNCTION 
  async function handleSubmit() {
    // Inline Validations
    const newErrors = {};
    if (!form.servicesTitle.trim()) newErrors.servicesTitle = "Services Title is required";
    if (!form.navbarText.trim()) newErrors.navbarText = "Navbar Text is required";
    if (!form.category) newErrors.category = "Please select a Category";
    if (!form.servicesUrl.trim()) newErrors.servicesUrl = "Services URL is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    setLoading(true);

    const formData = new FormData();

    // backend names 
    formData.append("ServicesTitle", form.servicesTitle || "");
    formData.append("ServicesText", form.servicesText || "");
    formData.append("servicesUrl", form.servicesUrl || "");
    formData.append("bannertitle", form.bannerTitle || "");
    formData.append("other", form.homeDesc || ""); // homeDesc mapped to "other"
    formData.append("pagecategory", form.category || "");
    formData.append("pagesubcategory", form.subcategory || "");
    formData.append("metatitle", form.seoTitle || "");
    formData.append("metakeywords", form.seoKeywords || "");
    formData.append("metadescription", form.seoDescription || "");
    formData.append("navbartext", form.navbarText || "");
    formData.append("status", "1");

    // IMAGES
    if (form.profilePhoto)
      formData.append("profilePhoto", form.profilePhoto);

    if (form.bannerImage)
      formData.append("bannerImage", form.bannerImage);

    if (form.iconImage)
      formData.append("iconImage", form.iconImage);

    for (let i = 0; i < form.multipleImages.length; i++) {
      formData.append("multipleImages", form.multipleImages[i]);
    }

    try {
      const response = await fetch(
        API_ENDPOINTS.CREATE_SERVICE,
        {
          method: "POST",
          body: formData,
        }
      );

      const res = await response.text();

      if (response.ok) {
        Swal.fire("Success", "Page added successfully!", "success");
      } else {
        Swal.fire("Error", res || "Failed to add page", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 md:p-8 bg-[#f5f5f5] min-h-screen">
      <div className="bg-white p-6 md:p-12 rounded-2xl shadow-lg w-full max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-center mb-10 tracking-wide">
          ADD NEW PAGE
        </h1>

        <div className="border-t border-gray-400 pt-8">

          {/* ----------- ROW 1 ----------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div>
              <label className="block font-medium mb-1">Services Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="servicesTitle"
                value={form.servicesTitle}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.servicesTitle ? 'border-red-500' : 'border-gray-400'}`}
                placeholder="Services Title"
              />
              {errors.servicesTitle && <p className="text-red-500 text-xs mt-1">{errors.servicesTitle}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Navbar Text <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="navbarText"
                value={form.navbarText}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.navbarText ? 'border-red-500' : 'border-gray-400'}`}
                placeholder="Navbar Text"
              />
              {errors.navbarText && <p className="text-red-500 text-xs mt-1">{errors.navbarText}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Category <span className="text-red-500">*</span></label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.category ? 'border-red-500' : 'border-gray-400'}`}
              >
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="services">Services</option>
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>
          </div>

          {/* ----------- ROW 2 ----------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

            <div>
              <label className="block font-medium mb-1">Select Subcategory</label>
              <select
                name="subcategory"
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
              >
                <option value="">Select Subcategory</option>
                <option value="web">Web</option>
                <option value="app">App</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Services Url <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="servicesUrl"
                value={form.servicesUrl}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${errors.servicesUrl ? 'border-red-500' : 'border-gray-400'}`}
                placeholder="Services Url"
              />
              {errors.servicesUrl && <p className="text-red-500 text-xs mt-1">{errors.servicesUrl}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Banner Title</label>
              <input
                type="text"
                name="bannerTitle"
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded"
                placeholder="Banner Title"
              />
            </div>
          </div>

          {/* ----------- HOME DESCRIPTION ----------- */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Home Page Description</label>
            <textarea
              name="homeDesc"
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded"
              rows="4"
              placeholder="Home Page Description"
            ></textarea>
          </div>

          {/* ----------- SERVICES TEXT ----------- */}
          <div className="mb-16">
            <label className="block font-medium mb-2">Services Text</label>

            <div className="border border-gray-400 rounded-lg overflow-hidden bg-white shadow-sm">
              <ReactQuill
                theme="snow"
                value={form.servicesText}
                onChange={(val) => setForm({ ...form, servicesText: val })}
                style={{ height: "260px" }}
              />
            </div>
          </div>

          {/* ----------- SEO SECTION ----------- */}
          <div className="border border-gray-400 p-4 md:p-8 rounded-xl mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">
              For SEO Purpose
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block font-semibold mb-2">SEO Title</label>
                <textarea
                  name="seoTitle"
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-400 rounded"
                  placeholder="SEO Title"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold mb-2">SEO Description</label>
                <textarea
                  name="seoDescription"
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-400 rounded"
                  placeholder="SEO Description"
                ></textarea>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">SEO Keywords</label>
              <textarea
                name="seoKeywords"
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-400 rounded"
                placeholder="SEO Keywords"
              ></textarea>
            </div>
          </div>

          {/* ----------- IMAGE UPLOADS ----------- */}
          <div className="border border-gray-400 p-4 md:p-8 rounded-xl mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center">
              Upload Images
            </h2>

            {/* Profile Photo */}
            <div className="mb-8">
              <label className="block font-semibold mb-2">
                Profile Photo (1100 × 700)
              </label>
              <input
                type="file"
                name="profilePhoto"
                onChange={handleFileChange}
                className="w-full border border-gray-400 p-2 rounded bg-white"
              />
            </div>

            {/* Banner Image */}
            <div className="mb-8">
              <label className="block font-semibold mb-2">
                Banner Image (1100 × 400)
              </label>
              <input
                type="file"
                name="bannerImage"
                onChange={handleFileChange}
                className="w-full border border-gray-400 p-2 rounded bg-white"
              />
            </div>

            {/* Icon Image */}
            <div className="mb-8">
              <label className="block font-semibold mb-2">
                Icon Image (100 × 100)
              </label>
              <input
                type="file"
                name="iconImage"
                onChange={handleFileChange}
                className="w-full border border-gray-400 p-2 rounded bg-white"
              />
            </div>

            {/* Multiple Images */}
            <div className="mb-8">
              <label className="block font-semibold mb-2">
                Multiple Images (1100 × 700)
              </label>
              <input
                type="file"
                name="multipleImages"
                multiple
                onChange={handleFileChange}
                className="w-full border border-gray-400 p-2 rounded bg-white"
              />
            </div>
          </div>

          {/* ----------- SUBMIT BUTTON ----------- */}
          <div className="text-center mt-16">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-12 py-3 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-lg"
              style={{ background: 'linear-gradient(to right, #00E676, #6A0DAD)' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Page"
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
