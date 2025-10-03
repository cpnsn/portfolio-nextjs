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
      className={`z-20 w-screen lg:w-fit fixed top-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 lg:gap-4 transition-all duration-1000 ${
        showNav
          ? `translate-y-0 ${
              isScrollingUp
                ? "min-lg:bg-beige0/95 px-8 p-4 rounded-4xl min-lg:backdrop-blur-sm min-lg:ring-2 min-lg:ring-white"
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
            className={`rounded-full py-2 lg:px-4 w-[29%] lg:w-[8rem] text-center border hover:-translate-y-1 ease-in-out hover:bg-orange3 transition duration-300 ${
              isActive
                ? "bg-beige0 border-orange1 pointer-events-none"
                : "bg-orange1 border-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
