import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.1,
    },
  },
};