"use client"

import { toast } from 'sonner';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileUploader } from '@/components/functions/FileUploader';

const Page = () => {
    const t = useTranslations("Admin.Create");

    const [project, setProject] = useState({
        title: '',
        subtitle: '',
        description: '',
        imageURL: '',
        githubURL: '',
        liveURL: '',
        date: new Date().toISOString(),
    });

    const [imageFiles, setImageFiles] = useState<string[] | undefined>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setProject(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (base64Images: string[]) => {
        setImageFiles(base64Images);
        setProject(prev => ({ ...prev, imageURL: base64Images[0] }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("/admin/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if (response.ok) {
                toast.success(t("Status.Success"));

                // Reset form after successful submission
                setProject({
                    title: '',
                    subtitle: '',
                    description: '',
                    imageURL: '',
                    githubURL: '',
                    liveURL: '',
                    date: new Date().toISOString(),
                });
                setImageFiles([]);
            } else {
                throw new Error("Failed to create project");
            }
        } catch (error) {
            toast.error(t("Status.Error"));
            console.error("Error creating project:", error);
        }
    };

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            <form className="flex flex-col space-y-4 overflow-hidden mt-8 px-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                    <Input
                        type="text"
                        name="title"
                        placeholder={t("Title")}
                        value={project.title}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                    />
                    <Input
                        type="text"
                        name="subtitle"
                        placeholder={t("Subtitle")}
                        value={project.subtitle}
                        onChange={handleInputChange}
                        required
                        className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                    <div className="flex flex-col gap-4 w-full">
                        <Input
                            type="text"
                            name="githubURL"
                            placeholder={t("Github")}
                            value={project.githubURL}
                            onChange={handleInputChange}
                            required
                            className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                        />
                        <Input
                            type="text"
                            name="liveURL"
                            placeholder={t("Live")}
                            value={project.liveURL}
                            onChange={handleInputChange}
                            required
                            className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg p-2 w-full rounded-lg"
                        />
                    </div>
                    <Textarea
                        name="description"
                        placeholder={t("Description")}
                        value={project.description}
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

export default Page;