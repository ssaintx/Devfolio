"use client"

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { Locale } from "@/localization/config";
import { setUserLocale } from "@/localization/locale";
import { LanguageSwitcherSelectProps } from "@/lib/props";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import Image from "next/image";

export const LanguageSwitcherSelect = ({ defaultValue, items }: LanguageSwitcherSelectProps) => {
    const t = useTranslations("Functions.Language");
    const [isPending, startTransition] = useTransition();

    const onChange = (value: string) => {
        const locale = value as Locale;
        startTransition(() => {
            localStorage.setItem("locale", locale);
            setUserLocale(locale);
        });
    };

    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="border-none h-8 w-auto glassmorphism">
                <SelectValue placeholder={t("Label")} />
            </SelectTrigger>
            <SelectContent className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg w-auto">
                <SelectGroup>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            <div className="flex flex-row gap-2">
                                <Image src={item.icon} alt={item.label} width={20} height={10} />
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};