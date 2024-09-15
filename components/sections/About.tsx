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
    <section className="flex flex-col dark-light-secondary py-8 px-16 sm:px-32 md:px-48 xl:px-96 md:py-14" id="about">
      {/* TODO fix animation on mobile devices, make responsive. Fix mobile overflow, which breaks animation appearing from left and right. fadein. in ABOUT ME CONTAINER */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        {/* HEADING */}
        <TitleText title={t("Heading")} className="heading flex justify-center mb-8 md:mb-16" />

        {/* ABOUT ME CONTAINER */}
        <div className="flex flex-col sm:flex-row gap-10">
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
            <ul className="flex flex-col gap-[4px]">
              <li>{t("Fields.NameField")}: {t("PersonalInformation.Name")}</li>
              <Separator orientation="horizontal" className="bg-gray-500" />
              <li>{t("Fields.LastNameField")}: {t("PersonalInformation.LastName")}</li>
              <Separator orientation="horizontal" className="bg-gray-500" />
              <li>{t("Fields.AgeField")}: <Age /></li>
              <Separator orientation="horizontal" className="bg-gray-500" />
              <li>{t("Fields.OccupationField")}: {t("PersonalInformation.Occupation")}</li>
              <Separator orientation="horizontal" className="bg-gray-500" />
              <li>{t("Fields.EmailField")}: {t("PersonalInformation.Email")}</li>
              <Separator orientation="horizontal" className="bg-gray-500" />
            </ul>
          </motion.div>
        </div>

        {/* BIO */}
        <motion.div
          variants={fadeIn({ direction: 'up', type: 'tween', duration: 1.2, delay: 1.5 })}
          className="p-2 mt-8"
        >
          <p className="first-letter:text-4xl">{t("Bio")}</p>
        </motion.div>

        {/* BUTTON TO REDIRECT TO ABOUT PAGE */}
        <motion.div
          variants={fadeIn({ direction: 'down', type: 'tween', duration: 1.4, delay: 2 })}
          className="flex justify-center items-end mt-8">
          <Link href='/about' className="button">
            read more
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
//  My tech stack is React.js, Next.js and Typescript, I also worked with fullstack projects like MERN and Next.js(SSR). I also have a knowledge of UI-UX design and can create design for web. I am currently working as a Frontend mentor, and I am looking for a job in the field of web development. Additionally, I have worked with Python, Java and C++ programming languages and have good knowledge of data structures and algorithms.