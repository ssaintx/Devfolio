"use server";

import { ID } from "node-appwrite";
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

const getProject = async (id: string) => {
    try {
        const response = await databases.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        );
        return parseStringify(response);
    } catch (error) {
        console.error(error);
    }
};


const updateProject = async (id: string, data: Project) => {
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

export const GET = async (
    req: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const id = params.id;
        const project = await getProject(id);
        return NextResponse.json({ project });
    } catch (error) {
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    }
};

export const DELETE = async (
    req: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const id = params.id;
        await databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        );
        return NextResponse.json({ message: "Project deleted" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete Project" }, { status: 500 });
    }
};

export const PUT = async (
    req: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const id = params.id;
        const project = await req.json();
        await updateProject(id, project);
        return NextResponse.json({ message: "Project updated" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to update Project" }, { status: 500 });
    }
};
