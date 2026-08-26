"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > window.innerHeight * 0.75);

    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHeroMode = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroMode
          ? "bg-transparent shadow-none"
          : "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <NavBar variant={isHeroMode ? "hero" : "page"} />
    </header>
  );
}
