import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";  
import { 
  FaAward, 
  FaUsers, 
  FaProjectDiagram, 
  FaHeadset, 
  FaCheckCircle, 
  FaTools, 
  FaHandshake 
} from "react-icons/fa";

// ==============================
// 2. TYPED ANIMATION VARIANTS
// ==============================

// এখানে ': Variants' টাইপটি যোগ করা হয়েছে
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ======================= */}
      {/* 1. HERO HEADER          */}
      {/* ======================= */}
      <section className="relative bg-[#050614] text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#E13232] font-bold uppercase tracking-widest text-sm mb-3">
              Who We Are
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              About <span className="text-[#E13232]">Qatar AC</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              The leading provider of AC maintenance, repair, and installation services in Doha. 
              Committed to keeping your environment cool and comfortable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================= */}
      {/* 2. OUR STORY SECTION    */}
      {/* ======================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-b-4 border-[#E13232]">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Technician Working" 
                  className="w-full h-auto object-cover"
                />
                {/* Experience Badge */}
                <div className="absolute bottom-0 right-0 bg-[#E13232] text-white p-6 rounded-tl-xl">
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm font-medium uppercase">Years Exp.</p>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-[#E13232] font-bold uppercase text-sm mb-2">
                Our Story
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#050614] mb-6">
                We Are Dedicated to <br /> Quality & Reliability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Founded with a vision to provide top-notch cooling solutions in Qatar, 
                we have grown into a trusted name for residential and commercial HVAC services. 
                Our team consists of certified professionals who understand the extreme 
                weather conditions of the region and provide solutions that last.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#E13232] text-xl" />
                  <span className="font-semibold text-gray-800">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#E13232] text-xl" />
                  <span className="font-semibold text-gray-800">Certified Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#E13232] text-xl" />
                  <span className="font-semibold text-gray-800">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#E13232] text-xl" />
                  <span className="font-semibold text-gray-800">100% Satisfaction</span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* 3. STATS COUNTER        */}
      {/* ======================= */}
      <section className="bg-[#050614] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800/50">
            <StatItem icon={<FaProjectDiagram />} number="500+" label="Projects Done" />
            <StatItem icon={<FaUsers />} number="300+" label="Happy Clients" />
            <StatItem icon={<FaAward />} number="50+" label="Awards Won" />
            <StatItem icon={<FaHeadset />} number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* ======================= */}
      {/* 4. WHY CHOOSE US        */}
      {/* ======================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E13232] font-bold uppercase tracking-widest text-sm">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#050614] mt-2">
              Why Choose Us?
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={<FaTools />} 
              title="Expert Maintenance" 
              desc="We use advanced tools and genuine parts to ensure your AC runs efficiently for years."
            />
            <FeatureCard 
              icon={<FaHandshake />} 
              title="Transparent Pricing" 
              desc="No hidden costs. We provide a clear estimate before starting any work."
            />
            <FeatureCard 
              icon={<FaHeadset />} 
              title="Customer First" 
              desc="Your comfort is our priority. We are available round the clock to solve your issues."
            />
          </motion.div>
        </div>
      </section>

      {/* ======================= */}
      {/* 5. CTA SECTION          */}
      {/* ======================= */}
      <section className="py-16 px-4">
        <div className="container mx-auto bg-[#E13232] rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Best Cooling?
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Contact us today for a free consultation or emergency repair.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+97477553466" className="bg-white text-[#E13232] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                  Call Now
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#E13232] transition">
                  Contact Us
                </a>
              </div>
            </motion.div>
        </div>
      </section>

    </div>
  );
};

// Helper Components

const StatItem = ({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) => (
  <motion.div 
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col items-center p-4"
  >
    <div className="text-[#E13232] text-3xl mb-2">{icon}</div>
    <div className="text-3xl md:text-4xl font-extrabold">{number}</div>
    <div className="text-gray-400 text-sm uppercase tracking-wide mt-1">{label}</div>
  </motion.div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-[#E13232] transition-all duration-300 group text-center md:text-left"
  >
    <div className="w-16 h-16 bg-red-50 text-[#E13232] rounded-full flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0 group-hover:bg-[#E13232] group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#050614] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

export default About;