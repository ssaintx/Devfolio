"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl";
import { ContactForm } from "../forms/ContactForm";
import { popIn, staggerContainer } from "@/utils/motion";

export const Contacts = () => {
    const t = useTranslations("Contacts");

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="flex flex-col z-10 pb-16"
            id="contacts"
        >
            <motion.h1
                variants={popIn}
                className="heading flex justify-center my-8"
            >
                {t("Heading")}
            </motion.h1>
            <motion.div
                variants={popIn}
                className="flex items-center justify-center h-full"
            >
                <ContactForm />
            </motion.div>
        </motion.section>
    );
};