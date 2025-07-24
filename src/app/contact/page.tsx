import React from 'react';
import { NeonFrame } from '@/components/ui/NeonFrame';
import AboutSection from '@/components/pages/AboutSection';
import ContactLinks from '@/components/pages/ContactLinks';
import MatrixBackground from '@/components/animations/MatrixBackground';
import FloatingBackground from '@/components/animations/FloatingBackground';
import HexGrid from '@/components/animations/HexGrid';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      <NeonFrame>
        <AboutSection />
        <ContactLinks />
      </NeonFrame>
    </div>
  );
} 