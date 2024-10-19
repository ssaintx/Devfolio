"use client"

import Link from "next/link";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Settings } from "@/components/functions/Settings";

import {
    HomeIcon,
    Pencil2Icon,
    BarChartIcon,
    CardStackPlusIcon,
    EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export const Sidebar = () => {
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
            img: <EnvelopeClosedIcon />,
            route: "/admin/emails",
            label: t("Emails"),
        },
    ];

    return (
        <aside className="sidebar_admin">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={`sidebarlink_admin ${pathname === link.route ? "bg-zinc-300 dark:bg-zinc-900" : ""}`}
                        >
                            <div className="flex items-center gap-4">
                                {link.img}
                                <p className="max-lg:hidden">{link.label}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="flex items-center justify-start p-10 gap-4">
                <Settings />
                <p className="max-lg:hidden">{t("Settings")}</p>
            </div>
        </aside>
    );
};
