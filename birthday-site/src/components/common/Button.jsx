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
    "btn-primary flex items-center justify-center gap-2 transition-all duration-300";

  const variants = {
    primary: "",
    outline:
      "bg-transparent border border-bdayRose text-bdayRose hover:bg-bdayRose/10 hover:text-bdayRose",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;