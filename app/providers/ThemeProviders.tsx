"use client"

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ProvidersProps } from "@/lib/props";

export const Providers = ({ children }: ProvidersProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};