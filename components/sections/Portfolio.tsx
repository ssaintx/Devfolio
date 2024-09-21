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

            <motion.div className="grid grod-cols-2 md:grid-cols-12 grid-rows-12 gap-4 h-[200vh] px-2 sm:px-10 md:px-20" variants={popIn}>
                <div className="col-span-6 row-span-6 bg-red-500">1</div>
                <div className="col-span-3 row-span-3 col-start-7 bg-red-500">2</div>
                <div className="col-span-3 row-span-3 col-start-10 bg-red-500">3</div>
                <div className="col-span-3 row-span-3 col-start-7 row-start-4 bg-red-500">4</div>
                <div className="col-span-3 row-span-3 col-start-10 row-start-4 bg-red-500">5</div>
                <div className="col-span-3 row-span-3 row-start-7">6</div>
                <div className="col-span-3 row-span-3 col-start-1 row-start-10">7</div>
                <div className="col-span-6 row-span-6 col-start-4 row-start-7">8</div>
                <div className="col-span-3 row-span-3 col-start-10 row-start-7">9</div>
                <div className="col-span-3 row-span-3 col-start-10 row-start-10">10</div>
            </motion.div>

            <motion.div
                variants={popIn}
                className="flex justify-center items-end mt-8">
                <Link href='/about' className="button">
                    {t("ReadMore")}
                </Link>
            </motion.div>
        </motion.section>
    );
};