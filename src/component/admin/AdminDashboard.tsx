import React from "react";
import StatsCard from "./StatsCard"; // উপরের কার্ডটি ইম্পোর্ট করা হলো
import { FaUsers, FaTools, FaImages, FaEnvelope, FaEllipsisV } from "react-icons/fa";

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* Page Title */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-[#050614]">Dashboard Overview</h2>
          <p className="text-gray-500 text-sm">Welcome back, here's what's happening today.</p>
        </div>
        <button className="bg-[#E13232] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition">
          Generate Report
        </button>
      </div>

      {/* ======================= */}
      {/* 1. STATS GRID           */}
      {/* ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Users" 
          count="1,250" 
          icon={<FaUsers />} 
          trend="+12% this month"
        />
        <StatsCard 
          title="Active Services" 
          count="45" 
          icon={<FaTools />} 
        />
        <StatsCard 
          title="Gallery Images" 
          count="120" 
          icon={<FaImages />} 
        />
        <StatsCard 
          title="New Messages" 
          count="8" 
          icon={<FaEnvelope />} 
          trend="+3 new today"
        />
      </div>

      {/* ======================= */}
      {/* 2. RECENT ACTIVITY TABLE */}
      {/* ======================= */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-[#050614]">Recent Enquiries</h3>
          <button className="text-gray-400 hover:text-[#E13232]"><FaEllipsisV /></button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-800 font-bold uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-[#050614]">Ahmed Khan</td>
                <td className="px-6 py-4">AC Repair</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">Pending</span></td>
                <td className="px-6 py-4">Oct 24, 2023</td>
                <td className="px-6 py-4 text-right"><button className="text-[#E13232] font-bold hover:underline">View</button></td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-[#050614]">John Doe</td>
                <td className="px-6 py-4">Installation</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Completed</span></td>
                <td className="px-6 py-4">Oct 22, 2023</td>
                <td className="px-6 py-4 text-right"><button className="text-[#E13232] font-bold hover:underline">View</button></td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-[#050614]">Fatima Ali</td>
                <td className="px-6 py-4">Maintenance</td>
                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">In Progress</span></td>
                <td className="px-6 py-4">Oct 20, 2023</td>
                <td className="px-6 py-4 text-right"><button className="text-[#E13232] font-bold hover:underline">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;