import * as sdk from "node-appwrite";

export const {
    APPWRITE_ENDPOINT_KEY: ENDPOINT,
    APPWRITE_PROJECT_KEY,
    APPWRITE_API_KEY,
    APPWRITE_DB_KEY,
    APPWRITE_COLLECTION_KEY,
    APPWRITE_BUCKET_KEY: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(APPWRITE_PROJECT_KEY!)
  .setKey(APPWRITE_API_KEY!);


export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);