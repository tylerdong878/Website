import React from 'react';
import SaberText from '@/components/ui/SaberText';
import ProjectsSection from '@/components/layout/ProjectsSection';
import FloatingBackground from '@/components/animations/FloatingBackground'
import MatrixBackground from '@/components/animations/MatrixBackground'
import HexGrid from '@/components/animations/HexGrid'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-start">
      <MatrixBackground />
      <FloatingBackground />
      <HexGrid />
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col items-center mb-12">
          <SaberText size="text-8xl" color="#e80dfb">Projects</SaberText>
        </div>
        <ProjectsSection />
      </div>
    </main>
  );
} 