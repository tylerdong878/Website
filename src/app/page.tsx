'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,0,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating data nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Hexagonal grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 52V17.32L30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        
        {/* Name with Saber Glow Outline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl lg:text-9xl font-normal italic mb-12 relative tracking-[0.075em]"
          style={{ fontFamily: 'var(--font-cfbog), "CFBog", sans-serif' }}
        >
          <span className="relative inline-block">
            {/* Multiple glow layers for saber effect */}
            <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '4px #0088cc', filter: 'blur(8px)' }}>Tyler Dong</span>
            <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '3px #0088cc', filter: 'blur(4px)' }}>Tyler Dong</span>
            <span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '2px #0088cc', filter: 'blur(2px)' }}>Tyler Dong</span>
            {/* Core outlined text */}
            <span className="relative text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>Tyler Dong</span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-cyber-blue mb-12 font-light"
        >
          Computer Engineering & Computer Science
        </motion.p>

        {/* Three Glowing Buttons */}
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
              boxShadow: "0 0 30px rgba(0,136,204,0.8), 0 0 60px rgba(0,136,204,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyber-bg/50 backdrop-blur-sm border-2 border-cyber-blue rounded-lg text-cyber-blue font-bold text-lg shadow-cyber-glow transition-all duration-300"
          >
            PROJECTS
          </motion.button>

          {/* Resume Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,136,204,0.8), 0 0 60px rgba(0,136,204,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyber-bg/50 backdrop-blur-sm border-2 border-cyber-blue rounded-lg text-cyber-blue font-bold text-lg shadow-cyber-glow transition-all duration-300"
          >
            RESUME
          </motion.button>

          {/* Contact Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,136,204,0.8), 0 0 60px rgba(0,136,204,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyber-bg/50 backdrop-blur-sm border-2 border-cyber-blue rounded-lg text-cyber-blue font-bold text-lg shadow-cyber-glow transition-all duration-300"
          >
            CONTACT
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
