"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { popIn, staggerContainer } from "@/utils/motion";

import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";

export const Portfolio = () => {
    const t = useTranslations("Porfolio");

    const projects = [
        {}, {}, {}, {}, {}
    ]

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={staggerContainer}
            className="flex flex-col px-8"
            id="portfolio"
        >
            <motion.h1 variants={popIn} className="heading flex justify-center my-8 md:my-16">{t("Heading")}</motion.h1>

            

            <motion.div
                variants={popIn}
                className="flex justify-center items-end mt-8">
                <Link href='/about' className="button">
                    {t("SeeMore")}
                </Link>
            </motion.div>
        </motion.section>
    );
};