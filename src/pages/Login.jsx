import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [dark, setDark] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? 'bg-slate-900 text-gray-100':'bg-white text-gray-800'}`}>
      <Navbar dark={dark} setDark={setDark} />
      <main className="pt-28 pb-16 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-slate-800 shadow">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-slate-700 dark:border-slate-600"
                required
              />
            </div>
            <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
          </p>
          <p className="text-center mt-2">
            <Link to="/reset-password" className="text-indigo-600 hover:underline">Forgot password?</Link>
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
