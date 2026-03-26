import React from "react";
import { Helmet } from "react-helmet-async";
import { cubicBezier, motion } from "framer-motion";

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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const statsContainerVariants = {
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

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/* ======================================================
   HOME COMPONENT
====================================================== */
const Home = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      
      {/* ================================================= */}
      {/*              SEO METADATA (HELMET)                */}
      {/* ================================================= */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Best AC Installation & Repair in Doha | Qatar AC</title>
        <meta name="description" content="Qatar AC provides expert air conditioning installation, repair, and maintenance services in Doha. 24/7 emergency support with certified technicians." />
        <meta name="keywords" content="AC repair Doha, AC installation Qatar, HVAC maintenance, split AC service, central AC repair Doha, air conditioner cleaning" />
        <link rel="canonical" href="https://qatarac.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qatarac.com/" />
        <meta property="og:title" content="Best AC Installation & Repair in Doha | Qatar AC" />
        <meta property="og:description" content="Expert AC services in Doha. Installation, maintenance, and repair by certified professionals." />
        <meta property="og:image" content="https://qatarac.com/images/image3.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://qatarac.com/" />
        <meta name="twitter:title" content="Best AC Installation & Repair in Doha | Qatar AC" />
        <meta name="twitter:description" content="Expert AC services in Doha. Installation, maintenance, and repair by certified professionals." />
        <meta name="twitter:image" content="https://qatarac.com/images/image3.jpeg" />
      </Helmet>

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}
      <section className="relative w-full min-h-screen flex items-center py-20 md:py-0">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/image3.jpeg')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
        </div>

        {/* Content Container (Grid Layout) */}
        <div className="relative container mx-auto px-5 md:px-16 pt-20 md:pt-0 h-full flex items-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            
            {/* LEFT SIDE: TEXT CONTENT */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-white"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-[3px] w-10 bg-[#E13232]"></span>
                <h3 className="text-[#E13232] font-bold text-sm md:text-lg uppercase tracking-[0.25em]">
                  Expert Cooling Solutions
                </h3>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
              >
                Don't Let The Heat <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Beat You
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base md:text-xl mb-8 max-w-lg"
              >
                Qatar's trusted AC installation, repair & maintenance service.
                Available 24/7 with certified professionals at your doorstep.
              </motion.p>

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

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  id="btn-book-now"
                  href="#book"
                  className="bg-[#E13232] hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold uppercase text-sm tracking-wide transition shadow-lg text-center"
                >
                  Book Now
                </a>

                <a
                  id="btn-contact-us"
                  href="/contact"
                  className="border-2 border-white/40 hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold uppercase text-sm tracking-wide transition text-center"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: STATS GRID */}
            <motion.div 
              variants={statsContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0"
            >
              <StatsCard icon={<FaProjectDiagram />} number="500+" label="Projects Done" />
              <StatsCard icon={<FaUsers />} number="300+" label="Happy Clients" />
              <StatsCard icon={<FaAward />} number="50+" label="Awards Won" />
              <StatsCard icon={<FaHeadset />} number="24/7" label="Support" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ALL OTHER COMPONENTS */}
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

// Stats Card Component
interface StatsCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatsCard = ({ icon, number, label }: StatsCardProps) => {
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