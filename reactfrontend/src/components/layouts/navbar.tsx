import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { display: "Home" },
    { display: "About Us" },
    { display: "Our Services" },
    { display: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wide">
          <span className="text-lime-400">WiFi</span>Wave
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-100">
          {navLinks.map((link) => (
            <li key={link.display} className="cursor-pointer hover:text-lime-400 transition">
              {link.display}
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
        <div className="md:hidden bg-[#9241C5] bg-opacity-90 px-6 py-4">
          <ul className="flex flex-col gap-6 text-white text-lg">
            {navLinks.map((link) => (
              <li
                key={link.display}
                className="border-b border-white/20 pb-2 cursor-pointer hover:text-lime-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.display}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

