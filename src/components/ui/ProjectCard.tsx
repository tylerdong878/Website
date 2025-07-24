import React from 'react';
import GlowingFrame from './GlowingFrame';
import Image from 'next/image';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  notes?: string;
}

export function ProjectCard({ image, title, description, notes }: ProjectCardProps) {
  return (
    <GlowingFrame className="w-full h-full p-4 flex flex-col items-center bg-black/80 rounded-xl" px="px-6" py="py-4">
      <GlowingFrame className="mb-4 w-full h-40 overflow-hidden" px="px-0" py="py-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-2xl"
          style={{ aspectRatio: '16/9' }}
          loading="lazy"
        />
      </GlowingFrame>
      <h3 className="text-2xl font-bold text-purple-500 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>{title}</h3>
      <p className="text-base text-white/90 mb-2 text-center">{description}</p>
      {notes && <div className="text-xs text-pink-400 mt-2 italic text-center">{notes}</div>}
    </GlowingFrame>
  );
} 