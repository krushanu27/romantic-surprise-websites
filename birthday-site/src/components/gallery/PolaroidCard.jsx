import React from 'react';
import { motion } from 'framer-motion';

const PolaroidCard = ({ memory, index }) => {
  // Random rotation between -5 and 5 degrees
  const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white p-4 pb-6 sm:p-5 sm:pb-8 shadow-xl rounded-sm w-64 sm:w-72 md:w-80 cursor-pointer"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden mb-4 rounded-sm border border-gray-100">
        <img 
          src={memory.url} 
          alt={memory.caption} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23eaeaea%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23999%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3EPolariod%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
          }}
        />
      </div>
      
      <div className="text-center font-script text-bdayDark">
        <p className="text-2xl mb-1">{memory.caption}</p>
        <p className="text-sm font-sans tracking-widest text-bdayDark/40 uppercase">{memory.date}</p>
      </div>
    </motion.div>
  );
};

export default PolaroidCard;
