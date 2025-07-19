'use client'

import { motion } from 'framer-motion'

interface GlowingFrameProps {
  children: React.ReactNode
}

export default function GlowingFrame({ children }: GlowingFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative px-8 py-4 rounded-2xl"
      style={{
        background: 'linear-gradient(-45deg,rgb(47, 186, 255) 0%, #0088cc 50%, #ff00ff 100%)',
        padding: '3px',
        position: 'relative'
      }}
    >
      {/* Gradient glow overlay */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-45"
        style={{
          background: 'linear-gradient(-45deg,rgb(47, 186, 255) 0%, #0088cc 50%, #ff00ff 100%)',
          filter: 'blur(12px)',
          transform: 'scale(1.03)',
          zIndex: -1
        }}
      />
      
      {/* Additional glow layers */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-30"
        style={{
          background: 'linear-gradient(-45deg,rgb(47, 186, 255) 0%, #0088cc 50%, #ff00ff 100%)',
          filter: 'blur(18px)',
          transform: 'scale(1.06)',
          zIndex: -2
        }}
      />
      
      <div 
        className="bg-cyber-bg/80 backdrop-blur-sm rounded-2xl px-8 py-6 h-full w-full"
        style={{
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {children}
      </div>
    </motion.div>
  )
} 