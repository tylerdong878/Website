import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* ManImTired */}
      <ProjectCard
        image="/projects/"
        title="Marine Radar Scanner"
        description="Radar scanner with live object detection."
        github="https://github.com/tylerdong878/Marine-Radar-Scanner"
      />
      {/* ManImTired */}
      <ProjectCard
        image="/projects/manimtired.png"
        title="ManImTired"
        description="Generates 3Blue1Brown style educational videos."
        notes={["Winner at Steast Hackathon 2025."]}
        devpost="https://devpost.com/software/manimtired"
        github="https://github.com/Tetraslam/manimtired"
        youtube="https://www.youtube.com/watch?v=TYJ02Z1lQR0"
      />
      {/* NBA Player Consistency Analyzer */}
      <ProjectCard
        image="/projects/nba-player-consistency-analyzer.png"
        title="NBA Player Consistency Analyzer"
        description="Analyzes NBA player consistency."
        github="https://github.com/tylerdong878/Sports-Information"
        youtube="https://www.youtube.com/watch?v=LeAjQcq6EeM"
      />
      {/* SpendShield */}
      <ProjectCard
        image="/projects/spendshield.png"
        title="SpendShield"
        description="Gamified social finance application that transforms financial management into an engaging social experience."
        notes={["Secured HackOlympian Finalist recognition, placing in the top 5 out of 105 teams at HackIllinois 2025."]}
        devpost="https://devpost.com/software/spendshield"
        github="https://github.com/Bruvato/spend-shield"
        youtube="https://www.youtube.com/watch?v=_oXCg3yg9Y0"
      />
      {/* AnimaGo */}
      <ProjectCard
        image="/projects/animago.png"
        title="AnimaGo"
        description="Augmented reality app that gamifies wildlife discovery and conservation."
        notes={["Awarded \"Best Design\" at Civic Tech Hackathon 2025 out of 40 teams."]}
        website="https://www.canva.com/design/DAGf7XUHkDs/W_r-ENJXzuiz1Vz6VgmnYQ/edit"
        devpost="https://devpost.com/software/animago"
        github="https://github.com/Tetraslam/AnimaGo"
      />
      {/* Road Toad */}
      <ProjectCard
        image="/projects/road-toad.png"
        title="Road Toad"
        description="AI Powered Road Trip Planner."
        devpost="https://devpost.com/software/roadtoad"
        github="https://github.com/Bruvato/road-toad"
        youtube="https://www.youtube.com/watch?v=X_MCxgd-IWA"
      />
      {/* Noblo Asteroids */}
      <ProjectCard
        image="/projects/noblo-asteroids.gif"
        title="Noblo Asteroids"
        description="3D Style Space Invaders Arcade Game."
        devpost="https://devpost.com/software/no-bloat-asteroids"
        github="https://github.com/Bruvato/noblo-asteroids"
        youtube="https://www.youtube.com/watch?v=YDvMAyzYZhM"
      />
      {/* Spotify Playlist Updater */}
      <ProjectCard
        image="/projects/spotify.jpg"
        title="Spotify Playlist Updater"
        description="Automates playlist management."
        github="https://github.com/tylerdong878/Spotify-Playlist-Updater"
      />
      {/* SVS Lunar Client */}
      <ProjectCard
        image="/projects/svs-lunar-client.gif"
        title="SVS Lunar Client"
        description="Deep rienforcement learning simulation to train AI to operate space vehicles."
        notes={["Won \"Interstellar Intelligence\" (AI/ML) track at BostonHacks 2024 out of 49 teams."]}
        devpost="https://devpost.com/software/jtr"
        github="https://github.com/Bruvato/svs-lunar-client"
        youtube="https://www.youtube.com/watch?v=O3WRU3QGNM0"
      />
    </div>
  );
} 