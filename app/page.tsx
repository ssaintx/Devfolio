/* SHARED */
import { Navbar } from "@/components/shared/Navbar";
import { Bottombar } from "@/components/shared/Bottombar";
/* SECTIONS */
import { Hero } from "@/components/sections/Hero";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Bottombar />
    </>
  );
};

export default Page;