
import React from 'react';
import Navbar from '../../components/LeadCapture/Navbar';
import FeatureCard from '../../components/LeadCapture/FeatureCard';
import { motion } from 'framer-motion';
import '../../App.css';

export default function LeadCapture() {
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
    <div className="lead-capture-root min-h-screen selection:bg-purple-500/30 bg-[#030303] text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="lead-capture-bg-blob lead-capture-blob-1" />
      <div className="lead-capture-bg-blob lead-capture-blob-2" />

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1] px-4 sm:px-0">
                Get Started With our <span className="gradient-text">A.I Human Like Bot</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-4">
                  🚀 Our AI Assistant will call you within 3 to 15 minutes. Please stay standby.
                </p>
                <p className="text-lg text-gray-400">
                  If you would like a recorded transcript of your conversation, please reach out to us at <span className="text-white font-bold">862-236-8496</span> with your name and email, and we will send it to you.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2aDgTu6WW0RonsTet9IOCrcf6trWqdkQs4-NOZzaqg73xnQ/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 accent-gradient rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all shadow-xl inline-flex items-center"
                >
                  Start Conversation with A.I
                  <i className="fa fa-external-link ml-3" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white-10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} n8n. All rights reserved.</p>
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
