"use client"

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Project } from "@/types/appwrite.types";

export const useFetch = () => {
    const t = useTranslations("Admin.Home");

    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("/admin/api/projects");
                if (!response.ok) {
                    setError(t("Status.Error"));
                    console.error(error);
                }
                const data = await response.json();
                setProjects(data);
                setIsLoading(false);
            } catch (error) {
                setError(t("Status.Error"));
                console.error(error);
            } finally {
                setIsLoading(false);
            };
        };
        fetchProjects();
    }, [])

    return { projects, isLoading, error };
}