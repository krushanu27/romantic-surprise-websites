import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import BirthdayLetter from '../components/letter/BirthdayLetter';

const Letter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <SectionTitle title="A Special Message" subtitle="From Me To You" />
      <BirthdayLetter />
    </motion.div>
  );
};

export default Letter;
