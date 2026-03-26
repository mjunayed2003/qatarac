import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Helmet Import
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
// 1. TYPE DEFINITIONS
// ==============================
interface ServiceData {
  id: number;
  title: string;
  slug: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}

// ==============================
// 2. DATA
// ==============================
const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "AC Installation",
    slug: "ac-installation",
    desc: "Professional split & window AC unit installation.",
    image: "/images/image3.jpeg",
    icon: <FaTools />,
  },
  {
    id: 2,
    title: "AC Repair",
    slug: "ac-repair",
    desc: "Expert diagnosis for cooling & noise issues.",
    image: "/images/image2.jpeg",
    icon: <FaWrench />,
  },
  {
    id: 3,
    title: "AC Maintenance",
    slug: "ac-maintenance",
    desc: "Routine servicing to extend machine lifespan.",
    image: "/images/image4.jpeg",
    icon: <FaSnowflake />,
  },
  {
    id: 4,
    title: "AC Cleaning",
    slug: "ac-cleaning",
    desc: "Deep cleaning of filters, coils & drainage.",
    image: "/images/image9.jpeg",
    icon: <FaFan />,
  },
  {
    id: 5,
    title: "AC Not Cooling",
    slug: "ac-not-cooling",
    desc: "Fixing thermostat & airflow blockages.",
    image: "/images/image5.jpeg",
    icon: <FaThermometerHalf />,
  },
  {
    id: 6,
    title: "Compressor Change",
    slug: "compressor-change",
    desc: "Replacing faulty compressors with genuine parts.",
    image: "/images/image6.jpeg",
    icon: <FaCompress />,
  },
  {
    id: 7,
    title: "Gas Filling",
    slug: "gas-filling",
    desc: "Refrigerant top-up and leak detection.",
    image: "/images/image7.avif",
    icon: <FaGasPump />,
  },
  {
    id: 8,
    title: "Capacitor Replace",
    slug: "capacitor-replace",
    desc: "Quick fix for outdoor unit starting issues.",
    image: "/images/image8.jpg",
    icon: <FaBolt />,
  },
  {
    id: 9,
    title: "AC Circuit Repair",
    slug: "ac-circuit-repairing",
    desc: "Advanced PCB repair for inverter ACs.",
    image: "/images/image1.jpeg",
    icon: <FaMicrochip />,
  },
  {
    id: 10,
    title: "AC Shifting",
    slug: "ac-shifting",
    desc: "Safe dismantling and re-installation service.",
    image: "/images/image10.jpeg",
    icon: <FaTruckMoving />,
  },
  {
    id: 11,
    title: "Water Leaking",
    slug: "water-leaking",
    desc: "Fixing indoor unit leakage & blocked pipes.",
    image: "/images/image11.jpeg",
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
// 3. ANIMATION VARIANTS
// ==============================
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
      ease: "easeOut" 
    } 
  },
};

// ==============================
// 4. MAIN COMPONENT
// ==============================
const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans py-10 relative">
      
      {/* ================================================= */}
      {/*              SEO METADATA (HELMET)                */}
      {/* ================================================= */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Our Services | AC Installation, Repair & Maintenance in Doha</title>
        <meta name="description" content="Explore our professional AC services in Doha including installation, repair, gas filling, and deep cleaning. 24/7 emergency support available." />
        <meta name="keywords" content="AC services Doha, AC installation Qatar, AC repair service, HVAC maintenance, AC cleaning, gas filling, compressor change" />
        <link rel="canonical" href="https://qatarac.com/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qatarac.com/services" />
        <meta property="og:title" content="Our Services | Expert AC Solutions in Doha" />
        <meta property="og:description" content="From installation to emergency repair, we cover all your cooling needs with certified experts." />
        <meta property="og:image" content="https://qatarac.com/images/image3.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://qatarac.com/services" />
        <meta name="twitter:title" content="Our Services | Expert AC Solutions in Doha" />
        <meta name="twitter:description" content="From installation to emergency repair, we cover all your cooling needs with certified experts." />
        <meta name="twitter:image" content="https://qatarac.com/images/image3.jpeg" />
      </Helmet>

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