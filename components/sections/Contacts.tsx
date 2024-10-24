import { useTranslations } from "next-intl";
import { ContactForm } from "../forms/ContactForm";

export const Contacts = () => {
    const t = useTranslations("Contacts");

    return (
        <section className="flex flex-col z-10 pb-16" id="contacts">
            <h1 className="heading flex justify-center my-8">
                {t("Heading")}
            </h1>
            <div className="flex items-center justify-center h-full">
                <ContactForm />
            </div>
        </section>
    );
};