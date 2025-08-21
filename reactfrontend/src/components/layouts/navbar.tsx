import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { display: "Home", path: "/" },
    { display: "About Us", path: "/about-us" },
    { display: "Our Services", path: "/services" },
    { display: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wide">
          <span className="text-[#E0CA5E]">Inconet</span>Technologies
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-100">
          {navLinks.map((link) => (
            <li key={link.display}>
              <Link
                to={link.path}
                className={`relative transition duration-300 ease-in-out hover:text-[#E0CA5E] ${
                  isActive(link.path) ? "text-[#E0CA5E]" : ""
                }`}
              >
                {link.display}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#E0CA5E] transform transition-all duration-300 ease-in-out origin-left ${
                    isActive(link.path) ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001117] bg-opacity-90 px-6 py-4">
          <ul className="flex flex-col gap-6 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link.display}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`border-b pb-2 block transition ${
                    isActive(link.path)
                      ? "border-[#E0CA5E] text-[#E0CA5E]"
                      : "border-white/20"
                  }`}
                >
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
