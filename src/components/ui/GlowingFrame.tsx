'use client'

import { motion } from 'framer-motion'

interface GlowingFrameProps {
  children: React.ReactNode
  className?: string
  px?: string
  py?: string
  glow?: boolean // Optional prop to control glow
}

export default function GlowingFrame({ children, className = '', px = 'px-8', py = 'py-4', glow = true }: GlowingFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`relative rounded-2xl ${px} ${py} ${className}`}
      style={{
        background: 'linear-gradient(-45deg,rgb(47, 186, 255) 0%, #0088cc 50%, #ff00ff 100%)',
        padding: '3px',
        position: 'relative'
      }}
    >
      {glow && (
        <>
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
        </>
      )}
      <div 
        className={`bg-black/80 backdrop-blur rounded-2xl ${px} ${py} h-full w-full`}
      >
        {children}
      </div>
    </motion.div>
  )
} 