import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import {
    GearIcon,
    Half2Icon,
    EnterIcon,
} from "@radix-ui/react-icons";

import { LanguagesIcon } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

import { useTranslations } from "next-intl";

export const Settings = () => {
    const t = useTranslations("Functions.Settings");

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="rounded-full cursor-pointer"><GearIcon /></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 rounded-lg glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg z-[51]">
                    <DropdownMenuLabel>{t("Label")}</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />
                    <DropdownMenuItem className="flex flex-row gap-2">
                        <Half2Icon className="size-4" />
                        {t("ThemeSwitch")}:
                        <ThemeSwitcher />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row gap-2">
                        <LanguagesIcon className="size-4" />
                        {t("LanguageSwitch")}:
                        <div><LanguageSwitcher /></div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-700" />
                    <DropdownMenuItem className="flex flex-row gap-2 text-sky-500">
                        <EnterIcon className="size-4" />
                        <Link href="/?admin=true">{t("Admin")}</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};