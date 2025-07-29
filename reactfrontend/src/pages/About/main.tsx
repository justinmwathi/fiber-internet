import { motion } from "framer-motion";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import westernImg from "../../assets/western_kenya(1).jpg";
import centralImg from "../../assets/central_kenya.jpg";
import coastImg from "../../assets/coast_kenya.jpg";
// Existing image imports
import aboutImage from "../../assets/medium-shot-couple-with-laptop(1).png";
import whoweareImage from "../../assets/medium-shot-woman-holding-laptop(1).jpg";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);
  const regions = [
    { name: "Central", img: centralImg },
    { name: "Western", img: westernImg },
    { name: "Coast", img: coastImg },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % regions.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-[#001117] py-24 px-6 text-white overflow-hidden">
        {/* Decorative Blob */}
        <svg
          className="absolute bottom-0 right-0 w-[500px] opacity-20 rotate-12"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#A3E635"
            d="M43.3,-61.6C58.1,-54.3,73.5,-43.4,76.6,-29.6C79.8,-15.8,70.8,0.9,61.6,14.3C52.4,27.7,43,37.8,32.5,46.3C22,54.8,11,61.8,-1.8,64.3C-14.6,66.9,-29.1,65,-39.4,56.6C-49.7,48.1,-55.9,33.2,-59.7,18.5C-63.5,3.8,-64.9,-10.7,-60.4,-24.1C-56,-37.6,-45.7,-50,-32.6,-57.6C-19.6,-65.2,-3.8,-68,10.6,-71.7C25,-75.4,50.1,-69,43.3,-61.6Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10 items-center">
          {/* Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="text-[#E0CA5E]">Inconet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 mb-8"
            >
              We're committed to delivering Kenya’s most dependable and accessible internet. Discover how we empower homes, communities, and businesses with seamless connectivity.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#E0CA5E] text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </motion.button>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src={aboutImage}
              alt="Connect with internet"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-200">
              Inconet was founded with the vision of enhancing connectivity and security for homes and businesses,we combine innovation,professionalism,and reliability to deliver top-tier services to our clients.
            </p>
          </div>
          <div>
            <img
              src={whoweareImage}
              alt="WiFiWave team"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

{/* Our Coverage Section */}
{/* Our Coverage Section - Animated Slideshow */}
<section className="py-20 px-6 bg-white/5 backdrop-blur-sm text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Our Coverage Across Kenya
    </h2>

    <div className="relative w-full h-[400px] bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden flex items-center justify-center">
      {[
        { name: "Central", img: centralImg },
        { name: "Western", img: westernImg },
        { name: "Coast", img: coastImg },
      ].map((region, index) => (
        <motion.div
          key={region.name}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={region.img}
            alt={`${region.name} Kenya`}
            className="w-full h-full object-cover rounded-xl"
          />
          {index === currentIndex && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-lime-400 backdrop-blur-sm px-4 py-2 rounded-md">
                {region.name} Kenya
              </h3>
            </div>
          )}
        </motion.div>
      ))}
    </div>

    <p className="text-center mt-6 text-gray-300">
      WiFiWave currently serves major counties in Central, Western, and Coastal Kenya.
    </p>
  </div>
</section>




      {/* Stats */}
      <section ref={ref} className="text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Growing Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Regions Connected", end: 35 },
            { label: "Homes Reached", end: 12000 },
            { label: "Businesses Empowered", end: 4500 },
            { label: "Support Centers", end: 28 },
          ].map(({ label, end }) => (
            <div
              key={label}
              className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20"
            >
              <h3 className="text-4xl font-bold text-[#E0CA5E]">
                {startCount && <CountUp end={end} duration={2} separator="," />}
              </h3>
              <p className="text-gray-200 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </>
  );
}

export default About;
