import { motion } from "framer-motion";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { Wifi, Cctv,} from "lucide-react";
import ourservicesimage from "../../assets/young-black-woman-pulling-out-lan-cable-from-modem(1).jpg"
const products = [
  {
    name: "Wi-Fi Installation",
    description:
      "We offer high-speed Faiba internet setup for homes,offices and institutions.Our services include:",
    features: [
      "Site assessment and consultation",
      "Professional fiber and wireless installation",
      "Router configuration",
      "After-sale support and maintenance",
    ],
    icon: <Wifi size={28} className="text-[#E0CA5E]" />,
  },
  {
    name: "CCTV Installation",
    description:
      "We provide modern,secure, and affordable CCTV surveillance systems.",
    features: [
      "Indoor and Outdoor CCTV system installation",
      "IP and analog camera systems",
      "Remote monitoring setup via phone or computer",
      "Maintenance and system upgrades",
    ],
    icon: <Cctv size={28} className="text-[#E0CA5E]" />,
  },

];

export default function OurServices() {
  return (
    <>
      <NavBar />
      <div className="bg-[#001117] text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#001117] py-24 px-6 overflow-hidden">
          {/* Decorative Blob */}
          <svg
            className="absolute bottom-0 right-0 w-[400px] opacity-20 transform rotate-12 pointer-events-none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#E0CA5E"
              d="M43.3,-61.6C58.1,-54.3,73.5,-43.4,76.6,-29.6C79.8,-15.8,70.8,0.9,61.6,14.3C52.4,27.7,43,37.8,32.5,46.3C22,54.8,11,61.8,-1.8,64.3C-14.6,66.9,-29.1,65,-39.4,56.6C-49.7,48.1,-55.9,33.2,-59.7,18.5C-63.5,3.8,-64.9,-10.7,-60.4,-24.1C-56,-37.6,-45.7,-50,-32.6,-57.6C-19.6,-65.2,-3.8,-68,10.6,-71.7C25,-75.4,50.1,-69,43.3,-61.6Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Grid Layout */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Text */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Explore Our <span className="text-[#E0CA5E]">Internet</span> Solutions
              </motion.h1>
              <motion.p
                className="text-lg text-gray-200 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Designed for homes, businesses, communities, and organizations. WaveWiFi has a plan that fits you.
              </motion.p>
            </div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={ourservicesimage}
                alt="WaveWiFi Services"
                className="w-full max-w-md md:max-w-lg object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4 ">
                  {product.icon}
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                </div>
                <p className="text-gray-100 mb-4">{product.description}</p>
                <ul className="text-sm text-gray-200 list-disc pl-5 space-y-1">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <button className="mt-6 px-5 py-2 bg-[#E0CA5E] text-[#1e1e1e] rounded-lg font-semibold hover:bg-[#CCCC66] transition">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
