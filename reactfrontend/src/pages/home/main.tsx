import heroimage from "../../assets/front-view-woman-kids-spending-time-home.png";
import {FiDollarSign,FiUsers, FiRefreshCw, FiSettings } from "react-icons/fi";
import { FaHelmetSafety } from "react-icons/fa6";
import technicians from "../../assets/african-american-couple-home-office-troubleshooting-their-wi-fi-modem.jpg";
import support from "../../assets/teamwork-meeting-with-business-people.jpg";
import affordability from "../../assets/9994025.jpg";
import installation from "../../assets/server-hub-supervisor-scolding-worker-unable-properly-optimize-code.jpg";
import { motion } from "framer-motion";
import InternetPlansSection from "./HomepagePlans";
import turnaround from "../../assets/side-view-kid-relaxing-home.jpg";
function HomePage() {
  return (
    <>
    <div className="bg-[#001117] min-h-screen text-white">

    <section className="relative bg-[#001117] py-24 px-6 text-white overflow-hidden">
  <svg
    className="absolute bottom-0 right-0 w-[500px] opacity-20 transform rotate-12 pointer-events-none"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#001117"
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
        <span className="text-[#E0CA5E]">Fastest</span> &{" "}
        <span className="text-[#E0CA5E]">Most Reliable</span> <br />
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
          Why<span className="text-[#E0CA5E]"> Choose Us</span> ?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
  {[
    {
      icon: <FaHelmetSafety size={20} />,
      image: technicians,
      title: "Certified Technicians",
      desc: "Experienced,well-trained, and courteous team.",
    },
    {
      icon: <FiDollarSign size={20} />,
      image: affordability,
      title: "Affordable Rates",
      desc: "Competitive pricing without compromising quality.",
    },
    {
      icon: <FiUsers size={20} />,
      title: "Customer-Centered Approach",
      image: support,
      desc: "We listen,we care,we deliver.",
    },
    {
      icon: <FiSettings size={20} />,
      title: "After-Sale Support",
      image: installation,
      desc: "Ongoing maintenance and technical assistance.",
    },
    {
      icon: <FiRefreshCw size={20} />,
      title: "Quick Turnaround",
      image: turnaround,
      desc: "Fast and efficient service delivery.",
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#001117] to-transparent opacity-70" />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center gap-4">
          <span className="bg-lime-400/20 text-[#E0CA5E] rounded-full px-3 py-1 text-sm flex items-center gap-1">
            {icon}
          </span>
          <span className="text-sm text-white font-medium">{title}</span>
        </div>

        <h4 className="text-sm font-bold text-white">{title}</h4>
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

