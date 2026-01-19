import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaUser, 
  FaArrowRight, 
} from "react-icons/fa";

// ==============================
// 1. DUMMY DATA
// ==============================
const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your AC Needs Immediate Repair",
    excerpt: "Ignoring strange noises or weak airflow can lead to costly damages. Learn the early warning signs.",
    category: "Repair",
    author: "Admin",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1581094794329-cd8119604f89?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "How to Reduce AC Electricity Bill in Summer",
    excerpt: "Simple tips and tricks to keep your home cool without breaking the bank on electricity bills.",
    category: "Tips",
    author: "Technician",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1517429117621-e0c6553258c4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Why Regular AC Maintenance is Important?",
    excerpt: "Routine servicing extends the lifespan of your unit and ensures the air you breathe is clean.",
    category: "Maintenance",
    author: "Admin",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1631545763952-320c24387d7e?q=80&w=2056&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Split AC vs Window AC: Which is Better?",
    excerpt: "Comparing the pros and cons of Split and Window ACs to help you choose the right one for your home.",
    category: "News",
    author: "Editor",
    date: "Aug 10, 2023",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Top 3 Reasons Your AC is Not Cooling",
    excerpt: "Is your AC running but not cooling? It could be a gas leak, dirty filter, or compressor issue.",
    category: "Repair",
    author: "Technician",
    date: "Jul 22, 2023",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "The Importance of Cleaning AC Filters",
    excerpt: "Dirty filters block airflow and reduce efficiency. Here is how often you should clean them.",
    category: "Maintenance",
    author: "Admin",
    date: "Jun 05, 2023",
    image: "https://plus.unsplash.com/premium_photo-1663040325429-19e48df3637e?q=80&w=2070&auto=format&fit=crop",
  },
];

const categories = ["All", "Repair", "Maintenance", "Tips", "News"];

// ==============================
// 2. ANIMATION VARIANTS
// ==============================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// ==============================
// 3. COMPONENT
// ==============================
const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // Filter Logic
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* ======================= */}
      {/*      HERO HEADER        */}
      {/* ======================= */}
      <section className="bg-[#050614] text-white py-20 md:py-28 text-center relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#E13232] font-bold uppercase tracking-widest text-sm mb-3">
              Our Blog
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Latest News & <span className="text-[#E13232]">Tips</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stay updated with expert advice on AC maintenance, energy-saving tips, and industry news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================= */}
      {/*     CATEGORY FILTER     */}
      {/* ======================= */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-wrap justify-center gap-3 md:gap-6 border border-gray-100 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#E13232] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================= */}
      {/*       BLOG GRID         */}
      {/* ======================= */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pb-24">
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                layout
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#E13232] text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-[#E13232]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[#E13232]" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#050614] group-hover:text-[#E13232] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => navigate(`/blog/${post.id}`)} // Assuming you will create dynamic single blog pages later
                      className="flex items-center gap-2 text-[#050614] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                    >
                      Read More <FaArrowRight className="text-[#E13232]" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if no posts match */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No posts found in this category.</p>
          </div>
        )}

      </div>

      {/* ======================= */}
      {/*    NEWSLETTER CTA       */}
      {/* ======================= */}
      <section className="bg-gray-50 py-16 px-4 border-t border-gray-200">
         <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#050614]">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-gray-600">
              Get the latest AC maintenance tips and exclusive offers directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition"
              />
              <button className="bg-[#E13232] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-md">
                Subscribe
              </button>
            </form>
         </div>
      </section>

    </div>
  );
};

export default Blog;