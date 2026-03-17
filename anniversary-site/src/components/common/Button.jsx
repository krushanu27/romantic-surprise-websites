import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseClasses =
    'flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform';

  const variants = {
    primary:
      'bg-accentRose text-white hover:bg-accentRose/90 hover:shadow-lg hover:shadow-accentRose/30',
    outline:
      'bg-transparent border border-accentRose text-accentRose hover:bg-accentRose/10 hover:shadow-lg hover:shadow-accentRose/20',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;