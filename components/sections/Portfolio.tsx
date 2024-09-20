"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { fadeIn, staggerContainer } from "@/utils/motion";

import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Link from "next/link";

export const Portfolio = () => {
    const t = useTranslations("Porfolio");
    const variants = staggerContainer({ staggerChildren: 0.1, delayChildren: 0.3 });

    const projects = [
        {}, {}, {}, {}, {}
    ]

    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col px-8"
            id="portfolio"
        >
            <h1 className="heading flex justify-center my-8 md:my-16">{t("Heading")}</h1>

            <Carousel className="w-full">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card className="w-full h-full p-8 md:w-64 lg:w-80 xl:w-96 glassmorphism bg-zinc-200 rounded-3xl">
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    ))}
                </CarouselContent>
            </Carousel>

            <motion.div
                variants={fadeIn({ direction: 'down', type: 'tween', duration: 1.4, delay: 2 })}
                className="flex justify-center items-end mt-8">
                <Link href='/about' className="button">
                    {t("ReadMore")}
                </Link>
            </motion.div>
        </motion.section>
    );
};