"use client"

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Project } from "@/types/appwrite.types";
import { Separator } from "@/components/ui/separator";
import { ExclamationTriangleIcon, ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Page = () => {
  const t = useTranslations("Admin.Home");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/admin/api/projects");
        if (!response.ok) {
          setError(t("Status.Error"));
          console.error(error);
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        setError(t("Status.Error"));
        console.error(error);
      } finally {
        setIsLoading(false);
      };
    };
    fetchProjects();
  }, [])

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>
      {error && <div className="mt-4 flex items-center justify-start">
        <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
          <ExclamationTriangleIcon />
          {error}
        </p>
      </div>}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {isLoading ? <p>{t("Status.Loading")}</p> : (projects.length === 0) ? <p>{t("Status.Empty")}</p> : projects.map((project: any) => (
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
