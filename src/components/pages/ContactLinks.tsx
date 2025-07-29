import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

const links = [
  { href: 'https://www.linkedin.com/in/tylerdong/', label: 'LinkedIn', icon: <FaLinkedin size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://x.com/tyler878_', label: 'X', icon: <FaTwitter size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://www.instagram.com/tylerdong_/', label: 'Instagram', icon: <FaInstagram size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'mailto:tylerdong878@gmail.com', label: 'Email', icon: <FaEnvelope size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://github.com/tylerdong878', label: 'GitHub', icon: <FaGithub size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://devpost.com/dong-ty', label: 'Devpost', icon: <SiDevpost size={24} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
];

export default function ContactLinks() {
  return (
    <section className="grid grid-cols-4 sm:flex sm:flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center mt-4 max-w-xs sm:max-w-none">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:scale-105 transition-transform flex justify-center"
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
} 