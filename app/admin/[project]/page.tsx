"use client"

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useFetch } from "@/components/hooks/useFetch";

import { Separator } from "@radix-ui/react-separator";
import { ExternalLinkIcon, LoaderCircle } from "lucide-react";
import {
    ClockIcon,
    ExclamationTriangleIcon,
    GitHubLogoIcon,
} from "@radix-ui/react-icons";

const Page = () => {
    const params = useParams();
    const t = useTranslations("Admin.Project");
    const { project, fetchError, isFetchLoading } = useFetch(params.project as string);

    if (isFetchLoading) {
        return (
            <div className="flex flex-row items-center gap-2">
                <LoaderCircle className="animate-spin size-4" />
                <p>{t("Status.Loading")}</p>
            </div>
        );
    }

    if (fetchError) {
        return (
            <div className="mt-4 flex items-center justify-center md:justify-start shadow-xl shadow-[bg-red-500]">
                <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center text-sm">
                    <ExclamationTriangleIcon />
                    {t("Status.Error")}
                </p>
            </div>
        );
    }

    if (!project) {
        return <div>{t("Status.NotFound")}</div>;
    }

    return (
        <section>
            <h1 className="heading_admin">{project.title}</h1>
            <p className="text-gray-500">{project.subtitle}</p>
            <div className="flex flex-row gap-1">
                <ClockIcon className="text-gray-500" />
                <p className="text-xs text-gray-500">
                    {new Date(project.date).toLocaleDateString('en-GB', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </p>
            </div>
            <div className="flex items-center justify-start mt-4">
                <div className={clsx({
                    "btn-frontend-gradient": project.projectType === "Frontend",
                    "btn-backend-gradient": project.projectType === "Backend",
                    "btn-mobile-gradient": project.projectType === "Mobile",
                    "btn-saas-gradient": project.projectType === "SaaS",
                    "btn-webapp-gradient": project.projectType === "WebApplication",
                    "btn-crm-gradient": project.projectType === "CRM",
                    "btn-landing-gradient": project.projectType === "Landingpage",
                    "btn-ecommence-gradient": project.projectType === "E-commerce",
                })}>
                    {project.projectType}
                </div>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p>{project.description}</p>
            </div>
            <Image
                src={project.imageUrl!}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-2xl object-cover w-full shadow-2xl mt-4"
            />
            <div className="flex items-center justify-center gap-2 mt-8">
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
        </section>
    );
};

export default Page;