"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { Cross1Icon } from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { decryptKey, encryptKey } from "@/lib/utils";

export const PasskeyModal = () => {
    const router = useRouter();
    const path = usePathname();
    const t = useTranslations("Functions.AdminModal");

    const [open, setOpen] = useState(false);
    const [passkey, setPasskey] = useState("");
    const [error, setError] = useState("");

    const encryptedKey = typeof window !== "undefined" ? window.localStorage.getItem("accessKey") : null;

    useEffect(() => {
        const accessKey = encryptedKey && decryptKey(encryptedKey);

        if (path)
            if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY!.toString()) {
                setOpen(false);
                router.replace("/admin");
            } else {
                setOpen(true);
            }
    }, [encryptedKey]);

    const closeModal = () => {
        setOpen(false);
        router.push("/");
    };

    const validatePasskey = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
            const encryptedKey = encryptKey(passkey);

            localStorage.setItem("accessKey", encryptedKey);

            setOpen(false);
        } else {
            setError(t("ErrorMessages.InvalidPasskey"));
        }
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className="dark-light-secondary glassmorphism p-4 rounded-2xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-start justify-between">
                        <div className="bg-transparent select-none text-transparent">.</div>
                        <span>{t("Content.Label")}</span>
                        <Cross1Icon onClick={closeModal} className="cursor-pointer size-4" />
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center">
                        <span>{t("Content.Description")}</span>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div>
                    <InputOTP
                        maxLength={6}
                        value={passkey}
                        onChange={(value) => setPasskey(value)}
                    >
                        <InputOTPGroup className="w-full flex justify-around gap-1">
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={0} />
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={1} />
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={2} />
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={3} />
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={4} />
                            <InputOTPSlot className="glassmorphism p-2 rounded-lg xs:size-14 size-[44px] sm:size-16" index={5} />
                        </InputOTPGroup>
                    </InputOTP>

                    {error && (
                        <p className="text-red-500 mt-4 flex justify-center">
                            {error}
                        </p>
                    )}
                </div>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={(e) => validatePasskey(e)} className="w-full mt-2">
                        <div className="flex items-center justify-center">
                            <span className="button">{t("Content.AccessButton")}</span>
                        </div>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};