"use client"

import Image from 'next/image';
import { logo } from '@/public';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
      <h1>saintx.</h1>
    </nav>
  );
};