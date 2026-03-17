import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import { reasonsData } from '../data/reasonsData';
import { Heart } from 'lucide-react';
import Button from '../components/common/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

const Reasons = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle
          title="Reasons My Heart Chose You"
          subtitle="Not loud reasons. Just honest ones."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasonsData.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accentRose/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-10 h-10 rounded-full bg-accentGold/10 flex items-center justify-center mb-4 text-accentGold group-hover:text-accentRose transition-colors">
                <Heart size={20} fill="currentColor" className="opacity-80" />
              </div>

              <p className="font-serif text-softCream/90 leading-relaxed italic text-lg lg:text-xl relative z-10">
                "{reason}"
              </p>

              <div className="mt-4 text-xs font-bold text-accentGold/50 uppercase tracking-[0.2em]">
                Reason No. {(index + 1).toString().padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mt-16 md:mt-20"
        >
          <p className="text-softCream/70 text-base md:text-lg italic mb-6 max-w-2xl leading-relaxed">
            And after every reason, every memory, and every quiet step that brought us here,
            there is still one thing my heart wants to say.
          </p>

          <Button onClick={() => navigate('/forever')} className="text-lg px-8 py-4">
            <span>One Last Thing</span>
            <Heart className="w-5 h-5 ml-2" fill="currentColor" />
          </Button>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Reasons;