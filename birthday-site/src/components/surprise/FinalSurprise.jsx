import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import ConfettiBurst from '../common/ConfettiBurst';
import VideoMessage from './VideoMessage';
import QRReveal from './QRReveal';

const FinalSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] relative">
      <ConfettiBurst trigger={isRevealed} duration={5000} />
      
      {!isRevealed ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="w-48 h-48 mx-auto mb-8 bg-bdayPink rounded-full shadow-inner flex items-center justify-center border-[12px] border-white relative overflow-hidden group">
             <div className="absolute inset-0 bg-bdayRose/20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
             <span className="text-7xl relative z-10 animate-bounce">🎁</span>
          </div>
          <h2 className="font-display text-4xl mb-8 text-bdayDark">Ready for the big surprise?</h2>
          <Button onClick={() => setIsRevealed(true)} className="px-10 py-5 text-xl">
            Reveal Now!
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-center space-y-16"
        >
          <div>
            <h2 className="font-display text-5xl md:text-6xl text-gradient mb-4">
              Happy Birthday!
            </h2>
            <p className="font-script text-3xl text-bdayRose mb-12">
              Here is to another amazing year ahead!
            </p>
          </div>
          
          <VideoMessage />
          <QRReveal />
          
        </motion.div>
      )}
    </div>
  );
};

export default FinalSurprise;
