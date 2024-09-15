'use client';

import { motion } from 'framer-motion';
import { CustomTextProps } from '@/lib/props';
import { textContainer, textVariant2 } from '@/utils/motion';

export const TypingText = ({ title, className }: CustomTextProps) => (
  <motion.p
    variants={textContainer}
    className={className}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, className }: CustomTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={className}
  >
    {title}
  </motion.h2>
);