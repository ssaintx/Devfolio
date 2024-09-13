import { kali } from "@/public";
import { Age } from "../functions/Age";
import { useTranslations } from "next-intl";

import Image from "next/image";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section className="flex flex-col dark-light-secondary py-8 px-16 md:px-48 xl:px-96 md:py-14" id="about">
      <h1 className="heading flex justify-center mb-8 md:mb-16">{t("Heading")}</h1>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex justify-center sm:justify-start">
          <div className=" glassmorphism p-2 rounded-xl">
            <Image src={kali} alt="Logo" width={200} height={200} className="rounded-2xl" priority />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul>
            <li>{t("Fields.NameField")}: {t("PersonalInformation.Name")}</li>
            <li>{t("Fields.LastNameField")}: {t("PersonalInformation.LastName")}</li>
            <li>{t("Fields.AgeField")}: <Age /></li>
            <li>{t("Fields.OccupationField")}: {t("PersonalInformation.Occupation")}</li>
            <li>{t("Fields.EmailField")}: {t("PersonalInformation.Email")}</li>
          </ul>
        </div>
      </div>
      <div>
        <p>{t("Heading")}</p>
      </div>
    </section>
  );
};