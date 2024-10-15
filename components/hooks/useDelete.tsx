import { useState } from "react";
import { useTranslations } from "next-intl";

export const useDelete = () => {
    const t = useTranslations("Hooks.Delete");

    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);


    const deleteProject = async (id: string) => {
        setIsDeleteLoading(true);
        try {
            const response = await fetch(`/admin/api/projects/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                setDeleteError(t("Error"));
                console.error("Error deleting project:", response.statusText);
                return;
            }
            setIsDeleteLoading(false);
        } catch (error) {
            setDeleteError(t("Error"));
            console.error(error);
        } finally {
            setIsDeleteLoading(false);
        }
    };

    return { deleteProject, isDeleteLoading, deleteError };
};