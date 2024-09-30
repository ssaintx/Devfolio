import { Project } from "@/db/db.model";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/db/db.actions";

export const useFetchProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = await getAllProjects();
                setProjects(allProjects);
            } catch (error: any) {
                console.error("Error in fetching projects: ", error);
            }
        };
        fetchProjects();
    });

    return projects;
};