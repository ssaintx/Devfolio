"use client";

import { ThemeProvider } from "next-themes";
import { ProvidersProps } from "@/lib/props";

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children} 
        </ThemeProvider>
    );
};