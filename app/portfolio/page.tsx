"use client"

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { Separator } from "@radix-ui/react-separator";
import { staggerContainer } from "@/utils/motion";
import { BreadCrumb } from "@/components/shared/BreadCrumb";
import { LoaderCircle, ExternalLinkIcon } from "lucide-react";
import { ExclamationTriangleIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { Project } from "@/types/appwrite.types";
import { useFetchProject } from "@/components/hooks/projects/useFetchProject";

const Page = () => {
    const t = useTranslations("Portfolio");
    const { projects, isFetchLoading, fetchError } = useFetchProject();

    return (
        <section
            className="flex flex-col items-center justify-center"
            id="portfolio"
        >
            <div className="flex items-center justify-center mt-4">
                <BreadCrumb />
            </div>

            <h1 className="heading flex justify-center my-8 md:my-16">{t("Heading")}</h1>

            {fetchError && (
                <div className="mt-4 flex items-center justify-center">
                    <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
                        <ExclamationTriangleIcon />
                        {fetchError}
                    </p>
                </div>
            )}

            <ol className="relative border-s border-zinc-200 dark:border-zinc-800 mx-4">
                {isFetchLoading ? (
                    <div className="flex flex-row items-center justify-center w-full gap-2 border-none">
                        <LoaderCircle className="animate-spin size-4" />
                        <p>{t("Status.Loading")}</p>
                    </div>
                ) : (projects.length === 0) ?
                    <p>{t("Status.Empty")}</p> :
                    projects.map((project: Project) => {
                        return (
                            <li key={project.$id} className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 glassmorphism"></div>
                                <time className="mb-1 text-sm text-gray-500">
                                    {new Date(project.date).toLocaleDateString('en-GB', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                                <div className="flex items-center justify-start my-2">
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
                                </div>
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <h5 className="mb-4 text-zinc-600 dark:text-zinc-400">{project.subtitle}</h5>
                                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                                <Image
                                    src={project.imageUrl!}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="rounded-2xl object-cover w-full shadow-2xl"
                                />
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
                            </li>
                        )
                    })}
            </ol>
        </section>
    );
};

export default Page;