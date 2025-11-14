import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then(() => {
        alert('Message sent successfully!');
        reset();
      })
      .catch(() => alert('Failed to send message.'));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name', { required: true })}
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
        />
        {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
      </div>
      <div>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
        />
        {errors.email && <p className="text-red-500 text-sm">Valid email is required</p>}
      </div>
      <div>
        <input
          {...register('company')}
          placeholder="Company (Optional)"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
        />
      </div>
      <div>
        <select
          {...register('service')}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
        >
          <option value="">Select Service</option>
          <option value="Business Plan">Business Plan Writing</option>
          <option value="Pitch Deck">Pitch Deck Creation</option>
          <option value="Financial Modelling">Financial Modelling</option>
          <option value="Market Research">Market Research & Feasibility</option>
          <option value="Startup Consulting">Startup Consulting</option>
          <option value="HR Support">Recruitment & HR Support</option>
        </select>
      </div>
      <div>
        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  );
}
