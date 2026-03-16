import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import GiftSection from '../components/gifts/GiftSection';

const Gifts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <SectionTitle title="22 Little Surprises" subtitle="Just For You" />
      <GiftSection />
    </motion.div>
  );
};

export default Gifts;
