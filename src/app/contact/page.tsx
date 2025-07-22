import React from 'react';
import { NeonFrame } from '@/components/NeonFrame';
import AboutSection from '@/components/AboutSection';
import ContactLinks from '@/components/ContactLinks';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <NeonFrame>
        <AboutSection />
        <ContactLinks />
      </NeonFrame>
    </div>
  );
} 