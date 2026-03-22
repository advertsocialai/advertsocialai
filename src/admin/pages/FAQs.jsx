import React, { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../lib/api";

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);

  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  // DELETE modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // INLINE EDIT states
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ question: "", answer: "" });

  // Load FAQs from API
  useEffect(() => {
    async function loadFAQs() {
      try {
        const res = await fetch(API_ENDPOINTS.GET_ALL_FAQS);
        const data = await res.json();
        setFaqs(data);
      } catch (err) {}
    }
    loadFAQs();
  }, []);

  // Handle add form
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Add FAQ (POST)
  async function addFAQ() {
    if (!form.question.trim() || !form.answer.trim()) {
      alert("Please fill Question and Answer");
      return;
    }

    const newFAQ = {
      question: form.question,
      answer: form.answer,
    };

    try {
      const res = await fetch(API_ENDPOINTS.CREATE_FAQ, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFAQ),
      });

      const savedFAQ = await res.json();
      setFaqs([savedFAQ, ...faqs]);

      setForm({ question: "", answer: "" });
    } catch (err) {
      alert("Error adding FAQ");
    }
  }

  // edit (PUT)
  async function saveInlineEdit(id) {
    try {
      const res = await fetch(API_ENDPOINTS.UPDATE_FAQ(id), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: editForm.question,
          answer: editForm.answer,
        }),
      });

      const updated = await res.json();

      setFaqs(faqs.map((faq) => (faq.id === id ? updated : faq)));

      setEditingId(null);
    } catch (err) {
      alert("Error updating FAQ");
    }
  }

  // DELETE
  async function confirmDelete() {
    try {
      await fetch(API_ENDPOINTS.DELETE_FAQ(deleteId), {
        method: "DELETE",
      });

      setFaqs(faqs.filter((f) => f.id !== deleteId));
    } catch (err) {
      alert("Error deleting FAQ");
    }

    setShowDeleteModal(false);
    setDeleteId(null);
  }

  // Delete Modal
  function DeleteModal({ open, onClose, onConfirm }) {
    if (!open) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
        <div className="bg-white w-[420px] rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Delete Confirmation</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-black text-xl">
              ×
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚠️</span>
            <p className="text-gray-700 text-sm">Are you sure you want to delete this FAQ?</p>
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              ✘ No
            </button>

            <button
              onClick={onConfirm}
              className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              ✔ Yes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col lg:flex-row gap-6 md:gap-10">
      {/* LEFT - Create FAQ */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border w-full lg:w-[40%] h-fit">
        <h2 className="text-xl font-semibold mb-4">Create a new FAQ</h2>

        <input
          type="text"
          name="question"
          placeholder="Question"
          value={form.question}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
        />

        <textarea
          name="answer"
          placeholder="Answer"
          value={form.answer}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 h-24"
        />

        <button
          onClick={addFAQ}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Add FAQ
        </button>
      </div>

      {/* RIGHT - FAQ LIST */}
      <div className="w-full lg:w-[60%] flex flex-col gap-6">
        {faqs.length === 0 && <p className="text-gray-500 text-lg">No FAQs added yet.</p>}

        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white p-4 md:p-8 rounded-xl shadow-lg border">
            {editingId === faq.id ? (
              <>
                {/* Inline Edit Fields */}
                <input
                  type="text"
                  value={editForm.question}
                  onChange={(e) => setEditForm({ ...editForm, question: e.target.value })}
                  className="w-full p-4 border rounded-lg mb-4 text-lg"
                />

                <textarea
                  value={editForm.answer}
                  onChange={(e) => setEditForm({ ...editForm, answer: e.target.value })}
                  className="w-full p-4 border rounded-lg h-32 mb-6"
                />

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => saveInlineEdit(faq.id)}
                    className="px-6 py-2 border border-gray-700 text-gray-800 rounded-md hover:bg-gray-100"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(faq.id);
                      setShowDeleteModal(true);
                    }}
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>

                <p className="text-gray-600 mb-5 leading-relaxed">{faq.answer}</p>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setEditingId(faq.id);
                      setEditForm({
                        question: faq.question,
                        answer: faq.answer,
                      });
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(faq.id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* DELETE MODAL */}
      <DeleteModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
