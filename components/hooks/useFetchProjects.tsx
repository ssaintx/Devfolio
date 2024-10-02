import { useEffect, useState } from 'react';
import { getAllProjects } from '@/db/appwrite.actions';
import { Project, ProjectSchema } from '@/db/appwrite.model';

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const documents = await getAllProjects();

        const mappedProjects = documents.map(doc => {
          const parsedProject = ProjectSchema.parse({
            ...doc,
            date: new Date(doc.date),
          });
          return parsedProject;
        });

        setProjects(mappedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return projects;
};