"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({href, children}) => {
const pathname = usePathname();
    return (
         <Link
      href={href}
      className={` px-2 py-1 rounded-lg flex items-center gap-1 transition ${pathname === href ? "bg-[#2f5d4e] text-white" : "text-gray-600"}`}
    >
      {children}
    </Link>
    );
};

export default MyNavLink;