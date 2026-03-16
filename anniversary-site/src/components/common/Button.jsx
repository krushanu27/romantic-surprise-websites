import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseClasses = "btn-primary flex items-center justify-center gap-2";
  const variants = {
    primary: "",
    outline: "bg-transparent border border-accentGold text-accentGold hover:bg-accentGold/10",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
