"use client"

import Image from "next/image";

import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "@radix-ui/react-icons";

import { convertFileToBase64 } from "@/lib/utils";

type FileUploaderProps = {
    files: string[] | undefined;
    onChange: (base64Images: string[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const t = useTranslations("Admin.Create.Image");

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const base64Images = await Promise.all(
            acceptedFiles.map((file) => convertFileToBase64(file))
        );
        onChange(base64Images);
    }, [onChange]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed glassmorphism p-2">
            <input {...getInputProps()} />
            {files && files.length > 0 ? (
                <Image
                    src={files[0]}
                    width={1000}
                    height={1000}
                    alt="uploaded image"
                    className="max-h-[400px] overflow-hidden object-cover"
                />
            ) : (
                <>
                    <UploadIcon className="mt-2" />
                    <div className="file-upload_label">
                        <p className="text-sm font-light">
                            <span className="text-sky-500">{t("LabelColor")}&nbsp;</span>
                            {t("Label")}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};