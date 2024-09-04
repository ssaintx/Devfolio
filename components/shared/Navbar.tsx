import { logo } from '@/public';

import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center px-4 py-2 bg-transparent w-full">
      <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
      <h1>saintx.</h1>
    </nav>
  );
};