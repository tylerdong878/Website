import React from 'react';

interface NeonFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function NeonFrame({ children, className = '' }: NeonFrameProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center aspect-square ${className}`}>
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
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Second Frame 2*/}
        <polyline
          points="307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
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
          stroke="#ff00ff"
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
          fill="#ffffff"
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
          points="130,255 130,230 125,225 125,182.23607 202.23607,105 302.23607,105 317.23607,90"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left bottom accent */}
        <polyline
          points="135,255 135,227.76393 130,222.76393 130,184.47214 204.47214,110 304.47214,110 329.47214,85 315,85"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower left Top accent */}
        <polyline
          points="130,287.76393 120,297.76393 120,327.23607 125,332.23607 125,425"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower left Middle accent */}
        <polyline
          points="130,270 130,320 125,325 125,300 130,295"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower left Bottom accent */}
        <polyline
          points="135,270 135,322.23607 130,327.23607 130,425"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom left Top accent */}
        <polyline
          points="140,435 160,455 235,455 255,435"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom left Bottom accent */}
        <polyline
          points="137.76393,440 157.76393,460 237.23607,460 257.23607,440"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom Middle Top accent */}
        <polyline
          points="280,435 300,455 445,455 525,375 565,375 635,305 635,250 625,240"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom Middle Bottom accent */}
        <polyline
          points="277.76393,440 297.76393,460 447.23607,460 527.23607,380 567.23607,380 640,307.23593 640,247.76393 630,237.76393"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Middle accent */}
        <polyline
          points="625,200 635,190 635,150 625,140 625,170 635,180"
          stroke="#ff00ff"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Bottom accent */}
        <polyline
          points="630,202.76393 640,192.76393 640,147.76393 620,127.76393 620,172.23607 630,182.23607"
          stroke="#00fff7"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
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