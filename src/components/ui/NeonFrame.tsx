'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface NeonFrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function NeonFrame({ children, className = '' }: NeonFrameProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center aspect-square ${className}`}>
              <motion.svg
          viewBox="105 10 550 527.23607"
          width="100%"
          height="100%"
          className="absolute inset-0 z-0"
          style={{ 
            filter: 'none'
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <defs>
          <filter id="neon-blue" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0088cc" floodOpacity="1" mode="screen"/>
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#0088cc" floodOpacity="0.8" mode="screen"/>
          </filter>
          <filter id="neon-pink" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#e80dfb" floodOpacity="1" mode="screen"/>
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#e80dfb" floodOpacity="0.8" mode="screen"/>
          </filter>

        </defs>
        
        {/* ALL GLOW LAYERS FIRST */}
        {/* Top Right Frame - Glow Layer */}
        <polyline
          points="152.76393,47.76393 175,25 275,25 297.76393,47.76393     157.23607 50, 177.23607,30 272.76393,30 292.76393,50"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="164,140.6,152"
        />
        {/* Top Middle Frame - Glow Layer */}
        <polyline
          points="302.76393,47.76393 325,25 450,25 472.76393,47.76393     307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="#e80dfb"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="189,165.6,177.25"
        />
        {/* Top Right Line - Glow Layer */}
        <polyline
          points="485,45 602.23607,45 627.23607,70     485,50 600,50 625,75"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="152.5,143.6,151"
        />
        {/* Top Diagnal Lines - Glow Layer (Combined) */}
        <polyline
          points="185,35 200,50 205,35 220,50 225,35 240,50 245,35 260,50 265,35 280,50"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="21,16"
        />
        {/* left Upper Line - Glow Layer */}
        <polyline
          points="130,255 130,230 125,225 125,182.23607 202.23607,105 302.23607,105 317.23607,90     135,255 135,227.76393 130,222.76393 130,184.47214 204.47214,110 304.47214,110 329.47214,85 315,85 300,100 200,100 125,175"
          stroke="#e80dfb"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="305.5,245.6,555"
        />
        {/* Left Middle Line - Glow Layer */}
        <polyline
          points="130,287.76393 120,297.76393 120,327.23607 125,332.23607 125,425     130,270 130,320 125,325 125,300 130,295     135,270 135,322.23607 130,327.23607 130,425"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="143.5,155,89.1,25.5,157.5"
        />
        {/* Bottom left Line - Glow Layer */}
        <polyline
          points="140,435 160,455 235,455 255,435     137.76393,440 157.76393,460 237.23607,460 257.23607,440"
          stroke="#e80dfb"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="131.6,117.3,136.5"
        />
        {/* Bottom Right Line - Glow Layer */}
        <polyline
          points="280,435 300,455 445,455 525,375 565,375 635,305 635,250 625,240     277.76393,440 297.76393,460 447.23607,460 527.23607,380 567.23607,380 640,307.23593 640,247.76393 630,237.76393"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="494.5,400.75,507.6"
        />
        {/* Right Middle accent - Glow Layer */}
        <polyline
          points="625,200 635,190 635,150 625,140 625,170 635,180     630,202.76393 640,192.76393 640,147.76393 620,127.76393 620,172.23607 630,182.23607"
          stroke="#e80dfb"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="112,23.75,146"
        />
        {/* Connect - Glow Layer */}
        <text
          x="220"
          y="75"
          fill="#0088cc"
          fontSize="20"
          fontFamily="Orbitron, monospace"
          textAnchor="middle"
          alignmentBaseline="middle"
          filter="url(#neon-blue)"
        >
          CONNECT
        </text>
        {/* Bottom Diagnal 1-4 - Glow Layer (Combined) */}
        <polyline
          points="447.23607,460 372.23607,535     487.23607,427.23607 377.23607,537.23607     582.23607,425 472.23607,535     587.23607,427.23607 477.23607,537.23607"
          stroke="#0088cc"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-blue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="106,157.5,155.75,233.6,155.75,157.5,155.75"
        />
        {/* Bottom Diagnal 5-8 - Glow Layer (Combined) */}
        <polyline
          points="627.23607,330 527.23607,430     632.23607,332.23607 532.23607,432.23607     627.23607,355 587.23607,395 587.23607,420     632.23607,357.23607 592.23607,397.23607 592.23607,420"

          stroke="#e80dfb"
          strokeWidth="1.5"
          fill="none"
          filter="url(#neon-pink)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="141.5,143.5,141.5,122.25,81.5,77.25,81.5"
        />

        {/* ALL WHITE LINES AFTER GLOWS */}
        {/* Top Right Frame - White Line */}
        <polyline
          points="152.76393,47.76393 175,25 275,25 297.76393,47.76393     157.23607 50, 177.23607,30 272.76393,30 292.76393,50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="164,140.6,152"
        />
        {/* Top Middle Frame - White Line */}
        <polyline
          points="302.76393,47.76393 325,25 450,25 472.76393,47.76393     307.23607,50 327.23607,30 447.76393,30 467.76393,50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="189,165.6,177.25"
        />
        {/* Top Right Line - White Line */}
        <polyline
          points="485,45 602.23607,45 627.23607,70     485,50 600,50 625,75"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="152.5,143.6,151"
        />
        {/* Top Diagnal Lines - White Line (Combined) */}
        <polyline
          points="185,35 200,50 205,35 220,50 225,35 240,50 245,35 260,50 265,35 280,50"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="21,16"
        />
        {/* left Upper Line - White Line */}
        <polyline
          points="130,255 130,230 125,225 125,182.23607 202.23607,105 302.23607,105 317.23607,90     135,255 135,227.76393 130,222.76393 130,184.47214 204.47214,110 304.47214,110 329.47214,85 315,85 300,100 200,100 125,175"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="305.5,245.6,555"
        />
        {/* Left Middle Line - White Line */}
        <polyline
          points="130,287.76393 120,297.76393 120,327.23607 125,332.23607 125,425     130,270 130,320 125,325 125,300 130,295     135,270 135,322.23607 130,327.23607 130,425"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="143.5,155,89.1,25.5,157.5"
        />
        {/* Bottom left Line - White Line */}
        <polyline
          points="140,435 160,455 235,455 255,435     137.76393,440 157.76393,460 237.23607,460 257.23607,440"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="131.6,117.3,136.5"
        />
        {/* Bottom Right Line - White Line */}
        <polyline
          points="280,435 300,455 445,455 525,375 565,375 635,305 635,250 625,240     277.76393,440 297.76393,460 447.23607,460 527.23607,380 567.23607,380 640,307.23593 640,247.76393 630,237.76393"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="494.5,400.75,507.6"
        />
        {/* Right accent - White Line */}
        <polyline
          points="625,200 635,190 635,150 625,140 625,170 635,180     630,202.76393 640,192.76393 640,147.76393 620,127.76393 620,172.23607 630,182.23607"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="112,23.75,146"
        />

        {/* Bottom Diagnal 1-4 - White Line (Combined) */}
        <polyline
          points="447.23607,460 372.23607,535     487.23607,427.23607 377.23607,537.23607     582.23607,425 472.23607,535     587.23607,427.23607 477.23607,537.23607"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="106,157.5,155.75,233.6,155.75,157.5,155.75"
        />
        {/* Bottom Diagnal 5-8 - White Line (Combined) */}
        <polyline
          points="627.23607,330 527.23607,430     632.23607,332.23607 532.23607,432.23607     627.23607,355 587.23607,395 587.23607,420     632.23607,357.23607 592.23607,397.23607 592.23607,420"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="141.5,143.5,141.5,122.25,81.5,77.25,81.5"
        />

        {/* Connect - White Line */}
        <text
          x="220"
          y="75"
          fill="#ffffff"
          fontSize="20"
          fontFamily="Orbitron, monospace"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          CONNECT
        </text>
      </motion.svg>
      <div className="relative z-10 w-11/12 h-11/12 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
} 