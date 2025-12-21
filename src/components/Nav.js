"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 50);
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
      className={`z-40 w-screen fixed bg-white border-b border-b-brownText/20 left-1/2 -translate-x-1/2 flex justify-center gap-2 lg:gap-6 transition-all duration-1000 ${
        showNav
          ? `translate-y-0 ${
              isScrollingUp
                ? "shadow-[0_8px_15px_rgba(0,0,0,0.02)] lg:px-4 min-lg:backdrop-blur-sm"
                : ""
            }`
          : "-translate-y-[calc(100%+2rem)]"
      }`}
    >
      {links.map((link) => {
        const isActive = link.href === pathname;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`p-4 w-[29%] lg:w-[7rem] rounded-b-lg text-center hover:-translate-y-1 ease-in-out transition duration-300 ${
              isActive
                ? "pointer-events-none text-brownText/50"
                : "text-deepPurple"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
