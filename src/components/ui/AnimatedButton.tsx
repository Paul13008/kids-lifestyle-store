"use client";
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <motion.button
      className={`bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 px-5 rounded-full shadow-soft transition-colors ${className}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
