import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ShareButtons from '../components/ShareButtons';
import { motion } from 'framer-motion';

const caseStudies = [
  { id: 1, title: 'Helped FinTech Startup raise $1.2 M', description: 'Created a compelling pitch deck and business plan.', industry: 'Finance', region: 'USA' },
  { id: 2, title: 'Built market entry strategy for Indian AgriTech firm', description: 'Conducted in-depth research and feasibility analysis.', industry: 'Agriculture', region: 'India' },
  { id: 3, title: 'Created pitch deck for AI startup in UK', description: 'Designed investor-winning presentation with data visualizations.', industry: 'Technology', region: 'UK' },
];

export default function Portfolio(){
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="pt-28 max-w-7xl mx-auto px-6 pb-16 space-y-12">
        <Breadcrumb />
        <motion.section initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center">
          <h1 className="text-4xl font-extrabold">Our <span className="text-indigo-600">Portfolio</span></h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">Success stories from our clients worldwide.</p>
        </motion.section>

        <section className="grid md:grid-cols-3 gap-6">
          {caseStudies.map(study => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-indigo-600">{study.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{study.description}</p>
              <p className="text-sm text-gray-400 mt-1">Industry: {study.industry} | Region: {study.region}</p>
              <div className="mt-4">
                <ShareButtons
                  url={`${window.location.origin}/portfolio#${study.id}`}
                  title={study.title}
                  description={study.description}
                />
              </div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  );
}
