'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

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
            ? 'text-cyber-blue-glow shadow-cyber-glow' 
            : 'text-gray-300 hover:text-cyber-blue-bright hover:shadow-cyber-glow'
        }`}
        whileHover={{ 
          scale: 1.05,
          textShadow: '0 0 10px rgba(0,255,255,0.8)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-blue-bright shadow-cyber-glow"
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-bg/90 backdrop-blur-sm border-b border-cyber-blue-atmospheric">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold text-cyber-blue-glow shadow-cyber-glow animate-pulse-neon"
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 15px rgba(0,255,255,1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            TYLER
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Play Button (Phase 4) */}
          <motion.button
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-cyber-blue-atmospheric border border-cyber-blue text-cyber-blue-glow shadow-cyber-glow"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 25px rgba(0,255,255,0.8), 0 0 50px rgba(0,255,255,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)",
                "0 0 25px rgba(0,255,255,0.8), 0 0 50px rgba(0,255,255,0.3)",
                "0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▶
          </motion.button>

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