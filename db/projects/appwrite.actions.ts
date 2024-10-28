"use server"

import { ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { InputFile } from "node-appwrite/file";
import { Project } from "@/types/appwrite.types";
import {
    storage,
    databases,
    ENDPOINT,
    BUCKET_ID,
    PROJECT_ID,
    DATABASE_ID,
    COLLECTION_ID,
} from "@/db/appwrite.config";

export async function createProject(data: Project) {
    try {
        let file;
        if (data.image) {
            const inputFile = data.image && InputFile.fromBuffer(
                data.image?.get("blobFile") as Blob,
                data.image?.get("fileName") as string
            );

            file = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                inputFile
            );
        }

        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                githubURL: data.githubURL,
                liveURL: data.liveURL,
                projectType: data.projectType,
                date: data.date,
                imageId: file?.$id ? file.$id : null,
                imageUrl: file?.$id ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}` : null,
            }
        );

        return parseStringify(response);
    } catch (error) {
        console.error("Error creating project: ", error);
    };
};

export async function updateProject(id: string, data: Project) {
    try {
        let file;
        if (data.image) {
            const inputFile = data.image && InputFile.fromBuffer(
                data.image?.get("blobFile") as Blob,
                data.image?.get("fileName") as string
            );

            file = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                inputFile
            );
        }

        const response = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id,
            {
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
                githubURL: data.githubURL,
                liveURL: data.liveURL,
                projectType: data.projectType,
                date: data.date,
                imageId: file?.$id ? file.$id : null,
                imageUrl: file?.$id ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}` : null,
            }
        );

        return response;
    } catch (error) {
        console.error(error);
    }
};