"use client"

import { Project } from "@/db/db.model";
import { getAllProjects } from "@/db/db.actions";

import { useEffect, useState } from "react";

export const useFetchData = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const allProjects = await getAllProjects();
            setProjects(allProjects);
        };
        fetchData();
    }, []);

    return { projects };
};