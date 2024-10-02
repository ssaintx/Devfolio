"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import {
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  EnvelopeClosedIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";

import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import { footerVariants } from "@/utils/motion";
import { Dock, DockIcon } from "../magicui/dock";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Settings } from "../functions/Settings";

import Link from "next/link";

export const Bottombar = () => {
  const t = useTranslations("Header.Bottombar");


  // CALCULATE WIDTH OF DEVICE TO REACH RESPOSIVENESS
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const distance = screenWidth < 425 ? 0 : 140;
  const magnification = screenWidth < 425 ? 0 : 60;

  const links = [
    {
      id: 1,
      icon: <HomeIcon />,
      label: t("Home"),
      link: "#home",
    },
    {
      id: 2,
      icon: <PersonIcon />,
      label: t("About"),
      link: "#about",
    },
    {
      id: 3,
      icon: <BackpackIcon />,
      label: t("Portfolio"),
      link: "#portfolio",
    },
    {
      id: 4,
      icon: <CounterClockwiseClockIcon />,
      label: t("Timeline"),
      link: "#timeline",
    },
    {
      id: 5,
      icon: <EnvelopeClosedIcon />,
      label: t("Contacts"),
      link: "#contacts",
    }];

  return (
    <motion.nav
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="bottombar"
    >
      <TooltipProvider>
        <Dock distance={distance} magnification={magnification} direction="middle" className="glassmorphism z-10 blur-none">
          {/* SECTIONS RENDERING */}
          {links.map((link) => (
            <DockIcon key={link.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link.link} className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full",
                  )}>
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* SEPARATOR */}
          <Separator orientation="vertical" className="bg-gray-500 h-[90%]" />

          {/* SETTINGS */}
          <DockIcon>
            <Settings />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </motion.nav>
  );
};