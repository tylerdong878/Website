import React from 'react';
import SaberText from '@/components/ui/SaberText';
import GlowingFrame from '@/components/ui/GlowingFrame';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import MatrixBackground from '@/components/animations/MatrixBackground';
import FloatingBackground from '@/components/animations/FloatingBackground';
import HexGrid from '@/components/animations/HexGrid';

export default function ResumePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker overflow-hidden">
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      <main className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10 flex flex-col items-center">
        <SaberText size="text-7xl" color="#3a3aff">Resume</SaberText>
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
      </main>
    </div>
  );
} 

