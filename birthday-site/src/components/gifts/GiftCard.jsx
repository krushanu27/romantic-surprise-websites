import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

const GiftCard = ({ gift, index, isOpened, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, rotate: isOpened ? 0 : [0, -5, 5, -5, 0] }}
      onClick={onClick}
      className={`relative aspect-square rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 shadow-md ${
        isOpened 
          ? 'bg-white border-2 border-bdayRose/30 shadow-lg' 
          : 'bg-gradient-to-br from-bdayRose to-bdayPurple shadow-xl hover:shadow-2xl'
      }`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        {isOpened ? (
          <>
            <Heart className="w-8 h-8 text-bdayRose mb-2" fill="#D291BC" />
            <span className="font-display text-sm text-bdayDark">Gift {gift.id}</span>
          </>
        ) : (
          <>
            <Gift className="w-10 h-10 text-white mb-2" />
            <span className="font-display text-2xl text-white">{gift.id}</span>
          </>
        )}
      </div>

      {/* Decorative ribbons for closed gifts */}
      {!isOpened && (
        <>
          <div className="absolute top-0 bottom-0 left-1/2 -ml-2 w-4 bg-white/30" />
          <div className="absolute left-0 right-0 top-1/2 -mt-2 h-4 bg-white/30" />
        </>
      )}
    </motion.div>
  );
};

export default GiftCard;
