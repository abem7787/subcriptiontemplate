
import React from 'react';
import Navbar from '../../components/LeadCapture/Navbar';
import FeatureCard from '../../components/LeadCapture/FeatureCard';
import { motion } from 'framer-motion';
import '../../App.css';

export default function LeadCapture() {
  const botFeatures = [
    {
      icon: "n8n",
      title: "Intelligent Orchestration",
      description: "Architect complex, high-performance workflows that seamlessly bridge the gap between initial capture and final conversion with absolute precision."
    },
    {
      icon: "Vapi",
      title: "Human-Centric Voice AI",
      description: "Deploy sophisticated voice synthesis that delivers a truly organic conversation experience, ensuring your prospects feel understood in real-time."
    },
    {
      icon: "Gemini",
      title: "Neural Intent Analysis",
      description: "Leverage advanced cognitive models to extract deep strategic insights from every interaction, transforming raw dialogue into high-value sales results."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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

        {/* Bot Tech Features Section */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {botFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
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
