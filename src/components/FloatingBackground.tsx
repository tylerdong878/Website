'use client'

import { motion } from 'framer-motion'

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full relative"
          style={{
            left: `${Math.random() * 80 + 5}%`,
            top: `${Math.random() * 70 + 5}%`,
            background: 'linear-gradient(45deg, #0088cc, #ff00ff)',
            boxShadow: '0 0 15px rgba(0,136,204,0.8), 0 0 30px rgba(255,0,255,0.6), 0 0 45px rgba(0,136,204,0.4)',
            filter: 'blur(0.5px)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.6, 1.2, 0.6],
            rotate: [0, 180, 360],
            boxShadow: [
              '0 0 15px rgba(0,136,204,0.8), 0 0 30px rgba(255,0,255,0.6), 0 0 45px rgba(0,136,204,0.4)',
              '0 0 25px rgba(0,136,204,1), 0 0 50px rgba(255,0,255,0.8), 0 0 75px rgba(0,136,204,0.6)',
              '0 0 15px rgba(0,136,204,0.8), 0 0 30px rgba(255,0,255,0.6), 0 0 45px rgba(0,136,204,0.4)'
            ]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {/* Inner core */}
          <div 
            className="absolute inset-1 rounded-full"
            style={{
              background: 'linear-gradient(45deg, #0088cc, #ff00ff)',
              filter: 'blur(1px)'
            }}
          />
        </motion.div>
      ))}
    </div>
  )
} 