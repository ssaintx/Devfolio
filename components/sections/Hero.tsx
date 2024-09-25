"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Separator } from "../ui/separator";

import { popIn, staggerContainer } from "@/utils/motion";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    DownloadIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import GridPattern from "../magicui/grid-pattern";
import AnimatedShinyText from "../magicui/animated-shiny-text";

export const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={staggerContainer}
            className="flex flex-col items-center justify-center pt-20 h-screen overflow-hidden"
            id="home"
        >
            {/* ANIMATED HIRE ME BADGE */}
            <motion.div variants={popIn} className="mt-5">
                <div
                    className={cn(
                        "border-none h-8 rounded-full text-base transition-all ease-in hover:cursor-pointer dark-light-secondary dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-lg",
                    )}
                >
                    <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
                        <span>{t("Badge")}</span>
                        <ChevronRightIcon className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </motion.div>

            {/* HEADING AND SUBHEADING */}
            <motion.div variants={popIn}>
                <h1 className="mt-10 text-2xl md:text-4xl capitalize font-semibold text-center">{t("Heading")}</h1>
                <p className="text-gray-500">{t("Subheading")} </p>
            </motion.div>

            {/* DOWNLOAD CV BUTTON */}
            <motion.div variants={popIn}>
                <Link
                    href={`/assets/LazizbekCV.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="LazizbekCV.pdf"
                    className="button flex items-center justify-center gap-2 mt-10"
                >
                    <DownloadIcon className="size-5" /> {t("Button")}
                </Link>
            </motion.div>

            {/* SEPARATOR */}
            <motion.div variants={popIn}>
                <Separator orientation="horizontal" className="mt-10 bg-gray-500 w-[120px]" />
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={popIn} className="flex items-center justify-center mt-3 gap-3 glassmorphism py-2 px-4 rounded-full">
                <GitHubLogoIcon className="size-7" />
                <Separator orientation="vertical" className="h-[28px] bg-gray-500" />
                <LinkedInLogoIcon className="size-7" />
            </motion.div>

            {/* DOWN ARROW BUTTON */}
            <motion.div variants={popIn} className="mt-8 md:mt-18 xl:mt-20 animate-bounce glassmorphism p-1 rounded-full">
                <Link href="#about"><ChevronDownIcon className="size-7 cursor-pointer" /></Link>
            </motion.div>

            {/* BACKGROUND GRID */}
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                className={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
            />
        </motion.section>
    );
};
