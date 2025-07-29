import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

const links = [
  { href: 'https://www.linkedin.com/in/tylerdong/', label: 'LinkedIn', icon: <FaLinkedin size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://x.com/tyler878_', label: 'X', icon: <FaTwitter size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://www.instagram.com/tylerdong_/', label: 'Instagram', icon: <FaInstagram size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'mailto:tylerdong878@gmail.com', label: 'Email', icon: <FaEnvelope size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://github.com/tylerdong878', label: 'GitHub', icon: <FaGithub size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
  { href: 'https://devpost.com/dong-ty', label: 'Devpost', icon: <SiDevpost size={48} className="text-blue-500 drop-shadow-[0_0_4px_#38bdf8cc] hover:drop-shadow-[0_0_5px_#f472b6cc] transition-shadow" /> },
];

export default function ContactLinks() {
  return (
    <section className="flex flex-wrap gap-6 justify-center items-center mt-4">
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:scale-105 transition-transform"
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
} 