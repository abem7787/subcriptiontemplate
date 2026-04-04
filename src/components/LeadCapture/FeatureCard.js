
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="lead-capture-glass-card p-10 rounded-[2.5rem] group hover:scale-[1.03] transition-all duration-700 relative overflow-hidden"
    >
      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white/[0.05] rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-white shadow-2xl group-hover:lead-capture-accent-gradient transition-all duration-500">
          <div className="lead-capture-gradient-text font-black text-xl">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold mb-4 tracking-tight lead-capture-gradient-text">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
