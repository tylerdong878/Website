'use client'

import FloatingBackground from '@/components/FloatingBackground'
import MatrixBackground from '@/components/MatrixBackground'
import HexGrid from '@/components/HexGrid'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Background layers */}
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />

      {/* Main content */}
      <HeroSection />
    </div>
  )
}
