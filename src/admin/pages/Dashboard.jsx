import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiMessageSquare,
  FiLayers,
  FiUsers,
  FiPlus,
  FiArrowRight
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../lib/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    blogs: 0,
    faqs: 0,
    pages: 0,
    contacts: 0
  });
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    async function fetchStats() {
      try {
        const [blogsRes, faqsRes, pagesRes, contactsRes] = await Promise.all([
          fetch(API_ENDPOINTS.GET_ALL_BLOGS).then((r) => r.json()),
          fetch(API_ENDPOINTS.GET_ALL_FAQS).then((r) => r.json()),
          fetch(API_ENDPOINTS.GET_ALL_JOBS).then((r) => r.json()),
          fetch(API_ENDPOINTS.GET_ALL_CONTACTS).then((r) => r.json()),
        ]);

        setStats({
          blogs: blogsRes.data?.length || 0,
          faqs: faqsRes.length || 0,
          pages: pagesRes.data?.length || pagesRes.length || 0,
          contacts: contactsRes.data?.length || 0
        });
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Blogs", value: stats.blogs, icon: <FiFileText />, color: "from-green-400 to-emerald-600" },
    { label: "Total FAQs", value: stats.faqs, icon: <FiMessageSquare />, color: "from-purple-400 to-indigo-600" },
    { label: "Total Jobs", value: stats.pages, icon: <FiLayers />, color: "from-blue-400 to-cyan-600" },
    { label: "Total Contacts", value: stats.contacts, icon: <FiUsers />, color: "from-pink-400 to-rose-600" },
  ];

  const quickActions = [
    { title: "Create Blog", desc: "Write and publish a new blog post", path: "/admin/blog", icon: <FiPlus /> },
    { title: "Add New Page", desc: "Build a new service or info page", path: "/admin/pages", icon: <FiPlus /> },
    { title: "View Contacts", desc: "Check recent leads and inquiries", path: "/admin/users", icon: <FiArrowRight /> },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#6A0DAD]">{user.name || "Admin"}</span>
          </h1>
          <p className="text-gray-500 mt-2">Here's what's happening today in your ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs text-gray-500 font-medium whitespace-nowrap shadow-sm">
            Last Login: {new Date().toLocaleDateString()}
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-6 bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-lg mb-4`}>
                {stat.icon}
              </div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">
                {loading ? "..." : stat.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 ml-1">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              onClick={() => navigate(action.path)}
              className="p-6 bg-white border border-gray-100 shadow-md shadow-gray-200/40 rounded-2xl cursor-pointer group hover:border-[#00E676]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#00E676]/10 group-hover:text-[#00E676] transition-colors">
                  {action.icon}
                </div>
                <FiArrowRight className="text-gray-400 group-hover:text-[#00E676] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{action.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{action.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Banner/Promo */}

    </div>
  );
}
