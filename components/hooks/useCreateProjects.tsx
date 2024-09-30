import { useState } from "react";
import { Project } from "@/db/db.model";
import { createProject } from "@/db/db.actions";

export const useCreateProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const create = async (project: Project) => {
        setLoading(true);
        try {
            await createProject(project);
        } catch (err: any) {
            console.error("Error in creating project: ", err);
            setError(err.message || "Failed to create project");
        } finally {
            setLoading(false);
        }
    };

    return { create, loading, error };
};