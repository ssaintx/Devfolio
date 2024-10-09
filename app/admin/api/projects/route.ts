"use server"

import { ID, Query } from "appwrite";
import { NextResponse } from "next/server";
import { parseStringify } from "@/lib/utils";
import { InputFile } from "node-appwrite/file";
import { CreateProject } from "@/types/appwrite.types";
import {
    storage,
    database,
    ENDPOINT,
    BUCKET_ID,
    PROJECT_ID,
    DATABASE_ID,
    COLLECTION_ID,
} from "@/db/appwrite.config";

export const createProject = async ({ imageURL, ...data }: CreateProject) => {
    try {
        let file;
        if (imageURL) {
            const inputFile = imageURL && InputFile.fromBuffer(
                imageURL?.get("blobFile") as Blob,
                imageURL?.get("fileName") as string
            );

            file = await storage.createFile(
                BUCKET_ID!,
                ID.unique(),
                inputFile
            );
        }

        const project = await database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
                imageURLId: file?.$id ? file.$id : null,
                imageURLUrl: file?.$id
                    ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
                    : null,
                ...data,
            }
        );
        return parseStringify(project);
    } catch (error) {
        console.error(error);
    }
};

export const getProject = async () => {
    try {
        const project = await database.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.orderDesc("$createdAt")]
        );

        return project.documents;
    } catch (error) {
        console.error(error);
    };
};

export const POST = async (req: Request) => {
    try {
        const { imageURL, ...data } = await req.json();
        const project = await createProject({ imageURL, ...data });
        return NextResponse.json({ message: "Project created", project }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to create Project" }, { status: 500 });
    }
}

export const GET = async () => {
    try {
        const project = await getProject();
        return NextResponse.json(project);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};