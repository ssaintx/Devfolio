"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { kali } from "@/public";
import { Age } from "../functions/Age";
import { Separator } from "../ui/separator";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "../functions/CustomText";

import Link from "next/link";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");
  const variants = staggerContainer({ staggerChildren: 0.1, delayChildren: 0.3 });

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col dark-light-secondary overflow-hidden p-8"
      id="about"
    >
      {/* TODO fix animation on mobile devices, make responsive. Fix mobile overflow, which breaks animation appearing from left and right. fadein. in ABOUT ME CONTAINER */}
      {/* HEADING */}
      <TitleText title={t("Heading")} className="heading flex justify-center my-8 md:my-16" />

      {/* ABOUT ME CONTAINER */}
      <div className="flex flex-col sm:flex-row justify-center gap-10">
        {/* IMAGE CONTAINER */}
        <motion.div
          variants={fadeIn({ direction: 'right', type: 'tween', duration: 0.5, delay: 0.7 })}
          className="flex justify-center sm:justify-start"
        >
          <div className="glassmorphism p-2 rounded-2xl">
            <Image src={kali} alt="Logo" width={200} height={200} className="rounded-2xl" priority />
          </div>
        </motion.div>
        {/* PERSONAL INFORMATION CONTAINER */}
        <motion.div
          variants={fadeIn({ direction: 'left', type: 'tween', duration: 1, delay: 1 })}
          className="flex justify-center items-center"
        >
          {/* LIST OF DATA */}
          <ul className="flex flex-col gap-[4px] text-zinc-900 dark:text-zinc-200">
            <li>{t("Fields.NameField")}: {t("PersonalInformation.Name")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li>{t("Fields.LastNameField")}: {t("PersonalInformation.LastName")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li>{t("Fields.AgeField")}: <Age /></li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li>{t("Fields.OccupationField")}: {t("PersonalInformation.Occupation")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li>{t("Fields.EmailField")}: {t("PersonalInformation.Email")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
          </ul>
        </motion.div>
      </div>

      {/* BIO */}
      <motion.div
        variants={fadeIn({ direction: 'up', type: 'tween', duration: 1.2, delay: 1.5 })}
        className="flex items-center justify-center mt-8 w-full"
      >
        <div className="flex justify-center items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="first-letter:text-4xl">{t("Bio")}</p>
        </div>
      </motion.div>

      {/* BUTTON TO REDIRECT TO ABOUT PAGE */}
      <motion.div
        variants={fadeIn({ direction: 'down', type: 'tween', duration: 1.4, delay: 2 })}
        className="flex justify-center items-end mt-8">
        <Link href='/about' className="button">
          {t("ReadMore")}
        </Link>
      </motion.div>
    </motion.section>
  );
};
//  My tech stack is React.js, Next.js and Typescript, I also worked with fullstack projects like MERN and Next.js(SSR). I also have a knowledge of UI-UX design and can create design for web. I am currently working as a Frontend mentor, and I am looking for a job in the field of web development. Additionally, I have worked with Python, Java and C++ programming languages and have good knowledge of data structures and algorithms.