import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const GalleryModal = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-accentGold transition-colors z-50 p-2"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={image.url} 
          alt={image.caption} 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          onError={(e) => {
             e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23555%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3EPhoto%3C%2Ftext%3E%3C%2Fsvg%3E';
          }}
        />
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 font-serif text-xl sm:text-2xl text-softCream/90 italic text-center"
        >
          {image.caption}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;
