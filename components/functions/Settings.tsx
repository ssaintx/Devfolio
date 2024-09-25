import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Separator } from "../ui/separator";
import { LanguagesIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { GearIcon, Half2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const Settings = () => {
    const t = useTranslations("Functions.Settings");

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "rounded-full",
                    )}><GearIcon /></div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 rounded-lg glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg">
                    <DropdownMenuLabel>{t("Label")}</DropdownMenuLabel>
                    <Separator orientation="horizontal" className="my-2" />
                    <DropdownMenuItem className="flex flex-row gap-2">
                        <Half2Icon className="h-4 w-4" />
                        {t("ThemeSwitch")}:
                        <ThemeSwitcher />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-row gap-2">
                        <LanguagesIcon className="h-4 w-4" />
                        {t("LanguageSwitch")}:
                        <LanguageSwitcher />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};