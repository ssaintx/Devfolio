"use client"

import { z } from "zod";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { LoaderCircle } from "lucide-react";
import { FileUploader } from "../functions/FileUploader";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/types/appwrite.types";
import { createProject } from "@/app/admin/api/projects/route";

export const CreateProject = () => {
    const schema = projectSchema();
    const t = useTranslations("Admin.Create");
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: "",
            subtitle: "",
            description: "",
            image: [],
            githubURL: "",
            liveURL: "",
            projectType: undefined,
            date: new Date().toISOString(),
        },
    });

    const onSubmit = async (values: z.infer<typeof schema>) => {
        setIsLoading(true);

        let formData;

        if (values.image && values.image?.length > 0) {
            const blobFile = new Blob([values.image[0]], {
                type: values.image[0].type,
            });

            formData = new FormData();
            formData.append("blobFile", blobFile);
            formData.append("fileName", values.image[0].name);
        }

        try {
            const project = {
                title: values.title,
                subtitle: values.subtitle,
                description: values.description,
                image: values.image ? formData : undefined,
                githubURL: values.githubURL,
                liveURL: values.liveURL,
                projectType: values.projectType,
                date: values.date,
            };

            const response = await createProject(project);

            if (response) {
                toast.success(t("Status.Success"));
                form.reset();
            };
        } catch (error: any) {
            toast.error(t("Status.Error"), error.message);
        };

        setIsLoading(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 overflow-hidden mt-8 px-4 max-w-4xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder={t("Title")} {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subtitle"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder={t("Subtitle")} {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
                    <div className="flex flex-col gap-4 w-full">
                        <FormField
                            control={form.control}
                            name="githubURL"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder={t("Github")} {...field} className="input" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="liveURL"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder={t("Live")} {...field} className="input" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Textarea placeholder={t("Description")} {...field} className="h-full input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ToggleGroup
                                    type="single"
                                    defaultValue={field.value}
                                    onValueChange={field.onChange}
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 input"
                                >
                                    <ToggleGroupItem className="glassmorphism" value="Frontend">Frontend</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="Backend">Backend</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="Mobile">Mobile</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="SaaS">SaaS</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="WebApplication">WebApplication</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="CRM">CRM</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="Landing-Page">Landing-Page</ToggleGroupItem>
                                    <ToggleGroupItem className="glassmorphism" value="E-Commerce">E-Commerce</ToggleGroupItem>
                                </ToggleGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <FileUploader files={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-center w-full pb-6">
                    <button type="submit" className="button">
                        {isLoading ? (
                            <div className="flex flex-row items-center justify-center gap-2">
                                <LoaderCircle className="animate-spin" />
                                <p>{t("Submit")}</p>
                            </div>
                        ) : (
                            <p>{t("Submit")}</p>
                        )}
                    </button>
                </div>
            </form>
        </Form>
    );
};