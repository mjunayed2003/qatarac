import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaArrowRight,
  FaSnowflake,
  FaTools,
  FaWrench,
  FaFan,
  FaThermometerHalf,
  FaCompress,
  FaGasPump,
  FaBolt,
  FaMicrochip,
  FaTruckMoving,
  FaTint,
  FaHeadset,
} from "react-icons/fa";

// ==============================
// 1. DATA
// ==============================
const servicesData = [
  {
    id: 1,
    title: "AC Installation",
    slug: "ac-installation",
    desc: "Professional split & window AC unit installation.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    icon: <FaTools />,
  },
  {
    id: 2,
    title: "AC Repair",
    slug: "ac-repair",
    desc: "Expert diagnosis for cooling & noise issues.",
    image: "https://images.unsplash.com/photo-1581094794329-cd8119604f89?q=80&w=2070&auto=format&fit=crop",
    icon: <FaWrench />,
  },
  {
    id: 3,
    title: "AC Maintenance",
    slug: "ac-maintenance",
    desc: "Routine servicing to extend machine lifespan.",
    image: "https://images.unsplash.com/photo-1631545763952-320c24387d7e?q=80&w=2056&auto=format&fit=crop",
    icon: <FaSnowflake />,
  },
  {
    id: 4,
    title: "AC Cleaning",
    slug: "ac-cleaning",
    desc: "Deep cleaning of filters, coils & drainage.",
    image: "https://plus.unsplash.com/premium_photo-1663040325429-19e48df3637e?q=80&w=2070&auto=format&fit=crop",
    icon: <FaFan />,
  },
  {
    id: 5,
    title: "AC Not Cooling",
    slug: "ac-not-cooling",
    desc: "Fixing thermostat & airflow blockages.",
    image: "https://images.unsplash.com/photo-1517429117621-e0c6553258c4?q=80&w=2000&auto=format&fit=crop",
    icon: <FaThermometerHalf />,
  },
  {
    id: 6,
    title: "Compressor Change",
    slug: "compressor-change",
    desc: "Replacing faulty compressors with genuine parts.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    icon: <FaCompress />,
  },
  {
    id: 7,
    title: "Gas Filling",
    slug: "gas-filling",
    desc: "Refrigerant top-up and leak detection.",
    image: "https://images.unsplash.com/photo-1635327265936-e8d132644265?q=80&w=2070&auto=format&fit=crop",
    icon: <FaGasPump />,
  },
  {
    id: 8,
    title: "Capacitor Replace",
    slug: "capacitor-replace",
    desc: "Quick fix for outdoor unit starting issues.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
    icon: <FaBolt />,
  },
  {
    id: 9,
    title: "AC Circuit Repair",
    slug: "ac-circuit-repairing",
    desc: "Advanced PCB repair for inverter ACs.",
    image: "https://images.unsplash.com/photo-1593106578502-27f320723b2d?q=80&w=1948&auto=format&fit=crop",
    icon: <FaMicrochip />,
  },
  {
    id: 10,
    title: "AC Shifting",
    slug: "ac-shifting",
    desc: "Safe dismantling and re-installation service.",
    image: "https://images.unsplash.com/photo-1605218456194-96156f707f15?q=80&w=2070&auto=format&fit=crop",
    icon: <FaTruckMoving />,
  },
  {
    id: 11,
    title: "Water Leaking",
    slug: "water-leaking",
    desc: "Fixing indoor unit leakage & blocked pipes.",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=2070&auto=format&fit=crop",
    icon: <FaTint />,
  },
  {
    id: 12,
    title: "Emergency Service",
    slug: "emergency-service",
    desc: "24/7 Priority support for urgent breakdowns.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    icon: <FaHeadset />,
  },
];

// ==============================
// 2. ANIMATION VARIANTS (FIXED)
// ==============================

// Explicitly typing variants resolves the "Type string is not assignable" error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // Fixed: Ensure this is a valid Easing string
    } 
  },
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans py-5 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#E13232] font-bold uppercase tracking-widest text-sm mb-2">
            What We Do
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#050614]">
            Our Professional Services
          </h1>
          <div className="w-20 h-1 bg-[#E13232] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => {
                navigate(`/service/${service.slug}`);
                window.scrollTo(0, 0);
              }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group flex flex-col h-full"
            >
              
              {/* IMAGE AREA */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all z-10"></div>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-2 right-2 bg-white/90 p-1.5 md:p-2 rounded-full text-[#E13232] shadow-sm z-20">
                  <div className="text-xs md:text-sm">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="p-3 md:p-5 flex flex-col flex-grow">
                <h3 className="text-sm md:text-lg font-bold text-[#050614] group-hover:text-[#E13232] transition-colors mb-1 line-clamp-1">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed line-clamp-2 mb-3 flex-grow">
                  {service.desc}
                </p>
                <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-[#E13232] uppercase tracking-wide transition-colors">
                    Details
                  </span>
                  <FaArrowRight className="text-[10px] md:text-xs text-[#E13232] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default ServicesPage;