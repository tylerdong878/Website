'use client'

import FloatingBackground from '@/components/animations/FloatingBackground'
import MatrixBackground from '@/components/animations/MatrixBackground'
import HexGrid from '@/components/animations/HexGrid'
import HeroSection from '@/components/layout/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Background layers */}
      <MatrixBackground />
      
      <HexGrid />

      {/* Main content */}
      <HeroSection />
    </div>
  )
}
