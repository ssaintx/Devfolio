import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function encryptKey(passkey: string) {
  return btoa(passkey);
};

export function decryptKey(passkey: string) {
  return atob(passkey);
};