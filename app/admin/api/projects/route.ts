"use server"

import { ID, Query } from "appwrite";
import { NextResponse } from "next/server";
import { Project } from "@/types/appwrite.types";
import {
    BUCKET_ID,
    ENDPOINT,
    PROJECT_ID,
    COLLECTION_ID,
    DATABASE_ID,
    database,
    storage
} from "@/db/appwrite.config";

export const createProject = async ({ imageURL, ...data }: Project) => {
    try {
        let file;
        if (imageURL) {
            const response = await fetch(imageURL);
            const blob = await response.blob();
            file = new File([blob], "image.png", { type: "image/png" });
        
            const fileResponse = await storage.createFile(BUCKET_ID, ID.unique(), file);
        }

        const response = await database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            data
        );
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getProject = async () => {
    try {
        const response = await database.listDocuments(
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
        const Project = await req.json();
        const data = Project;
        const response = createProject(data);
        return NextResponse.json({ message: "Project created" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create Project" }, { status: 500 });
    };
};

export const GET = async () => {
    try {
        const response = await getProject();
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};