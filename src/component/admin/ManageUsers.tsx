import React, { useState } from "react";
import { FaUserPlus, FaTrash, FaEdit, FaSearch, FaUserShield, FaUserCog } from "react-icons/fa";

// 1. TYPE DEFINITION
interface User {
  id: number;
  name: string;
  email: string;
  role: "Super Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive";
  avatar: string;
}

// 2. DUMMY DATA
const initialUsers: User[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@qatarac.com",
    role: "Super Admin",
    status: "Active",
    avatar: "https://ui-avatars.com/api/?name=Admin+User&background=E13232&color=fff",
  },
  {
    id: 2,
    name: "John Editor",
    email: "john@qatarac.com",
    role: "Editor",
    status: "Active",
    avatar: "https://ui-avatars.com/api/?name=John+Editor&background=050614&color=fff",
  },
  {
    id: 3,
    name: "Sarah Viewer",
    email: "sarah@gmail.com",
    role: "Viewer",
    status: "Inactive",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Viewer&background=gray&color=fff",
  },
];

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  // DELETE USER
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // SEARCH FILTER
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-[#050614] flex items-center gap-2">
            <FaUserCog className="text-[#E13232]" /> Manage Users
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage admin access and user roles.
          </p>
        </div>
        <button className="bg-[#E13232] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition flex items-center gap-2 shadow-lg shadow-red-500/30">
          <FaUserPlus /> Add New User
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* USER TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#050614] text-white text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  
                  {/* Name & Avatar */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-gray-200" />
                      <div>
                        <div className="font-bold text-[#050614]">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1 font-medium ${user.role === "Super Admin" ? "text-[#E13232]" : "text-gray-600"}`}>
                      {user.role === "Super Admin" && <FaUserShield />}
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-blue-500 hover:text-blue-700 bg-blue-50 p-2 rounded transition" title="Edit">
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded transition" 
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageUsers;