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

export const createProject = async (data: Project) => {
    try {
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
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const fileName = formData.get('fileName') as string;
        
        const fileResponse = await storage.createFile(BUCKET_ID, ID.unique(), file);
        const fileURL = `https://${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileResponse.$id}/view?project=${PROJECT_ID}&project=${PROJECT_ID}&mode=admin`

        console.log("Received file:", file);
        console.log("Received fileName:", fileName);

        console.log(fileResponse.$id);
        const projectData: Project = {
            title: formData.get('title') as string,
            subtitle: formData.get('subtitle') as string,
            description: formData.get('description') as string,
            imageURL: fileResponse?.$id ? fileURL : '',
            githubURL: formData.get('githubURL') as string,
            liveURL: formData.get('liveURL') as string,
            date: formData.get('date') as string,
        };
        await createProject(projectData);
        return NextResponse.json({ message: "Project created" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to create Project" }, { status: 500 });
    }
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