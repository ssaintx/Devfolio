"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useFetchProjects } from "@/components/hooks/useFetchProjects";

const Page = () => {
  const t = useTranslations("Admin.Home");
  const projects = useFetchProjects();

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {projects.map((project) => (
          <div key={project.id} className="glassmorphism p-4 rounded-3xl flex flex-col items-center">
            <Image src={project.imageURL} width={300} height={200} alt={project.title} className="rounded-2xl object-cover w-full" />
            <h1 className="mt-2 text-md font-semibold sm:text-lg">{project.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;