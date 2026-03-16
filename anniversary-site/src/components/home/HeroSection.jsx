import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { Heart } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accentRose/20 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-accentGold tracking-[0.4em] text-sm md:text-base uppercase mb-6 block"
        >
          Happy Anniversary
        </motion.span>
        
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl mb-8 text-softCream drop-shadow-lg">
          My Forever
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-softCream/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Every love story is beautiful, but ours is my favorite. Here is a little collection of the memories we've built and the promises we share.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Button onClick={() => navigate('/story')} className="text-lg px-8 py-4">
            <span>Enter Our Story</span>
            <Heart className="w-5 h-5 ml-2" fill="currentColor" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
