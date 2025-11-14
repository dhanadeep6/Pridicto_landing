import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="pt-28 max-w-7xl mx-auto px-6 pb-20 space-y-24">

        {/* HERO SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-6">
              About <span className="text-indigo-600">Predicto</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Empowering entrepreneurs with predictive insights to make confident,
              data-driven business decisions that shape the future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              Discover More
            </motion.button>
          </div>
          <motion.div
            variants={fadeInRight}
            className="flex-1 flex justify-center"
          >
            <img
              src="public/assets/OIP.webp"
              alt="Data Analysis Illustration"
              className="rounded-3xl shadow-xl w-full max-w-md"
              onError={(e) =>
                (e.target.src =
                  "https://cdn.dribbble.com/userupload/7746746/file/original-43b829b4a6da57e54c944444d8885488.png")
              }
            />
          </motion.div>
        </motion.section>

        {/* MISSION & VISION SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-10"
        >
          <motion.div variants={fadeInLeft} className="flex-1">
            <img
            src="public/assets/Project-Estimation-Techniques-main (1).jpg"
              alt="Mission Illustration"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </motion.div>
          <motion.div
            variants={fadeInRight}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to make business intelligence accessible to every
              entrepreneur. We envision a future where startups leverage data
              analytics to achieve sustainable growth, secure funding, and scale
              globally with confidence.
            </p>
          </motion.div>
        </motion.section>

        {/* TEAM SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <motion.div variants={fadeInLeft} className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              A passionate group of strategists, designers, and developers united
              to bring predictive intelligence into the hands of entrepreneurs.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "RISINTERNATIONAL", role: "Founder & CEO" },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-slate-700 text-center"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${30 + i}.jpg`}
                    alt={member.name}
                    className="w-20 h-20 mx-auto mb-3 rounded-full object-cover border-2 border-indigo-500"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInRight} className="flex-1 flex justify-center">
            <img
            src="public/assets/371d58_5a9966f81707402cb4a1e15de31a24e5~mv2.avif"
              alt="Teamwork Illustration"
              className="rounded-3xl shadow-xl w-full max-w-md"
            />
          </motion.div>
        </motion.section>

        {/* ACHIEVEMENTS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 bg-indigo-600 text-white rounded-3xl p-10 shadow-xl"
        >
          <motion.div variants={fadeInLeft} className="flex-1">
            <img
            src="public/assets/OIP (1).webp"
              alt="Achievements Illustration"
              className="rounded-3xl shadow-lg w-full max-w-md"
            />
          </motion.div>
          <motion.div variants={fadeInRight} className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <p className="text-lg">
              🌍 Served <strong>200+ Startups</strong> <br /> 💰 Raised{" "}
              <strong>USD 20M+ Capital</strong>
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-indigo-50 transition"
            >
              Join Our Journey 🚀
            </motion.button>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
