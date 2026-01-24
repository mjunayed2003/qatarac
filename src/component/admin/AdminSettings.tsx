import React, { useState } from "react";
import { FaSave, FaGlobe, FaUser, FaLock, FaCamera } from "react-icons/fa";

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"general" | "profile" | "security">("general");

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#050614]">Settings</h2>
        <p className="text-gray-500 text-sm">Manage your website configuration and profile.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR TABS */}
        <div className="w-full md:w-64 flex flex-col gap-2">
          <TabButton 
            active={activeTab === "general"} 
            onClick={() => setActiveTab("general")} 
            icon={<FaGlobe />} 
            label="General Settings" 
          />
          <TabButton 
            active={activeTab === "profile"} 
            onClick={() => setActiveTab("profile")} 
            icon={<FaUser />} 
            label="Profile Info" 
          />
          <TabButton 
            active={activeTab === "security"} 
            onClick={() => setActiveTab("security")} 
            icon={<FaLock />} 
            label="Security" 
          />
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
          
          {/* 1. GENERAL SETTINGS */}
          {activeTab === "general" && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-[#050614] border-b pb-2">Website Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Website Name" defaultValue="Qatar AC" />
                <InputGroup label="Support Phone" defaultValue="+974 7755 3466" />
                <InputGroup label="Support Email" defaultValue="info@redrockaircon.com" />
                <InputGroup label="Address" defaultValue="Street 24, Doha, Qatar" />
              </div>
              <div className="pt-4">
                <SaveButton />
              </div>
            </div>
          )}

          {/* 2. PROFILE SETTINGS */}
          {activeTab === "profile" && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-[#050614] border-b pb-2">My Profile</h3>
              
              {/* Avatar Upload */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src="https://ui-avatars.com/api/?name=Admin+User&background=E13232&color=fff" 
                    alt="Avatar" 
                    className="w-24 h-24 rounded-full border-4 border-gray-100"
                  />
                  <button className="absolute bottom-0 right-0 bg-[#050614] text-white p-2 rounded-full hover:bg-gray-800 transition">
                    <FaCamera size={12} />
                  </button>
                </div>
                <div>
                   <h4 className="font-bold text-lg">Admin User</h4>
                   <p className="text-gray-500 text-sm">Super Administrator</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" defaultValue="Admin User" />
                <InputGroup label="Email Address" defaultValue="admin@qatarac.com" />
                <InputGroup label="Username" defaultValue="admin_01" />
              </div>
              <div className="pt-4">
                <SaveButton />
              </div>
            </div>
          )}

          {/* 3. SECURITY SETTINGS */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-[#050614] border-b pb-2">Change Password</h3>
              <div className="max-w-md space-y-4">
                <InputGroup label="Current Password" type="password" placeholder="********" />
                <InputGroup label="New Password" type="password" placeholder="********" />
                <InputGroup label="Confirm New Password" type="password" placeholder="********" />
              </div>
              <div className="pt-4">
                <SaveButton />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// ==========================
// HELPER COMPONENTS
// ==========================

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-left ${
      active
        ? "bg-[#E13232] text-white shadow-md"
        : "bg-white text-gray-600 hover:bg-gray-50"
    }`}
  >
    <span className="text-lg">{icon}</span>
    {label}
  </button>
);

const InputGroup = ({ label, type = "text", defaultValue, placeholder }: { label: string; type?: string; defaultValue?: string; placeholder?: string }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition"
    />
  </div>
);

const SaveButton = () => (
  <button className="bg-[#050614] text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition flex items-center gap-2">
    <FaSave /> Save Changes
  </button>
);

export default AdminSettings;