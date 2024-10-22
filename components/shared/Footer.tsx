import Image from "next/image";

import { logo } from "@/public";
import { Year } from "../functions/Year";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="glassmorphism">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
                        <h1>saintx.</h1>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-light text-gray-500 sm:mb-0">
                        <li>
                            <a href="#home" className="me-4 md:me-6">{t("Home")}</a>
                        </li>
                        <li>
                            <a href="#about" className="me-4 md:me-6">{t("About")}</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="me-4 md:me-6">{t("Portfolio")}</a>
                        </li>
                        <li>
                            <a href="#timeline" className="me-4 md:me-6">{t("Timeline")}</a>
                        </li>
                        <li>
                            <a href="#contacts" className="me-4 md:me-6">{t("Contacts")}</a>
                        </li>
                        <li>
                            <a href="/?admin=true" className="text-sky-500">{t("Admin")}</a>
                        </li>
                    </ul>
                </div>
                <Separator orientation="horizontal" className="my-6 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center font-light">© <Year /> saintx. {t("License")}.</span>
            </div>
        </footer>
    );
};