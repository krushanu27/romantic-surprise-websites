import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ReasonsGrid from '../components/reasons/ReasonsGrid';

const Reasons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <SectionTitle title="22 Reasons Why" subtitle="I Adore You" />
      <ReasonsGrid />
    </motion.div>
  );
};

export default Reasons;
