"use client"

import { useTranslations } from 'next-intl';
import { CreateProject } from '@/components/forms/CreateProject';

const Page = () => {
    const t = useTranslations("Admin.Create");

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            <CreateProject />
        </section>
    );
};

export default Page;