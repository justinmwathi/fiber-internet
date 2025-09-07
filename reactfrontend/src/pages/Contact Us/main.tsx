import { motion } from "framer-motion";
import NavBar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import heroimage from "../../assets/enthusiastic-happy-man-talks-via-mobile-phone-got-call-from-friend-colleague-discusses-good-news-raises-hand-tells-something-emotionally_1_-removebg-preview.png"

export default function ContactUs() {
  const [showModal, setShowModal] = useState<{ type: "success" | "error" | null }>({ type: null });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const phoneNumber = "254723994757";
      const text = `Hello, my name is ${name} (${email}).\n\n${message}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
      setShowModal({ type: "success" });
      form.reset();
    } catch (err) {
      setShowModal({ type: "error" });
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#001117] text-white min-h-screen">
        <section className="relative bg-[#001117] py-24 px-6 text-white overflow-hidden">
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

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="flex flex-col justify-center text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Get in <span className="text-[#E0CA5E]">Touch</span> with Us
              </motion.h1>
              <motion.p
                className="text-lg text-gray-200 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We're here to answer your questions, support your setup, or help you get started with Inconet.
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
                alt="Contact Inconet"
                className="w-full max-w-md md:max-w-lg object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6 text-sm text-gray-100">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-[#E0CA5E] mt-1" />
                <p>Eldoret, Kenya</p>
              </div>
              <div className="flex items-start gap-4">
                <FiPhone className="text-[#E0CA5E] mt-1" />
                <p>+254 723 994 757</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E0CA5E]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E0CA5E]"
                required
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E0CA5E]"
                required
              />
              <button
                type="submit"
                className="bg-[#E0CA5E] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#CCCC66] transition"
              >
                Send via WhatsApp
              </button>
            </div>
          </motion.form>
        </section>

        {showModal.type && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <motion.div
              className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {showModal.type === "success" ? (
                <>
                  <h3 className="text-xl font-bold mb-2">Message Sent </h3>
                  <p className="text-gray-600">We've opened WhatsApp with your message.</p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-2">Error</h3>
                  <p className="text-gray-600">Something went wrong. Please try again.</p>
                </>
              )}
              <button
                className="mt-6 px-4 py-2 bg-[#E0CA5E] rounded-lg font-medium"
                onClick={() => setShowModal({ type: null })}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
