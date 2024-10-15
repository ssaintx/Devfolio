"use server"

import { ID, Query } from "node-appwrite";
import { NextResponse } from "next/server";
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

export const createProject = async (data: Project) => {
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
                date: data.date,
                imageId: file?.$id ? file.$id : null,
                imageUrl: file?.$id ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}` : null,
            }
        );

        return parseStringify(response);
    } catch (error) {
        console.error("Error creating project:", error);
    }
};

export const getProjects = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.orderDesc("$createdAt")]
        );

        return response.documents;
    } catch (error) {
        console.error(error);
    };
};

export const POST = async (req: Request) => {
    try {
        const { title, subtitle, description, image, githubURL, liveURL, date } = await req.json();
        const data = { title, subtitle, description, image, githubURL, liveURL, date };
        const response = createProject(data);
        return NextResponse.json({ message: "Project created" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create Project" }, { status: 500 });
    };
};

export const GET = async () => {
    try {
        const response = await getProjects();
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};