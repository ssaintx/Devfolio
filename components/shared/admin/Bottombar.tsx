"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Settings } from "@/components/functions/Settings";

import {
    BarChartIcon,
    CardStackPlusIcon,
    HomeIcon,
    Pencil2Icon,
} from "@radix-ui/react-icons";

export const Bottombar = () => {
    const pathname = usePathname();
    const t = useTranslations("Admin.Links");

    const sidebarLinks = [
        {
            img: <HomeIcon />,
            route: "/admin/",
            label: t("Home"),
        },
        {
            img: <CardStackPlusIcon />,
            route: "/admin/create/",
            label: t("Create"),
        },
        {
            img: <Pencil2Icon />,
            route: "/admin/edit/",
            label: t("Edit"),
        },
        {
            img: <BarChartIcon />,
            route: "/admin/statistics/",
            label: t("Statistics"),
        },
        {
            img: <Settings />,
            route: "",
            label: t("Settings"),
        }
    ];

    return (
        <section className='bottombar_admin'>
            <div className='bottombar_container_admin'>
                {sidebarLinks.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombarlink_admin ${isActive && "bg-zinc-300 dark:bg-zinc-900"}`}
                        >
                            {link.img}
                            <p className='max-sm:hidden'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};