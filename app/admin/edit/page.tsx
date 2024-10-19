"use client"

import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
    TrashIcon,
    Pencil2Icon,
    DotsVerticalIcon,
    ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useFetch } from "@/components/hooks/useFetch";
import { useDelete } from "@/components/hooks/useDelete";
import { useAdminValidation } from "@/components/hooks/useAdminValidation";

const Page = () => {
    const t = useTranslations("Admin.Edit");
    const router = useRouter();

    const { projects, isFetchLoading, fetchError } = useFetch();
    const { deleteProject, isDeleteLoading, deleteError } = useDelete();

    useAdminValidation();

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
            {deleteError && toast.error(deleteError)}
            <div className="mt-8">
                {isDeleteLoading ? (
                    <div className="flex flex-row items-center gap-2">
                        <LoaderCircle className="animate-spin size-4" />
                        <p>{t("Status.Loading")}</p>
                    </div>
                ) : isFetchLoading ? (
                    <div className="flex flex-row items-center gap-2">
                        <LoaderCircle className="animate-spin size-4" />
                        <p>{t("Status.Loading")}</p>
                    </div>
                ) : (projects.length === 0) ?
                    <p>{t("Status.Empty")}</p> :
                    projects.map((project) => {
                        const redirectToProject = () => {
                            router.push(`/admin/${project.$id}`);
                        }

                        const redirectToEdit = () => {
                            router.push(`/admin/edit/${project.$id}`);
                        }

                        return (
                            <article
                                key={project.$id}
                                className="flex flex-row items-center justify-between gap-4 mt-4 p-2 px-4 w-full rounded-2xl glassmorphism"
                            >
                                <h2 onClick={redirectToProject} className="cursor-pointer">{project.title}</h2>
                                <DropdownMenu>
                                    <DropdownMenuTrigger><DotsVerticalIcon /></DropdownMenuTrigger>
                                    <DropdownMenuContent className="glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg">
                                        <DropdownMenuItem
                                            className="flex flex-row gap-2 cursor-pointer"
                                            onClick={redirectToEdit}
                                        >
                                            <Pencil2Icon />
                                            {t("Menu.Edit")}
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="flex flex-row gap-2 text-red-400 hover:text-red-400"
                                            onClick={() => deleteProject(project.$id!)}
                                        >
                                            <TrashIcon />
                                            {t("Menu.Delete")}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </article>
                        )
                    })}
            </div>
        </section>
    );
};

export default Page;
