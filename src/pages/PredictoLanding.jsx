import React from "react";
import { Link } from "react-router-dom";
import { Brain, TrendingUp, Clock, BarChart3, CheckCircle, Users, Layers, LineChart, Zap, ArrowRight } from "lucide-react";

export default function PredictoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
          PREDICTO.AI
        </h1>
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link to="/home" className="hover:text-emerald-600 transition">Home</Link>
          <Link to="/about" className="hover:text-emerald-600 transition">Features</Link>
          <Link to="/estimate" className="hover:text-emerald-600 transition">Estimation</Link>
          <Link to="/contact" className="hover:text-emerald-600 transition">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="bg-emerald-100/60 inline-flex items-center gap-2 px-4 py-2 rounded-full text-emerald-700 font-semibold mb-6">
            <Brain className="w-4 h-4" /> AI-POWERED PROJECT FORECASTING
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Smarter <span className="text-emerald-600">Project Estimation</span> for Modern Teams
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Predicto helps developers, managers, and startups estimate project cost, time, and resources 
            using AI trained on 1,000+ real-world projects. Plan confidently and deliver faster.
          </p>
          <div className="flex gap-4">
            <Link
              to="/estimate"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Start Free Estimation
            </Link>
            <Link
              to="/about"
              className="border border-emerald-600 px-8 py-4 rounded-xl font-semibold text-emerald-700 hover:bg-emerald-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://doofer.io/wp-content/uploads/2025/02/Group-63.png"
            alt="Project estimation dashboard"
            className="rounded-3xl shadow-xl border border-slate-200"
          />
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg border border-emerald-200 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Clock className="text-emerald-500" />
              <div>
                <p className="font-bold text-lg">90% Accuracy</p>
                <p className="text-sm text-slate-500">Validated estimation engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Why Teams Choose <span className="text-emerald-600">Predicto</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <Feature icon={<BarChart3 />} title="Precise Cost Analysis" desc="Estimate development costs based on team size, tech stack, and project complexity." />
            <Feature icon={<TrendingUp />} title="Real-Time Insights" desc="Instant feedback and visual analytics powered by AI algorithms." />
            <Feature icon={<Users />} title="Team Collaboration" desc="Share project estimates, manage revisions, and keep your stakeholders aligned." />
            <Feature icon={<Layers />} title="Modular Breakdown" desc="Break projects into modules and get separate cost & time metrics." />
            <Feature icon={<LineChart />} title="Dynamic Visualization" desc="Visualize project data with intuitive graphs, charts, and reports." />
            <Feature icon={<Zap />} title="Instant Results" desc="Generate accurate project forecasts in seconds using predictive modeling." />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Compare Predicto vs Others
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-200 bg-white rounded-xl shadow">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="border border-slate-200 p-4 text-left font-semibold">Feature</th>
                  <th className="border border-slate-200 p-4">Predicto</th>
                  <th className="border border-slate-200 p-4">Devtimate</th>
                  <th className="border border-slate-200 p-4">Doofer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Cost Estimation", true, true, false],
                  ["Time Prediction", true, true, true],
                  ["Real-time Dashboard", true, true, false],
                  ["PDF Export", true, false, true],
                  ["Custom Tech Stack Input", true, false, true],
                  ["Cloud Analytics", true, true, false],
                ].map(([feature, p, d, doofer]) => (
                  <tr key={feature} className="text-slate-700 hover:bg-slate-50 transition">
                    <td className="border border-slate-200 p-4 text-left">{feature}</td>
                    <td className="border border-slate-200 p-4">{p ? <CheckCircle className="text-emerald-500 inline" /> : "—"}</td>
                    <td className="border border-slate-200 p-4">{d ? <CheckCircle className="text-blue-500 inline" /> : "—"}</td>
                    <td className="border border-slate-200 p-4">{doofer ? <CheckCircle className="text-purple-500 inline" /> : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white text-center">
        <h3 className="text-5xl font-bold mb-6">Start Estimating Smarter</h3>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Experience next-generation project planning with AI-driven precision.  
          Save time, reduce errors, and deliver confidently.
        </p>
        <Link
          to="/estimate"
          className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
        >
          Start Free Now <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 text-center text-slate-400">
        <p>© 2025 Predicto.ai — Powered by Retouch IT Services Pvt Ltd</p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow hover:shadow-lg hover:-translate-y-1 transition">
      <div className="text-emerald-600 mb-4">{icon}</div>
      <h4 className="font-bold text-xl mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
