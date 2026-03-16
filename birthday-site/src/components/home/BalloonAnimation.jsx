import React from 'react';
import { motion } from 'framer-motion';

const BalloonAnimation = () => {
  const balloons = [
    { color: 'bg-bdayRose', left: '10%', delay: 0 },
    { color: 'bg-bdayPurple', left: '25%', delay: 2 },
    { color: 'bg-bdayChampagne', left: '50%', delay: 4 },
    { color: 'bg-bdayRose', left: '75%', delay: 1 },
    { color: 'bg-bdayPurple', left: '90%', delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          initial={{ y: '120vh', x: 0 }}
          animate={{ 
            y: '-20vh',
            x: [0, 50, -50, 0],
          }}
          transition={{ 
            y: { duration: 15, repeat: Infinity, ease: 'linear', delay: balloon.delay },
            x: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute opacity-60"
          style={{ left: balloon.left }}
        >
          {/* Balloon Body */}
          <div className={`w-24 h-32 rounded-[50%] ${balloon.color} shadow-inner relative`}>
            {/* Highlight */}
            <div className="absolute top-4 left-4 w-6 h-12 rounded-[50%] bg-white/30 transform rotate-12" />
          </div>
          {/* Balloon string */}
          <div className="w-0.5 h-32 bg-gray-300/50 mx-auto transform -translate-y-2 origin-top animate-wiggle" />
        </motion.div>
      ))}
    </div>
  );
};

export default BalloonAnimation;
