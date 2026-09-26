import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

export default function ProjectsSection() {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
      {/* Order Flow Imbalance */}
      <ProjectCard
        title="Order Flow Imbalance Across Volatility Regimes"
        description="C++ L2 order book reconstruction service over Coinbase WebSocket deltas at sub-millisecond (p50) per-update latency, writing Parquet via Arrow and running on EC2 under systemd for 20 days. Regressing OFI on forward returns with Newey-West errors showed predictive power concentrated in low-volatility regimes (t ≈ 19 vs 3), robust across 1-30s horizons."
        techStack={["C++", "Python", "Apache Arrow", "statsmodels", "EC2"]}
      />
      {/* ETF Market Intelligence Pipeline */}
      <ProjectCard
        title="ETF Market Intelligence Pipeline"
        description="ETL pipeline that scrapes 25 ETF issuers nightly with Playwright and GitHub Actions, normalizing them into one schema tracking $450B+ in AUM across 1,100+ funds. A snapshot-diff detector flags fund launches, closures, and AUM shifts, and a Jinja2/WeasyPrint pipeline with search-grounded Gemini commentary emails a weekly PDF briefing."
        techStack={["Python", "Playwright", "GitHub Actions", "WeasyPrint", "Pytest"]}
      />
      {/* Matching Engine */}
      <ProjectCard
        title="Matching Engine"
        description="Limit order book and matching engine, the core of any exchange."
        techStack={["Java", "Low Latency"]}
      />
      {/* AeroBloom */}
      <ProjectCard
        title="AeroBloom"
        description="Autonomous DJI Tello drone that localizes itself with markerless vision, checks plant health with computer vision, and triggers ESP32 irrigation over MQTT, with a live web dashboard."
        techStack={["Python", "OpenCV", "FastAPI", "Next.js", "ESP32", "MQTT"]}
        notes={["Senior capstone (EECE 4790), team project. In progress."]}
      />
      {/* Orbital Debris RL */}
      <ProjectCard
        image="/projects/svs-lunar-client.gif"
        title="Orbital Debris RL"
        description="Deep RL space vehicle simulation built with Unity ML-Agents and PPO, where an agent learns to maneuver a spacecraft and collect orbital debris."
        techStack={["Unity ML-Agents", "C#", "PPO"]}
        notes={["1st / 49, AI/ML Track at BostonHacks 2024."]}
        devpost="https://devpost.com/software/jtr"
        github="https://github.com/Bruvato/svs-lunar-client"
        youtube="https://www.youtube.com/watch?v=O3WRU3QGNM0"
      />
      {/* SnakeRL */}
      <ProjectCard
        image="/projects/snakerl.gif"
        title="SnakeRL"
        description="Deep RL system for Snake using PPO, with 100+ vectorized parallel environments and real-time visualization of every concurrent training episode. Custom reward engineering (distance heuristics, efficiency bonuses, dynamic scaling) sped up convergence 7×."
        techStack={["Python", "PyTorch", "Gymnasium", "Stable-Baselines3", "TensorBoard"]}
        github="https://github.com/tylerdong878/SnakeRL"
      />
      {/* Pathfinding Visualizer */}
      <ProjectCard
        title="Pathfinding Visualizer"
        description="Interactive visualizer for graph search and pathfinding algorithms."
      />
      {/* FIREBALL */}
      <ProjectCard
        image="/projects/fireball.png"
        title="FIREBALL"
        description="Gesture-controlled wizard dueling game."
        techStack={["MediaPipe", "React", "shadcn/ui", "TypeScript"]}
        devpost="https://devpost.com/software/fireball-7g2zl9"
        github="https://github.com/Tetraslam/hackharvard2025"
      />
      {/* ManImTired */}
      <ProjectCard
        image="/projects/manimtired.gif"
        title="ManImTired"
        description="LLM pipeline that auto-generates 3Blue1Brown-style Manim animations from natural language prompts."
        techStack={["Python", "Manim", "FastAPI"]}
        notes={["4th Place at STHacks 2025."]}
        devpost="https://devpost.com/software/manimtired"
        github="https://github.com/Tetraslam/manimtired"
        youtube="https://www.youtube.com/watch?v=TYJ02Z1lQR0"
      />
      {/* SpendShield */}
      <ProjectCard
        image="/projects/spendshield.png"
        title="SpendShield"
        description="Gamified social finance app with spending analytics that turns money management into a social experience."
        techStack={["TypeScript", "React", "Next.js"]}
        notes={["HackOlympian Finalist, Top 5 / 105 at HackIllinois 2025."]}
        devpost="https://devpost.com/software/spendshield"
        github="https://github.com/Bruvato/spend-shield"
        youtube="https://www.youtube.com/watch?v=_oXCg3yg9Y0"
      />
      {/* AnimaGo */}
      <ProjectCard
        image="/projects/animago.png"
        title="AnimaGo"
        description="AR wildlife discovery app that identifies species in real time with YOLOv8 and SAM2, letting users catalog their finds in a personal Biodex."
        techStack={["Python", "FastAPI", "PyTorch", "YOLOv8", "SAM2"]}
        notes={["Best Design / 40 at Civic Tech Hackathon 2025."]}
        website="https://www.canva.com/design/DAGf7XUHkDs/W_r-ENJXzuiz1Vz6VgmnYQ/edit"
        devpost="https://devpost.com/software/animago"
        github="https://github.com/Tetraslam/AnimaGo"
      />
      {/* Marine Radar Scanner */}
      <ProjectCard
        image="/projects/marine-radar-scanner.gif"
        title="Marine Radar Scanner"
        description="Arduino radar scanner that sweeps for nearby objects and plots live detections in Processing."
        techStack={["Processing", "Arduino", "C++"]}
        github="https://github.com/tylerdong878/Marine-Radar-Scanner"
      />
      {/* Polar Glide */}
      <ProjectCard
        image="/projects/polarglide.jpg"
        title="Polar Glide"
        description="Joystick-controlled marble maze game built on Arduino."
        techStack={["C++", "Arduino"]}
        website="https://sites.google.com/view/funlabsprojectarcticsea/home"
        github="https://github.com/tylerdong878/Polar-Glide"
      />
      {/* Road Toad */}
      <ProjectCard
        image="/projects/road-toad.png"
        title="Road Toad"
        description="AI-powered road trip planner built with Next.js and the Gemini API."
        techStack={["TypeScript", "React", "Next.js", "Gemini API"]}
        devpost="https://devpost.com/software/roadtoad"
        github="https://github.com/Bruvato/road-toad"
        youtube="https://www.youtube.com/watch?v=X_MCxgd-IWA"
      />
      {/* Noblo Asteroids */}
      <ProjectCard
        image="/projects/noblo-asteroids.gif"
        title="Noblo Asteroids"
        description="3D-style Space Invaders arcade game built in Unity."
        techStack={["Unity", "C#"]}
        devpost="https://devpost.com/software/no-bloat-asteroids"
        github="https://github.com/Bruvato/noblo-asteroids"
        youtube="https://www.youtube.com/watch?v=YDvMAyzYZhM"
      />
      {/* NBA Player Consistency Analyzer */}
      <ProjectCard
        image="/projects/nba-player-consistency-analyzer.png"
        title="NBA Player Consistency Analyzer"
        description="Web app that analyzes consistency for 550+ active NBA players using live nba_api data, with adjustable thresholds for points, rebounds, and assists."
        techStack={["Python", "Flask", "nba_api", "HTML", "JavaScript"]}
        github="https://github.com/tylerdong878/Sports-Information"
        youtube="https://www.youtube.com/watch?v=LeAjQcq6EeM"
      />
      {/* Spotify Playlist Updater */}
      <ProjectCard
        image="/projects/spotify.jpg"
        title="Spotify Playlist Updater"
        description="Command-line tool that fills a playlist with every song from chosen artists, auto-adds new releases, and filters out duplicates and alternate versions."
        techStack={["Python", "Spotify Web API", "Spotipy"]}
        github="https://github.com/tylerdong878/Spotify-Playlist-Updater"
      />
    </div>
  );
}
