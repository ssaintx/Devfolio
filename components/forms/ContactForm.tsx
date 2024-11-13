"use client"

import 'react-phone-number-input/style.css'

import PhoneInput, { Value } from 'react-phone-number-input';

import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { LoaderCircle } from "lucide-react";
import { 
    TextIcon, 
    MobileIcon, 
    PaperPlaneIcon, 
    EnvelopeClosedIcon, 
} from "@radix-ui/react-icons";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/form";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { emailSchema } from "@/types/appwrite.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEmails } from '@/db/emails/appwrite.actions';

export const ContactForm = () => {
    const schema = emailSchema();
    const t = useTranslations("Contacts.Form");
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            topic: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof schema>) => {
        setIsLoading(true);

        try {
            const email = {
                topic: values.topic,
                email: values.email,
                phone: values.phone,
                message: values.message,
            };

            const response = await createEmails(email);

            if (response) {
                toast.success(t("Status.Success"));
                form.reset();
            };
        } catch (error: any) {
            toast.error(t("Status.Error"), error.message);
        };

        setIsLoading(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 overflow-hidden mt-8 px-4">
                <div className="flex items-center justify-center input">
                    <TextIcon className="mx-2" />
                    <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder={t("Placeholders.Topic")} {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex items-center justify-center input">
                    <EnvelopeClosedIcon className="mx-2" />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder={t("Placeholders.Email")} {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex items-center justify-center input">
                    <MobileIcon className="mx-2" />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <PhoneInput
                                        defaultCountry="UZ"
                                        placeholder={t("Placeholders.Phone")}
                                        international
                                        withCountryCallingCode
                                        value={field.value as Value | undefined}
                                        onChange={field.onChange}
                                        className="h-11 rounded-md text-sm input"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Textarea placeholder={t("Placeholders.Message")} {...field} className="h-full input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-center w-full pb-6">
                    <button type="submit" className="button flex flex-row items-center justify-center gap-2">
                        {isLoading ? (
                            <div className="flex flex-row items-center justify-center gap-2">
                                <LoaderCircle className="animate-spin" />
                                <p>{t("Placeholders.Submit")}</p>
                            </div>
                        ) : (
                            <p>{t("Placeholders.Submit")}</p>
                        )}
                        <PaperPlaneIcon />
                    </button>
                </div>
            </form>
        </Form>
    );
};