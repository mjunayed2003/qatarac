import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const services = [
  "All Services",
  "Ac Installation",
  "AC Repair",
  "Ac Maintenance",
  "AC Cleaning",
  "AC not Cooling",
  "Compressor Change",
  "Gas Filling",
  "Capacitor Replace",
  "Ac Circuit Repairing",
  "Ac Shifting",
  "Water Leaking",
];

const Header: React.FC = () => {
  // Desktop Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Mobile Menu State
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Mobile Service Submenu State (Separated for better UX)
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  
  const [showNav, setShowNav] = useState(true);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  // Scroll hide/show logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNav(false);
        setIsDropdownOpen(false); // Hide desktop dropdown on scroll
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change -> close all menus
  useEffect(() => {
    setIsMobileOpen(false);
    setIsMobileServiceOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Click outside -> close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full font-sans fixed top-0 left-0 z-50 transition-transform duration-300 shadow-md ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar - Optimized for Mobile */}
      

      {/* Main Navbar */}
      <div className="bg-[#213448] text-white py-4 px-4 md:px-16 lg:px-24 flex justify-between items-center relative">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-end select-none cursor-pointer group">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter flex items-center">
            <span className="text-[#E13232]">QATAR</span>
            <span className="text-white ml-2 group-hover:text-gray-200 transition">AC</span>
          </h1>
          <div className="relative w-8 h-8 md:w-9 md:h-9 ml-2 rounded-full border-2 border-[#E13232] flex items-center justify-center">
            <div className="text-center leading-none">
              <span className="text-[9px] md:text-[10px] font-bold text-[#E13232]">24</span>
              <br />
              <span className="text-[9px] md:text-[10px] font-bold text-white">7</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-[16px] font-normal tracking-wide">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-[#E13232] font-semibold" : "hover:text-[#E13232] transition"}>
                Home
              </NavLink>
            </li>
            <li className="text-white/40">|</li>

            {/* Desktop Service Dropdown */}
            <li ref={dropdownRef} className="relative h-full py-2">
              <button
                className={`flex items-center gap-1 hover:text-[#E13232] transition ${isDropdownOpen ? "text-[#E13232]" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Service <IoIosArrowDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Dropdown Content */}
              <div 
                className={`absolute top-full left-0 mt-4 w-60 bg-white text-gray-800 shadow-2xl border-t-4 border-[#E13232] rounded-b-md overflow-hidden transition-all duration-300 origin-top ${
                  isDropdownOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
                }`}
              >
                <ul className="text-[15px] font-sans divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                  {services.map((item) => (
                    <li key={item}>
                      <NavLink
                        to={`/service/${item.replaceAll(" ", "-").toLowerCase()}`}
                        className="block px-5 py-3 hover:bg-red-50 hover:text-[#E13232] transition hover:pl-7 duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="text-white/40">|</li>
            <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "text-[#E13232] font-semibold" : "hover:text-[#E13232] transition"}>Gallery</NavLink></li>
            <li className="text-white/40">|</li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#E13232] font-semibold" : "hover:text-[#E13232] transition"}>About</NavLink></li>
            <li className="text-white/40">|</li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#E13232] font-semibold" : "hover:text-[#E13232] transition"}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#E13232] font-semibold" : "hover:text-[#E13232] transition"}>Contact</NavLink></li>
            <li className="text-white/40">|</li>
            
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileOpen(!isMobileOpen);
          }}
        >
          {isMobileOpen ? <IoIosClose className="text-[#E13232]" /> : <IoIosMenu />}
        </button>

        {/* ======================= */}
        {/*      MOBILE MENU        */}
        {/* ======================= */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#213448] shadow-2xl border-t border-gray-800 transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[85vh] ${
            isMobileOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-4 text-[16px] font-medium tracking-wide">
            
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "block text-[#E13232] pl-2 border-l-2 border-[#E13232]" : "block hover:text-[#E13232] text-gray-200 pl-2 transition"}
              >
                Home
              </NavLink>
            </li>
            <hr className="border-white/10" />

            {/* Mobile Services */}
            <li>
              <button
                className={`w-full text-left flex justify-between items-center pl-2 transition ${isMobileServiceOpen ? "text-[#E13232]" : "text-gray-200 hover:text-[#E13232]"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileServiceOpen(!isMobileServiceOpen);
                }}
              >
                Service <IoIosArrowDown size={18} className={`transition-transform duration-300 ${isMobileServiceOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileServiceOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
                <ul className="bg-[#121426] rounded-md py-2 space-y-1 border-l-2 border-[#E13232] ml-2">
                  {services.map((item) => (
                    <li key={item}>
                      <NavLink
                        to={`/service/${item.replaceAll(" ", "-").toLowerCase()}`}
                        className="block py-2 pl-4 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <hr className="border-white/10" />

            <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "block text-[#E13232] pl-2 border-l-2 border-[#E13232]" : "block hover:text-[#E13232] text-gray-200 pl-2 transition"}>Gallery</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "block text-[#E13232] pl-2 border-l-2 border-[#E13232]" : "block hover:text-[#E13232] text-gray-200 pl-2 transition"}>About</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "block text-[#E13232] pl-2 border-l-2 border-[#E13232]" : "block hover:text-[#E13232] text-gray-200 pl-2 transition"}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "block text-[#E13232] pl-2 border-l-2 border-[#E13232]" : "block hover:text-[#E13232] text-gray-200 pl-2 transition"}>Contact</NavLink></li>
          </ul>
          
          {/* Mobile Footer Info */}
          <div className="bg-[#E13232]/10 p-4 text-center mt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm">Need Help?</p>
              <a href="tel:+8801939104157" className="text-[#E13232] font-bold block mt-1">+880 1939-104157</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;