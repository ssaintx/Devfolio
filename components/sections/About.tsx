"use client"

import Link from "next/link";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AccessibilityIcon, CodeIcon, GlobeIcon, ReaderIcon, SewingPinIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import { popIn, staggerContainer } from "@/utils/motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { BarChart, GraduationCap } from "lucide-react";

export const About = () => {
  const t = useTranslations("About");

  const items = [
    {
      title: t("Bento.First.Heading"),
      description: t("Bento.First.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <CodeIcon />,
    },
    {
      title: t("Bento.Second.Heading"),
      description: t("Bento.Second.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <GlobeIcon />,
    },
    {
      title: t("Bento.Third.Heading"),
      description: t("Bento.Third.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <AccessibilityIcon />,
    },
    {
      title: t("Bento.Fourth.Heading"),
      description: t("Bento.Fourth.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <VercelLogoIcon />,
    },
    {
      title: t("Bento.Fifth.Heading"),
      description: t("Bento.Fifth.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <GraduationCap className="size-4 font-light" />,
    },
    {
      title: t("Bento.Sixth.Heading"),
      description: t("Bento.Sixth.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <BarChart className="size-4 font-light" />,
    },
    {
      title: t("Bento.Seventh.Heading"),
      description: t("Bento.Seventh.Subheading"),
      header: <div className="flex flex-1 w-full h-full rounded-xl bg-zinc-800 dark:bg-zinc-200"></div>,
      icon: <SewingPinIcon />,
    },
  ];


  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer}
      className="flex flex-col items-center justify-center"
      id="about"
    >
      <motion.h1 variants={popIn} className="pb-4 heading">{t("Heading")}</motion.h1>
      <BentoGrid className="max-w-4xl mx-auto mt-8 px-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      {/* BUTTON TO REDIRECT TO ABOUT PAGE */}
      <motion.div
        variants={popIn}
        className="flex justify-center mt-8"
      >
        <Link href='/about' className="button flex flex-row justify-center items-center gap-2">
          <ReaderIcon /> {t("ReadMore")}
        </Link>
      </motion.div>
    </motion.section>
  );
}