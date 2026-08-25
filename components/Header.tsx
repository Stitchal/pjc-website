"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    setScrolled(window.scrollY > window.innerHeight * 0.75);

    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.75;

      if (isHome) {
        setScrolled(y > heroHeight);
        if (y <= heroHeight) {
          setVisible(true);
        } else {
          setVisible(y < lastY.current);
        }
      } else {
        if (y < 80) {
          setVisible(true);
        } else {
          setVisible(y < lastY.current);
        }
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isHeroMode = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isHeroMode
          ? "bg-transparent shadow-none"
          : "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <NavBar variant={isHeroMode ? "hero" : "page"} />
    </header>
  );
}
