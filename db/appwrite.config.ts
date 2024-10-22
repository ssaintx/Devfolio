import * as sdk from "node-appwrite";


export const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_KEY as string;
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_KEY as string;
export const API_KEY = process.env.NEXT_PUBLIC_APPWRITE_API_KEY as string;
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DB_KEY as string;
export const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_KEY as string;
export const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_KEY as string;
export const EMAIL_ID = process.env.NEXT_PUBLIC_APPWRITE_EMAIL_KEY as string;

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);