"use client"

import Link from "next/link";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReaderIcon } from "@radix-ui/react-icons";
import { popIn, staggerContainer } from "@/utils/motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export const About = () => {
  const t = useTranslations("About");

  const gridItems = [
    {
      id: 1,
      title: t("Bento.First.Heading"),
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end text-zinc-50 selection:bg-zinc-50 selection:text-zinc-950",
      img: "/assets/bento/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t("Bento.Second.Heading"),
      description: t("Bento.Second.Subheading"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t("Bento.Third.Heading"),
      description: t("Bento.Third.Subheading"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t("Bento.Fourth.Heading"),
      description: t("Bento.Fourth.Subheading"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/assets/bento/grid.svg",
      spareImg: "/assets/bento/b4.svg",
    },

    {
      id: 5,
      title: t("Bento.Fifth.Heading"),
      description: t("Bento.Fifth.Subheading"),
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/assets/bento/b5.svg",
      spareImg: "/assets/bento/grid.svg",
    },
    {
      id: 6,
      title: t("Bento.Sixth.Heading"),
      description: t("Bento.Sixth.Subheading"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
      className="flex flex-col items-center justify-center px-4 xs:px-8 sm:px-16 md:px-20 lg:px-24"
      id="about"
    >
      <motion.h1 variants={popIn} className="heading">{t("Heading")}</motion.h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      {/* BUTTON TO REDIRECT TO ABOUT PAGE */}
      <motion.div
        variants={popIn}
        className="flex justify-center mt-4 pb-8"
      >
        <Link href='/about' className="button flex flex-row justify-center items-center gap-2">
          <ReaderIcon /> {t("ReadMore")}
        </Link>
      </motion.div>
    </motion.section>
  );
}