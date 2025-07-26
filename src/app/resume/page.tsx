import React from 'react';
import SaberText from '@/components/ui/SaberText';
import GlowingFrame from '@/components/ui/GlowingFrame';
import { Button } from '@/components/ui/Button';
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
        <header className="text-center space-y-3">
          <SaberText size="text-7xl" color="#3a3aff">Resume</SaberText>
          <div className="flex flex-col md:flex-row gap-6 mt-0 items-center justify-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button name="Download PDF" />
            </a>
          </div>
        </header>
        <GlowingFrame className="w-full max-w-5xl h-[200vh] flex items-center justify-center mt-16">
          <div className="w-full h-full px-4 py-8 text-white">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-blue-500 mb-2">Tyler Dong</h1>
                <p className="text-white/70 text-sm">
                  Boston, MA | (781) 690-9685 | dong.ty@northeastern.edu | 
                  <a href="https://linkedin.com/in/tylerdong/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-pink-400 transition-colors"> linkedin.com/in/tylerdong/</a> | 
                  <a href="https://github.com/tylerdong878" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-pink-400 transition-colors"> github.com/tylerdong878</a> | 
                  <a href="https://tylerdong.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-pink-400 transition-colors"> tylerdong.vercel.app</a>
                </p>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-purple-500 mb-3 border-b border-purple-500/30 pb-1">EDUCATION</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/90 font-semibold">Northeastern University, College of Engineering, Boston, MA</p>
                      <p className="text-white/70 text-sm">Candidate for a Bachelor of Science in Computer Engineering and Computer Science</p>
                      <p className="text-white/80 text-sm mt-1">Cumulative GPA: 3.964/4.0 | Dean&apos;s List (each semester) | IBM Thomas J. Watson Memorial Scholarship Recipient</p>
                      <p className="text-white/70 text-sm">Coursework: Object Oriented Design, Networks, Discrete Structures, Differential Equations and Linear Algebra, Physics 1 & 2</p>
                      <p className="text-white/70 text-sm">CodePath: Data Structures & Algorithms (TIP102)</p>
                    </div>
                    <div className="text-right text-white/70 text-sm">
                      <p>Sep 2024 - Present</p>
                      <p>Expected May 2028</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-purple-500 mb-3 border-b border-purple-500/30 pb-1">SKILLS</h2>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Programming Languages:</span> Python, Java, C++, C#, HTML, JavaScript, TypeScript, CSS, MATLAB, Racket</p>
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Frameworks & Libraries:</span> PyTorch, ML-Agents, NumPy, pandas, PyMuPDF, OpenCV, Next.js, React, Tailwind CSS, Flask, JUnit</p>
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Development Tools & Platforms:</span> Git, Supabase, Firebase, Visual Studio Code, InteliJ, Windsurf</p>
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Electronics & Design Engineering:</span> Arduino, Solidworks, AutoCAD, OnShape, Soldering, Tinkercad</p>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-purple-500 mb-3 border-b border-purple-500/30 pb-1">EXPERIENCE</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">Khoury College of Computer Science</p>
                        <p className="text-white/70 text-sm">Teaching Assistant</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Remote</p>
                        <p>Jun 2025 - Present</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Mentored 70+ students in core computer science topics including binary/hexadecimal systems, Boolean logic and circuit design, graph theory and traversal algorithms, sorting algorithm analysis, and computational complexity (Big O notation)</li>
                      <li>Guided students through discrete mathematics concepts such as combinatorics and permutations, probability theory (conditional probability, Bayes&apos; theorem, expectation, variance), set theory operations, and rigorous mathematical proof techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">Northeastern Combat Robotics</p>
                        <p className="text-white/70 text-sm">Robotics Engineer</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Boston, MA</p>
                        <p>Sep 2024 - Present</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Design and manufacture battlebot components in OnShape and SolidWorks; integrate and solder electrical control systems</li>
                      <li>Build, test, and compete with 1-pound plastic combat robots</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">Outamation</p>
                        <p className="text-white/70 text-sm">AI Automation Extern</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Remote</p>
                        <p>May 2025 - Jul 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Engineered AI-powered workflows to automate document classification and data extraction, using Natural Language Processing (NLP), Computer Vision, and Python-based pipelines (PyMuPDF, OCR techniques)</li>
                      <li>Developed a retrieval system with LlamaIndex and Retrieval-Augmented Generation (RAG) to improve information search accuracy and information retrieval across complex mortgage documents</li>
                      <li>Benchmarked open-source AI models for document processing performance; delivered comprehensive report on optimization strategies and deployment recommendations</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">Quartzy Capital Advisors, LLC</p>
                        <p className="text-white/70 text-sm">Data Research Intern</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>New York, NY</p>
                        <p>Jun 2023 - Aug 2023</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Developed a Python tool leveraging yfinance and pandas to automate historical financial data analysis and calculate key financial metrics, fully eliminating manual Excel calculations and data entry errors</li>
                      <li>Analyzed and organized financial instrumentation on a quantitative investment database with 500+ securities</li>
                      <li>Conducted industry research to identify investment prospects; built templates to streamline processes and enhance data management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-purple-500 mb-3 border-b border-purple-500/30 pb-1">PROJECTS</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">NBA Player Consistency Analyzer <a href="https://github.com/tylerdong878/Sports-Information" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400 transition-colors">[GitHub]</a></p>
                        <p className="text-white/70 text-sm">Python, HTML, Javascript, CSS, Flask, nba_api</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Mar-Apr 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Developed a responsive web application to analyze NBA player consistency using live data from nba_api</li>
                      <li>Enabled users to dynamically set thresholds and game count to identify players based on points, rebounds, and assists</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">SpendShield <a href="https://devpost.com/software/spendshield" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400 transition-colors">[Devpost]</a></p>
                        <p className="text-white/70 text-sm">Next.js, TypeScript, React, Tailwind CSS, Shadcn, Supabase</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Feb-Mar 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Achieved HackOlympian Finalist recognition, top 5 out of 105 projects and 350+ participants at HackIllinois</li>
                      <li>Built a gamified social finance application that transforms financial management into an engaging social experience</li>
                      <li>Developed 10+ modular, responsive UI pages with dozens of components using Tailwind CSS and Shadcn</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">AnimaGo <a href="https://devpost.com/software/animago" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400 transition-colors">[Devpost]</a></p>
                        <p className="text-white/70 text-sm">Python, UV, Flet, FastAPI, Firebase, Moondream, YOLOv8, SAM 2, OpenCV, PyTorch</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Feb 2025</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Awarded &quot;Best Design&quot; out of 40 projects and 190+ participants at Civic Tech Hackathon</li>
                      <li>Engineered an augmented reality mobile app that gamifies wildlife discovery and conservation through real-time species identification, enabling users to explore outdoors, catalog findings in a personalized &quot;Biodex,&quot; and contribute to citizen science efforts</li>
                      <li>Leveraged OpenCV, Moondream, YOLOv8, and Segment Anything Model 2 for AI-powered animal detection and recognition</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/90 font-semibold">SVS Lunar Client <a href="https://devpost.com/software/jtr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-purple-400 transition-colors">[Devpost]</a></p>
                        <p className="text-white/70 text-sm">C#, Python, Unity, PyTorch, ML-Agents</p>
                      </div>
                      <div className="text-right text-white/70 text-sm">
                        <p>Nov 2024</p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside mt-2 text-white/80 text-sm space-y-1 ml-4">
                      <li>Awarded 1st Place for &quot;Interstellar Intelligence&quot; Track (AI/ML) out of 49 projects and 200+ participants at BostonHacks</li>
                      <li>Implemented a deep reinforcement learning model that simulates space environments to train AI to complete specific tasks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Extracurriculars */}
              <div>
                <h2 className="text-lg font-bold text-purple-500 mb-3 border-b border-purple-500/30 pb-1">EXTRACURRICULARS</h2>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Leadership:</span> Cradles to Crayons - Teen Leader & Ambassador, Aerovate MA - Tutor, Tennis Co-Captain</p>
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Activities/Societies:</span> Combat Robotics, REV Startup School, MIT Augmentation Lab, Electric Racing, Wireless Club, CodePath, NEU SASE</p>
                  <p className="text-white/80 text-sm"><span className="text-blue-400 font-semibold">Interests:</span> Video Editing, Graphic Design, Tennis, Soccer, Broomball, Pickleball</p>
                </div>
              </div>
            </div>
          </div>
        </GlowingFrame>
      </main>
    </div>
  );
} 

