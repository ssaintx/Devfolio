"use client";

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Project } from "@/db/appwrite.model";
import { Separator } from "@/components/ui/separator";
import { getAllProjects } from "@/db/appwrite.actions";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Page = () => {
  const t = useTranslations("Admin.Home");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {projects.map((project: Project) => (
          <div key={project.title} className="glassmorphism p-4 rounded-3xl flex flex-col">
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
