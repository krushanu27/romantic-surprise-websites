import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { Heart } from 'lucide-react';
import { fadeBackgroundMusic } from '../common/BackgroundMusicToggle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: 'easeOut',
    },
  },
};

const FinalMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const timer = setTimeout(() => {
      fadeBackgroundMusic(0.005, 0.04, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentRose/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center z-10"
      >
        <div className="h-8 md:h-12" />

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mb-8"
        >
          <Heart className="w-16 h-16 text-accentRose" fill="currentColor" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-softCream mb-8 drop-shadow-md"
        >
          And I Still Choose You
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-softCream/80 font-light leading-relaxed mb-12 italic max-w-2xl mx-auto"
        >
          Not because our story was the easiest.
          <br />
          But because, in every quiet way that matters, you are still the one my heart returns to.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-accentRose to-transparent mx-auto mb-12"
        />

        <motion.p
          variants={itemVariants}
          className="text-lg text-softCream/70 mb-12 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.18em] font-medium"
        >
          Thank you for every small step, every quiet moment, and every chance to keep building us.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <Button onClick={() => navigate('/')} className="px-8 py-3">
            Back to the Beginning
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinalMessage;