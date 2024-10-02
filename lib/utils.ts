import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
  });
};

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function encryptKey(passkey: string) {
  return btoa(passkey);
};

export function decryptKey(passkey: string) {
  return atob(passkey);
};