import React from 'react';
import MatrixBackground from '@/components/animations/MatrixBackground';
import FloatingBackground from '@/components/animations/FloatingBackground';
import HexGrid from '@/components/animations/HexGrid';
import SaberText from '@/components/ui/SaberText';
import ProjectsSection from '@/components/layout/ProjectsSection';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background layers */}
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      {/* Main content */}
      <main className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <SaberText size="text-8xl" color="#e80dfb">Projects</SaberText>
        </div>
        <ProjectsSection />
      </main>
    </div>
  );
} 