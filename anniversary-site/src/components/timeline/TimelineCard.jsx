import React from 'react';
import { motion } from 'framer-motion';

const TimelineCard = ({ item, index, isLeft }) => {
  return (
    <div className={`flex flex-col md:flex-row w-full items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Mobile Date Bubble (hidden on desktop) */}
      <div className="md:hidden w-full flex justify-center mb-4">
        <span className="bg-accentGold text-darkBg text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
          {item.date}
        </span>
      </div>

      {/* Content Space (empty for offset) */}
      <div className="hidden md:block w-[45%]" />

      {/* Center Dot */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-darkBg border-4 border-accentGold z-10 items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accentGold animate-pulse" />
      </div>

      {/* Card Content */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="w-full md:w-[45%] glass-card p-6 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accentGold/5 to-accentRose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Desktop Date Badge */}
        <div className="hidden md:block absolute -top-3 -right-3 z-20">
          <span className="bg-accentGold text-darkBg text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {item.date}
          </span>
        </div>

        <div className="aspect-video w-full rounded-lg overflow-hidden mb-6 relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%232a2a2a%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23555%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3EMemory%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E';
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-serif text-accentGold mb-3 group-hover:text-softCream transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-softCream/70 leading-relaxed font-light">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
