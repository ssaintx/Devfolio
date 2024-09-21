"use client"

import { logo } from '@/public';
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

import Image from 'next/image';

export const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="navbar"
    >
      <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
      <h1>saintx.</h1>
    </motion.nav>
  );
};