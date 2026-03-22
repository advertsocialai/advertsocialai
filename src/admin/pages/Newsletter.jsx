import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { API_ENDPOINTS } from "../../lib/api";

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState([]);
  const [loadingSubs, setLoadingSubs] = useState(true);
  const [email, setEmail] = useState("");
  const [removeEmail, setRemoveEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [unsubscribing, setUnsubscribing] = useState(false);
  const [sending, setSending] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);

  // Fetch all subscribers on mount
  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setLoadingSubs(true);
    try {
      const res = await fetch(API_ENDPOINTS.GET_SUBSCRIBERS);
      const data = await res.json();

      let list = [];
      if (Array.isArray(data)) list = data;
      else if (data && Array.isArray(data.data)) list = data.data;
      else if (data && Array.isArray(data.result)) list = data.result;

      setSubscribers(list);
    } catch (err) {
    } finally {
      setLoadingSubs(false);
    }
  };

  const addSubscriber = async () => {
    if (!email.trim()) {
      Swal.fire("Error", "Please enter an email address", "warning");
      return;
    }
    setSubscribing(true);
    try {
      const res = await fetch(API_ENDPOINTS.SUBSCRIBE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setEmail("");
        Swal.fire("Success", "Subscribed successfully!", "success");
        fetchSubscribers(); // Refresh the list
      } else if (res.status === 409) {
        Swal.fire("Info", "Email is already subscribed.", "info");
      } else {
        Swal.fire("Error", "Failed to subscribe.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setSubscribing(false);
    }
  };

  const removeSubscriber = async () => {
    if (!removeEmail.trim()) {
      Swal.fire("Error", "Please enter an email to remove", "warning");
      return;
    }
    setUnsubscribing(true);
    try {
      const res = await fetch(API_ENDPOINTS.UNSUBSCRIBE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: removeEmail }),
      });

      if (res.ok) {
        setRemoveEmail("");
        Swal.fire("Success", "Unsubscribed successfully!", "success");
        fetchSubscribers(); // Refresh the list
      } else {
        Swal.fire("Error", "Failed to unsubscribe.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setUnsubscribing(false);
    }
  };

  const sendNewsletter = async () => {
    if (!subject.trim() || !content.trim()) {
      Swal.fire("Error", "Please enter subject and content", "warning");
      return;
    }
    if (selectedEmails.length === 0) {
      Swal.fire("Error", "Please select at least one subscriber to send to", "warning");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(API_ENDPOINTS.SEND_NEWSLETTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, content, emails: selectedEmails }),
      });

      if (res.ok) {
        Swal.fire("Success", `Newsletter sent to ${selectedEmails.length} subscriber(s)!`, "success");
        setSubject("");
        setContent("");
        setSelectedEmails([]);
      } else {
        Swal.fire("Error", "Failed to send newsletter.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong while sending newsletter.", "error");
    } finally {
      setSending(false);
    }
  };

  // Spinner component
  const Spinner = () => (
    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Filter subscribers by search
  const filteredSubscribers = subscribers.filter((sub) => {
    if (!search) return true;
    const subEmail = typeof sub === "string" ? sub : (sub.email || sub.Email || "");
    return subEmail.toLowerCase().includes(search.toLowerCase());
  });

  // Helper to get email string from a subscriber object
  const getEmail = (sub) => typeof sub === "string" ? sub : (sub.email || sub.Email || "");

  const toggleSelectEmail = (emailStr) => {
    setSelectedEmails((prev) =>
      prev.includes(emailStr) ? prev.filter((e) => e !== emailStr) : [...prev, emailStr]
    );
  };

  const toggleSelectAll = () => {
    const allEmails = filteredSubscribers.map(getEmail);
    const allSelected = allEmails.every((e) => selectedEmails.includes(e));
    if (allSelected) {
      setSelectedEmails((prev) => prev.filter((e) => !allEmails.includes(e)));
    } else {
      setSelectedEmails((prev) => [...new Set([...prev, ...allEmails])]);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        📬 Newsletter Admin Dashboard
      </h1>

      {/* ACTIONS ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Add Subscriber */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-gray-700">Add Subscriber</h4>
          <input
            type="email"
            placeholder="Subscriber Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={addSubscriber}
            disabled={subscribing}
            className="w-full text-white px-4 py-2.5 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(to right, #00E676, #6A0DAD)' }}
          >
            {subscribing ? <><Spinner /> Subscribing...</> : "Subscribe"}
          </button>
        </div>

        {/* Remove Subscriber */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-gray-700">Remove Subscriber</h4>
          <input
            type="email"
            placeholder="Email to remove"
            value={removeEmail}
            onChange={(e) => setRemoveEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <button
            onClick={removeSubscriber}
            disabled={unsubscribing}
            className="w-full text-white px-4 py-2.5 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(to right, #00E676, #6A0DAD)' }}
          >
            {unsubscribing ? <><Spinner /> Removing...</> : "Unsubscribe"}
          </button>
        </div>

        {/* Send Newsletter */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-3 text-gray-700">Send Newsletter</h4>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <textarea
            rows="2"
            placeholder="Newsletter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="text-xs text-gray-500 mb-2">
            {selectedEmails.length > 0
              ? `✅ ${selectedEmails.length} email(s) selected`
              : "⚠️ Select emails from the table below"}
          </div>
          <button
            onClick={sendNewsletter}
            disabled={sending || selectedEmails.length === 0}
            className="w-full text-white px-4 py-2.5 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            style={{ background: 'linear-gradient(to right, #00E676, #6A0DAD)' }}
          >
            {sending ? <><Spinner /> Sending...</> : `Send Newsletter (${selectedEmails.length})`}
          </button>
        </div>
      </div>

      {/* SUBSCRIBERS TABLE */}
      <div className="border-t pt-6">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <h3 className="text-lg font-bold text-gray-800">
            Subscribers
            <span className="ml-2 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {filteredSubscribers.length}
            </span>
          </h3>
          <input
            type="text"
            placeholder="Search subscribers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded bg-gray-100 w-full md:w-1/3"
          />
        </div>

        {loadingSubs ? (
          <div className="p-10 text-center text-gray-500">Loading subscribers...</div>
        ) : (
          <div className="overflow-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border w-10">
                    <input
                      type="checkbox"
                      checked={filteredSubscribers.length > 0 && filteredSubscribers.every((s) => selectedEmails.includes(getEmail(s)))}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </th>
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Subscribed At</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.length > 0 ? (
                  filteredSubscribers.map((sub, i) => {
                    const subEmail = getEmail(sub);
                    const subDate = typeof sub === "object" ? (sub.created_at || sub.createdAt || sub.subscribed_at || "—") : "—";
                    const isChecked = selectedEmails.includes(subEmail);

                    return (
                      <tr key={i} className={`border hover:bg-gray-50 ${isChecked ? 'bg-blue-50' : ''}`}>
                        <td className="p-3 border">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleSelectEmail(subEmail)}
                            className="w-4 h-4 cursor-pointer"
                          />
                        </td>
                        <td className="p-3 border text-sm text-gray-600">{i + 1}</td>
                        <td className="p-3 border text-sm text-gray-600">{subEmail}</td>
                        <td className="p-3 border text-sm text-gray-600">
                          {subDate !== "—" ? new Date(subDate).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-gray-500 font-medium">
                      No subscribers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
