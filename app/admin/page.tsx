/* SHARED */
import { Router } from "@/components/shared/Router";
import { Sidebar } from "@/components/shared/admin/Sidebar";
import { Topbar } from "@/components/shared/admin/Topbar";

const Page = () => {
  return (
    <section>
      <Topbar />
      <Router />
      <Sidebar />
    </section>
  );
};

export default Page;