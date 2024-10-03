import { Client, Databases } from 'appwrite';


export const ENDPOINT = process.env.APPWRITE_ENDPOINT_KEY as string;
export const PROJECT_ID = process.env.APPWRITE_PROJECT_KEY as string;
export const API_KEY = process.env.APPWRITE_API_KEY as string;
export const DATABASE_ID = process.env.APPWRITE_DB_KEY as string;
export const COLLECTION_ID = process.env.APPWRITE_COLLECTION_KEY as string;
export const BUCKET_ID = process.env.APPWRITE_BUCKET_KEY as string;

export const client = new Client();

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const database = new Databases(client);