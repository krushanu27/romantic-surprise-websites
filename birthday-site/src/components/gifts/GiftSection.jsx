import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { giftsData } from '../../data/giftsData';
import GiftCard from './GiftCard';
import ConfettiBurst from '../common/ConfettiBurst';

const GiftSection = () => {
  const [openedGifts, setOpenedGifts] = useState(new Set());
  const [activeGift, setActiveGift] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenGift = (gift) => {
    if (!openedGifts.has(gift.id)) {
      setOpenedGifts(prev => new Set(prev).add(gift.id));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    setActiveGift(gift);
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 relative">
      <ConfettiBurst trigger={showConfetti} />
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {giftsData.map((gift, index) => (
          <GiftCard 
            key={gift.id}
            gift={gift}
            index={index}
            isOpened={openedGifts.has(gift.id)}
            onClick={() => handleOpenGift(gift)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bdayDark/80 backdrop-blur-sm"
            onClick={() => setActiveGift(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveGift(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-bdayRose"
              >
                ✕
              </button>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-bdayPink rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-3xl text-bdayRose">{activeGift.id}</span>
                </div>
                
                <h3 className="font-display text-2xl text-bdayDark mb-4">{activeGift.title}</h3>
                
                <div className="w-full h-48 bg-gray-100 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <p className="text-gray-400 font-medium">Image Placeholder</p>
                </div>
                
                <p className="text-gray-600 font-medium leading-relaxed italic">
                  "{activeGift.message}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftSection;
