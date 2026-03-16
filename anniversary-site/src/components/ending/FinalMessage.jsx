import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { Heart } from 'lucide-react';

const FinalMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentGold/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8"
        >
          <Heart className="w-16 h-16 text-accentRose" fill="currentColor" />
        </motion.div>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-softCream mb-8 drop-shadow-md">
          To Infinity & Beyond
        </h2>
        
        <p className="text-xl md:text-2xl text-softCream/80 font-light leading-relaxed mb-12 italic">
          "Whatever our souls are made of, yours and mine are the same."
        </p>
        
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accentGold to-transparent mx-auto mb-12" />
        
        <p className="text-lg text-softCream/70 mb-12 max-w-xl mx-auto uppercase tracking-[0.2em] font-medium">
          Thank you for making every single day feel just like a dream. Here's to us.
        </p>

        <Button onClick={() => navigate('/')} variant="outline" className="px-8 py-3">
          Back to the Beginning
        </Button>
      </motion.div>
    </div>
  );
};

export default FinalMessage;
