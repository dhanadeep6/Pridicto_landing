import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemoSection from "../components/DemoSection";
import FeedbackModal from "../components/FeedbackModal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Simple reusable Button component (no external dependency)
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function HomePage() {
  const navigate = useNavigate();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow pt-28 max-w-7xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Smarter <span className="text-indigo-600">Project Estimation</span> for
            Real Growth
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Make confident business decisions with AI-driven feasibility and
            cost estimation tools. Trusted by startups, enterprises, and
            industry leaders.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={() => navigate("/services")}>Explore Services</Button>
            <Button
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </motion.section>

        {/* Estimation Highlights Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              AI-Powered Estimation for IT & Construction Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our intelligent algorithms simplify project estimation — whether
              you're building software or infrastructure. Get real-time insights
              into cost, timeline, and risk factors.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Smart cost and resource forecasting</li>
              <li>Compare multiple vendors and budgets</li>
              <li>Instant construction feasibility analysis</li>
              <li>Integrated dashboards for all projects</li>
            </ul>
            <div className="mt-6">
              <Button onClick={() => navigate("/estimation")}>
                Try Estimation Tool
              </Button>
            </div>
          </div>

          {/* ✅ Updated image with analytics illustration */}
          <motion.img
            src="https://img.freepik.com/free-vector/data-analytics-dashboard-concept-illustration_114360-9021.jpg"
            alt="Analytics Dashboard Illustration"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.section>

        {/* Demo Section */}
        <DemoSection />

        {/* About Predicto Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Why Choose Predicto?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide accurate cost projections, market insights, and
            competitive benchmarking — empowering your business to make
            data-driven investment decisions.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate("/about")}>Learn More</Button>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsFeedbackModalOpen(true)}
            >
              Give Feedback
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </div>
  );
}
