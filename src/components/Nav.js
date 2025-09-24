"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "CV", href: "/cv" },
  ];

  return (
    <nav
      className={`z-10 fixed top-8 left-1/2 -translate-x-1/2 flex justify-center gap-4 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-[calc(100%+2rem)]"
      }`}
    >
      {links.map((link) => {
        const isActive = link.href === pathname;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full py-1.5 w-[7rem] text-center border hover:border-orange2 ${
              isActive
                ? "bg-beige0 border border-orange1 pointer-events-none"
                : "border-white bg-orange1 "
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
