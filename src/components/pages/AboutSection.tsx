'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section 
      className="-mb-10 sm:mb-4 md:mb-6 text-center -mt-4 sm:-mt-20 md:-mt-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-cyber-blue-atmospheric max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto px-1 sm:px-4 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        Hi, I&apos;m Tyler. I study Computer Engineering and Computer Science at Northeastern University.
        I am interested in a wide range of topics in the software and hardware space.
        
        In my free time, I stay active with tennis, soccer, and pickleball, enjoy video editing and graphic design, and relax with gaming.
      </motion.p>
    </motion.section>
  );
} 