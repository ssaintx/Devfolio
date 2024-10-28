"use server"

import { ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { Email } from "@/types/appwrite.types";
import {
    databases,
    EMAIL_ID,
    DATABASE_ID,
} from "../appwrite.config";

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