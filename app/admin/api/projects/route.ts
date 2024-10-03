import { ID, Query } from "appwrite";
import { NextResponse } from "next/server";
import { COLLECTION_ID, DATABASE_ID, database } from "@/db/appwrite.config";

export const createProject = async (data: {
    title: string,
    subtitle: string,
    description: string,
    imageURL: string,
    githubURL: string,
    liveURL: string,
    date: string,
}) => {
    try {
        const response = await database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            data
        );
    } catch (error) {
        console.error(error);
    };
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
        const { title, subtitle, description, imageURL, githubURL, liveURL, date } = await req.json();
        const data = { title, subtitle, description, imageURL, githubURL, liveURL, date };
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
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};