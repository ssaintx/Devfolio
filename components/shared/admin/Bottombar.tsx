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
            route: "/admin",
            label: t("Home"),
        },
        {
            img: <Pencil2Icon />,
            route: "/admin/edit",
            label: t("Edit"),
        },
        {
            img: <CardStackPlusIcon />,
            route: "/admin/create",
            label: t("Create"),
        },
        {
            img: <BarChartIcon />,
            route: "/admin/statistics",
            label: t("Statistics"),
        },
        {
            img: <Settings />,
            route: "",
            label: t("Settings"),
        }
    ];

    return (
        <nav className='bottombar_admin'>
            <div className='bottombar_container_admin'>
                {sidebarLinks.map((link) => {
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`bottombarlink_admin ${pathname === link.route ? "bg-zinc-300 dark:bg-zinc-900" : ""}`}
                        >
                            {link.img}
                            <p className='max-sm:hidden text-xs'>
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};