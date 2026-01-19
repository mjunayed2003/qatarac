import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

// ==============================
// 1. DATA (Images & Categories)
// ==============================
const categories = ["All", "Installation", "Repair", "Maintenance", "Satellite"];

const portfolioData = [
  {
    id: 1,
    category: "Installation",
    title: "Split AC Installation",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Repair",
    title: "Circuit Board Repair",
    image: "https://images.unsplash.com/photo-1581094794329-cd8119604f89?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Satellite",
    title: "Dish Setup Doha",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0eda0e666?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Maintenance",
    title: "AC Deep Cleaning",
    image: "https://images.unsplash.com/photo-1631545763952-320c24387d7e?q=80&w=2056&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Installation",
    title: "Commercial AC Setup",
    image: "https://images.unsplash.com/photo-1517429117621-e0c6553258c4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Satellite",
    title: "Receiver Wiring",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Repair",
    title: "Compressor Fixing",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Installation",
    title: "Window AC Fitting",
    image: "https://images.unsplash.com/photo-1593106578502-27f320723b2d?q=80&w=1948&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "Maintenance",
    title: "Gas Refilling",
    image: "https://images.unsplash.com/photo-1635327265936-e8d132644265?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "Repair",
    title: "Leakage Repair",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "Satellite",
    title: "Signal Tuning",
    image: "https://images.unsplash.com/photo-1521302200778-3336845cda35?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "Installation",
    title: "Central AC Work",
    image: "https://images.unsplash.com/photo-1605218456194-96156f707f15?q=80&w=2070&auto=format&fit=crop",
  },
];

// ==============================
// 2. COMPONENT
// ==============================
const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter Logic
  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-20">
      
      {/* HEADER SECTION */}
      <section className="bg-[#050614] text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#E13232] font-bold uppercase tracking-widest text-xs md:text-sm mb-2"
          >
            Our Work
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-6xl font-extrabold"
          >
            Project Gallery
          </motion.h1>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="container mx-auto px-4 mt-8 mb-8 md:mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-base font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#E13232] text-white border-[#E13232] shadow-lg scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#E13232] hover:text-[#E13232]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* IMAGE GRID */}
      <motion.div 
        layout 
        className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
      >
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-xl bg-white"
              onClick={() => setSelectedImage(item.image)}
            >
              {/* Image Container - Adjusted Height for Mobile */}
              <div className="h-32 xs:h-40 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-2 md:p-4">
                <div className="bg-[#E13232] p-2 md:p-3 rounded-full text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FaSearchPlus size={16} />
                </div>
                <h3 className="text-white text-xs md:text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-[10px] md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* LIGHTBOX (MODAL) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-[#E13232] transition-colors bg-white/10 p-2 rounded-full"
              >
                <FaTimes size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-md shadow-2xl border border-white/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;