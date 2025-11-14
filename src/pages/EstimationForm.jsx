import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function EstimationForm() {
  const [dark, setDark] = useState(false);
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/estimate', data);
      // Store estimate in localStorage or context for dashboard
      localStorage.setItem('estimate', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      alert('Error generating estimate. Please try again.');
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? 'bg-slate-900 text-gray-100':'bg-white text-gray-800'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-28 pb-16 max-w-4xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center mb-8">
          <h1 className="text-4xl font-bold">Project Estimation</h1>
          <p className="text-gray-500 dark:text-gray-300 mt-2">Fill in the details to get an AI-powered estimate.</p>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <h2 className="text-2xl font-semibold mb-6">Step 1: Project Type</h2>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Project Type</span>
                  <select {...register('projectType', { required: true })} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                    <option value="">Select...</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI/ML Project</option>
                    <option value="ecommerce">E-commerce Platform</option>
                  </select>
                  {errors.projectType && <span className="text-red-500">This field is required</span>}
                </label>
              </div>
              <div className="mt-6 flex justify-end">
                <button type="button" onClick={nextStep} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Next</button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <h2 className="text-2xl font-semibold mb-6">Step 2: Project Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Team Size</span>
                  <input type="number" {...register('teamSize', { required: true, min: 1 })} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600" />
                  {errors.teamSize && <span className="text-red-500">Required, min 1</span>}
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Complexity</span>
                  <select {...register('complexity', { required: true })} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                    <option value="">Select...</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                  {errors.complexity && <span className="text-red-500">This field is required</span>}
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Duration (weeks)</span>
                  <input type="number" {...register('duration', { required: true, min: 1 })} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600" />
                  {errors.duration && <span className="text-red-500">Required, min 1</span>}
                </label>
              </div>
              <div className="mt-6 flex justify-between">
                <button type="button" onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">Back</button>
                <button type="button" onClick={nextStep} className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Next</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow">
              <h2 className="text-2xl font-semibold mb-6">Step 3: Tech Stack</h2>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Frontend</span>
                  <select {...register('frontend')} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                    <option value="">Select...</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Backend</span>
                  <select {...register('backend')} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                    <option value="">Select...</option>
                    <option value="node">Node.js</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Database</span>
                  <select {...register('database')} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                    <option value="">Select...</option>
                    <option value="mongodb">MongoDB</option>
                    <option value="postgres">PostgreSQL</option>
                    <option value="mysql">MySQL</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 flex justify-between">
                <button type="button" onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700">Back</button>
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Generate Estimate</button>
              </div>
            </motion.div>
          )}
        </form>
      </main>
      <Footer/>
    </div>
  );
}
