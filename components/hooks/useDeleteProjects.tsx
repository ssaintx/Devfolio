import { useState } from "react";
import { deleteProject } from "@/db/appwrite.actions";

export const useDeleteProject = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const remove = async (id: string) => {
        setLoading(true);
        try {
            await deleteProject(id);
        } catch (err: any) {
            console.error("Error in deleting project: ", err);
            setError(err.message || "Failed to delete project");
        } finally {
            setLoading(false);
        }
    };

    return { remove, loading, error };
};
