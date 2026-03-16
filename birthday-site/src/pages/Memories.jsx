import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import BirthdayGallery from '../components/gallery/BirthdayGallery';

const Memories = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4"
    >
      <SectionTitle title="A Year of Memories" subtitle="Our Favorite Moments" />
      <BirthdayGallery />
    </motion.div>
  );
};

export default Memories;
