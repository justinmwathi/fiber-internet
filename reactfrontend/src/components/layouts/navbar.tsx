import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { display: "Home" },
    { display: "About Us" },
    { display: "Our Services" },
    { display: "Contact Us" },
  ];

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); // closes mobile menu on click
  };

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
            <li
              key={link.display}
              className={`relative cursor-pointer transition duration-300 ease-in-out hover:text-lime-400 ${
                activeLink === link.display ? "text-lime-400" : ""
              }`}
              onClick={() => handleNavClick(link.display)}
            >
              {link.display}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-lime-400 transform transition-all duration-300 ease-in-out origin-left ${
                  activeLink === link.display ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
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
                className={`border-b pb-2 cursor-pointer transition ${
                  activeLink === link.display
                    ? "border-lime-400 text-lime-400"
                    : "border-white/20"
                }`}
                onClick={() => handleNavClick(link.display)}
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



