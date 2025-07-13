import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`glass-card p-6 ${hover ? 'hover:bg-white/10' : ''} transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;