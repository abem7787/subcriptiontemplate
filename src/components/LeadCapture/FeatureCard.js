
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-3xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden shadow-xl"
    >
      <div className="relative z-10">
        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
