import { RootLayoutProps } from "@/lib/props";
import { Providers } from "./providers/ThemeProviders";

import { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { Toaster } from "@/components/ui/sonner";
import { Loading } from "@/components/shared/Loading";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Lazizbek (also known as saintx) portfolio page for illustrating finished projects and contributions.",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${GeistSans.className} antialiased`}>
        <main>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
              <Toaster className="glassmorphism p-2 rounded-3xl" />
            </Providers>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
};