'use client'

import { motion } from 'framer-motion'
import GlowingFrame from './GlowingFrame'

interface ButtonProps {
  name?: string;
  link?: string;
}

export function Button({ name, link }: ButtonProps) {
  function handleClick() {
    if (link) window.location.href = link;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col md:flex-row gap-6"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="transition-all duration-300 focus:outline-none"
        onClick={handleClick}
      >
        <GlowingFrame>
          <span className="text-blue-500 font-bold text-lg">{name}</span>
        </GlowingFrame>
      </motion.button>
    </motion.div>
  )
}