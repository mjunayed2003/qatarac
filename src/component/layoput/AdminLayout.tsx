import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { 
  FaHome, 
  FaTools, 
  FaImages, 
  FaBlog, 
  FaEnvelope, 
  FaUsers, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes,
  FaCog 
} from "react-icons/fa";

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Sidebar মেনু আইটেমগুলো
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },
    { name: "Manage Services", path: "/admin/services", icon: <FaTools /> },
    { name: "Gallery Images", path: "/admin/gallery", icon: <FaImages /> },
    { name: "Blog Posts", path: "/admin/blog", icon: <FaBlog /> },
    { name: "Messages", path: "/admin/messages", icon: <FaEnvelope /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
  ];

  // Logout Function
  const handleLogout = () => {
    // এখানে লগআউট লজিক বসাবেন (যেমন: token remove করা)
    const confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      navigate("/"); // হোম পেজে পাঠিয়ে দিবে
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* ======================= */}
      {/* 1. SIDEBAR (Navigation) */}
      {/* ======================= */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#050614] text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header / Logo */}
        <div className="flex items-center justify-between h-16 px-6 bg-[#03040e] border-b border-gray-800">
          <h1 className="text-2xl font-extrabold tracking-tighter">
            <span className="text-[#E13232]">QATAR AC</span>
            <span className="text-white ml-1">ADMIN</span>
          </h1>
          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden text-gray-400 hover:text-white"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)} // মোবাইলে ক্লিক করলে মেনু বন্ধ হবে
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-[#E13232] text-white shadow-md"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button (Bottom) */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-all"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ======================= */}
      {/* 2. MAIN CONTENT AREA    */}
      {/* ======================= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white shadow-sm z-40">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-gray-600 hover:text-[#E13232]"
          >
            <FaBars size={24} />
          </button>

          {/* Page Title (Optional) or Breadcrumbs */}
          <h2 className="text-lg font-bold text-gray-700 hidden md:block">
            Welcome, Admin
          </h2>

          {/* Profile / Right Side Info */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800">Super Admin</p>
              <p className="text-xs text-gray-500">admin@qatarac.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-[#E13232] overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=E13232&color=fff" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Main Page Content (Where Outlet renders) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          <div className="container mx-auto">
             <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Overlay (Background Dimmer) */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        ></div>
      )}

    </div>
  );
};

export default AdminLayout;