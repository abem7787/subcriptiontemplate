'use client';

import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      ),
      title: "AI-Powered Calling",
      description: "Vapi AI handles discovery calls with natural, human-like conversation that builds immediate trust."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
      ),
      title: "Smart Qualification",
      description: "Gemini AI analyzes every conversation in real-time to identify high-intent buying signals."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.01 19 2.45-2.45a2 2 0 0 1 2.83 0L16.74 19" /></svg>
      ),
      title: "Automated Follow-ups",
      description: "Seamlessly transition qualified leads into your CRM with automated, personalized next steps."
    }
  ];

  const steps = [
    { number: "01", title: "Capture", desc: "Leads enter through your custom forms or integrations." },
    { number: "02", title: "Connect", desc: "Our AI assistant initiates an outbound call within seconds." },
    { number: "03", title: "Qualify", desc: "Sophisticated AI models evaluate lead quality and intent." },
    { number: "04", title: "Close", desc: "High-value prospects are booked directly into your calendar." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      {/* Background Elements */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">Next-Gen Sales Automation</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1] px-4 sm:px-0">
                Transform Your <span className="gradient-text">Sales Process</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Experience the future of sales with our autonomous AI assistant.
                Capture, qualify, and close deals—all on autopilot while you sleep.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-6 sm:px-0">
                <a href="#get-started" className="w-full sm:w-auto px-8 py-4 accent-gradient rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-purple-500/25">
                  Book a Demo Today
                </a>
                <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 glass rounded-2xl text-white font-bold text-lg hover:bg-white/10 transition-all">
                  See how it works
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
              <p className="text-gray-400 px-4 sm:px-0">Everything you need to scale your sales without scaling your headcount.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto glass-card rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-20 relative overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 blur-[100px]" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">How It <span className="text-purple-400">Works</span></h2>
                  <p className="text-gray-400 text-lg mb-10">Our ecosystem connects the most advanced AI tools into a single, seamless sales powerhouse.</p>

                  <div className="space-y-8">
                    {steps.map((step, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        className="flex items-start space-x-6"
                      >
                        <span className="text-3xl font-black text-white/10">{step.number}</span>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                          <p className="text-gray-400">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, rotate: 5 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative"
                >
                  <div className="aspect-square glass-card rounded-[2rem] flex items-center justify-center p-8 bg-gradient-to-br from-white/5 to-transparent">
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-6 flex justify-center text-purple-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.01 19 2.45-2.45a2 2 0 0 1 2.83 0L16.74 19" /></svg>
                      </motion.div>
                      <h4 className="text-2xl font-bold text-white">Full Automation</h4>
                      <p className="text-gray-500 mt-2">No manual data entry required</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section id="get-started" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">Ready to <span className="gradient-text">Scale?</span></h2>
              <p className="text-lg md:text-xl text-gray-400 px-4 sm:px-0">Fill out the form below and our AI assistant will reach out to you within minutes.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto glass-card rounded-3xl overflow-hidden p-1 shadow-2xl"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-[600px] md:h-[900px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc2aDgTu6WW0RonsTet9IOCrcf6trWqdkQs4-NOZzaqg73xnQ/viewform?embedded=true"
                  className="w-full h-full"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Lead Capture Form"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5">
          <div className="container mx-auto px-6 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} n8n Leads. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="hover:text-white transition-colors cursor-pointer">n8n</span>
              <span className="hover:text-white transition-colors cursor-pointer">Vapi AI</span>
              <span className="hover:text-white transition-colors cursor-pointer">Gemini AI</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
