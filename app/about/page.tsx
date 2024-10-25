"use client"

import Image from "next/image";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { popIn, staggerContainer } from "@/utils/motion";

import { kali } from "@/public";
import { Age } from "@/components/functions/Age";
import { Separator } from "@/components/ui/separator";
import { BreadCrumb } from "@/components/shared/BreadCrumb";

const Page = () => {
  const t = useTranslations("About");

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={staggerContainer}
      className="flex flex-col overflow-hidden px-4 w-screen"
      id="about"
    >
      <div className="flex items-center justify-center mt-4">
        <BreadCrumb />
      </div>
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
            <Image src={kali} alt="Logo" width={200} height={200} className="rounded-2xl" priority unoptimized />
          </div>
        </motion.div>
        {/* PERSONAL INFORMATION CONTAINER */}
        <motion.div
          variants={popIn}
          className="flex justify-center items-center"
        >
          {/* LIST OF DATA */}
          <ul className="flex flex-col gap-[4px] text-zinc-900 dark:text-zinc-200">
            <li><strong>{t("Fields.NameField")}</strong>: {t("PersonalInformation.Name")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li><strong>{t("Fields.LastNameField")}</strong>: {t("PersonalInformation.LastName")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li><strong>{t("Fields.AgeField")}</strong>: <Age /></li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li><strong>{t("Fields.OccupationField")}</strong>: {t("PersonalInformation.Occupation")}</li>
            <Separator orientation="horizontal" className="bg-zinc-400 dark:bg-zinc-800" />
            <li><strong>{t("Fields.EmailField")}</strong>: {t("PersonalInformation.Email")}</li>
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

      {/* CHARACTERISTICS */}
      <motion.h1 variants={popIn} className="heading flex justify-center mt-8 md:mt-16">{t("Characteristics.Title")}</motion.h1>

      {/* SKILLS */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full mt-4">
        <div className="flex justify-start items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">{t("Characteristics.Programming")}</p>
        </div>
      </motion.div>

      {/* PROGRAMMING LANGUAGES */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-w-screen-lg w-full">
          <div className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
            <div className="absolute flex w-full h-full items-start justify-start text-lg xs:text-xl sm:text-3xl font-bold p-2 z-40">
              <p className="glassmorphism p-2 rounded-xl">C++</p>
            </div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={60}
              gaugePrimaryColor="rgb(250 87 193)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="size-28 xs:size-40 p-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
            <div className="absolute flex w-full h-full items-start justify-start text-lg xs:text-xl sm:text-3xl font-bold p-2 z-40">
              <p className="glassmorphism p-2 rounded-xl">Java</p>
            </div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={40}
              gaugePrimaryColor="rgb(177 102 204)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="size-28 xs:size-40 p-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
            <div className="absolute flex w-full h-full items-start justify-start text-lg xs:text-xl sm:text-3xl font-bold p-2 z-40">
              <p className="glassmorphism p-2 rounded-xl">Javascript</p>
            </div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={80}
              gaugePrimaryColor="rgb(117 114 255)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="size-28 xs:size-40 p-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
            <div className="absolute flex w-full h-full items-start justify-start text-lg xs:text-xl sm:text-3xl font-bold p-2 z-40">
              <p className="glassmorphism p-2 rounded-xl">Python</p>
            </div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={70}
              gaugePrimaryColor="rgb(105 166 249)"
              gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
              className="size-28 xs:size-40 p-2"
            />
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full mt-4">
        <div className="flex justify-start items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">{t("Characteristics.Technologies")}</p>
        </div>
      </motion.div>

      
    </motion.section>
  );
};

export default Page;