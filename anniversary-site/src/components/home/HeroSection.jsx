import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accentRose/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        <motion.span
          variants={itemVariants}
          className="text-accentGold tracking-[0.4em] text-sm md:text-base uppercase mb-6 block"
        >
          For the love that chose patience
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-script text-6xl md:text-8xl lg:text-9xl mb-8 text-softCream drop-shadow-lg"
        >
          Still Choosing You
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-softCream/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ours was never a loud kind of love. It did not begin with perfect timing
          or instant certainty. It grew slowly, through patience, understanding,
          and the quiet hope that something beautiful could still be built.
          <br />
          <br />
          This is for everything we are becoming, one gentle step at a time.
        </motion.p>

        <motion.div variants={itemVariants}>
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