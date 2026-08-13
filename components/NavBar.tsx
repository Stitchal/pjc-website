"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";

export const NAV_LINKS = [
  { href: "/notre-junior", label: "Notre Junior" },
  { href: "/nos-prestations", label: "Nos prestations" },
] as const;

interface NavBarProps {
  /** "hero" = logo blanc + hamburger sur fond sombre
   *  "page" = logo couleurs + hamburger sur fond clair */
  variant?: "hero" | "page";
}

export default function NavBar({ variant = "page" }: NavBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const logoSrc =
    variant === "hero"
      ? "/assets/logos/logo-blanc.png"
      : "/assets/logos/logo-couleurs.png";

  return (
    <div className="section-wrapper py-0">
      {/* ── Bar ── */}
      <div className="flex h-[96px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center no-underline"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={logoSrc}
            alt="Palm Junior Conseil"
            width={200}
            height={80}
            className="h-20 object-contain"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop pill */}
        <nav
          className="hidden lg:flex items-center rounded-full bg-white shadow-lg"
          style={{ padding: "6px 8px" }}
        >
          <Link
            href="/"
            aria-label="Accueil"
            className={`flex h-10 w-10 items-center justify-center rounded-full no-underline transition-all mr-1 ${
              pathname === "/"
                ? "bg-brand-dark text-white"
                : "text-gray-dark hover:text-brand-dark hover:bg-gray-100"
            }`}
          >
            <Home size={18} />
          </Link>

          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold no-underline transition-all ${
                  isActive
                    ? "bg-brand-dark/10 text-brand-dark"
                    : "text-gray-dark hover:text-brand-dark hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/nous-contacter"
            className={`ml-1 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all no-underline shadow-sm hover:shadow ${
              pathname === "/nous-contacter"
                ? "bg-brand ring-2 ring-brand/30"
                : "bg-brand-dark hover:bg-brand"
            }`}
          >
            Nous contacter
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`flex lg:hidden items-center justify-center h-10 w-10 rounded-full border-none cursor-pointer ${
            variant === "hero"
              ? "bg-white/20 backdrop-blur text-white"
              : "bg-gray-100 text-gray-dark"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden rounded-2xl bg-white shadow-xl mb-4 overflow-hidden">
          <nav className="flex flex-col gap-1 p-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold no-underline transition-all ${
                    isActive
                      ? "bg-brand-dark/10 text-brand-dark"
                      : "text-gray-dark hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-1">
              <Link
                href="/nous-contacter"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white bg-brand-dark hover:bg-brand transition-all no-underline shadow-sm"
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
