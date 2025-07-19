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
          className="text-8xl md:text-8.5xl lg:text-9xl font-normal italic mb-10 relative tracking-[0.075em]"
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
          className="text-3xl text-blue-500 mb-12 font-light"
        >
          Computer Engineering & Computer Science @ Northeastern University
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
            className="px-8 py-4 bg-cyber-bg/50 backdrop-blur-sm border-2 border-cyber-blue rounded-lg text-blue-500 font-bold text-lg shadow-cyber-glow transition-all duration-300"
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
