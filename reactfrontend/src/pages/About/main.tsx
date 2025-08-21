import { motion } from "framer-motion";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
  Home,
  Building2,
  School,
  Briefcase,
  Store,
  ShieldCheck,
  Wifi,
  Users,
  Star,
} from "lucide-react";

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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              We Keep You{" "}
              <span className="text-[#E0CA5E]">Connected & Secure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Say goodbye to slow internet and unreliable support. We deliver
              fast, secure, and reliable ICT solutions that let you focus on
              what matters most.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#E0CA5E] text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-md transition"
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
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-white grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded with one mission: simplifying connectivity and digital
            security in Kenya. We go beyond internet delivery — empowering homes,
            schools, and businesses with reliable ICT solutions they can trust.
            <br />
            <br />
            Since launch, we’ve connected over{" "}
            <span className="text-[#E0CA5E] font-semibold">12,000 homes</span>{" "}
            and{" "}
            <span className="text-[#E0CA5E] font-semibold">4,500 businesses</span>{" "}
            with stable internet and advanced security systems.
          </p>
        </motion.div>
        <motion.img
          src={whoweareImage}
          alt="Our team at work"
          className="w-full rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Clients */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Clients</h2>
          <p className="text-gray-300 mb-12">
            Trusted by households, institutions, and businesses alike.
          </p>
          <div className="grid md:grid-cols-5 gap-6 text-gray-100">
            {[
              { name: "Homes", icon: Home },
              { name: "SMEs", icon: Briefcase },
              { name: "Schools", icon: School },
              { name: "Corporates", icon: Building2 },
              { name: "Retail", icon: Store },
            ].map(({ name, icon: Icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white/10 p-6 rounded-xl border border-white/20 shadow"
              >
                <Icon className="w-8 h-8 text-[#E0CA5E] mb-3" />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 text-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p className="text-gray-300">
              Provide affordable, high-quality ICT solutions that connect and
              protect our clients with reliable technology and top-notch support.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-3">Vision</h3>
            <p className="text-gray-300">
              To become the most trusted and preferred ICT solutions provider in
              East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Integrity", "Innovation", "Professionalism", "Reliability", "Customer Focus"].map(
              (value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/10 p-6 rounded-xl shadow border border-white/20"
                >
                  <Star className="w-6 h-6 text-[#E0CA5E] mx-auto mb-3" />
                  <p className="font-medium">{value}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="text-white text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Growing Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { label: "Regions Connected", end: 35, icon: Wifi },
            { label: "Homes Reached", end: 12000, icon: Home },
            { label: "Businesses Empowered", end: 4500, icon: Briefcase },
            { label: "Support Centers", end: 28, icon: Users },
          ].map(({ label, end, icon: Icon }) => (
            <div
              key={label}
              className="bg-white/10 p-6 rounded-xl shadow-lg border border-white/20"
            >
              <Icon className="w-8 h-8 text-[#E0CA5E] mx-auto mb-3" />
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah N.",
                quote:
                  "Inconet streamlined our operations with a fast, stable connection. Their support is top-notch!",
              },
              {
                name: "James K.",
                quote:
                  "Professional and responsive team. From CCTV to broadband, they’ve been excellent every step of the way.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-md"
              >
                <p className="text-lg text-gray-300 italic mb-4">“{t.quote}”</p>
                <p className="text-[#E0CA5E] font-semibold">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;

