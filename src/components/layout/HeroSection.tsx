'use client'

import { motion } from 'framer-motion'
import SaberText from '../ui/SaberText'
import ActionButtons from '../ActionButtons'

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Name with Saber Glow Outline */}
      <SaberText size="text-9xl" color="#0088cc">Tyler Dong</SaberText>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl text-blue-500 mb-12 font-small"
      >
        Computer Engineering & Computer Science @ Northeastern University
      </motion.p>

      {/* Action Buttons */}
      <ActionButtons />
    </div>
  )
} 