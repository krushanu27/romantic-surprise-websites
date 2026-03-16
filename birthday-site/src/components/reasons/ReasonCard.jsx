import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ReasonCard = ({ index, reason }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-8 relative overflow-hidden break-inside-avoid"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-bdayPink rounded-bl-full -z-10" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-bdayPurple/20 flex items-center justify-center">
          <span className="font-display text-bdayPurple">{index + 1}</span>
        </div>
        <Sparkles className="w-5 h-5 text-bdayRose" />
      </div>
      
      <p className="font-sans text-xl text-bdayDark/80 font-medium leading-relaxed">
        {reason}
      </p>
    </motion.div>
  );
};

export default ReasonCard;
