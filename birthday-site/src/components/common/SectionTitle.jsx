import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 px-4">
      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-script text-2xl text-bdayRose mb-2"
      >
        {subtitle}
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl text-bdayDark text-gradient"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
