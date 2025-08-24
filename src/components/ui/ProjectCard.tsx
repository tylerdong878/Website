import React from 'react';
import GlowingFrame from './GlowingFrame';
import Image from 'next/image';
import { FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  notes?: string[];
  devpost?: string;
  github?: string;
  youtube?: string;
  website?: string;
}

export function ProjectCard({ image, title, description, notes, devpost, github, youtube, website }: ProjectCardProps) {
  return (
    <GlowingFrame glow={false} className="w-full h-full p-4 flex flex-col rounded-xl relative z-10" px="px-5.5" py="py-4">
      <GlowingFrame className="mb-4 w-full h-40 overflow-hidden aspect-[16/9] flex-shrink-0" px="px-0" py="py-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
          unoptimized={image.endsWith('.gif')}
        />
      </GlowingFrame>
      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-purple-500 mb-2 font-orbitron">{title}</h3>
        <p className="text-base text-purple-300 mb-2 flex-grow">{description}</p>
        {notes && notes.length > 0 && (
          <ul className="text-base text-purple-400 mt-2 list-disc list-inside">
            {notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        )}
      </div>
      {(website || devpost || github || youtube) && (
        <div className="flex gap-4 mt-4 flex-shrink-0">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-400 transition-colors">
              <FaGlobe size={30} />
            </a>
          )}
          {devpost && (
            <a href={devpost} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500 transition-colors">
              <SiDevpost size={30} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500 transition-colors">
              <FaGithub size={30} />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500 transition-colors">
              <FaYoutube size={30} />
            </a>
          )}
        </div>
      )}
    </GlowingFrame>
  );
} 