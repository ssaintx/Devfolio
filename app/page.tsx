/* SHARED */
import { Navbar } from "@/components/shared/Navbar";
import { Bottombar } from "@/components/shared/Bottombar";
/* SECTIONS */
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Timeline } from "@/components/sections/Timeline";
/* ADMIN */
import { SearchParamProps } from "@/lib/props";
import { PasskeyModal } from "@/components/shared/PasskeyModal";

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
      <Timeline />
      <Bottombar />
    </>
  );
};

export default Page;