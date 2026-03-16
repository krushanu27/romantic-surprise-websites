import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../../data/galleryData';
import GalleryModal from './GalleryModal';
import { Maximize2 } from 'lucide-react';

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid"
            onClick={() => setSelectedImage(item)}
          >
            <div className="absolute inset-0 bg-accentGold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10" />
            <img 
              src={item.url} 
              alt={item.caption} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22800%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23555%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3EPhoto%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <Maximize2 className="w-8 h-8 text-white mb-2" />
              <p className="font-serif text-white text-lg px-4 text-center">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <GalleryModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
