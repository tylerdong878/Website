'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import GlowingFrame from '@/components/ui/GlowingFrame'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
}

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <Link href={href}>
      <motion.div
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
          isActive 
            ? 'text-blue-500 shadow-cyber-glow' 
            : 'text-blue-500 hover:text-blue-400 hover:shadow-cyber-glow'
        }`}
        whileHover={{ 
          scale: 1.05,
          textShadow: '0 0 10px rgba(0,136,204,0.8)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-400 shadow-cyber-glow"
            layoutId="activeTab"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  )
}

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg/90 backdrop-blur-sm border-b border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold text-blue-400 shadow-cyber-glow animate-pulse-neon"
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 15px rgba(0,255,255,1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Tyler Dong Portfolio
          </motion.div>

          {/* Right side - Navigation buttons and Play button */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/" isActive={pathname === '/'}>
              HOME
            </NavLink>
            <NavLink href="/projects" isActive={pathname === '/projects'}>
              PROJECTS
            </NavLink>
            <NavLink href="/resume" isActive={pathname === '/resume'}>
              RESUME
            </NavLink>
            <NavLink href="/contact" isActive={pathname === '/contact'}>
              CONTACT
            </NavLink>
            
            {/* Play Button */}
            <div className="hidden md:flex">
              <motion.div
                className="w-10 h-10 rounded-full"
                style={{
                  background: 'linear-gradient(-45deg, #0088cc 0%, #0088cc 50%, #ff00ff 100%)',
                  padding: '2px',
                  boxShadow: '0 0 15px rgba(0,136,204,0.6), 0 0 30px rgba(255,0,255,0.3)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(0,136,204,0.8), 0 0 40px rgba(255,0,255,0.5)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#0088cc'}} />
                        <stop offset="5%" style={{stopColor: '#0088cc'}} />
                        <stop offset="100%" style={{stopColor: '#ff00ff'}} />
                      </linearGradient>
                    </defs>
                    <path d="M8 5v14l11-7z" fill="url(#triangleGradient)"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-cyber-blue-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </nav>
  )
} 