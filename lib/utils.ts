import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const encryptKey = (passkey: string) => {
  return btoa(passkey);
};

export const decryptKey = (passkey: string) => {
  return atob(passkey);
};

// NEXT_PUBLIC_APPWRITE_ENDPOINT_KEY=https://cloud.appwrite.io/v1/
// NEXT_PUBLIC_APPWRITE_PROJECT_KEY=66fd8a71002eafdb63b3
// NEXT_PUBLIC_APPWRITE_API_KEY=standard_78a17b025d2340e0b09632e21af0ef26bdc2e7417870d8ba1f856a0537b69a9470f5bdeb35d04dfcf93bd70f9a00e3e507d5f1215e2c52ef2cd55b18857671cae8f618c195ef1e919378c80a0429ae57cf78e98f8fefb480540cfbc7372cf268e200efad6d398a73aaa482b86a06dcddcae9d31f561d4d6852b3694262f22392
// NEXT_PUBLIC_APPWRITE_DB_KEY=66fd8ad00000b8d0891a
// NEXT_PUBLIC_APPWRITE_COLLECTION_KEY=66fd8ae300072232d39e
// NEXT_PUBLIC_APPWRITE_BUCKET_KEY=66fd8bf2003511959472

// NEXT_PUBLIC_ADMIN_PASSKEY=111111