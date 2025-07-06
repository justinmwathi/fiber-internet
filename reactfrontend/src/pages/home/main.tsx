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

      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-lime-400">Fastest</span> & <span className="text-lime-400">Most Reliable</span><br />
            Internet For Your Home & Business
          </h1>
          <p className="text-lg mb-6">
            Explore our variety of high-speed, dependable net alternatives designed for houses and agencies in Kenya.
          </p>
          <button className="bg-lime-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition">
            Get Started
          </button>
        </div>

        <motion.div
  className="flex justify-center"
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.5 }}
>
  <img
    src={heroimage}
    alt="Family enjoying internet"
    className="w-full max-w-md md:max-w-lg object-contain"
  />
</motion.div>
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

