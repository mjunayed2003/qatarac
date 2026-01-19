import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Icons Import
import { 
  FaCheckCircle, 
  FaProjectDiagram, 
  FaUsers, 
  FaAward, 
  FaHeadset 
} from "react-icons/fa";

// Component Imports
import ServicesPage from "./Service";
import SatelliteService from "./Gallery";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

/* ======================================================
   FRAMER MOTION VARIANTS
====================================================== */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Right Side Stats Animation
const statsContainerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      duration: 0.8
    },
  },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/* ======================================================
   HOME COMPONENT
====================================================== */
const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}
      <section className="relative w-full min-h-screen flex items-center py-20 md:py-0">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
        </div>

        {/* Content Container (Grid Layout) */}
        <div className="relative container mx-auto px-5 md:px-16 pt-20 md:pt-0 h-full flex items-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* ========================== */}
            {/* LEFT SIDE: TEXT CONTENT    */}
            {/* ========================== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              {/* Tagline */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-[3px] w-10 bg-[#E13232]"></span>
                <h3 className="text-[#E13232] font-bold text-sm md:text-lg uppercase tracking-[0.25em]">
                  Expert Cooling Solutions
                </h3>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
              >
                Don't Let The Heat <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Beat You
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base md:text-xl mb-8 max-w-lg"
              >
                Qatar's trusted AC installation, repair & maintenance service.
                Available 24/7 with certified professionals at your doorstep.
              </motion.p>

              {/* Features List */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-6 mb-10 text-sm md:text-base text-gray-300"
              >
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#E13232]" /> 24/7 Support
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#E13232]" /> Expert Technicians
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#E13232]" /> Affordable Pricing
                </span>
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#book"
                  className="bg-[#E13232] hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold uppercase text-sm tracking-wide transition shadow-lg text-center"
                >
                  Book Now
                </a>

                <a
                  href="#contact"
                  className="border-2 border-white/40 hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold uppercase text-sm tracking-wide transition text-center"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>

            {/* ========================== */}
            {/* RIGHT SIDE: STATS GRID     */}
            {/* ========================== */}
            <motion.div 
              variants={statsContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0"
            >
              {/* Stat Card 1 */}
              <StatsCard 
                icon={<FaProjectDiagram />} 
                number="500+" 
                label="Projects Done" 
              />
              {/* Stat Card 2 */}
              <StatsCard 
                icon={<FaUsers />} 
                number="300+" 
                label="Happy Clients" 
              />
              {/* Stat Card 3 */}
              <StatsCard 
                icon={<FaAward />} 
                number="50+" 
                label="Awards Won" 
              />
              {/* Stat Card 4 */}
              <StatsCard 
                icon={<FaHeadset />} 
                number="24/7" 
                label="Support" 
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =================================== */}
      {/*       ALL OTHER COMPONENTS          */}
      {/* =================================== */}
      <div>
        <ServicesPage />
        <SatelliteService />
        <About />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};


const StatsCard = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => {
  return (
    <motion.div 
      variants={statItemVariants}
      className="bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300"
    >
      <div className="text-[#E13232] text-3xl md:text-4xl mb-3">
        {icon}
      </div>
      <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-1">
        {number}
      </h3>
      <p className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-medium">
        {label}
      </p>
    </motion.div>
  )
}

export default Home;