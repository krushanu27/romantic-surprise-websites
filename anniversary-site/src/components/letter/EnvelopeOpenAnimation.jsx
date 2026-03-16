import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoveLetterSection from './LoveLetterSection';
import { Heart } from 'lucide-react';

const EnvelopeOpenAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setShowLetter(true), 1200);
    }
  };

  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center">
      <AnimatePresence>
        {!showLetter && (
          <motion.div
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={handleOpen}
          >
            <div className="relative w-64 h-44 sm:w-80 sm:h-56">
              {/* Envelope Back */}
              <div className="absolute inset-0 bg-accentRose/80 rounded-sm shadow-xl" />
              
              {/* Envelope Flap (Top) */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full origin-top"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpen ? -180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ 
                  clipPath: 'polygon(0 0, 50% 50%, 100% 0)',
                  backgroundColor: '#c17a86',
                  zIndex: isOpen ? 10 : 30 
                }}
              />
              
              {/* Envelope Front (Bottom) */}
              <div 
                className="absolute inset-0 z-20"
                style={{ 
                  clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)',
                  backgroundColor: '#b76e79'
                }}
              />

              {/* Heart Seal */}
              <motion.div 
                initial={{ scale: 1 }}
                animate={{ scale: isOpen ? 0 : [1, 1.1, 1] }}
                transition={{ duration: isOpen ? 0.3 : 2, repeat: isOpen ? 0 : Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-darkBg rounded-full p-2 border-2 border-accentGold"
              >
                <Heart className="w-6 h-6 text-accentGold" fill="currentColor" />
              </motion.div>

              {/* Letter peeking out */}
              <motion.div
                className="absolute left-4 right-4 bg-softCream shadow-inner border border-stone-200 z-15"
                initial={{ top: "10%", bottom: "10%" }}
                animate={{ 
                  top: isOpen ? "-60%" : "10%",
                  opacity: isOpen ? [1, 1, 0] : 1
                }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                style={{ zIndex: 15 }}
              >
                <div className="p-4 flex flex-col gap-2 opacity-50">
                  <div className="h-2 w-1/3 bg-stone-300 rounded" />
                  <div className="h-2 w-full bg-stone-300 rounded" />
                  <div className="h-2 w-5/6 bg-stone-300 rounded" />
                  <div className="h-2 w-full bg-stone-300 rounded" />
                  <div className="h-2 w-1/2 bg-stone-300 rounded" />
                </div>
              </motion.div>
            </div>
            
            <p className="mt-8 font-serif text-accentGold tracking-[0.2em] uppercase text-sm group-hover:text-softCream transition-colors">
              {isOpen ? "Opening..." : "Tap to open"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            <LoveLetterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeOpenAnimation;
