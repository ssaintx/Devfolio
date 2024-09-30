"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { createProject } from '@/db/db.actions';
import { Textarea } from '@/components/ui/textarea';
import { FileUploader } from '@/components/functions/FileUploader';

const CreateProjectPage = () => {
    const t = useTranslations("Admin.Create");
    const [newProject, setNewProject] = useState({
        title: '',
        subtitle: '',
        description: '',
        imageURL: '',
        date: new Date(),
    });

    const [imageFiles, setImageFiles] = useState<File[] | undefined>([]);

    // Handle form input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewProject(prev => ({ ...prev, [name]: value }));
    };

    // Handle image file changes from FileUploader
    const handleImageChange = (files: File[]) => {
        setImageFiles(files);
        const imageUrl = URL.createObjectURL(files[0]);
        setNewProject(prev => ({ ...prev, imageURL: imageUrl }));
    };

    // Handle form submission for creating a project
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createProject({ ...newProject });
            toast.success("Project was created!");
            setNewProject({
                title: '',
                subtitle: '',
                description: '',
                imageURL: '',
                date: new Date(),
                
            });
            setImageFiles([]);
        } catch (error) {
            toast.error("Error creating project.");
        }
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
                        value={newProject.title}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                    />
                    <Input
                        type="text"
                        name="subtitle"
                        placeholder="Subtitle"
                        value={newProject.subtitle}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                    />
                </div>
                <Textarea
                    name="description"
                    placeholder="Description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    required
                    className="glassmorphism p-2 w-full rounded-lg bg-zinc-100"
                />
                <FileUploader files={imageFiles} onChange={handleImageChange} />
                <div className="flex items-center justify-center w-full">
                    <button type="submit" className="button px-12">
                        {t("CreateButton")}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateProjectPage;