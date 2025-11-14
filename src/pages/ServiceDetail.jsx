import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const serviceDetails = {
  1: {
    title: "Business Plan Writing",
    description:
      "We craft detailed, investor-ready business plans including executive summaries, financial projections, and market analysis to help startups attract funding.",
    image: "https://img.freepik.com/free-vector/business-plan-concept-illustration_114360-5450.jpg",
  },
  2: {
    title: "Pitch Deck Creation",
    description:
      "Get a stunning 10-15 slide investor pitch deck with compelling visuals, storytelling, and impactful design to win over investors.",
    image: "https://img.freepik.com/free-vector/startup-pitch-presentation-concept-illustration_114360-9131.jpg",
  },
  3: {
    title: "Financial Modelling",
    description:
      "We create robust financial models in Excel or Google Sheets with P&L, cash flow, and balance sheet forecasts for 3–5 years.",
    image: "https://img.freepik.com/free-vector/financial-data-analysis-concept_23-2149150783.jpg",
  },
  4: {
    title: "Market Research & Feasibility",
    description:
      "Comprehensive market research, feasibility studies, SWOT analysis, and competitive benchmarking tailored for your industry.",
    image: "https://img.freepik.com/free-vector/data-analysis-illustration_114360-903.jpg",
  },
  5: {
    title: "Startup Consulting",
    description:
      "We help founders with go-to-market strategy, operations, automation, and business growth roadmaps.",
    image: "https://img.freepik.com/free-vector/startup-development-concept-illustration_114360-2397.jpg",
  },
  6: {
    title: "Recruitment & HR Support",
    description:
      "From talent acquisition to HR process setup — we help build strong startup teams.",
    image: "https://img.freepik.com/free-vector/human-resources-concept-illustration_114360-2204.jpg",
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-300">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 hover:underline"
          >
            <FaArrowLeft /> Back to Services
          </button>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-800">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8 space-y-4">
              <h1 className="text-3xl font-bold text-indigo-600">{service.title}</h1>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
