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
      <HexGrid />
      <main className="w-full max-w-5xl mx-auto py-8 px-4 relative z-10 flex flex-col items-center justify-start min-h-screen">
        <NeonFrame className="w-full max-w-5xl -mt-7.5">
          <div className="flex flex-col gap-8 p-8">
            <AboutSection />
            <ContactLinks />
          </div>
        </NeonFrame>
      </main>
    </div>
  );
} 