/* SHARED */
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Bottombar } from "@/components/shared/Bottombar";
/* SECTIONS */
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Chronology } from "@/components/sections/Chronology";
import { Contacts } from "@/components/sections/Contacts";
/* ADMIN */
import { SearchParamProps } from "@/lib/props";
import { PasskeyModal } from "@/components/shared/PasskeyModal";

const Page = (props: SearchParamProps) => {
  const searchParams = props.searchParams;
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
      <Chronology />
      <Contacts />
      <Footer />
      <Bottombar />
    </>
  );
};

export default Page;