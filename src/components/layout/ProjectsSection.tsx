import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* SVS Lunar Client */}
      <ProjectCard
        image="/projects/svs-lunar-client.gif"
        title="SVS Lunar Client"
        description="Deep rienforcement learning simulation to train AI to operate space vehicles."
        notes="Featured on Product Hunt."
      />
    </div>
  );
} 