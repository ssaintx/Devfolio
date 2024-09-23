import { Metadata } from "next";

import "../globals.css";

import Topbar from "@/components/shared/admin/Topbar";
import Bottombar from "@/components/shared/admin/Bottombar";
import LeftSidebar from "@/components/shared/admin/LeftSidebar";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({}) {
  return (
    
      <html lang='en'>
        <body>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
          </main>

          <Bottombar />
        </body>
      </html>
  );
}