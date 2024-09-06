import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import {
  HomeIcon,
  GearIcon,
  Half2Icon,
  PersonIcon,
  BackpackIcon,
  EnvelopeClosedIcon,
  CounterClockwiseClockIcon,
} from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";
import { LanguagesIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Dock, DockIcon } from "../magicui/dock";

import { ThemeSwitcher } from "../functions/ThemeSwitcher";
import { LanguageSwitcher } from "../functions/LanguageSwitcher";

import Link from "next/link";

export const Bottombar = () => {
  const headerTranslations = useTranslations("Header.Bottombar");
  const settingTranslations = useTranslations("Functions.Settings");

  const links = [
    {
      id: 1,
      icon: <HomeIcon />,
      label: headerTranslations("Home"),
      link: "#home",
    },
    {
      id: 2,
      icon: <PersonIcon />,
      label: headerTranslations("About"),
      link: "#about",
    },
    {
      id: 3,
      icon: <BackpackIcon />,
      label: headerTranslations("Portfolio"),
      link: "#portfolio",
    },
    {
      id: 4,
      icon: <CounterClockwiseClockIcon />,
      label: headerTranslations("Timeline"),
      link: "#timeline",
    },
    {
      id: 5,
      icon: <EnvelopeClosedIcon />,
      label: headerTranslations("Contacts"),
      link: "#contacts",
    }];

  return (
    <nav className="bottombar z-0">
      <TooltipProvider>
        <Dock direction="middle" className="glassmorphism z-10">
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

          {/* SETTINGS DROPDOWN MENU */}
          <DockIcon>
            <DropdownMenu>

              <DropdownMenuTrigger asChild>
                <div className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "rounded-full",
                )}><GearIcon /></div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-60 rounded-lg glassmorphism bg-zinc-200 backdrop-blur-[33px] bg-opacity-50 bg-clip-padding shadow-lg">
                <DropdownMenuLabel>{settingTranslations("Label")}</DropdownMenuLabel>

                <Separator orientation="horizontal" className="my-2" />

                <DropdownMenuItem className="flex flex-row gap-2">
                  <Half2Icon className="h-4 w-4" />
                  {settingTranslations("ThemeSwitch")}:
                  <ThemeSwitcher />
                </DropdownMenuItem>

                <DropdownMenuItem className="flex flex-row gap-2">
                  <LanguagesIcon className="h-4 w-4" />
                  {settingTranslations("LanguageSwitch")}:
                  <LanguageSwitcher />
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </nav>
  );
};