import React from 'react';
import MatrixBackground from '@/components/animations/MatrixBackground';
import FloatingBackground from '@/components/animations/FloatingBackground';
import HexGrid from '@/components/animations/HexGrid';
import { NeonFrame } from '@/components/ui/NeonFrame';
import AboutSection from '@/components/pages/AboutSection';
import ContactLinks from '@/components/pages/ContactLinks';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker relative overflow-hidden">
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      <main className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10 flex flex-col items-center">
        <NeonFrame>
          <div className="grid md:grid-cols-2 gap-12">
            <AboutSection />
          </div>
        </NeonFrame>
      </main>
    </div>
  );
} 