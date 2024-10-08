"use client"

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { Project } from "@/types/appwrite.types";
import { Separator } from "@/components/ui/separator";
import { useFetch } from "@/components/hooks/useFetch";
import {
  GitHubLogoIcon,
  ExternalLinkIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

const Page = () => {
  const t = useTranslations("Admin.Home");
  const fetchProjects = useFetch();

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>
      {fetchProjects.error && <div className="mt-4 flex items-center justify-start">
        <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
          <ExclamationTriangleIcon />
          {fetchProjects.error}
        </p>
      </div>}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {fetchProjects.isLoading ? <p>{t("Status.Loading")}</p> : (fetchProjects.projects.length === 0) ? <p>{t("Status.Empty")}</p> : fetchProjects.projects.map((project: Project) => (
          <div key={project.$id} className="glassmorphism p-4 rounded-3xl flex flex-col">
            <Image
              src={project.imageURL}
              width={300}
              height={200}
              alt={project.title}
              className="rounded-2xl object-cover w-full"
            />
            <h1 className="text-center mt-2 text-md font-semibold sm:text-lg">{project.title}</h1>
            <p className="text-center text-zinc-400 dark:text-zinc-600 text-sm">{project.subtitle}</p>
            <Separator orientation="horizontal" className="my-2" />
            <div className="text-start">
              <p>{project.description}</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Link
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button flex flex-row items-center justify-center gap-2"
              >
                <GitHubLogoIcon /> {t("GithubButton")}
              </Link>
              <Link
                href={project.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button flex flex-row items-center justify-center gap-2"
              >
                <ExternalLinkIcon /> {t("LiveButton")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
