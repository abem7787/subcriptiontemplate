
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 lead-capture-glass"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Branding removed as requested */}
        </div>

        {/* Back Button on the Right */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="px-6 py-2 glass rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-all flex items-center"
          >
            <i className="fa fa-arrow-left mr-2" />
            Back
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
