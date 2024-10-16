"use client"

import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Project } from "@/types/appwrite.types";
import { useFetch } from "@/components/hooks/useFetch";

import { LoaderCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  GitHubLogoIcon,
  ExternalLinkIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

const Page = () => {
  const t = useTranslations("Admin.Home");

  const router = useRouter();
  const { projects, isFetchLoading, fetchError } = useFetch();

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>
      {fetchError &&
        (<div className="mt-4 flex items-center justify-center md:justify-start">
          <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
            <ExclamationTriangleIcon />
            {fetchError}
          </p>
        </div>)}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {isFetchLoading ? (
          <div className="flex flex-row items-center gap-2">
            <LoaderCircle className="animate-spin size-4" />
            <p>{t("Status.Loading")}</p>
          </div>
        ) : (projects.length === 0) ?
          <p>{t("Status.Empty")}</p> :
          projects.map((project: Project) => {
            const redirectToProject = () => {
              router.push(`/admin/${project.$id}`);
            }
            return (
              <article
                key={project.$id}
                className="glassmorphism p-4 rounded-3xl flex flex-col cursor-pointer"
                onClick={redirectToProject}
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
                <div className="flex justify-end items-end mt-4 h-full">
                  <p className="text-xs text-gray-500">
                    {new Date(project.date).toLocaleDateString('en-GB', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </article>
            )
          })}
      </div>
    </section>
  );
};

export default Page;
