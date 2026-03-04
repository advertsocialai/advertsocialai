import React from "react";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { name: "Dashboard", path: "/admin", exact: true },
    // { name: "Employees", path: "/admin/employees" },
    { name: "Contacts", path: "/admin/contacts" },
    { name: "Pages", path: "/admin/pages" },
    { name: "All Pages", path: "/admin/all-pages" },
    { name: "Users", path: "/admin/users" },
    { name: "FAQs", path: "/admin/faqs" },
    { name: "Add Blogs", path: "/admin/blog" },
    { name: "Blogs", path: "/admin/bloglist" },
    { name: "Newsletter", path: "/admin/newsletter" },
    { name: "JobPosts", path: "/admin/jobpost" },
    { name: "Jobs", path: "/admin/jobstable" },
    { name: "RegisteredUsers", path: "/admin/registertable" }
  ];

  return (
    <aside
      className={`
        fixed left-0 top-0 lg:top-[70px]
        w-[260px] h-full lg:h-[calc(100vh-70px)]
        overflow-y-auto text-white shadow-2xl z-50
        bg-[#1B1A1A] transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        border-r border-white/5
      `}
    >
      <div className="flex items-center justify-between p-6 lg:hidden border-b border-white/5 bg-[#1B1A1A]">
        <img src="/assets/images/logo.png" alt="Logo" className="w-[120px] invert brightness-0" />
        <button onClick={() => setIsOpen(false)} className="p-2 text-white/70 hover:text-white">
          <FiX size={24} />
        </button>
      </div>

      <ul className="mt-4 px-3 space-y-1 pb-10">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.exact}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3.5 block rounded-xl transition-all duration-200 border border-transparent
                ${isActive
                  ? "bg-gradient-to-r from-[#00E676]/20 to-[#6A0DAD]/20 border-white/10 text-white font-bold shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/5"}`
              }
            >
              <div className="flex items-center gap-3">
                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-0'}`} />
                {item.name}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
