"use client"

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { DownloadIcon } from "@radix-ui/react-icons";
import { github, linkedin, leetcode } from "@/public";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export const Hero = () => {
    const t = useTranslations("Hero");

    const links = {
        github: "https://github.com/ssaintx",
        linkedin: "https://linkedin.com/in/ssaintx",
        leetcode: "https://leetcode.com/u/ssaintx/"
    }

    return (
        <section
            className="flex flex-col gap-4 items-center justify-between pt-20 overflow-hidden sm:px-8 md:px-12 lg:px-16 pb-8 h-screen"
            id="home"
        >
            <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center">
                {/* HEADING AND SUBHEADING */}
                <div>
                    <h1 className="mt-10 text-2xl md:text-4xl capitalize font-semibold text-center">{t("Heading")}</h1>
                    <p className="text-gray-500">{t("Subheading")} </p>
                </div>
                {/* CV */}
                <div>
                    <Link
                        href={`/assets/about/LazizbekCV.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="LazizbekCV.pdf"
                        className="button flex items-center justify-center gap-2 my-8"
                    >
                        <DownloadIcon className="size-4" /> {t("CV")}
                    </Link>
                </div>
                {/* LINKS */}
                <div className="flex flex-row items-center justify-center gap-2">
                    <Link href={links.github} target="_blank" className="button p-2">
                        <Image src={github} alt="github-logo" className="invert-0 dark:invert" />
                    </Link>
                    <Link href={links.linkedin} target="_blank" className="button p-2">
                        <Image src={linkedin} alt="linkedin-logo" className="invert-0 dark:invert" />
                    </Link>
                    <Link href={links.leetcode} target="_blank" className="button p-2">
                        <Image src={leetcode} alt="leetcode-logo" className="invert-0 dark:invert" />
                    </Link>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};
