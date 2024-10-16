import Image from "next/image";

import { logo } from "@/public";

export const Topbar = () => {
    return (
        <nav className="topbar_admin">
            <Image src={logo} alt="Logo" width={32} height={32} className="invert dark:invert-0 select-none" />
            saintx.
        </nav>
    )
};