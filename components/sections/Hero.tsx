"use client";

import createGlobe from 'cobe';

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { popIn, staggerContainer } from "@/utils/motion";

export const Hero = () => {
    const t = useTranslations("Hero");
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi = 0;
        let theta = 0;
        let isDragging = false;
        let startX = 0;
        let startY = 0;

        const getTheme = () => localStorage.getItem("theme");

        const initGlobe = (theme: string) => {
            return createGlobe(canvasRef.current!, {
                devicePixelRatio: 2,
                width: 600 * 2,
                height: 600 * 2,
                phi: 0,
                theta: 0,
                dark: theme === "dark" ? 1 : 0,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: theme === "dark" ? [0.3, 0.3, 0.3] : [0.9, 0.9, 0.9],
                markerColor: [0.1, 0.8, 1],
                glowColor: [1, 1, 1],
                markers: [
                    { location: [41.32790439319567, 69.4280728160815], size: 0.1 },
                ],
                onRender: (state) => {
                    if (!isDragging) {
                        phi += 0.002;
                    }
                    state.phi = phi;
                    state.theta = theta;
                }
            });
        };

        let globe = initGlobe(getTheme() as string);

        const handleThemeChange = () => {
            const theme = getTheme();

            globe.destroy();
            globe = initGlobe(theme!);
        };

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            phi += deltaX * 0.005;
            theta += deltaY * 0.005;
            startX = e.clientX;
            startY = e.clientY;
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        window.addEventListener('storage', handleThemeChange);

        canvasRef.current.addEventListener('mousedown', handleMouseDown);
        canvasRef.current.addEventListener('mousemove', handleMouseMove);
        canvasRef.current.addEventListener('mouseup', handleMouseUp);
        canvasRef.current.addEventListener('mouseleave', handleMouseUp);

        return () => {
            globe.destroy();
            canvasRef.current?.removeEventListener('mousedown', handleMouseDown);
            canvasRef.current?.removeEventListener('mousemove', handleMouseMove);
            canvasRef.current?.removeEventListener('mouseup', handleMouseUp);
            canvasRef.current?.removeEventListener('mouseleave', handleMouseUp);
            window.removeEventListener('storage', handleThemeChange);
        };
    }, []);

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
            className="flex flex-col gap-4 items-center justify-between pt-20 overflow-hidden sm:px-8 md:px-12 lg:px-16 pb-8"
            id="home"
        >
            <div className="flex flex-col items-center justify-center">
                {/* HEADING AND SUBHEADING */}
                <motion.div variants={popIn}>
                    <h1 className="mt-10 text-2xl md:text-4xl capitalize font-semibold text-center">{t("Heading")}</h1>
                    <p className="text-gray-500">{t("Subheading")} </p>
                </motion.div>

            </div>
            <motion.div variants={popIn}>
                <canvas
                    ref={canvasRef as React.RefObject<HTMLCanvasElement>}
                    style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                />
            </motion.div>
        </motion.section>
    );
};
