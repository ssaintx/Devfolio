"use server"

import { NextResponse } from "next/server";
import { parseStringify } from "@/lib/utils";
import {
    storage,
    databases,
    BUCKET_ID,
    DATABASE_ID,
    COLLECTION_ID,
} from "@/db/appwrite.config";

async function getProject(id: string) {
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

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const project = await getProject(id);
        return NextResponse.json({ project });
    } catch (error) {
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    }
};

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
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