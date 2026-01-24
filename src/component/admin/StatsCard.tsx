import React from "react";

interface StatsCardProps {
  title: string;
  count: string;
  icon: React.ReactNode;
  trend?: string; // Optional: যেমন "+5% increase"
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count, icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
      {/* Icon Box */}
      <div className="p-4 rounded-full bg-red-50 text-[#E13232] text-2xl">
        {icon}
      </div>
      
      {/* Info */}
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-[#050614] mt-1">{count}</h3>
        {trend && <span className="text-green-500 text-xs font-bold">{trend}</span>}
      </div>
    </div>
  );
};

export default StatsCard;