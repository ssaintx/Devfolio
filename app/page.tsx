/* SHARED */
import { Navbar } from "@/components/shared/Navbar";
import { Bottombar } from "@/components/shared/Bottombar";
/* SECTIONS */
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
/* ADMIN */
import { PasskeyModal } from "@/components/shared/PasskeyModal";
import { SearchParamProps } from "@/lib/props";

const Page = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <>
      {/* ADMIN */}
      {isAdmin && <PasskeyModal />}
      {/* SHARED */}
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Bottombar />
    </>
  );
};

export default Page;