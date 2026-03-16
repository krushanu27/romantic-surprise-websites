import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.6 }}
        className="font-display text-9xl text-bdayRose mb-6 opacity-30"
      >
        404
      </motion.h1>
      <h2 className="font-display text-3xl md:text-4xl text-bdayDark mb-4">
        Party not found!
      </h2>
      <p className="text-xl text-bdayDark/70 mb-8 font-medium">
        Looks like you wandered away from the celebration.
      </p>
      <Button onClick={() => navigate('/')}>
        Back to the Party
      </Button>
    </div>
  );
};

export default NotFound;
