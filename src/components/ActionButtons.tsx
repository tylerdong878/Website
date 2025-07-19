'use client'

import { motion } from 'framer-motion'
import GlowingFrame from './GlowingFrame'

export default function ActionButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col md:flex-row gap-6"
    >
      {/* Projects Button */}
      <motion.button
        whileHover={{ 
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="transition-all duration-300 focus:outline-none"
      >
        <GlowingFrame>
          <span className="text-blue-500 font-bold text-lg">PROJECTS</span>
        </GlowingFrame>
      </motion.button>

      {/* Resume Button */}
      <motion.button
        whileHover={{ 
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="transition-all duration-300"
      >
        <GlowingFrame>
          <span className="text-blue-500 font-bold text-lg">RESUME</span>
        </GlowingFrame>
      </motion.button>

      {/* Contact Button */}
      <motion.button
        whileHover={{ 
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="transition-all duration-300"
      >
        <GlowingFrame>
          <span className="text-blue-500 font-bold text-lg">CONTACT</span>
        </GlowingFrame>
      </motion.button>
    </motion.div>
  )
} 