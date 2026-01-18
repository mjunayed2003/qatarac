import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  // route change -> close dropdown & mobile menu
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className="w-full font-sans fixed top-0 left-0 z-50">
      {/* TOP BAR */}
      <div className="bg-[#E13232] text-white py-2 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <a href="#" className="bg-white text-[#E13232] p-1.5 rounded-full">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="bg-white text-[#E13232] p-1.5 rounded-full">
            <FaInstagram size={14} />
          </a>
          <a
            href="https://wa.me/977553466"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-1.5 rounded-full"
          >
            <FaWhatsapp size={14} className="text-[#25D366]" />
          </a>
          <a
            href="mailto:info@redrockaircon.com"
            className="bg-white p-1.5 rounded-full"
          >
            <FaEnvelope size={14} className="text-[#D14836]" />
          </a>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-6 font-medium">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="transform -scale-x-100" />
            <span>Call: +8801939104157</span>
          </div>
          <div className="h-4 w-[1px] bg-white/60"></div>
          <div>
            <span>junayed@gmail.com</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-[#050614] text-white py-5 px-4 md:px-16 lg:px-24 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-end select-none cursor-pointer">
          <h1 className="text-4xl font-extrabold tracking-tighter flex items-center">
            <span className="text-[#E13232]">QATAR</span>
            <span className="text-white ml-2">AC</span>
          </h1>

          <div className="relative w-9 h-9 ml-3 rounded-full border-2 border-[#E13232] flex items-center justify-center">
            <div className="text-center leading-none">
              <span className="text-[10px] font-bold text-[#E13232]">24</span>
              <br />
              <span className="text-[10px] font-bold text-white">7</span>
            </div>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center text-[17px] font-normal tracking-wide">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#E13232]" : "hover:text-[#E13232]"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="text-white/40">|</li>

            {/* SERVICE DROPDOWN */}
            <li ref={dropdownRef} className="relative">
              <button
                className="flex items-center gap-1 hover:text-[#E13232]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Service <IoIosArrowDown size={16} />
              </button>

              {/* Dropdown list */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white text-gray-800 shadow-xl border-t-4 border-[#E13232] rounded-sm">
                  <ul className="text-[15px] font-sans divide-y divide-gray-100">
                    {[
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
                    ].map((item) => (
                      <li key={item}>
                        <NavLink
                          to={`/service/${item.replaceAll(" ", "-").toLowerCase()}`}
                          className="block px-4 py-3 hover:bg-gray-100 hover:text-[#E13232] transition"
                        >
                          {item}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className="text-white/40">|</li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "text-[#E13232]" : "hover:text-[#E13232]"
                }
              >
                Gallery
              </NavLink>
            </li>

            <li className="text-white/40">|</li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#E13232]" : "hover:text-[#E13232]"
                }
              >
                About
              </NavLink>
            </li>

            <li className="text-white/40">|</li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#E13232]" : "hover:text-[#E13232]"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="text-white/40">|</li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-[#E13232]" : "hover:text-[#E13232]"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#0a0818] border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          isMobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-lg tracking-wide text-center uppercase">
          <li>
            <NavLink to="/" className="block hover:text-[#E13232]">
              Home
            </NavLink>
          </li>

          <li>
            <button
              className="w-full text-left flex justify-between items-center hover:text-[#E13232]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Service <IoIosArrowDown size={18} />
            </button>

            {/* Mobile dropdown list */}
            {isDropdownOpen && (
              <ul className="bg-[#0f0c24] text-left pl-6 mt-2 space-y-2">
                {[
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
                ].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/service/${item.replaceAll(" ", "-").toLowerCase()}`}
                      className="block py-2 hover:text-white"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/gallery" className="block hover:text-[#E13232]">
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="block hover:text-[#E13232]">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="block hover:text-[#E13232]">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" className="block hover:text-[#E13232]">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
