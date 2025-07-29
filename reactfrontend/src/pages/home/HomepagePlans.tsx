import { motion } from "framer-motion";
import { FaWifi } from "react-icons/fa";

const internetPlans = [
  {
    speed: "8 Mbps",
    price: "KES 2,000/mo",
    features: ["Unlimited data", "Free installation", "24/7 support"],
  },
  {
    speed: "10 Mbps",
    price: "KES 2,500/mo",
    features: ["Unlimited data", "Free installation", "24/7 support"],
  },
  {
    speed: "15 Mbps",
    price: "KES 3,000/mo",
    features: ["Unlimited data", "Free installation", "24/7 support"],
  },
  {
    speed: "18 Mbps",
    price: "KES 3,500/mo",
    features: ["Unlimited data", "Free installation", "24/7 support"],
  },
  {
    speed: "25 Mbps",
    price: "KES 4,500/mo",
    features: ["Unlimited data", "Free installation", "Priority support"],
  },
  {
    speed: "30 Mbps",
    price: "KES 5,500/mo",
    features: ["Unlimited data", "Free installation", "Priority support", "Streaming optimized"],
  },
];

function InternetPlansSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span className="text-[#E0CA5E]">Internet Plans</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {internetPlans.map(({ speed, price, features }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lime-400/20 text-[#E0CA5E] rounded-full p-3">
                <FaWifi size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">{speed}</h3>
            </div>

            <p className="text-white text-2xl font-bold mb-4">{price}</p>

            <ul className="space-y-2 text-gray-200 text-sm mb-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E0CA5E] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="mt-auto bg-[#E0CA5E] text-gray-900 px-4 py-2 rounded-lg font-semibold w-full hover:bg-[#CCCC66] transition">
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InternetPlansSection;

