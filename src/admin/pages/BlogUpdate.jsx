import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import { API_ENDPOINTS, BLOG_IMAGE_BASE_URL } from "../../lib/api";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import Quill from "quill";
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["12px", "14px", "16px", "18px", "20px", "24px"];
Quill.register(Size, true);

export default function BlogUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ size: ["12px", "14px", "16px", "18px", "20px", "24px", "26px", "28px", "30px", "32px", "36px"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "link",

  ];


  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    url: "",
    readtime: "",
    shortDesc: "",
    status: "",
    image1: "",
    image2: ""
  });

  const [newImage1, setNewImage1] = useState(null);
  const [newImage2, setNewImage2] = useState(null);
  const [loading, setLoading] = useState(true);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return;
    effectRan.current = true;
    fetchBlog();
  }, []);


  const fetchBlog = async () => {
    try {
      const res = await axios.get(
        API_ENDPOINTS.GET_BLOG(id)
      );

      const blog = res.data?.data;

      if (blog) {
        setForm({
          name: blog.name || "",
          category: blog.category || "",
          description: blog.description || "",
          url: blog.blogurl || "",
          readtime: blog.readtime || "",   // ✅ ADD THIS
          shortDesc: blog.shortdescription || "",
          status: blog.status || "",
          image1: blog.image1 || "",
          image2: blog.image2 || ""
        });
      }

      setLoading(false);
    } catch (err) {
      Swal.fire("Error!", "Failed to load blog data", "error");
      setLoading(false);
    }
  };


  const validate = () => {
    if (!form.name.trim())
      return Swal.fire("Required!", "Blog name is required", "warning");

    if (!form.category.trim())
      return Swal.fire("Required!", "Category is required", "warning");

    if (!form.description || form.description === "<p><br></p>")
      return Swal.fire("Required!", "Description cannot be empty", "warning");

    if (!form.url.trim())
      return Swal.fire("Required!", "Blog URL is required", "warning");

    if (!form.shortDesc.trim())
      return Swal.fire("Required!", "Short description is required", "warning");

    if (!form.status)
      return Swal.fire("Required!", "Please select a status", "warning");

    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (newImage1 && newImage1.size > maxSize)
      return Swal.fire("Large Image!", "Image 1 must be less than 2MB", "error");

    if (newImage2 && newImage2.size > maxSize)
      return Swal.fire("Large Image!", "Image 2 must be less than 2MB", "error");

    return true;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleUpdate = async () => {
    if (validate() !== true) return;

    try {
      const formData = new FormData();


      formData.append("name", form.name);
      formData.append("category", form.category);
      formData.append("description", form.description);

      formData.append("blogurl", form.url);
      formData.append("shortdescription", form.shortDesc);

      formData.append("status", form.status);
      formData.append("readtime", form.readtime);


      if (newImage1) {
        formData.append("image1", newImage1);
      } else {
        formData.append("existing_image1", form.image1);
      }

      if (newImage2) {
        formData.append("image2", newImage2);
      } else {
        formData.append("existing_image2", form.image2);
      }

      await axios.post(
        API_ENDPOINTS.UPDATE_BLOG(id),
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      Swal.fire("Success!", "Blog updated successfully", "success");
      navigate("/admin/bloglist");

    } catch (err) {
      Swal.fire(
        "Update Failed!",
        err.response?.data?.message || "Something went wrong.",
        "error"
      );
    }
  };

  if (loading) return <div className="p-10 text-xl">Loading blog...</div>;

  return (
    <div className="w-full min-h-screen p-4 md:p-10 bg-[#f7f7f7]">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-full">

        <h1 className="text-3xl font-bold text-center mb-10">UPDATE BLOG</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
          <div>
            <label className="font-semibold text-lg">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Category:</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>
        </div>


        <div className="mb-10">
          <label className="font-semibold text-lg mb-2 block">Description:</label>
          <ReactQuill
            theme="snow"
            value={form.description}
            onChange={(value) =>
              setForm({ ...form, description: value })
            }
            modules={quillModules}     // ✅ added
            formats={quillFormats}     // ✅ added
            style={{ height: "250px", marginBottom: "80px" }}
          />

          {/* <ReactQuill
            theme="snow"
            value={form.description}
            onChange={(value) => setForm({ ...form, description: value })}
            style={{ height: "250px", marginBottom: "80px" }}
          /> */}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8">
          <div>
            <label className="font-semibold text-lg">Blog URL:</label>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Short Description:</label>
            <input
              type="text"
              name="shortDesc"
              value={form.shortDesc}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-[600px]">

          {/* Read Time */}
          <div>
            <label className="font-semibold text-lg block">Read Time:</label>
            <input
              type="text"
              name="readtime"
              value={form.readtime}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mt-2"
              placeholder="e.g. 5"
            />
          </div>

          {/* Status */}
          <div>
            <label className="font-semibold text-lg block">Status:</label>
            <select
              className="w-full p-3 border rounded-lg mt-2"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">

          <div>
            <label className="font-semibold text-lg">Image 1:</label>
            <input
              type="file"
              onChange={(e) => setNewImage1(e.target.files[0])}
              className="w-full border rounded-lg p-2 mt-2"
            />

            {form.image1 && (
              <div className="mt-3">
                <p className="text-sm mb-1">Existing Image 1</p>
                <img
                  src={`${BLOG_IMAGE_BASE_URL}${form.image1}`}
                  alt="existing"
                  className="w-40 rounded shadow"
                />
              </div>
            )}
          </div>


          <div>
            <label className="font-semibold text-lg">Image 2:</label>
            <input
              type="file"
              onChange={(e) => setNewImage2(e.target.files[0])}
              className="w-full border rounded-lg p-2 mt-2"
            />

            {form.image2 && (
              <div className="mt-3">
                <p className="text-sm mb-1">Existing Image 2</p>
                <img
                  src={`${BLOG_IMAGE_BASE_URL}${form.image2}`}
                  alt="existing"
                  className="w-40 rounded shadow"
                />
              </div>
            )}
          </div>
        </div>


        <div className="text-center">
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 text-lg"
          >
            Update Blog
          </button>
        </div>

      </div>
    </div>
  );
}
