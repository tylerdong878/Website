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
          style={{ 
            filter: 'drop-shadow(0 0 5px #0088cc) drop-shadow(0 0 8px #0088cc)'
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
        <defs>
          <filter id="neon-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0088cc" floodOpacity="0" />
            <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#0088cc" floodOpacity="0" />
          </filter>

        </defs>
        {/* Top Frame - Glow Layer */}
        <polyline
          points="150 50, 175,25 275,25 300,50 325,25 450,25 475, 50"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Frame - White Line */}
        <polyline
          points="150 50, 175,25 275,25 300,50 325,25 450,25 475, 50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
                {/* Top Second Frame 1 - Glow Layer */}
        <polyline
          points="157.23607 50, 177.23607,30 272.76393,30 292.76393,50"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Second Frame 1 - White Line */}
        <polyline
          points="157.23607 50, 177.23607,30 272.76393,30 292.76393,50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
                {/* Top Second Frame 2 - Glow Layer */}
        <polyline
          points="307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Second Frame 2 - White Line */}
        <polyline
          points="307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Line 1 - Glow Layer */}
        <line
          x1="485"
          y1="45"
          x2="600"
          y2="45"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Line 1 - White Line */}
        <line
          x1="485"
          y1="45"
          x2="600"
          y2="45"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
                {/* Top Line 2 - Glow Layer */}
        <line
          x1="485"
          y1="50"
          x2="600"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Line 2 - White Line */}
        <line
          x1="485"
          y1="50"
          x2="600"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 1 - Glow Layer */}
        <line
          x1="185"
          y1="35"
          x2="200"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 1 - White Line */}
        <line
          x1="185"
          y1="35"
          x2="200"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 2 - Glow Layer */}
        <line
          x1="205"
          y1="35"
          x2="220"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 2 - White Line */}
        <line
          x1="205"
          y1="35"
          x2="220"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 3 - Glow Layer */}
        <line
          x1="225"
          y1="35"
          x2="240"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 3 - White Line */}
        <line
          x1="225"
          y1="35"
          x2="240"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 4 - Glow Layer */}
        <line
          x1="245"
          y1="35"
          x2="260"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 4 - White Line */}
        <line
          x1="245"
          y1="35"
          x2="260"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 5 - Glow Layer */}
        <line
          x1="265"
          y1="35"
          x2="280"
          y2="50"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Top Diagnal 5 - White Line */}
        <line
          x1="265"
          y1="35"
          x2="280"
          y2="50"
          stroke="white"
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
        {/* left middle accent - Glow Layer */}
        <polyline
          points="130,255 130,230 125,225 125,182.23607 202.23607,105 302.23607,105 317.23607,90"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left middle accent - White Line */}
        <polyline
          points="130,255 130,230 125,225 125,182.23607 202.23607,105 302.23607,105 317.23607,90"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left bottom accent - Glow Layer */}
        <polyline
          points="135,255 135,227.76393 130,222.76393 130,184.47214 204.47214,110 304.47214,110 329.47214,85 315,85 300,100 200,100 125,175"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* left bottom accent - White Line */}
        <polyline
          points="135,255 135,227.76393 130,222.76393 130,184.47214 204.47214,110 304.47214,110 329.47214,85 315,85 300,100 200,100 125,175"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
                  {/* Lower left Top accent - Glow Layer */}
          <polyline
            points="130,287.76393 120,297.76393 120,327.23607 125,332.23607 125,425"
            stroke="#0088cc"
            strokeWidth="1.5"
            fill="none"
            filter="url(#neon-blue)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
                  {/* Lower left Top accent - White Line */}
          <polyline
            points="130,287.76393 120,297.76393 120,327.23607 125,332.23607 125,425"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
                  {/* Lower left Middle accent - Glow Layer */}
          <polyline
            points="130,270 130,320 125,325 125,300 130,295"
            stroke="#0088cc"
            strokeWidth="1.5"
            fill="none"
            filter="url(#neon-blue)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
                  {/* Lower left Middle accent - White Line */}
          <polyline
            points="130,270 130,320 125,325 125,300 130,295"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        {/* Lower left Bottom accent - Glow Layer */}
        <polyline
          points="135,270 135,322.23607 130,327.23607 130,425"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower left Bottom accent - White Line */}
        <polyline
          points="135,270 135,322.23607 130,327.23607 130,425"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom left Top accent - Glow Layer */}
        <polyline
          points="140,435 160,455 235,455 255,435"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom left Top accent - White Line */}
        <polyline
          points="140,435 160,455 235,455 255,435"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
                  {/* Bottom left Bottom accent - Glow Layer */}
          <polyline
            points="137.76393,440 157.76393,460 237.23607,460 257.23607,440"
            stroke="#0088cc"
            strokeWidth="1.5"
            fill="none"
            filter="url(#neon-blue)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
                  {/* Bottom left Bottom accent - White Line */}
          <polyline
            points="137.76393,440 157.76393,460 237.23607,460 257.23607,440"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        {/* Bottom Middle Top accent - Glow Layer */}
        <polyline
          points="280,435 300,455 445,455 525,375 565,375 635,305 635,250 625,240"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bottom Middle Top accent - White Line */}
        <polyline
          points="280,435 300,455 445,455 525,375 565,375 635,305 635,250 625,240"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
                  {/* Bottom Middle Bottom accent - Glow Layer */}
          <polyline
            points="277.76393,440 297.76393,460 447.23607,460 527.23607,380 567.23607,380 640,307.23593 640,247.76393 630,237.76393"
            stroke="#0088cc"
            strokeWidth="1.5"
            fill="none"
            filter="url(#neon-blue)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
                  {/* Bottom Middle Bottom accent - White Line */}
          <polyline
            points="277.76393,440 297.76393,460 447.23607,460 527.23607,380 567.23607,380 640,307.23593 640,247.76393 630,237.76393"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        {/* Right Middle accent - Glow Layer */}
        <polyline
          points="625,200 635,190 635,150 625,140 625,170 635,180"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Middle accent - White Line */}
        <polyline
          points="625,200 635,190 635,150 625,140 625,170 635,180"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Bottom accent - Glow Layer */}
        <polyline
          points="630,202.76393 640,192.76393 640,147.76393 620,127.76393 620,172.23607 630,182.23607"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Bottom accent - White Line */}
        <polyline
          points="630,202.76393 640,192.76393 640,147.76393 620,127.76393 620,172.23607 630,182.23607"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
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