import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, TrendingUp, Clock, BarChart3, CheckCircle, Users, Layers, LineChart, Zap, ArrowRight, Sparkles, Shield, Target, Rocket } from "lucide-react";

export default function PredictoLanding() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-emerald-200/20 dark:bg-emerald-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-600/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-200/20 dark:bg-purple-600/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent select-none">
            PREDICTO.AI
          </h1>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/home" className="hover:text-emerald-600 transition-colors" aria-label="Go to Home">Home</Link>
            <Link to="/about" className="hover:text-emerald-600 transition-colors" aria-label="Learn more about features">Features</Link>
            <Link to="/estimate" className="hover:text-emerald-600 transition-colors" aria-label="Start estimation">Estimation</Link>
            <Link to="/contact" className="hover:text-emerald-600 transition-colors" aria-label="Contact us">Contact</Link>
          </div>
          <Link
            to="/estimate"
            aria-label="Start free estimation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <span className="hidden md:inline">Get Started</span>
            <span className="md:hidden">Start</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center z-10"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold mb-6 border border-emerald-200 dark:border-emerald-800"
          >
            <Sparkles className="w-4 h-4" />
            AI-powered project forecasting
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6">
            Smarter{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Project Estimation
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            {" "}for Modern Teams
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
            Estimate cost, time, and resources with precision using models trained on real projects. Plan confidently and deliver faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/estimate"
              aria-label="Start free estimation"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Free Estimation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              aria-label="Learn more"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-600 dark:hover:border-emerald-600 font-semibold transition-all bg-white dark:bg-slate-800"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {[
              { value: "10K+", label: "Projects" },
              { value: "98%", label: "Accuracy" },
              { value: "500+", label: "Clients" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
          <img
            src="https://doofer.io/wp-content/uploads/2025/02/Group-63.png"
            alt="Project estimation dashboard"
            loading="lazy"
            className="relative rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl border border-emerald-200 dark:border-emerald-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Clock className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">90% Accuracy</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Validated estimation engine</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-white dark:bg-slate-800/50 py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Why Teams Choose{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Predicto
              </span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to make project estimation fast, accurate, and collaborative
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Feature icon={<BarChart3 />} title="Precise Cost Analysis" desc="Estimate costs by team size, stack, and complexity with AI precision." />
            <Feature icon={<TrendingUp />} title="Real-Time Insights" desc="Instant feedback with beautiful visual analytics and dashboards." />
            <Feature icon={<Users />} title="Team Collaboration" desc="Share estimates and align stakeholders seamlessly in real-time." />
            <Feature icon={<Layers />} title="Modular Breakdown" desc="Get detailed per-module cost and time breakdowns instantly." />
            <Feature icon={<LineChart />} title="Dynamic Visualization" desc="Graph-driven insights for better decision making." />
            <Feature icon={<Zap />} title="Instant Results" desc="Accurate forecasts delivered in seconds, not hours." />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              How Predicto Works
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get accurate project estimates in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Input Project Details",
                desc: "Describe your project requirements, select your tech stack, and define the scope. Our intelligent form guides you through every detail.",
                icon: <Layers className="w-8 h-8" />
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "Our advanced AI algorithms analyze thousands of similar projects, market rates, and complexity factors to generate precise estimates.",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Get Your Estimate",
                desc: "Receive detailed cost breakdowns, timeline projections, and resource requirements. Export to PDF or share with stakeholders instantly.",
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-black text-emerald-600/20 dark:text-emerald-400/20">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Built for Modern Development Teams
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Save 80% Time", desc: "Get estimates in minutes, not weeks" },
                { title: "Reduce Errors", desc: "AI-powered accuracy eliminates guesswork" },
                { title: "Better Planning", desc: "Visualize timelines and resource needs" },
                { title: "Win More Deals", desc: "Professional estimates impress clients" }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {i + 1}
                  </div>
                  <h5 className="font-bold text-lg mb-2">{benefit.title}</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative py-20 md:py-28 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6"
          >
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Start Estimating Smarter Today
            </h3>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed">
              Experience next-generation planning with AI-driven precision. Save time, reduce errors, and deliver confidently.
            </p>
            <Link
              to="/estimate"
              aria-label="Start now"
              className="inline-flex items-center gap-3 bg-white text-emerald-600 px-10 py-5 rounded-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all text-lg"
            >
              Start Free Now
              <ArrowRight className="w-6 h-6" />
            </Link>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: "Bank-Grade Security" },
                { icon: Zap, label: "Lightning Fast" },
                { icon: Target, label: "98% Accuracy" },
                { icon: Rocket, label: "Instant Setup" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 py-12 text-center text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">© 2025 Predicto.ai — Powered by Retouch IT Services Pvt Ltd</p>
          <p className="text-xs mt-2 text-slate-500">Making project estimation smarter, one prediction at a time</p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-blue-600 text-white flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
        {icon}
      </div>
      <h4 className="font-bold text-lg md:text-xl mb-3">{title}</h4>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}