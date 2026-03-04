import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PageUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

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

  const [existingImages, setExistingImages] = useState({
    profilePhoto: "",
    bannerImage: "",
    iconImage: "",
    multipleImages: [],
  });

  // -------------------- FETCH DATA --------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://bohrx.ai/backendadmin/api/Services/view/${id}`
        );

        // Backend might return either the object directly or { data: {...} }
        let data = res.data;
        if (data && data.data) data = data.data;

        if (!data) {
          throw new Error("No service data returned from API");
        }

        // Prefill values (map backend field names to form state)
        setForm({
          servicesTitle: data.ServicesTitle || data.ServicesTitle || "",
          navbarText: data.navbartext || data.navbarText || "",
          category: data.pagecategory || data.category || "",
          subcategory: data.pagesubcategory || data.pagesubcategory || "",
          servicesUrl: data.servicesUrl || data.servicesUrl || "",
          bannerTitle: data.bannertitle || data.bannerTitle || "",
          homeDesc: data.other || data.homeDesc || "",
          servicesText: data.ServicesText || data.servicesText || "",
          seoTitle: data.metatitle || data.seoTitle || "",
          seoDescription: data.metadescription || data.seoDescription || "",
          seoKeywords: data.metakeywords || data.seoKeywords || "",
          profilePhoto: null,
          bannerImage: null,
          iconImage: null,
          multipleImages: [],
        });

        // Normalize existing images (ensure arrays where expected)
        setExistingImages({
          profilePhoto: data.profilePhoto || data.serviceimage || "",
          bannerImage: data.bannerImage || "",
          iconImage: data.iconImage || data.icon || "",
          multipleImages:
            Array.isArray(data.multipleImages) && data.multipleImages.length > 0
              ? data.multipleImages
              : Array.isArray(data.images)
                ? data.images
                : [],
        });

        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        // show user-friendly message
        alert("Failed to load service data. Check console for details.");
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  // -------------------- HANDLE TEXT CHANGE --------------------
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // -------------------- HANDLE IMAGE CHANGE --------------------
  function handleFileChange(e) {
    const { name, files } = e.target;

    if (name === "multipleImages") {
      // store FileList (or convert to array if you prefer)
      setForm({ ...form, multipleImages: files });
    } else {
      setForm({ ...form, [name]: files[0] });
    }
  }

  // -------------------- UPDATE API --------------------
  async function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // TEXT FIELDS — MUST MATCH BACKEND FIELD NAMES
      formData.append("ServicesTitle", form.servicesTitle || "");
      formData.append("navbartext", form.navbarText || "");
      formData.append("pagecategory", form.category || "");
      formData.append("pagesubcategory", form.subcategory || "");
      formData.append("servicesUrl", form.servicesUrl || "");
      formData.append("bannertitle", form.bannerTitle || "");
      formData.append("other", form.homeDesc || "");
      formData.append("ServicesText", form.servicesText || "");
      formData.append("metatitle", form.seoTitle || "");
      formData.append("metadescription", form.seoDescription || "");
      formData.append("metakeywords", form.seoKeywords || "");

      // OPTIONAL IMAGES — ONLY SEND IF USER SELECTED A NEW ONE
      if (form.profilePhoto) formData.append("profilePhoto", form.profilePhoto);
      if (form.bannerImage) formData.append("bannerImage", form.bannerImage);
      if (form.iconImage) formData.append("iconImage", form.iconImage);

      // MULTIPLE NEW IMAGES
      if (form.multipleImages && form.multipleImages.length > 0) {
        for (let i = 0; i < form.multipleImages.length; i++) {
          formData.append("multipleImages", form.multipleImages[i]);
        }
      }

      // PUT to update endpoint
      await axios.put(
        `https://bohrx.ai/backendadmin/api/Services/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Page updated successfully!");
      navigate("/admin/all-pages");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update! Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2 className="p-10">Loading...</h2>;

  // -------------------- JSX FORM --------------------
  return (
    <div className="p-4 md:p-8 bg-[#f5f5f5] min-h-screen">
      <div className="bg-white p-6 md:p-12 rounded-2xl shadow-lg w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-10">UPDATE PAGE</h1>

        <form onSubmit={handleUpdate}>
          {/* ---------- ROW 1 ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-1">Services Title</label>
              <input
                type="text"
                name="servicesTitle"
                value={form.servicesTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Navbar Text</label>
              <input
                type="text"
                name="navbarText"
                value={form.navbarText}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option value="tech">Tech</option>
                <option value="services">Services</option>
              </select>
            </div>
          </div>

          {/* ---------- ROW 2 ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block font-medium mb-1">Subcategory</label>
              <select
                name="subcategory"
                value={form.subcategory}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Subcategory</option>
                <option value="web">Web</option>
                <option value="app">App</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Services URL</label>
              <input
                type="text"
                name="servicesUrl"
                value={form.servicesUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Banner Title</label>
              <input
                type="text"
                name="bannerTitle"
                value={form.bannerTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* ---------- HOME DESCRIPTION ---------- */}
          <div className="mb-6">
            <label className="block font-medium mb-1">Home Description</label>
            <textarea
              name="homeDesc"
              value={form.homeDesc}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              rows="3"
            />
          </div>

          {/* ---------- SERVICES TEXT (QUILL) ---------- */}
          <div className="mb-10">
            <label className="block font-medium mb-2">Services Text</label>
            <div className="border rounded">
              <ReactQuill
                theme="snow"
                value={form.servicesText}
                onChange={(val) => setForm({ ...form, servicesText: val })}
                style={{ height: "240px" }}
              />
            </div>
          </div>

          {/* ---------- SEO SECTION ---------- */}
          <div className="border p-4 md:p-8 rounded-xl mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">SEO Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-1">SEO Title</label>
                <textarea
                  name="seoTitle"
                  value={form.seoTitle}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>

              <div>
                <label className="block mb-1">SEO Description</label>
                <textarea
                  name="seoDescription"
                  value={form.seoDescription}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                />
              </div>
            </div>

            <label className="block mb-1">SEO Keywords</label>
            <textarea
              name="seoKeywords"
              value={form.seoKeywords}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>

          {/* ---------- IMAGES ---------- */}
          <div className="border p-4 md:p-8 rounded-xl mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Images</h2>

            {/* Profile Photo */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Profile Photo</label>
              {existingImages.profilePhoto && (
                <img
                  src={existingImages.profilePhoto}
                  alt="old"
                  className="w-40 rounded mb-3"
                />
              )}
              <input type="file" name="profilePhoto" onChange={handleFileChange} />
            </div>

            {/* Banner Image */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Banner Image</label>
              {existingImages.bannerImage && (
                <img
                  src={existingImages.bannerImage}
                  alt="old"
                  className="w-40 rounded mb-3"
                />
              )}
              <input type="file" name="bannerImage" onChange={handleFileChange} />
            </div>

            {/* Icon Image */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Icon Image</label>
              {existingImages.iconImage && (
                <img
                  src={existingImages.iconImage}
                  alt="old"
                  className="w-20 rounded mb-3"
                />
              )}
              <input type="file" name="iconImage" onChange={handleFileChange} />
            </div>

            {/* Multiple Images */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Multiple Images</label>

              <div className="flex gap-4 mb-3 flex-wrap">
                {existingImages.multipleImages?.map((img, i) => (
                  <img key={i} src={img} alt={`old-${i}`} className="w-28 rounded shadow" />
                ))}
              </div>

              <input
                type="file"
                multiple
                name="multipleImages"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Page"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
