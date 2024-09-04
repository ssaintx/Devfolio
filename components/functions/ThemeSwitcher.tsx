"use client"

import { Label } from "../ui/label";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

// theme switcher component
export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme || systemTheme;
    const t = useTranslations("Functions.Theme");

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [setTheme]);

    if (!mounted) return null;

    const handleThemeChange = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="flex flex-row gap-2 items-center justify-center h-4">
            <Switch
                checked={currentTheme === 'dark'}
                onCheckedChange={handleThemeChange}
                aria-label={t('Label')}
            />
        </div>
    );
};
