import Image from "next/image";

import { logo } from "@/public";
import { Year } from "../functions/Year";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    const data = [
        {
            id: 1,
            href: "#home",
            title: t("Home"),
        },
        {
            id: 2,
            href: "#about",
            title: t("About"),
        },
        {
            id: 3,
            href: "#portfolio",
            title: t("Portfolio"),
        },
        {
            id: 4,
            href: "#timeline",
            title: t("Timeline"),
        },
        {
            id: 5,
            href: "#contacts",
            title: t("Contacts"),
        },
    ];

    return (
        <footer className="glassmorphism">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0" />
                        <h1>saintx.</h1>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-light text-gray-500 sm:mb-0">
                        {data.map(({ id, href, title }) => (
                            <li key={id} className="mr-4">
                                <a href={href} className="hover:text-sky-500 duration-200 transition ease-linear">{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator orientation="horizontal" className="my-6 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center font-light">© <Year /> saintx. {t("License")}.</span>
            </div>
        </footer>
    );
};