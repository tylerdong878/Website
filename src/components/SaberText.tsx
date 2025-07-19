'use client'

import { motion } from 'framer-motion'

export default function SaberText() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-8xl md:text-8.5xl lg:text-9xl font-normal italic mb-10 relative tracking-[0.075em]"
      style={{ fontFamily: 'var(--font-cfbog), "CFBog", sans-serif' }}
    >
      <span className="relative inline-block">
        {/* Multiple glow layers for saber effect */}
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '7px #0088cc', filter: 'blur(8px)' }}>Tyler Dong</span>
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '5px #0088cc', filter: 'blur(4px)' }}>Tyler Dong</span>
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '3px #0088cc', filter: 'blur(2px)' }}>Tyler Dong</span>
        {/* Core outlined text */}
        <span className="relative text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Tyler Dong</span>
      </span>
    </motion.h1>
  )
} 