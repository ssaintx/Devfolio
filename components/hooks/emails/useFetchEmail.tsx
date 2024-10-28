import { Email } from "@/types/appwrite.types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const useFetchEmail = () => {
    const t = useTranslations("Hooks.Fetch");

    const [emails, setEmails] = useState<Email[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isFetchLoading, setIsFetchLoading] = useState(true);

    useEffect(() => {
        const fetchEmails = async () => {
            setIsFetchLoading(true);
            try {
                const response = await fetch("/admin/api/emails");
                if (!response.ok) {
                    setFetchError(t("EmailsError"));
                    console.error(fetchError);
                    return;
                }
                const data = await response.json();
                setEmails(data);
            } catch (error) {
                setFetchError(t("EmailsError"));
                console.error(error);
            } finally {
                setIsFetchLoading(false);
            }
        };

        fetchEmails();
    }, []);

    return { emails, isFetchLoading, fetchError };
};