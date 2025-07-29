
import { motion } from "framer-motion";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import aboutImage from "../../assets/medium-shot-couple-with-laptop(1).png";
import whoweareImage from "../../assets/medium-shot-woman-holding-laptop(1).jpg";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-[#001117] py-24 px-6 text-white overflow-hidden">
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
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We Help You Stay <span className="text-[#E0CA5E]">Connected & Secure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-200 mb-8"
            >
              It’s tough juggling slow connections, unreliable service, or poor tech support.
              That’s where we come in — making sure your internet and digital security work like they should, so you can focus on what matters most.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#E0CA5E] text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
            >
              Talk to Us
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src={aboutImage}
              alt="Connected home"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-200 space-y-4">
              <span>
                Inconet Technologies was founded with one goal: to simplify connectivity and security across Kenya. We didn’t just want to provide internet — we wanted to empower households, schools, and businesses with reliable ICT solutions they could trust.
              </span>
              <span>
                Since our launch, we've helped over 12,000 homes and 4,500 businesses get fast, stable internet and effective surveillance systems. Our approach is personal: we listen, we adapt, and we deliver solutions that actually work — no tech jargon, no upsells, just real service.
              </span>
            </p>
          </div>
          <div>
            <img
              src={whoweareImage}
              alt="Our team at work"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Clients</h2>
          <p className="text-gray-300 mb-8">
            We proudly serve a diverse range of clients, including:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-gray-100 font-medium">
            {[
              "Residential Homes",
              "Small and Medium Enterprises (SMEs)",
              "Schools and Institutions",
              "Corporate Offices",
              "Retail Outlets",
            ].map((client, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-md border border-white/20">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Mission Statement</h2>
            <p className="text-gray-300 text-lg">
              To provide affordable, high-quality ICT solutions that connect and protect our clients using reliable technology and excellent customer service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Vision Statement</h2>
            <p className="text-gray-300 text-lg">
              To become the most trusted and preferred ICT solutions provider in East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-100 font-medium">
            {["Integrity", "Innovation", "Professionalism", "Reliability", "Customer Focus"].map((value, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-md border border-white/20">
                {value}
              </div>
            ))}
          </div>
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

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="space-y-12">
            {[
              {
                name: "Sarah N.",
                quote: "Inconet helped us streamline operations with a fast, stable connection. Their support is top-notch!",
              },
              {
                name: "James K.",
                quote: "Professional and responsive team. From CCTV to broadband, they’ve been excellent every step of the way.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl shadow-md border border-white/20">
                <p className="text-lg text-gray-300 italic mb-4">“{testimonial.quote}”</p>
                <p className="text-[#E0CA5E] font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 text-white bg-[#001117]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Stay Connected</h2>
          <p className="text-gray-300 mb-4">Have a question or want a custom solution?</p>
          <p className="text-gray-300 mb-8">Reach out — we’d love to help.</p>
          <div className="space-y-2 text-gray-200">
            <p><strong>Email:</strong> info@inconet.co.ke</p>
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Social:</strong> Facebook · Instagram · LinkedIn</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
