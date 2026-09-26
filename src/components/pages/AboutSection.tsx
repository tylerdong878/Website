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
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 text-blue-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-400 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto px-1 sm:px-4 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        I&apos;m a dual CS and Computer Engineering student at Northeastern. I like building things that have to be fast and correct:
        disk encryption at AWS, market data pipelines, and payments in a production app with 26k+ users.
        Outside of code I play competitive Tetris, climb, play intramural tennis and pickleball, edit gaming montages, and reached top 103 globally in Pok&eacute;mon GO.
      </motion.p>
    </motion.section>
  );
} 