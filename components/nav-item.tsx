"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Reservation", href: "/reserv" },
]

export const NavItem = () => {
  const pathname = usePathname()
  return (
    <nav className="flex-1 flex items-center justify-center gap-5">
      {navitems.map((item, idx) => (
        <Link key={idx} href={item.href} className="group">
          <span className={cn(
            "font-light py-1 group-hover:border-b group-hover:border-red-500/90 group-hover:text-red-400",
            pathname === item.href && "text-red-400 border-b border-red-500/90"
          )}>
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  )
}