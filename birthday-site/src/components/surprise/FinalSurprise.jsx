import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import ConfettiBurst from '../common/ConfettiBurst';
import VideoMessage from './VideoMessage';
import QRReveal from './QRReveal';
import { pauseBackgroundMusic } from '../common/MusicToggle';

const FinalSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    if (isRevealing || isRevealed) return;

    pauseBackgroundMusic();
    setIsRevealing(true);

    setTimeout(() => {
      setIsRevealed(true);
    }, 800);
  };

  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center">
      <ConfettiBurst trigger={isRevealed} duration={5000} />

      {!isRevealed ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="group relative mb-8 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-[12px] border-white bg-bdayPink shadow-inner">
            <div className="absolute inset-0 -rotate-12 transform bg-bdayRose/20 transition-transform duration-500 group-hover:rotate-0" />
            <span className="relative z-10 animate-bounce text-7xl">🎁</span>
          </div>

          <h2 className="mb-8 font-display text-4xl text-bdayDark">
            Ready for the big surprise?
          </h2>

          <div className="flex justify-center">
            <Button
              onClick={handleReveal}
              disabled={isRevealing}
              className="mx-auto px-10 py-5 text-xl"
            >
              {isRevealing ? 'Opening...' : 'Reveal Now!'}
            </Button>
          </div>
        </motion.div>
      ) : (
        <div className="w-full space-y-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 font-display text-5xl text-gradient md:text-6xl">
              Happy Birthday!
            </h2>
            <p className="mb-12 font-script text-3xl text-bdayRose">
              Here is to another amazing year ahead!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <VideoMessage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <QRReveal />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FinalSurprise;