import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Providers } from "../providers";
import { RootLayoutProps } from "@/lib/props";

import { Toaster } from "@/components/ui/sonner";
import { Topbar } from "@/components/shared/admin/Topbar";
import { BreadCrumb } from "@/components/shared/BreadCrumb";
import { Sidebar } from "@/components/shared/admin/Sidebar";
import { Bottombar } from "@/components/shared/admin/Bottombar";

import "../globals.css";

export const metadata: Metadata = {
  title: "Admin dashboard | saintx",
  description: "Lazizbek Usmanov(saintx) portfolio admin dashboard page",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider messages={messages}>
        <Providers>
          <body>
            <Topbar />
            <main className='flex flex-row'>
              <Sidebar />
              <section className='container_admin'>
                <div className='w-full max-w-4xl'>
                  <div className="breadcrumb_admin">
                    <BreadCrumb />
                  </div>
                  {children}
                </div>
              </section>
            </main>
            <Bottombar />
            <Toaster className="glassmorphism p-2 rounded-3xl" />
          </body>
        </Providers>
      </NextIntlClientProvider>
    </html>
  );
}