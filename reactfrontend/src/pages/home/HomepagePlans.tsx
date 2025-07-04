
import { FaBolt, FaHome, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
const internetPlans = [
  {
    title: "Home Plan",
    icon: <FaHome size={20} />,
    price: "KES 2,499/mo",
    speed: "Up to 20 Mbps",
    features: ["Ideal for streaming & browsing", "Free router", "Unlimited data"],
  },
  {
    title: "Business Plan",
    icon: <FaBuilding size={20} />,
    price: "KES 4,999/mo",
    speed: "Up to 50 Mbps",
    features: ["Designed for small businesses", "Dedicated bandwidth", "24/7 support"],
  },
  {
    title: "Premium Plan",
    icon: <FaBolt size={20} />,
    price: "KES 7,999/mo",
    speed: "Up to 100 Mbps",
    features: ["High performance for heavy use", "Priority support", "Static IP available"],
  },
];

function InternetPlansSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span className="text-lime-400">Internet Plans</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internetPlans.map(({ title, icon, price, speed, features }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-400/20 text-lime-400 rounded-full p-3">{icon}</div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>

            <p className="text-gray-200 mb-2 text-sm">{speed}</p>
            <p className="text-white text-2xl font-bold mb-4">{price}</p>

            <ul className="space-y-2 text-gray-200 text-sm">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-lime-400 text-gray-900 px-4 py-2 rounded-lg font-semibold w-full hover:bg-lime-500 transition">
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InternetPlansSection;
