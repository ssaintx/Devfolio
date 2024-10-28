"use client"

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useAdminValidation } from '@/components/hooks/admin/useAdminValidation';

import { EditProject } from '@/components/forms/EditProject';

const Page = () => {
    const params = useParams();
    const t = useTranslations("Admin.Edit");

    useAdminValidation();

    return (
        <section>
            <h1 className="heading_admin">{t("Heading")}</h1>
            <EditProject id={params.id as string} />
        </section>
    );
};

export default Page;