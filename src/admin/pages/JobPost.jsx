import React, { useRef, useState, useEffect } from "react";
import { FiImage, FiType } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { API_ENDPOINTS } from "../../lib/api";

export default function JobPost() {
  const normalizeHtml = (html = "") => {
    return html
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const jobDescRef = useRef(null);
  const keyRespRef = useRef(null);
  const imageInputRef = useRef(null);
  const activeEditorRef = useRef(null);

  const [formData, setFormData] = useState({
    Positionname: "",
    JobLocation: "",
    Experience: "",
    JobType: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    fetch(API_ENDPOINTS.GET_JOB(id))
      .then((res) => res.json())
      .then((res) => {
        if (!res.status || !res.data) return;

        const job = res.data;

        setFormData({
          Positionname: job.Positionname || "",
          JobLocation: job.JobLocation || "",
          Experience: job.Experience || "",
          JobType: job.JobType || "",
        });

        if (jobDescRef.current) {
          jobDescRef.current.innerHTML = job.JobDescription || "";
        }

        if (keyRespRef.current) {
          keyRespRef.current.innerHTML = job.KeyResponsibilites || "";
        }
      });
  }, [id]);

  const exec = (ref, command, value = null) => {
    if (!ref.current) return;
    ref.current.focus();
    document.execCommand(command, false, value);
  };

  const applyList = (ref, type) => {
    if (!ref.current) return;
    ref.current.focus();
    document.execCommand(type === "ordered" ? "insertOrderedList" : "insertUnorderedList");
  };

  const applyAlign = (ref, align) => {
    if (!ref.current) return;
    ref.current.focus();
    document.execCommand(align);
  };

  const handleImageClick = (ref) => {
    activeEditorRef.current = ref;
    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !activeEditorRef.current) return;

    const reader = new FileReader();
    reader.onload = () => {
      activeEditorRef.current.focus();
      document.execCommand("insertImage", false, reader.result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const payload = {
      Positionname: formData.Positionname,
      JobLocation: formData.JobLocation,
      Experience: formData.Experience,
      JobType: formData.JobType,
      JobDescription: jobDescRef.current.innerHTML,

      KeyResponsibilities: keyRespRef.current.innerHTML,
      KeyResponsibilites: keyRespRef.current.innerHTML,

      jobpostdate: new Date().toLocaleDateString("en-GB"),
    };

    try {
      const res = await fetch(API_ENDPOINTS.CREATE_JOB, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.status) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Job posted successfully",
          confirmButtonColor: "#6b1d2b",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to post job",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen p-4 md:p-10">
      <div className="bg-white rounded-md p-6 md:p-10">
        <h2 className="text-xl font-semibold mb-8">JOB POST</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
          <Input
            label="Position Name"
            name="Positionname"
            value={formData.Positionname}
            onChange={handleChange}
          />
          <Input
            label="Job Location"
            name="JobLocation"
            value={formData.JobLocation}
            onChange={handleChange}
          />
          <Input
            label="Experience"
            name="Experience"
            value={formData.Experience}
            onChange={handleChange}
          />
          <Input label="Job Type" name="JobType" value={formData.JobType} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <Editor
            label="JobDescription"
            editorRef={jobDescRef}
            exec={exec}
            applyList={applyList}
            applyAlign={applyAlign}
            onImage={handleImageClick}
          />

          <Editor
            label="KeyResponsibilities"
            editorRef={keyRespRef}
            exec={exec}
            applyList={applyList}
            applyAlign={applyAlign}
            onImage={handleImageClick}
          />
        </div>

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />

        <div className="flex justify-center mt-12">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="text-white px-12 py-3 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-[1.02] transition-transform"
            style={{ background: "linear-gradient(to right, #00E676, #6A0DAD)" }}
          >
            {submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                SUBMITTING...
              </>
            ) : (
              "SUBMIT"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full border border-[#d9e1ec] px-3 py-2 outline-none"
      />
    </div>
  );
}

function Editor({ label, editorRef, exec, applyList, applyAlign, onImage }) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium mb-3">{label}</label>

      <div className="border border-[#d9e1ec] rounded-md">
        <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-b bg-[#fafafa] text-sm text-gray-700">
          <button onClick={() => exec(editorRef, "bold")} className="font-bold">
            B
          </button>
          <button onClick={() => exec(editorRef, "italic")} className="italic">
            I
          </button>
          <button onClick={() => exec(editorRef, "underline")} className="underline">
            U
          </button>

          <button onClick={() => applyList(editorRef, "ordered")}>1.</button>
          <button onClick={() => applyList(editorRef, "bullet")}>•</button>

          <button onClick={() => applyAlign(editorRef, "justifyLeft")}>≡</button>
          <button onClick={() => applyAlign(editorRef, "justifyCenter")}>≣</button>
          <button onClick={() => applyAlign(editorRef, "justifyRight")}>≢</button>

          <button onClick={() => onImage(editorRef)}>
            <FiImage size={18} />
          </button>

          <button className="ml-auto" onClick={() => exec(editorRef, "removeFormat")}>
            <FiType size={18} />
          </button>
        </div>

        <div
          ref={editorRef}
          contentEditable
          className="
                        min-h-[170px] max-h-[260px] p-4 outline-none overflow-y-auto
                        [&_p]:mb-2
                        [&_strong]:font-semibold
                        [&_ul]:list-disc [&_ul]:pl-6
                        [&_ol]:list-decimal [&_ol]:pl-6
                        [&_li]:mb-1
"
        />
      </div>
    </div>
  );
}
