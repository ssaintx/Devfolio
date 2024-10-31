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

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import { footerVariants } from "@/utils/motion";
import { Dock, DockIcon } from "../magicui/dock";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Settings } from "../functions/Settings";

import Link from "next/link";

export const Bottombar = () => {
  const t = useTranslations("Header.Bottombar");

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const distance = width < 425 ? 0 : 140;
  const magnification = width < 425 ? 0 : 60;

  const [showBottombar, setShowBottombar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactsSection = document.getElementById('contacts');
      if (contactsSection) {
        const rect = contactsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setShowBottombar(false);
        } else {
          setShowBottombar(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
      whileInView={showBottombar ? "show" : "hidden"}
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
                  <span>{link.label}</span>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          {/* SEPARATOR */}
          <Separator orientation="vertical" className="bg-zinc-300 dark:bg-zinc-800 h-full" />

          {/* SETTINGS */}
          <DockIcon>
            <Settings />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </motion.nav>
  );
};