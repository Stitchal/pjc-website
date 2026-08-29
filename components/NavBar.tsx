"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ListIcon } from "@phosphor-icons/react/dist/ssr/List";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";

import { NAV_LINKS } from "@/lib/nav-links";
export { NAV_LINKS };

interface NavBarProps {
  variant?: "hero" | "page";
}

export default function NavBar({ variant = "page" }: NavBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isHero = variant === "hero";

  // Fermeture du dropdown au clic en dehors
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fermeture du dropdown au changement de route
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className="section-wrapper py-0" ref={navRef}>
      {/* ── Bar ── */}
      <div className="flex h-20 items-center justify-between gap-8">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 no-underline"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={isHero ? "/assets/logos/cropped-logo-blanc.png" : "/assets/logos/cropped-logo-couleurs.png"}
            alt="Palm Junior Conseil"
            width={2536}
            height={1754}
            className="h-12 w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* Desktop nav — centred links + CTA pill */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            if (link.sublinks) {
              const dropdownOpen = openDropdown === link.href;
              return (
                <div key={link.href} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(dropdownOpen ? null : link.href)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold no-underline transition-colors cursor-pointer border-none bg-transparent ${
                      active
                        ? isHero
                          ? "bg-white/20 text-white"
                          : "bg-brand-dark/8 text-brand-dark"
                        : isHero
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : "text-gray-dark hover:text-brand-dark hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                    <CaretDownIcon
                      size={12}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  {dropdownOpen && (
                    <div
                      className={`absolute top-full mt-2 left-0 min-w-44 rounded-2xl overflow-hidden shadow-xl border z-50 ${
                        isHero
                          ? "bg-white/15 backdrop-blur-md border-white/20"
                          : "bg-white border-gray-100"
                      }`}
                    >
                      <div className="flex flex-col p-1.5">
                        {link.sublinks.map((sub) => {
                          const subActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block rounded-xl px-4 py-2.5 text-sm font-semibold no-underline transition-colors ${
                                subActive
                                  ? isHero
                                    ? "bg-white/20 text-white"
                                    : "bg-brand-dark/8 text-brand-dark"
                                  : isHero
                                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                                    : "text-gray-dark hover:bg-gray-50 hover:text-brand-dark"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold no-underline transition-colors ${
                  active
                    ? isHero
                      ? "bg-white/20 text-white"
                      : "bg-brand-dark/8 text-brand-dark"
                    : isHero
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-dark hover:text-brand-dark hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/nous-contacter"
            className={`ml-3 px-5 py-2 rounded-full text-sm font-semibold no-underline transition-all ${
              pathname === "/nous-contacter"
                ? "bg-brand text-white ring-2 ring-brand/30"
                : isHero
                  ? "bg-white text-brand-dark hover:bg-white/90"
                  : "bg-brand-dark text-white hover:bg-brand"
            }`}
          >
            Nous contacter
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`flex lg:hidden items-center justify-center h-9 w-9 rounded-full border-none cursor-pointer transition-colors ${
            isHero
              ? "bg-white/15 hover:bg-white/25 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-dark"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <XIcon size={18} /> : <ListIcon size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className={`lg:hidden rounded-2xl mb-4 overflow-hidden ${
            isHero ? "bg-white/10 backdrop-blur-md" : "bg-white shadow-xl border border-gray-100"
          }`}
        >
          <nav className="flex flex-col p-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              if (link.sublinks) {
                const expanded = mobileExpanded === link.href;
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(expanded ? null : link.href)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold no-underline transition-colors cursor-pointer border-none bg-transparent ${
                        active
                          ? isHero ? "bg-white/20 text-white" : "bg-brand-dark/8 text-brand-dark"
                          : isHero ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-gray-dark hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <CaretDownIcon
                        size={12}
                        className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expanded && (
                      <div className="flex flex-col pl-4 pb-1">
                        {link.sublinks.map((sub) => {
                          const subActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block rounded-xl px-4 py-2.5 text-sm font-semibold no-underline transition-colors ${
                                subActive
                                  ? isHero ? "bg-white/20 text-white" : "bg-brand-dark/8 text-brand-dark"
                                  : isHero ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-gray-dark hover:bg-gray-50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold no-underline transition-colors ${
                    active
                      ? isHero ? "bg-white/20 text-white" : "bg-brand-dark/8 text-brand-dark"
                      : isHero ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-gray-dark hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-1 px-0">
              <Link
                href="/nous-contacter"
                onClick={() => setMobileOpen(false)}
                className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold no-underline transition-colors ${
                  isHero
                    ? "bg-white text-brand-dark hover:bg-white/90"
                    : "bg-brand-dark text-white hover:bg-brand"
                }`}
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
