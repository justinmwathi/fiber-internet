import heroimage from "../../assets/front-view-woman-kids-spending-time-home.png";
import { FiWifi, FiSmartphone, FiShield, FiUsers } from "react-icons/fi";
import enjoyingwifi from "../../assets/happy-man-using-his-tablet-home-couch(1).jpg";
import support from "../../assets/247 support.jpg";
import connectivity from "../../assets/businessman-looking-tablet(1).jpg";
import installation from "../../assets/young-black-woman-pulling-out-lan-cable-from-modem(1).jpg";
import { motion } from "framer-motion";
import InternetPlansSection from "./HomepagePlans";

function HomePage() {
  return (
    <>
    <div className="bg-[#9241C5] min-h-screen text-white">

    <section className="relative bg-[#9241C5] py-24 px-6 text-white overflow-hidden">
  <svg
    className="absolute bottom-0 right-0 w-[500px] opacity-20 transform rotate-12 pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#A3E635"
      d="M43.3,-61.6C58.1,-54.3,73.5,-43.4,76.6,-29.6C79.8,-15.8,70.8,0.9,61.6,14.3C52.4,27.7,43,37.8,32.5,46.3C22,54.8,11,61.8,-1.8,64.3C-14.6,66.9,-29.1,65,-39.4,56.6C-49.7,48.1,-55.9,33.2,-59.7,18.5C-63.5,3.8,-64.9,-10.7,-60.4,-24.1C-56,-37.6,-45.7,-50,-32.6,-57.6C-19.6,-65.2,-3.8,-68,10.6,-71.7C25,-75.4,50.1,-69,43.3,-61.6Z"
      transform="translate(100 100)"
    />
  </svg>


  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
    {/* Left Text Content */}
    <div className="flex flex-col justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-lime-400">Fastest</span> &{" "}
        <span className="text-lime-400">Most Reliable</span> <br />
        Internet For Your Home & Business
      </motion.h1>

      <motion.p
        className="text-lg text-gray-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Explore our variety of high-speed, dependable net alternatives
        designed for houses and agencies in Kenya.
      </motion.p>

      <motion.button
        className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg font-semibold w-fit hover:bg-lime-500 transition"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </div>

    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img
        src={heroimage}
        alt="Family enjoying internet"
        className="w-full max-w-md md:max-w-lg object-contain rounded-xl shadow-2xl"
      />
    </motion.div>
  </div>
</section>


      
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why<span className="text-lime-400"> Choose Us</span> ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      icon: <FiWifi size={20} />,
      image: enjoyingwifi,
      title: "High-Speed WiFi",
      desc: "Reliable internet for streaming, gaming, and working from home.",
    },
    {
      icon: <FiSmartphone size={20} />,
      image: connectivity,
      title: "Smart Device Support",
      desc: "Seamless connectivity for all your smart home devices.",
    },
    {
      icon: <FiShield size={20} />,
      title: "Quick Installations",
      image: installation,
      desc: "Quality Wi-Fi installations at affordable prices.",
    },
    {
      icon: <FiUsers size={20} />,
      title: "24/7 Support",
      image: support,
      desc: "Friendly and responsive technical support anytime you need it.",
    },
  ].map(({ icon, title, desc, image }, idx) => (
    <div
      key={idx}
      className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300 border border-white/20"
    >
      <div className="relative h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#9241C5] to-transparent opacity-70" />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="bg-lime-400/20 text-lime-400 rounded-full px-3 py-1 text-sm flex items-center gap-1">
            {icon}
          </span>
          <span className="text-sm text-white font-medium">{title}</span>
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  ))}
</div>

      </section>
      <InternetPlansSection/>
    </div>
    </>
  );
}

export default HomePage;

