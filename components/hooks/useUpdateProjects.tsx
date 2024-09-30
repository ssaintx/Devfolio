import { useState } from "react";
import { Project } from "@/db/db.model";
import { updateProject } from "@/db/db.actions";

export const useUpdateProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const update = async (id: number, updatedProject: Project) => {
        setLoading(true);
        try {
            await updateProject(id, updatedProject);
        } catch (err: any) {
            console.error("Error in updating project: ", err);
            setError(err.message || "Failed to update project");
        } finally {
            setLoading(false);
        }
    };

    return { update, loading, error };
};