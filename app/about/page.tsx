"use client"

import clsx from "clsx";
import Image from "next/image";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { popIn, staggerContainer } from "@/utils/motion";

import { kali } from "@/public";
import { Label } from "@/components/ui/label";
import { Age } from "@/components/functions/Age";
import { Footer } from "@/components/shared/Footer";
import { Separator } from "@/components/ui/separator";
import { BreadCrumb } from "@/components/shared/BreadCrumb";

const Page = () => {
  const t = useTranslations("About");

  const programmingSkillsData = [
    {
      "language": "C++",
      "value": 60,
    },
    {
      "language": "Java",
      "value": 40,
    },
    {
      "language": "Javascript",
      "value": 80,
    },
    {
      "language": "Python",
      "value": 70,
    },
  ];

  const technologiesData = {
    "ReactJS": 80,
    "NextJS": 85,
    "VueJS": 50,
    "TailwindCSS": 90,
    "Git/Github": 90,
    "MongoDB": 70,
  };

  const architecturesData = [
    {
      id: 1,
      title: "Model View Controller(MVC)",
      tag: "Architecture",
      src: '/assets/about/model-view-controller.svg'
    },
    {
      id: 2,
      title: "Layered Architecture",
      tag: "Architecture",
      src: '/assets/about/layered.svg'
    },
    {
      id: 3,
      title: "Client-Server Architecture",
      tag: "Architecture",
      src: '/assets/about/client-server.svg'
    },
    {
      id: 4,
      title: "SOLID",
      tag: "Principle",
      src: '/assets/about/solid.svg'
    },
    {
      id: 5,
      title: "DRY",
      tag: "Principle",
      src: '/assets/about/dry.svg'
    },
    {
      id: 6,
      title: "KISS",
      tag: "Principle",
      src: '/assets/about/kiss.svg'
    },
  ];

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
          <ul className="flex flex-col gap-[4px] text-zinc-900 dark:text-zinc-200 px-2">
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

      {/* PROGRAMMING lANGUAGES SUBHEADER */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full mt-4">
        <div className="flex justify-start items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">{t("Characteristics.Programming")}</p>
        </div>
      </motion.div>

      {/* PROGRAMMING lANGUAGES */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-w-screen-lg w-full">
          {programmingSkillsData.map((skill, i) => (
            <div key={skill.language} className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
              <div className="absolute flex w-full h-full items-start justify-start text-lg xs:text-xl sm:text-3xl font-bold p-2 z-40">
                <p className="glassmorphism p-2 rounded-xl">{skill.language}</p>
              </div>
              <AnimatedCircularProgressBar
                max={100}
                min={0}
                value={skill.value}
                gaugePrimaryColor={(i === 0) ? "rgb(250 87 193)" : (i === 1) ? "rgb(177 102 204)" : (i === 2) ? "rgb(117 114 255)" : (i === 3) ? "rgb(105 166 249)" : ""}
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                className="size-28 xs:size-40 p-2"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* TECHNOLOGIES SUBHEADER */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full mt-8">
        <div className="flex justify-start items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">{t("Characteristics.Technologies")}</p>
        </div>
      </motion.div>

      {/* TECHNOLOGIES */}
      <motion.div variants={popIn} className="flex justify-center items-center w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg">
          {Object.entries(technologiesData).map(([key, value]) => (
            <div key={key} className="flex flex-col justify-start items-center w-full gap-4 p-2 glassmorphism rounded-2xl">
              <Label htmlFor={key} className="text-xl ml-2 sm:text-2xl">{key}</Label>
              <meter id={key} value={value} min={0} max={100} className="w-full h-6" style={{
                // @ts-ignore
                "--meter-color": `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
              }} />
              <p>{value}/100</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ARCHITECTURES SUBHEADER */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full mt-8">
        <div className="flex justify-start items-center max-w-[600px] min-w-[200px] w-[600px] px-2 xs:px-8">
          <p className="text-sm text-zinc-400 dark:text-zinc-600">{t("Characteristics.Architectures")}</p>
        </div>
      </motion.div>

      {/* ARCHITECTURES */}
      <motion.div variants={popIn} className="flex items-center justify-center w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-8 max-w-screen-lg w-full">
          {architecturesData.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center w-full h-full glassmorphism p-2 rounded-2xl">
              <Image src={item.src} alt={item.title} width={100} height={100} className="invert-0 dark:invert select-none" />
              <p>{item.title}</p>
              <span className={clsx({
                "text-xs bg-pink-400 rounded-full py-1 px-2 text-zinc-50 mt-4": item.tag === "Architecture",
                "text-xs bg-violet-400 rounded-full py-1 px-2 text-zinc-50 mt-4": item.tag === "Principle"
              })}># {item.tag}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Page;