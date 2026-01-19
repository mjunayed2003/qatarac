import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaWhatsapp
} from "react-icons/fa";

// ==============================
// 1. ANIMATION VARIANTS
// ==============================
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

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* ======================= */}
      {/*      HERO HEADER        */}
      {/* ======================= */}
      <section className="bg-[#050614] text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#E13232] font-bold uppercase tracking-widest text-sm mb-2">
              Get In Touch
            </h2>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
              Contact <span className="text-[#E13232]">Us</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Have a query or need emergency AC repair? We are here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================= */}
      {/*    INFO & FORM GRID     */}
      {/* ======================= */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          >
            
            {/* LEFT SIDE: CONTACT INFO */}
            <div>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-extrabold text-[#050614] mb-4">
                Let's Discuss Your <br /> Cooling Needs
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-base md:text-lg">
                Whether it's a small repair or a large installation project, our team is ready to assist you.
              </motion.p>

              <div className="space-y-5">
                <ContactInfoCard 
                  icon={<FaPhoneAlt />} 
                  title="Phone Number" 
                  details={["+974 7755 3466", "+880 1939 104157"]} 
                  isLink={true}
                />
                <ContactInfoCard 
                  icon={<FaEnvelope />} 
                  title="Email Address" 
                  details={["info@redrockaircon.com", "junayed@gmail.com"]} 
                  isLink={false}
                />
                <ContactInfoCard 
                  icon={<FaMapMarkerAlt />} 
                  title="Office Location" 
                  details={["Street 24, Industrial Area", "Doha, Qatar"]} 
                  isLink={false}
                />
              </div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
                <SocialButton icon={<FaWhatsapp />} link="https://wa.me/977553466" color="bg-[#25D366]" />
                <SocialButton icon={<FaPhoneAlt />} link="tel:+97477553466" color="bg-[#E13232]" />
              </motion.div>
            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <motion.div variants={fadeInUp}>
              <form className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-t-4 border-[#E13232]">
                <h3 className="text-xl font-bold text-[#050614] mb-5">Send us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">Phone Number</label>
                    <input type="tel" placeholder="+974..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition" />
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <label className="text-xs font-bold text-gray-700">Email Address</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition" />
                </div>

                <div className="space-y-1 mb-4">
                  <label className="text-xs font-bold text-gray-700">Service Needed</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition">
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>Maintenance</option>
                    <option>Gas Filling</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1 mb-6">
                  <label className="text-xs font-bold text-gray-700">Message</label>
                  <textarea rows={3} placeholder="Describe your issue..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#E13232] focus:ring-1 focus:ring-[#E13232] transition"></textarea>
                </div>

                <button className="w-full bg-[#E13232] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ======================= */}
      {/*      GOOGLE MAP         */}
      {/* ======================= */}
      {/* Height reduced: h-[300px] (mobile) & h-[350px] (desktop) */}
      <section className="relative w-full h-[300px] md:h-[350px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230887.8920197772!2d51.35567756816005!3d25.28409748611172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
          title="Google Map Location - Doha"
        ></iframe>
        
        {/* Map Overlay Card (Hidden on very small screens, adjusted for smaller map) */}
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-xl max-w-[250px] hidden sm:block border-l-4 border-[#E13232]">
            <h4 className="font-bold text-base text-[#050614]">Visit Our Office</h4>
            <p className="text-xs text-gray-600 mt-1">
                Doha Industrial Area, Qatar.
            </p>
        </div>
      </section>

    </div>
  );
};

// ==============================
// HELPER COMPONENTS
// ==============================

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  isLink: boolean;
}

const ContactInfoCard: React.FC<InfoCardProps> = ({ icon, title, details, isLink }) => (
  <motion.div variants={fadeInUp} className="flex items-start gap-4">
    <div className="bg-white p-3 rounded-full text-[#E13232] shadow-md text-lg border border-gray-100">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-[#050614] text-base">{title}</h4>
      <div className="text-gray-600 mt-0.5 text-sm">
        {details.map((line, index) => (
            <p key={index}>
                {isLink && index === 0 ? (
                    <a href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-[#E13232] transition">{line}</a>
                ) : (
                    line
                )}
            </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const SocialButton = ({ icon, link, color }: { icon: React.ReactNode, link: string, color: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`${color} text-white p-3.5 rounded-full shadow-lg hover:-translate-y-1 transition-transform duration-300 text-lg`}
  >
    {icon}
  </a>
);

export default Contact;