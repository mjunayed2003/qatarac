import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaTrash, 
  FaSearch, 
  FaReply, 
  FaPhoneAlt, 
  FaCheckDouble,
  FaTimes
} from "react-icons/fa";

// 1. TYPE DEFINITION
interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: "Read" | "Unread";
}

// 2. DUMMY DATA
const initialMessages: Message[] = [
  {
    id: 1,
    name: "Rahim Uddin",
    email: "rahim@example.com",
    phone: "+974 3322 1100",
    service: "AC Repair",
    message: "My Split AC is making a loud noise and not cooling properly. Need urgent help.",
    date: "Oct 24, 2023",
    status: "Unread",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+974 5566 7788",
    service: "Installation",
    message: "I want to install 3 new AC units in my apartment at The Pearl. Can you send a quote?",
    date: "Oct 23, 2023",
    status: "Unread",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    email: "ali@example.com",
    phone: "+974 6699 0011",
    service: "Maintenance",
    message: "Need regular servicing for my office ACs. Around 10 units.",
    date: "Oct 20, 2023",
    status: "Read",
  },
];

const ManageMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // SEARCH FILTER
  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // DELETE MESSAGE
  const handleDelete = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal opening
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((msg) => msg.id !== id));
      if (selectedMessage?.id === id) setSelectedMessage(null);
    }
  };

  // MARK AS READ
  const handleViewMessage = (msg: Message) => {
    setSelectedMessage(msg);
    // যদি Unread থাকে তবে Read করে দিবে
    if (msg.status === "Unread") {
      const updatedMessages = messages.map((m) =>
        m.id === msg.id ? { ...m, status: "Read" as const } : m
      );
      setMessages(updatedMessages);
    }
  };

  // STATS
  const unreadCount = messages.filter(m => m.status === "Unread").length;

  return (
    <div className="space-y-6">
      
      {/* ======================= */}
      {/* 1. HEADER & STATS       */}
      {/* ======================= */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-[#050614] flex items-center gap-2">
            <FaEnvelope className="text-[#E13232]" /> Inbox
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            You have <span className="text-[#E13232] font-bold">{unreadCount}</span> unread messages.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-64">
           <input 
             type="text" 
             placeholder="Search emails..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E13232]"
           />
           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* ======================= */}
      {/* 2. MESSAGE LIST         */}
      {/* ======================= */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Sender</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Message Preview</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    onClick={() => handleViewMessage(msg)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      msg.status === "Unread" ? "bg-red-50/50 hover:bg-red-50" : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Status Icon */}
                    <td className="px-6 py-4">
                      {msg.status === "Unread" ? (
                        <span className="text-[#E13232]" title="Unread"><FaEnvelope /></span>
                      ) : (
                        <span className="text-gray-400" title="Read"><FaEnvelopeOpen /></span>
                      )}
                    </td>

                    {/* Sender */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-[#050614]">{msg.name}</div>
                      <div className="text-xs text-gray-500">{msg.email}</div>
                    </td>

                    {/* Service */}
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                        {msg.service}
                      </span>
                    </td>

                    {/* Preview */}
                    <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                      {msg.message}
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                      {msg.date}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={(e) => handleDelete(msg.id, e)}
                        className="text-gray-400 hover:text-[#E13232] p-2 transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================= */}
      {/* 3. MESSAGE MODAL        */}
      {/* ======================= */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="bg-[#050614] text-white p-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{selectedMessage.service} Enquiry</h3>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                   {selectedMessage.date} 
                   {selectedMessage.status === "Read" && <span className="flex items-center text-green-400 gap-1 text-xs"><FaCheckDouble/> Seen</span>}
                </p>
              </div>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="text-gray-400 hover:text-white transition"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Sender Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                 <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                    <p className="font-bold text-[#050614]">{selectedMessage.name}</p>
                 </div>
                 <div>
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone</label>
                    <p className="font-bold text-[#E13232] flex items-center gap-2">
                       <FaPhoneAlt size={12}/> {selectedMessage.phone}
                    </p>
                 </div>
                 <div className="md:col-span-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                    <p className="font-medium text-gray-700">{selectedMessage.email}</p>
                 </div>
              </div>

              {/* Message Content */}
              <div>
                 <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Message</label>
                 <div className="text-gray-700 leading-relaxed bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    {selectedMessage.message}
                 </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                 <button 
                   onClick={() => setSelectedMessage(null)}
                   className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition"
                 >
                   Close
                 </button>
                 <a 
                   href={`mailto:${selectedMessage.email}`}
                   className="px-6 py-2 rounded-lg bg-[#E13232] text-white font-bold hover:bg-red-700 transition flex items-center gap-2"
                 >
                   <FaReply /> Reply via Email
                 </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageMessages;