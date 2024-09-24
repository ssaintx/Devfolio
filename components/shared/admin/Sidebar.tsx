"use client"

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import {
    BarChartIcon,
    CardStackPlusIcon,
    HomeIcon,
    Pencil2Icon
} from "@radix-ui/react-icons";

export const Sidebar = () => {
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
    ];

    return (
        <aside className="sidebar_admin">
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                {sidebarLinks.map((link) => {
                    const isActive =
                        (pathname.includes(link.route) && link.route.length > 1) ||
                        pathname === link.route;

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`sidebarlink_admin ${isActive && "bg-zinc-300 dark:bg-zinc-900"}`}
                        >
                            {link.img}
                            <p className='max-lg:hidden'>{link.label}</p>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};