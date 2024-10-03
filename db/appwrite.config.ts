import { Client, Databases, Query } from 'appwrite';

export const ENDPOINT = "https://localhost:3000/v1";
export const PROJECT_ID = "66fd8a71002eafdb63b3";
export const API_KEY = "standard_78a17b025d2340e0b09632e21af0ef26bdc2e7417870d8ba1f856a0537b69a9470f5bdeb35d04dfcf93bd70f9a00e3e507d5f1215e2c52ef2cd55b18857671cae8f618c195ef1e919378c80a0429ae57cf78e98f8fefb480540cfbc7372cf268e200efad6d398a73aaa482b86a06dcddcae9d31f561d4d6852b3694262f22392";
export const DATABASE_ID = "66fd8ad00000b8d0891a";
export const COLLECTION_ID = "66fd8ae300072232d39e";
export const BUCKET_ID = "66fd8bf2003511959472";

const client = new Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!);

export const databases = new Databases(client);