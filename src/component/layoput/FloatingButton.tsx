import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButton: React.FC = () => {
  const phoneNumber = "+8801939104157"; // আপনার নম্বর
  const whatsappNumber = "8801939104157"; // WhatsApp নম্বর (Country code সহ, '+' ছাড়া)

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col gap-4 items-end">
      
      {/* ======================= */}
      {/*    WHATSAPP BUTTON      */}
      {/* ======================= */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-green-500/50 transition-all cursor-pointer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
        <span className="hidden md:inline font-bold text-base">WhatsApp</span>
      </motion.a>

      {/* ======================= */}
      {/*      CALL BUTTON        */}
      {/* ======================= */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center gap-2 bg-[#E13232] text-white px-3 py-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-red-500/50 transition-all cursor-pointer group"
        title="Emergency Call"
      >
        {/* Pulsing Effect */}
        <span className="absolute inset-0 rounded-full bg-[#E13232] opacity-75 animate-ping"></span>
        
        <FaPhoneAlt className="text-xl md:text-2xl relative z-10 animate-bounce" />
        <span className="hidden md:inline font-bold text-base relative z-10">Emergency Call</span>
      </motion.a>

    </div>
  );
};

export default FloatingButton;