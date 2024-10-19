import { useTranslations } from "next-intl";
import { ContactForm } from "../forms/ContactForm";

export const Contacts = () => {
    const t = useTranslations("Contacts");

    return (
        <section className="flex flex-col justify-center z-10">
            <h1 className="heading flex justify-center my-8">
                {t("Heading")}
            </h1>
            <ContactForm />
        </section>
    );
};