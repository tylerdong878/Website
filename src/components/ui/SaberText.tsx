'use client'

import { motion } from 'framer-motion';

interface SaberTextProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // Accepts a hex or CSS color
  size?: string; // e.g. "text-6xl", "text-8xl", "text-4xl"
}

export default function SaberText({
  children,
  className = '',
  color = '#0088cc',
  size = 'text-8xl', // default size
}: SaberTextProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${size} font-normal italic mb-10 relative tracking-[0.075em] ${className}`}
      style={{ fontFamily: 'var(--font-cfbog), "CFBog", sans-serif' }}
    >
      <span className="relative inline-block">
        {/* Multiple glow layers for saber effect */}
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: `7px ${color}`, filter: 'blur(8px)' }}>{children}</span>
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: `5px ${color}`, filter: 'blur(4px)' }}>{children}</span>
        <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: `3px ${color}`, filter: 'blur(2px)' }}>{children}</span>
        {/* Core outlined text */}
        <span className="relative text-transparent" style={{ WebkitTextStroke: `1.5px white` }}>{children}</span>
      </span>
    </motion.h1>
  );
} 