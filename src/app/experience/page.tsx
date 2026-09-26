import React from 'react';
import SaberText from '@/components/ui/SaberText';
import MatrixBackground from '@/components/animations/MatrixBackground';
import HexGrid from '@/components/animations/HexGrid';

interface Role {
  title: string
  dates?: string
  bullets: string[]
}

interface Job {
  org: string
  location: string
  roles: Role[]
}

interface Award {
  title: string
  detail: string
  link?: string
}

// Newest first
const experience: Job[] = [
  {
    org: 'Amazon Web Services (AWS)',
    location: 'Boston, MA',
    roles: [
      {
        title: 'Software Development Engineer Intern - Elastic Block Store Encryption',
        dates: 'Jun 2026 – Aug 2026',
        bullets: [
          'Re-architected a C++ disk-encryption service for static stability by removing its runtime dependency on the key service (KMS), so encrypted volumes can recover after a reboot with no network call, even when KMS is unavailable',
          'Benchmarked two NitroTPM key-sealing designs and implemented the winner, AES-256-GCM envelope encryption sealed to measured boot state, cutting worst-case recovery of a host’s 8,000+ volume keys from 3.3 min to ≈30ms',
          'Implemented key sealing, wrapping, and root-key persistence as asynchronous state machines; validated with a Go integration suite spinning up EC2 Nitro instances to test recovery without KMS, TPM failure, and firmware tampering',
        ],
      },
    ],
  },
  {
    org: 'Philips',
    location: 'Cambridge, MA',
    roles: [
      {
        title: 'Software Development Engineer Co-op',
        dates: 'Jan 2026 – May 2026',
        bullets: [
          'Architected a GitHub Actions orchestrator to automate migration of 15+ Azure DevOps repositories, coordinating 7 sub-workflows for repo mirroring, AI-assisted pipeline conversion, secrets injection, and variable migration',
          'Built a git-tfs pipeline to migrate legacy TFVC repositories the Azure DevOps native importer couldn’t handle, rewriting large binaries to Git LFS and running a daily REST API sync to keep branches current through cutover',
          'Replaced long-lived personal access tokens across 25+ CI/CD pipelines with short-lived GitHub App and Azure Service Principal (OIDC) tokens generated on demand via PowerShell, eliminating manual rotation and static-secret leak risk',
        ],
      },
    ],
  },
  {
    org: 'Tetracorp',
    location: 'Remote',
    roles: [
      {
        title: 'Software Engineer',
        dates: 'Jan 2026 – May 2026',
        bullets: [
          'Built Bluffs, a real-money iMessage game in React Native/TypeScript; 26,000+ users, top 40 in App Store strategy',
          'Architected deposit, withdrawal, and wagering flows on Convex with Coinflow (card, Apple Pay, ACH); designed split-balance accounting, idempotent webhooks, and chargeback recovery preventing fund loss under API failure',
          'Engineered fraud and compliance infrastructure: Sumsub KYC matched against billing identity to block spoofed payments, self-exclusion controls, and a CCPA data export/deletion flow with GPC sync',
        ],
      },
    ],
  },
  {
    org: 'Khoury College of Computer Sciences, Northeastern University',
    location: 'Boston, MA',
    roles: [
      {
        title: 'Teaching Assistant - Object-Oriented Design',
        dates: 'Sep 2025 – Dec 2025',
        bullets: [
          'Led lab sessions and office hours 6 hrs/week, supporting 400+ students in object-oriented programming principles: encapsulation, inheritance, polymorphism, abstraction, MVC architecture, and design patterns',
        ],
      },
      {
        title: 'Teaching Assistant - Discrete Structures',
        dates: 'Jun 2025 – Aug 2025',
        bullets: [
          'Facilitated office hours and supported 70+ students in graph theory and traversal algorithms, sorting algorithm analysis, computational complexity, combinatorics and permutations, probability theory, and rigorous proof techniques',
        ],
      },
    ],
  },
  {
    org: 'Outamation',
    location: 'Remote',
    roles: [
      {
        title: 'AI Automation Extern',
        dates: 'May 2025 – Jul 2025',
        bullets: [
          'Developed a hybrid RAG pipeline (LlamaIndex) combining dense retrieval (HuggingFace e5-large-v2 embeddings) with BM25 sparse keyword search, doubling retrieval accuracy on complex mortgage documents',
          'Engineered NLP and Computer Vision pipelines (PyMuPDF, OCR) for document extraction and classification',
        ],
      },
    ],
  },
  {
    org: 'Quartzy Capital Advisors, LLC',
    location: 'New York, NY',
    roles: [
      {
        title: 'Data Research Intern',
        dates: 'Jun 2023 – Aug 2023',
        bullets: [
          'Developed a Python tool using yfinance and pandas to automate historical financial data analysis and calculate key financial metrics, eliminating manual Excel calculations and reducing processing time by 95%+',
          'Compiled and maintained a quantitative investment database of 500+ securities, streamlining portfolio analysis',
        ],
      },
    ],
  },
];

const awards: Award[] = [
  { title: 'Jane Street Capital', detail: '3× Puzzle Solver: Robot Javelin, Regional Artwork, Andy’s Afternoon Amble' },
  { title: 'BostonHacks', detail: '1st / 49, AI/ML Track: deep RL space vehicle simulation', link: 'https://devpost.com/software/jtr' },
  { title: 'HackIllinois', detail: 'HackOlympian Finalist, Top 5 / 105', link: 'https://devpost.com/software/spendshield' },
  { title: 'Civic Tech Hackathon', detail: 'Best Design / 40', link: 'https://devpost.com/software/animago' },
  { title: 'STHacks', detail: '4th Place', link: 'https://devpost.com/software/manimtired' },
  { title: 'IMC Prosperity 4', detail: 'Top ~9%' },
  { title: 'Pokémon GO Battle League', detail: 'Top 103 Globally (Season 9), Legend Rank (Season 8, ~0.1% of players)' },
  { title: 'Honors', detail: 'Tau Beta Pi, Eta Kappa Nu, IBM Thomas J. Watson Memorial Scholarship, Dean’s List' },
];

const activities: string[] = [
  'Combat Robotics Club, SASE, Asian Student Union, Chinese Student Union',
  'High school varsity tennis captain, voted by teammates',
];

const skills: [string, string[]][] = [
  ['Languages', ['Python', 'C/C++', 'Go', 'Java', 'C#', 'JavaScript', 'TypeScript', 'PowerShell', 'Racket', 'MATLAB', 'SQL']],
  ['Frameworks & Libraries', ['PyTorch', 'NumPy', 'pandas', 'Matplotlib', 'OpenCV', 'FastAPI', 'React', 'Next.js', 'Tailwind', 'Flask']],
  ['Technologies', ['Git', 'Linux', 'AWS (EC2, EBS)', 'Docker', 'GitHub Actions', 'LaTeX', 'VS Code', 'IntelliJ', 'Cursor', 'Claude Code']],
];

// Neon section label shared by the lower sections
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center gap-4 text-xl font-bold tracking-[0.2em] text-purple-500" style={{ textShadow: '0 0 12px rgba(168,85,247,0.6)' }}>
      {children}
      <span className="h-0.5 flex-1 rounded-full" style={{ background: 'linear-gradient(90deg, #a855f7, #0088cc 60%, transparent)' }} />
    </h2>
  );
}

export default function ExperiencePage() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-cyber-bg via-cyber-dark to-cyber-darker overflow-hidden">
      <MatrixBackground />
      <HexGrid />
      <main className="w-full max-w-4xl mx-auto py-16 px-6 relative z-10">
        <header className="text-center">
          <SaberText size="text-7xl" color="#3a3aff">Experience</SaberText>
        </header>

        {/* Timeline */}
        <ol className="relative mt-8">
          {/* Glowing rail */}
          <span
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(180deg, #0088cc, #e80dfb)', boxShadow: '0 0 10px rgba(0,136,204,0.7), 0 0 20px rgba(232,13,251,0.3)' }}
          />
          {experience.map((job) => (
            <li key={job.org} className="relative pl-12 pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[#40a0e0] bg-black"
                style={{ boxShadow: '0 0 10px #0088cc, 0 0 20px rgba(0,136,204,0.6)' }}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400" style={{ textShadow: '0 0 12px rgba(56,189,248,0.6)' }}>
                  {job.org}
                </h3>
                <p className="shrink-0 text-sm text-white/60">{job.location}</p>
              </div>
              <div className="mt-4 space-y-6">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <p className="text-lg font-semibold text-purple-300">{role.title}</p>
                      {role.dates && (
                        <p className="shrink-0 text-sm font-medium uppercase tracking-wider text-pink-400">{role.dates}</p>
                      )}
                    </div>
                    <ul className="mt-2 space-y-1.5 text-white/80 leading-relaxed">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-5">
                          <span aria-hidden className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rotate-45 bg-[#0088cc]" style={{ boxShadow: '0 0 6px #0088cc' }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-14 md:grid-cols-2">
          {/* Awards */}
          <section>
            <SectionHeading>AWARDS</SectionHeading>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award.title} className="relative pl-5">
                  <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45 bg-[#e80dfb]" style={{ boxShadow: '0 0 6px #e80dfb' }} />
                  <p className="font-semibold text-white/90">
                    {award.link ? (
                      <a href={award.link} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                        {award.title}
                      </a>
                    ) : (
                      award.title
                    )}
                  </p>
                  <p className="text-sm text-white/60">{award.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <SectionHeading>SKILLS</SectionHeading>
            <div className="space-y-5">
              {skills.map(([category, list]) => (
                <div key={category}>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-medium bg-[#1a1a2e] border-2 border-purple-500/50 text-purple-300 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Activities */}
        <section className="mt-14">
          <SectionHeading>LEADERSHIP &amp; ACTIVITIES</SectionHeading>
          <ul className="space-y-2">
            {activities.map((activity) => (
              <li key={activity} className="relative pl-5 text-white/80">
                <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45 bg-[#0088cc]" style={{ boxShadow: '0 0 6px #0088cc' }} />
                {activity}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
