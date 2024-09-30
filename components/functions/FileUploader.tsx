"use client";

import Image from "next/image";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";
import { UploadIcon } from "@radix-ui/react-icons";

type FileUploaderProps = {
    files: File[] | undefined;
    onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onChange(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed glassmorphism p-2">
            <input {...getInputProps()} />
            {files && files?.length > 0 ? (
                <Image
                    src={convertFileToUrl(files[0])}
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
                            <span className="text-sky-500">Click to upload </span>
                            or drag and drop
                        </p>
                        <p className="text-sm font-light">SVG, PNG, JPG (800x400px)</p>
                    </div>
                </>
            )}
        </div>
    );
};