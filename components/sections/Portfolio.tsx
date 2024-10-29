"use client"

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";
import { popIn, staggerContainer } from "@/utils/motion";
import { LoaderCircle, ExternalLinkIcon } from "lucide-react";
import { EnterIcon, ExclamationTriangleIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { Project } from "@/types/appwrite.types";
import { useFetchProject } from "../hooks/projects/useFetchProject";

export const Portfolio = () => {
    const t = useTranslations("Portfolio");
    const { projects, isFetchLoading, fetchError } = useFetchProject();

    return (
        <motion.section
            initial="hidden"
            whileInView={isFetchLoading ? "hidden" : "show"}
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="flex flex-col items-center justify-center dark-light-secondary"
            id="portfolio"
        >
            <motion.h1 variants={popIn} className="heading flex justify-center my-8 md:my-16">{t("Heading")}</motion.h1>

            {fetchError && (
                <div className="mt-4 flex items-center justify-center">
                    <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
                        <ExclamationTriangleIcon />
                        {fetchError}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl pb-8 px-8 mt-4 ">
                {isFetchLoading ? (
                    <div className="flex flex-row items-center justify-center w-full gap-2">
                        <LoaderCircle className="animate-spin size-4" />
                        <p>{t("Status.Loading")}</p>
                    </div>
                ) : (projects.length === 0) ?
                    <p>{t("Status.Empty")}</p> :
                    projects.slice(0, 4).map((project: Project) => {
                        return (
                            <motion.article
                                variants={popIn}
                                key={project.$id}
                                className="glassmorphism p-4 rounded-3xl flex flex-col cursor-pointer"
                            >
                                <Image
                                    src={project.imageUrl!}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="rounded-2xl object-cover w-full shadow-2xl"
                                />
                                <h1 className="text-center mt-2 text-md font-semibold sm:text-lg">{project.title}</h1>
                                <p className="text-center text-zinc-400 dark:text-zinc-600 text-sm">{project.subtitle}</p>
                                <Separator orientation="horizontal" className="my-2" />
                                <div className="text-start">
                                    <p>{project.description}</p>
                                </div>
                                <Separator orientation="horizontal" className="my-2" />
                                <div className="flex items-center justify-center gap-2 mt-4">
                                    <Link
                                        href={project.githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button flex flex-row items-center justify-center gap-2"
                                    >
                                        <GitHubLogoIcon /> {t("GithubButton")}
                                    </Link>
                                    <Separator orientation="vertical" className="my-2" />
                                    <Link
                                        href={project.liveURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button flex flex-row items-center justify-center gap-2"
                                    >
                                        <ExternalLinkIcon /> {t("LiveButton")}
                                    </Link>
                                </div>
                                <div className="flex justify-between items-end mt-4 h-full">
                                    <div className={clsx({
                                        "btn-frontend-gradient": project.projectType === "Frontend",
                                        "btn-backend-gradient": project.projectType === "Backend",
                                        "btn-mobile-gradient": project.projectType === "Mobile",
                                        "btn-saas-gradient": project.projectType === "SaaS",
                                        "btn-webapp-gradient": project.projectType === "WebApplication",
                                        "btn-crm-gradient": project.projectType === "CRM",
                                        "btn-landing-gradient": project.projectType === "Landing-Page",
                                        "btn-ecommence-gradient": project.projectType === "E-Commerce",
                                    })}>
                                        {project.projectType}
                                    </div>
                                    <time className="text-xs text-gray-500">
                                        {new Date(project.date).toLocaleDateString('en-GB', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                            </motion.article>
                        )
                    })}
            </div>

            <motion.div
                variants={popIn}
                className="flex justify-center items-end my-8">
                <Link href='/portfolio' className="button flex flex-row items-center justify-center gap-2">
                    <EnterIcon />
                    {t("SeeMore")}
                </Link>
            </motion.div>
        </motion.section>
    );
};