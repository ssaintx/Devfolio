"use server"

import { Query } from "node-appwrite";
import { NextResponse } from "next/server";
import {
    databases,
    DATABASE_ID,
    COLLECTION_ID,
} from "@/db/appwrite.config";

async function getProjects() {
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

export async function GET() {
    try {
        const response = await getProjects();
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};