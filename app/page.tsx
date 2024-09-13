/* SHARED */
import { Navbar } from "@/components/shared/Navbar";
import { Bottombar } from "@/components/shared/Bottombar";
/* SECTIONS */
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Bottombar />
    </>
  );
};

export default Page;