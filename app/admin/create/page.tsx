"use client";

import { Project } from '@/db/db.model';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { createProject, updateProject, getAllProjects, deleteProject } from '@/db/db.actions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Page = () => {
    const t = useTranslations("Admin.Create");

    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    {/* 
        TODO 
        - Add form validation and make form as reusable component
        - Add reusable hooks for handling and submitting and updating e.t.c
        - Fix design and add more styles and animations
    */}

    useEffect(() => {
        const fetchData = async () => {
            const allProjects = await getAllProjects();
            setProjects(allProjects);
        };
        fetchData();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setSelectedProject((prev) => ({
            ...prev!,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedProject) {
            if (selectedProject.id) {
                await updateProject(selectedProject.id, selectedProject);
            } else {
                await createProject(selectedProject);
            }
        }
        setSelectedProject(null);
        const allProjects = await getAllProjects();
        setProjects(allProjects);
    };

    const handleDelete = async (id: number) => {
        await deleteProject(id);
        const allProjects = await getAllProjects();
        setProjects(allProjects);
    };

    const handleEdit = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            <form className="flex flex-col space-y-4 mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2">
                    <Input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={selectedProject?.title || ''}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                    />
                    <Input
                        type="text"
                        name="subtitle"
                        placeholder="Subtitle"
                        value={selectedProject?.subtitle || ''}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                    />
                </div>
                <Textarea
                    name="description"
                    placeholder="Description"
                    value={selectedProject?.description || ''}
                    onChange={handleInputChange}
                    required
                    className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                />
                <Input
                    type="text"
                    name="imageURL"
                    placeholder="Image URL"
                    value={selectedProject?.imageURL || ''}
                    onChange={handleInputChange}
                    required
                    className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                />
                <div className="flex items-center justify-center w-full">
                    <button type="submit" className="button px-12">{selectedProject ? 'Update' : 'Create'}</button>
                </div>
            </form>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Projects</h2>
            <ul className="space-y-2">
                {projects.map((project) => (
                    <li key={project.id} className="flex justify-between items-center p-2 border-b border-gray-100">
                        <div>
                            <strong>{project.title}</strong> - {project.subtitle}
                        </div>
                        <div className="space-x-2">
                            <button onClick={() => handleEdit(project)} className="text-blue-500 hover:underline">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(project.id!)} className="text-red-500 hover:underline">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Page;