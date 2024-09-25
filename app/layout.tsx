import { Providers } from "./providers";
import { RootLayoutProps } from "@/lib/props";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lazizbek (also known as saintx) portfolio page for illustrating finished projects and contributions.",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.className} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};