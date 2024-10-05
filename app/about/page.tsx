"use client"

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { kali } from "@/public";
import { Age } from "@/components/functions/Age";
import { Separator } from "@/components/ui/separator";
import { popIn, staggerContainer } from "@/utils/motion";
import { ReaderIcon } from "@radix-ui/react-icons";

const Page = () => {
  const t = useTranslations("About");

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer}
      className="flex flex-col dark-light-secondary overflow-hidden p-8 w-screen"
      id="about"
    >
      {/* HEADING */}
      <motion.h1 variants={popIn} className="heading flex justify-center my-8 md:my-16">{t("Heading")} </motion.h1>

      {/* ABOUT ME CONTAINER */}
      <div className="flex flex-col sm:flex-row justify-center gap-10">
        {/* IMAGE CONTAINER */}
        <motion.div
          variants={popIn}
          className="flex justify-center sm:justify-start"
        >
          <div className="glassmorphism p-2 rounded-2xl">
            <Image src={kali} alt="Logo" width={200} height={200} className="rounded-2xl" priority unoptimized/>
          </div>
        </motion.div>
        {/* PERSONAL INFORMATION CONTAINER */}
        <motion.div
          variants={popIn}
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
        variants={popIn}
        className="flex items-center justify-center mt-8 w-full"
      >
        <div className="flex justify-center items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="first-letter:text-4xl">{t("Bio")}</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Page;

//  My tech stack is React.js, Next.js and Typescript, I also worked with fullstack projects like MERN and Next.js(SSR). I also have a knowledge of UI-UX design and can create design for web. I am currently working as a Frontend mentor, and I am looking for a job in the field of web development. Additionally, I have worked with Python, Java and C++ programming languages and have good knowledge of data structures and algorithms.
