import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';

export default function ScheduleMeeting() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Meeting scheduled for ${date.toDateString()} at ${time} with ${name} (${email})`);
  };

  return (
    <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Schedule a Meeting</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <div>
          <label className="block mb-2">Select Date:</label>
          <Calendar onChange={setDate} value={date} />
        </div>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
        </select>
        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded">Schedule</button>
      </form>
    </motion.div>
  );
}
