"use client"

import { LoaderCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { Email } from "@/types/appwrite.types";
import { useFetchEmail } from "@/components/hooks/useFetchEmail";

const Page = () => {
    const t = useTranslations("Admin.Emails")
    const { emails, isFetchLoading, fetchError } = useFetchEmail();

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            {fetchError &&
                (<div className="mt-4 flex items-center justify-center md:justify-start">
                    <p className="flex flex-row items-center justify-center gap-2 bg-red-400 rounded-lg shadow-xl text-white h-12 p-4 text-center">
                        <ExclamationTriangleIcon />
                        {fetchError}
                    </p>
                </div>)}
            <div className="flex flex-col gap-4 w-full mt-8">
                {isFetchLoading ? (
                    <div className="flex flex-row items-center gap-2">
                        <LoaderCircle className="animate-spin size-4" />
                        <p>{t("Status.Loading")}</p>
                    </div>
                ) : (emails.length === 0) ?
                    <p>{t("Status.Empty")}</p> :
                    emails.map((email: Email) => (
                        <div className="glassmorphism p-2 rounded-2xl" key={email.$id}>
                            <ul className="flex flex-col ml-2">
                                <li><strong>{t("Email.Topic")}</strong> - {email.topic}</li>
                                <Separator orientation="horizontal" className="my-2" />
                                <li><strong>{t("Email.From")}</strong> - {email.email}</li>
                                <Separator orientation="horizontal" className="my-2" />
                                <li><strong>{t("Email.Phone")}</strong> - {email.phone}</li>
                                <Separator orientation="horizontal" className="my-2" />
                                <li><strong>{t("Email.Message")}</strong> - {email.message}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Page;