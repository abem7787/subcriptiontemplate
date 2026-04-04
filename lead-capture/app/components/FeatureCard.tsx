'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-3xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-magenta opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500 shadow-inner text-purple-400 group-hover:text-purple-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
