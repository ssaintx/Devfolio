"use client"

import { logo } from '@/public';
import { motion } from 'framer-motion';

import Image from 'next/image';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{
        opacity: 1,
        y: -50,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 140,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="navbar">
      <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
      <h1>saintx.</h1>
    </motion.nav>
  );
};