import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description, onLearnMore }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl shadow bg-white dark:bg-slate-800 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <button
        onClick={onLearnMore}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Learn More
      </button>
    </motion.div>
  );
}
