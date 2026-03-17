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
    <div className="w-full flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!showLetter && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40, scale: 0.96 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-full max-w-xl mx-auto mt-6 mb-10"
          >
            <button
              type="button"
              onClick={handleOpen}
              className="relative w-full h-72 md:h-80 focus:outline-none"
              aria-label="Open the letter"
            >
              {/* Envelope back */}
              <div className="absolute inset-x-0 bottom-0 h-48 md:h-56 bg-[#f6eadb] rounded-b-2xl shadow-2xl border border-white/10" />

              {/* Letter peeking out */}
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { y: -70, opacity: 1 }
                    : { y: 0, opacity: 0.95 }
                }
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute left-1/2 bottom-16 md:bottom-20 -translate-x-1/2 w-[82%] h-40 md:h-48 bg-[#fffaf3] rounded-t-xl shadow-lg border border-stone-200"
              >
                <div className="h-full flex items-center justify-center text-stone-500 font-serif italic text-base md:text-lg">
                  For You
                </div>
              </motion.div>

              {/* Envelope flap */}
              <motion.div
                initial={false}
                animate={
                  isOpen
                    ? { rotateX: 180 }
                    : { rotateX: 0 }
                }
                transition={{ duration: 0.9, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top' }}
                className="absolute inset-x-0 top-8 md:top-10 mx-auto w-0 h-0
                  border-l-[170px] md:border-l-[220px]
                  border-r-[170px] md:border-r-[220px]
                  border-b-[110px] md:border-b-[135px]
                  border-l-transparent border-r-transparent border-b-[#e9d7c1]
                  z-20 drop-shadow-lg"
              />

              {/* Envelope front */}
              <div
                className="absolute inset-x-0 bottom-0 mx-auto w-0 h-0
                  border-l-[170px] md:border-l-[220px]
                  border-r-[170px] md:border-r-[220px]
                  border-t-[120px] md:border-t-[150px]
                  border-l-transparent border-r-transparent border-t-[#f1dfca]
                  z-30"
              />

              {/* Seal */}
              <div className="absolute left-1/2 bottom-20 md:bottom-24 -translate-x-1/2 z-40 w-14 h-14 rounded-full bg-accentRose flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-softCream" fill="currentColor" />
              </div>
            </button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center text-softCream/70 italic mt-6"
            >
              {isOpen ? 'Opening...' : 'Tap to open'}
            </motion.p>
          </motion.div>
        )}

        {showLetter && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
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