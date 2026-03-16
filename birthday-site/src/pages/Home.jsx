import React from 'react';
import { motion } from 'framer-motion';
import BirthdayHero from '../components/home/BirthdayHero';
import BalloonAnimation from '../components/home/BalloonAnimation';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[80vh]"
    >
      <BalloonAnimation />
      <BirthdayHero />
    </motion.div>
  );
};

export default Home;
