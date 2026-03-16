import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import CountdownTimer from '../common/CountdownTimer';
import { Gift } from 'lucide-react';

const BirthdayHero = () => {
  const navigate = useNavigate();
  // Set target to tomorrow for demonstration
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);
  targetDate.setHours(0, 0, 0, 0);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 px-4 pt-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="font-script text-3xl md:text-5xl text-bdayRose mb-4 block transform -rotate-2">
          It's almost time...
        </span>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-bdayDark text-gradient mb-12 drop-shadow-md">
          HAPPY<br/>BIRTHDAY!
        </h1>

        <div className="mb-16">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button onClick={() => navigate('/gifts')} className="text-xl px-10 py-5 mx-auto">
            <span>Open Your Surprise</span>
            <Gift className="w-6 h-6 ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BirthdayHero;
