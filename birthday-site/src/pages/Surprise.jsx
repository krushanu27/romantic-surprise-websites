import React from 'react';
import { motion } from 'framer-motion';
import FinalSurprise from '../components/surprise/FinalSurprise';

const Surprise = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <FinalSurprise />
    </motion.div>
  );
};

export default Surprise;
