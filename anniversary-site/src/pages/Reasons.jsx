import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';
import { reasonsData } from '../data/reasonsData';
import { Heart } from 'lucide-react';

const Reasons = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle title="Why I Love You" subtitle="A Million Little Things" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsData.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
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
        </div>
      </div>
    </PageTransition>
  );
};

export default Reasons;
