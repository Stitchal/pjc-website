"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/notre-junior", label: "Notre Junior" },
  { href: "/nos-prestations", label: "Nos prestations" },
  { href: "/nous-contacter", label: "Nous contacter" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
      <div className="section-wrapper py-0">
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark text-white text-sm font-bold">
              P
            </span>
            <span className="text-sm font-bold text-brand-dark leading-tight">
              Palm Junior
              <br />
              <span className="text-xs font-semibold text-brand">Conseil</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium no-underline transition-all ${
                    isActive
                      ? "text-brand-dark bg-brand-dark/10"
                      : "text-gray-dark hover:text-brand-dark hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="desktop-nav">
            <Link
              href="/nous-contacter"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-dark/90"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn hidden items-center justify-center h-10 w-10 rounded-lg border-none bg-transparent cursor-pointer text-gray-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white p-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium no-underline ${
                    isActive
                      ? "text-brand-dark bg-brand-dark/10"
                      : "text-gray-dark hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/nous-contacter"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-xl bg-brand-dark px-4 py-3 text-center text-sm font-semibold text-white no-underline"
              >
                Contactez-nous
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

