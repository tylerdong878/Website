import React from 'react';
import SaberText from '@/components/ui/SaberText';
import GlowingFrame from '@/components/ui/GlowingFrame';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import MatrixBackground from '@/components/animations/MatrixBackground'
import FloatingBackground from '@/components/animations/FloatingBackground'
import HexGrid from '@/components/animations/HexGrid'

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker relative overflow-hidden">
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      <SaberText size="text-7xl" color="#3a3aff" className="mt-16">Resume</SaberText>
      <div className="flex flex-col md:flex-row gap-6 mt-0 items-center justify-center">
        <Link href="/resume/tyler-dong-resume.pdf">
          <Button name="Download PDF" />
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mt-18"></div>
      <GlowingFrame className="w-full max-w-4xl h-[80vh] flex items-center justify-center mt-4">
        {/* PDF content goes here */}
        <></>
      </GlowingFrame>
    </div>
  );
} 

