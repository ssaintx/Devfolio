"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useFetchProjects } from "@/components/hooks/useFetchProjects";
import { convertFileToUrl } from "@/lib/utils";

const Page = () => {
  const t = useTranslations("Admin.Home");
  const projects = useFetchProjects();

  return (
    <section>
      <h1 className="heading_admin">{t("Heading")}</h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {projects.map((project) => (
          <div key={project.id} className="glassmorphism p-4 rounded-3xl flex items-center">
            <Image src={project.imageURL} width={300} height={300} alt={project.title} className="rounded-3xl object-cover" />
            <h1 className="text-md font-semibold sm:text-lg">{project.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;