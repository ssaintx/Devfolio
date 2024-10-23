"use client"

import { z } from "zod";
import { useTranslations } from "next-intl";

type ProjectType = "Frontend" | "Backend" | "Mobile" | "SaaS" | "WebApplication" | "CRM" | "Landing-Page" | "E-Commerce";

export interface Project {
    $id?: string;
    title: string;
    subtitle: string;
    description: string;
    image: FormData | undefined;
    imageUrl?: string;
    imageId?: string;
    githubURL: string;
    liveURL: string;
    projectType: ProjectType;
    date: string;
};

export interface Email {
    $id?: string;
    topic: string;
    email: string;
    phone: string;
    message?: string;
};

export const projectSchema = () => {
    const t = useTranslations("Admin.Create");

    const schema = z.object({
        title: z.string().min(2, {
            message: t("Errors.Title"),
        }),
        subtitle: z.string().min(2, {
            message: t("Errors.Subtitle"),
        }),
        description: z.string().min(2, {
            message: t("Errors.Description"),
        }),
        githubURL: z.string().min(2, {
            message: t("Errors.Github"),
        }),
        liveURL: z.string().min(2, {
            message: t("Errors.Live"),
        }),
        projectType: z.enum(["Frontend", "Backend", "Mobile", "SaaS", "WebApplication", "CRM", "Landing-Page", "E-Commerce"], {
            required_error: t("Errors.ProjectType"),
        }),
        image: z.custom<File[]>().refine((files) => files?.length > 0, {
            message: t("Errors.Image"),
        }),
        date: z.string(),
    })

    return schema;
};

export const emailSchema = () => {
    const t = useTranslations("Contacts.Form");

    const schema = z.object({
        topic: z.string().min(2, {
            message: t("Errors.Topic"),
        }),
        email: z.string().email({
            message: t("Errors.Email"),
        }),
        phone: z.string().min(2, {
            message: t("Errors.Phone"),
        }),
        message: z.string().min(2, {
            message: t("Errors.Message"),
        })
    });

    return schema;
}