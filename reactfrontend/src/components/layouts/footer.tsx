import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#001117] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            We provide the fastest and most reliable internet services for homes and SMEs across Kenya. Count on us for affordable plans, quick installations, and 24/7 support.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link to="/" className="hover:text-[#E0CA5E] transition">Home</Link></li>
            <li><Link to="/plans" className="hover:text-[#E0CA5E] transition">About Us</Link></li>
            <li><Link to="/support" className="hover:text-[#E0CA5E] transition">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#E0CA5E] transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#E0CA5E]" /> +254 723 994 757
            </li>
            
            <li className="flex items-center gap-2">
              <FiMapPin className="text-[#E0CA5E]" /> Eldoret, Kenya
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Inconet Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
