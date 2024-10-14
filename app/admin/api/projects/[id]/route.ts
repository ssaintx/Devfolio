"use server"

import { NextResponse } from "next/server";
import {
    COLLECTION_ID,
    DATABASE_ID,
    databases
} from "@/db/appwrite.config";
import { Project } from "@/types/appwrite.types";

export const getProject = async (id: string) => {
    try {
        const project = await databases.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        );
    } catch (error) {
        console.error(error);
    };
};

export const deleteProject = async (id: string) => {
    try {
        const response = await databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        );

        return response;
    } catch (error) {
        console.error(error);
    };
};

export const updateProject = async (
    id: string,
    data: Project,
) => {
    try {
        const response = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id,
            data
        );

        return response;
    } catch (error) {
        console.error(error);
    };
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
    };
};

export const DELETE = async (
    req: Request,
    { params }: { params: { id: string } }
) => {
    try {
        const id = params.id;
        await deleteProject(id);
        return NextResponse.json({ message: "Project deleted" });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete Project" }, { status: 500 });
    };
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
    };
};