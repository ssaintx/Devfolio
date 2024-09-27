"use client";

import { Project } from '@/db/db.model';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { createProject, updateProject, getAllProjects, deleteProject } from '@/db/db.actions';

const Page = () => {
    const t = useTranslations("Admin.Create");

    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md mt-8">
                <h2 className="text-2xl font-semibold mb-4">Project Form</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={selectedProject?.title || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="subtitle"
                        placeholder="Subtitle"
                        value={selectedProject?.subtitle || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={selectedProject?.description || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Image URL"
                        value={selectedProject?.imageURL || ''}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        {selectedProject ? 'Update' : 'Create'}
                    </button>
                </form>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Projects</h2>
                <ul className="space-y-2">
                    {projects.map((project) => (
                        <li key={project.id} className="flex justify-between items-center p-2 border-b border-gray-200">
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
            </div>
        </section>
    );
};

export default Page;