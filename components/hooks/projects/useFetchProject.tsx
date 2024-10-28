import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Project } from "@/types/appwrite.types";

export const useFetchProject = (id?: string) => {
    const t = useTranslations("Hooks.Fetch");

    const [project, setProject] = useState<Project>();
    const [projects, setProjects] = useState<Project[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isFetchLoading, setIsFetchLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsFetchLoading(true);
            try {
                if (id) {
                    const response = await fetch(`/admin/api/projects/${id}`);
                    if (!response.ok) {
                        setFetchError(t("ProjectError"));
                        console.error("Error fetching project:", response.statusText);
                        return;
                    }
                    const data = await response.json();
                    setProject(Object.values(data)[0] as Project);
                } else {
                    const response = await fetch("/admin/api/projects");
                    if (!response.ok) {
                        setFetchError(t("ProjectsError"));
                        console.error(fetchError);
                    }
                    const data = await response.json();
                    setProjects(data);
                }
                setIsFetchLoading(false);
            } catch (error) {
                setFetchError(t("ProjectsError"));
                console.error(error);
            } finally {
                setIsFetchLoading(false);
            };
        };
        fetchProjects();
    }, [id])

    return { projects, project, isFetchLoading, fetchError };
};