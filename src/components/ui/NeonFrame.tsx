import React from 'react';

interface NeonFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function NeonFrame({ children, className = '' }: NeonFrameProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`} style={{ aspectRatio: '1 / 1' }}>
      <svg
        viewBox="0 0 800 800"
        width="100%"
        height="100%"
        className="absolute inset-0 z-0"
        style={{ filter: 'drop-shadow(0 0 0px #00fff7) drop-shadow(0 0 0px #ff00ff)' }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="neon-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00fff7" floodOpacity="0" />
            <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#00fff7" floodOpacity="0" />
          </filter>
          <filter id="neon-pink" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00ff" floodOpacity="0" />
            <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#ff00ff" floodOpacity="0" />
          </filter>
        </defs>
        {/* Top Frame */}
        <polyline
          points="150 50, 175,25 275,25 300,50 325,25 450,25 475, 50"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Second Frame 1*/}
        <polyline
          points="157.23607 50, 177.23607,30 272.76393,30 292.76393,50"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Second Frame 2*/}
        <polyline
          points="307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Line 1*/}
        <line
          x1="485"
          y1="45"
          x2="600"
          y2="45"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Line 2*/}
        <line
          x1="485"
          y1="50"
          x2="600"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 1*/}
        <line
          x1="185"
          y1="35"
          x2="200"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 2*/}
        <line
          x1="205"
          y1="35"
          x2="220"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 3*/}
        <line
          x1="225"
          y1="35"
          x2="240"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 4*/}
        <line
          x1="245"
          y1="35"
          x2="260"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 5*/}
        <line
          x1="265"
          y1="35"
          x2="280"
          y2="50"
          stroke="#00fff7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Connect */}
        <text
          x="220"
          y="75"
          fill="#00fff7"
          fontSize="20"
          fontFamily="Orbitron, monospace"
          textAnchor="middle" // or "middle", "end" for alignment
          alignmentBaseline="middle" // for vertical alignment
        >
          CONNECT
        </text>
        {/* left top accent */}
        <polyline
          points="125,175 200,100 300,100 315,85"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left middle accent */}
        <polyline
          points="125,200 125,182.23607 202.23607,105 302.23607,105 317.23607,90"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative z-10 w-11/12 h-11/12 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
} 