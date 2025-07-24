'use client'

import { Button } from '../ui/Button';
import Link from 'next/link';

export default function ActionButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-0">
      <Link href="/projects">
        <Button name="PROJECTS" />
      </Link>
      <Link href="/resume">
        <Button name="RESUME" />
      </Link>
      <Link href="/contact">
        <Button name="CONTACT" />
      </Link>
    </div>
  );
} 