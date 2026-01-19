import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaAngleRight,
  FaArrowUp 
} from "react-icons/fa";

const Footer: React.FC = () => {

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#050614] text-white pt-16 border-t-4 border-[#E13232] font-sans relative">
      
      {/* ======================= */}
      {/*      MAIN CONTENT       */}
      {/* ======================= */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* 1. BRAND & ABOUT */}
          <div className="space-y-6">
            {/* Logo */}
            <Link to="/" className="flex items-end select-none cursor-pointer group w-fit" onClick={scrollToTop}>
              <h1 className="text-3xl font-extrabold tracking-tighter flex items-center">
                <span className="text-[#E13232]">QATAR</span>
                <span className="text-white ml-2 group-hover:text-gray-300 transition">AC</span>
              </h1>
              <div className="relative w-8 h-8 ml-2 rounded-full border-2 border-[#E13232] flex items-center justify-center">
                <div className="text-center leading-none">
                  <span className="text-[9px] font-bold text-[#E13232]">24</span>
                  <br />
                  <span className="text-[9px] font-bold text-white">7</span>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We provide expert AC maintenance, repair, and installation services across Doha. 
              Reliable, fast, and affordable cooling solutions for your home and office.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialLink icon={<FaFacebookF />} href="#" />
              <SocialLink icon={<FaInstagram />} href="#" />
              <SocialLink icon={<FaWhatsapp />} href="https://wa.me/977553466" />
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#E13232] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink text="Home" to="/" />
              <FooterLink text="About Us" to="/about" />
              <FooterLink text="Gallery" to="/gallery" />
              <FooterLink text="Blog / News" to="/blog" />
              <FooterLink text="Contact Us" to="/contact" />
            </ul>
          </div>

          {/* 3. POPULAR SERVICES */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#E13232] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink text="AC Installation" to="/service/ac-installation" />
              <FooterLink text="AC Repair" to="/service/ac-repair" />
              <FooterLink text="AC Maintenance" to="/service/ac-maintenance" />
              <FooterLink text="Gas Filling" to="/service/gas-filling" />
              <FooterLink text="Satellite Service" to="/service/satellite-service" />
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#E13232] rounded-full"></span>
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#E13232] text-xl mt-1 shrink-0" />
                <span>
                  Street 24, Industrial Area,<br /> Doha, Qatar.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#E13232] text-lg shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+97477553466" className="hover:text-white transition">+974 7755 3466</a>
                  <a href="tel:+8801939104157" className="hover:text-white transition">+880 1939 104157</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#E13232] text-lg shrink-0" />
                <a href="mailto:info@redrockaircon.com" className="hover:text-white transition">
                  info@redrockaircon.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ======================= */}
      {/*      BOTTOM BAR         */}
      {/* ======================= */}
      <div className="bg-[#03040e] border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Qatar AC</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link to="#" className="hover:text-[#E13232] transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#E13232] transition">Terms & Conditions</Link>
          </div>

        </div>
      </div>

      {/* SCROLL TO TOP BUTTON (Optional but nice) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#E13232] text-white p-3 rounded-full shadow-lg border-4 border-[#050614] hover:bg-red-700 transition"
      >
        <FaArrowUp />
      </motion.button>

    </footer>
  );
};

// ==============================
// HELPER COMPONENTS
// ==============================

// Social Link Component
const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-800 p-2.5 rounded-full hover:bg-[#E13232] text-white transition-all duration-300"
  >
    {icon}
  </a>
);

// Footer Navigation Link Component
const FooterLink = ({ text, to }: { text: string; to: string }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <li>
      <Link 
        to={to} 
        onClick={scrollToTop}
        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <FaAngleRight className="text-[#E13232] text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      </Link>
    </li>
  );
};

export default Footer;