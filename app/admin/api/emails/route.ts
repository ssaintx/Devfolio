import { ID, Query } from "node-appwrite";
import { NextResponse } from "next/server";
import { parseStringify } from "@/lib/utils";
import { Email } from "@/types/appwrite.types";
import {
    databases,
    EMAIL_ID,
    DATABASE_ID,
} from "@/db/appwrite.config";

export async function createEmails(data: Email) {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            EMAIL_ID,
            ID.unique(),
            data
        );

        return parseStringify(response);
    } catch (error) {
        console.error("Error in creating email: ", error);
    };
};

async function getEmails() {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            EMAIL_ID,
            [Query.orderDesc("$createdAt")]
        );

        return response.documents;
    } catch (error) {
        console.error(error);
    };
};

export async function GET() {
    try {
        const response = await getEmails();
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to get Project" }, { status: 500 });
    };
};