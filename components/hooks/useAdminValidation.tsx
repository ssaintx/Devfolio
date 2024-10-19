"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAdminValidation = () => {
    const router = useRouter();
    const isAdmin: boolean = typeof window !== 'undefined' ? localStorage.getItem("accessKey") !== null : false;

    useEffect(() => {
        if (!isAdmin) router.push('/');
    }, [isAdmin, router]);

    return isAdmin;
};