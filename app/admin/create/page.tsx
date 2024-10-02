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
        githubURL: '',
        liveURL: '',
        date: new Date(),
    });

    const [imageFiles, setImageFiles] = useState<string[] | undefined>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewProject(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (base64Images: string[]) => {
        setImageFiles(base64Images);
        setNewProject(prev => ({ ...prev, imageURL: base64Images[0] }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await createProject({ ...newProject });
            toast.success(t("Notifications.Success"));
            setNewProject({
                title: '',
                subtitle: '',
                description: '',
                imageURL: '',
                githubURL: '',
                liveURL: '',
                date: new Date(),
            });
            setImageFiles([]);
        } catch (error) {
            toast.error(t("Notifications.Error"));
        }
    };

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            <form className="flex flex-col space-y-4 overflow-hidden mt-8 px-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <Input
                        type="text"
                        name="title"
                        placeholder={t("Title")}
                        value={newProject.title}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                    />
                    <Input
                        type="text"
                        name="subtitle"
                        placeholder={t("Subtitle")}
                        value={newProject.subtitle}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="flex flex-col gap-2 w-full">
                        <Input
                            type="text"
                            name="githubURL"
                            placeholder={t("Github")}
                            value={newProject.githubURL}
                            onChange={handleInputChange}
                            required
                            className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                        />
                        <Input
                            type="text"
                            name="liveURL"
                            placeholder={t("Live")}
                            value={newProject.liveURL}
                            onChange={handleInputChange}
                            required
                            className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                        />
                    </div>
                    <Textarea
                        name="description"
                        placeholder={t("Description")}
                        value={newProject.description}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                    />
                </div>
                <FileUploader files={imageFiles} onChange={handleImageChange} />
                <div className="flex items-center justify-center w-full pb-6">
                    <button type="submit" className="button">
                        {t("CreateButton")}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateProjectPage;