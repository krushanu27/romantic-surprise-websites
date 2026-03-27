import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Gift } from 'lucide-react';
import Button from '../common/Button';
import CountdownTimer from '../common/CountdownTimer';
import { playBackgroundMusic } from '../common/MusicToggle';


const BirthdayHero = () => {
  const navigate = useNavigate();

  const targetDate = new Date('2026-04-26T00:00:00');

  const handleStart = () => {
    playBackgroundMusic();

    setTimeout(() => {
      navigate('/gifts');
    }, 300);
  };

  return (
    <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 pt-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        className="mx-auto max-w-4xl text-center"
      >
        <span className="mb-4 block -rotate-2 font-script text-3xl text-bdayRose md:text-5xl">
          It&apos;s almost time...
        </span>

        <h1 className="mb-10 font-display text-6xl text-bdayDark text-gradient drop-shadow-md md:text-8xl lg:text-9xl">
          HAPPY
          <br />
          BIRTHDAY!
        </h1>

        <div className="mb-12">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center"
        >
          <Button
            onClick={handleStart}
            className="mx-auto px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl"
          >
            <span>Open Your Surprise</span>
            <Gift className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BirthdayHero;