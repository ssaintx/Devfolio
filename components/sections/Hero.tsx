import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { ChevronRightIcon, FileIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import AnimatedShinyText from "../magicui/animated-shiny-text";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <section className="flex flex-col items-center justify-center py-4">
            <div className="mt-5 z-10">
                <div
                    className={cn(
                        "border-none h-8 rounded-full text-base transition-all ease-in hover:cursor-pointer dark-light-secondary hover:bg-zinc-200 dark:hover:bg-zinc-800",
                    )}
                >
                    <AnimatedShinyText className="flex items-center justify-center px-4 py-1 transition ease-out hover:text-zinc-600 hover:duration-300 hover:dark:text-zinc-400">
                        <span>{t("Badge")}</span>
                        <ChevronRightIcon className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div>
                <h1 className="mt-10 text-2xl md:text-4xl capitalize font-semibold text-center">{t("Heading")}</h1>
                <p className="text-gray-500">{t("Subheading")}</p>
            </div>

            <div>
                <Link
                    href={`/assets/LazizbekCV.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="LazizbekCV.pdf"
                    className="flex flex-row items-center justify-center gap-2 mt-10 dark-light-secondary p-2 px-4 rounded-full hover:bg-zinc-400 dark:hover:bg-zinc-700 transition-all ease-linear"
                >
                    <FileIcon className="size-5" /> Download CV
                </Link>
            </div>
            
            <div className="flex items-center justify-center mt-10 gap-4">
                <Separator orientation="vertical" className="bg-gray-500" />
                <GitHubLogoIcon className="size-7" />
                <Separator orientation="vertical" className="bg-gray-500 h-[90%]" />
                <LinkedInLogoIcon className="size-7" />
            </div>
        </section>
    );
};