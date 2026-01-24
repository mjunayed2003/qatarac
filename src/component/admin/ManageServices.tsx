import React, { useState } from "react";
import { FaPlus, FaSearch, FaEdit, FaTrash, FaTools } from "react-icons/fa";

// টাইপ ডেফিনিশন (TypeScript এর জন্য)
interface ServiceItem {
  id: number;
  title: string;
  category: string;
  price: string;
  status: "Active" | "Inactive";
  image: string;
}

// ডামি ডাটা (ব্যাকএন্ড না থাকায় টেস্টিং এর জন্য)
const initialServices: ServiceItem[] = [
  {
    id: 1,
    title: "Split AC Installation",
    category: "Installation",
    price: "250 QAR",
    status: "Active",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "General AC Service",
    category: "Maintenance",
    price: "150 QAR",
    status: "Active",
    image: "https://images.unsplash.com/photo-1631545763952-320c24387d7e?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gas Refilling (R22)",
    category: "Repair",
    price: "180 QAR",
    status: "Inactive",
    image: "https://images.unsplash.com/photo-1635327265936-e8d132644265?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "PCB Repair",
    category: "Repair",
    price: "350 QAR",
    status: "Active",
    image: "https://images.unsplash.com/photo-1593106578502-27f320723b2d?q=80&w=100&auto=format&fit=crop",
  },
];

const ManageServices: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [searchTerm, setSearchTerm] = useState("");

  // ডিলেট ফাংশন
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      const filtered = services.filter((service) => service.id !== id);
      setServices(filtered);
    }
  };

  // সার্চ লজিক
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* ======================= */}
      {/* 1. HEADER SECTION       */}
      {/* ======================= */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-[#050614] flex items-center gap-2">
            <FaTools className="text-[#E13232]" /> Manage Services
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Add, edit or delete your AC services from here.
          </p>
        </div>
        <button className="bg-[#E13232] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition flex items-center gap-2 shadow-lg shadow-red-500/30">
          <FaPlus /> Add New Service
        </button>
      </div>

      {/* ======================= */}
      {/* 2. SEARCH BAR           */}
      {/* ======================= */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search services by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* ======================= */}
      {/* 3. SERVICE TABLE        */}
      {/* ======================= */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Table Head */}
            <thead className="bg-[#050614] text-white text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Service Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50 transition-colors duration-200">
                    {/* Image */}
                    <td className="px-6 py-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    
                    {/* Title */}
                    <td className="px-6 py-4 font-bold text-[#050614]">
                      {service.title}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {service.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 font-medium">
                      {service.price}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          service.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {service.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition">
                          <FaEdit />
                        </button>
                        <button 
                          onClick={() => handleDelete(service.id)}
                          className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-md transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No services found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageServices;