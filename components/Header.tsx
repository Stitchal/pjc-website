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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-light/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Palm icon placeholder */}
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-dark text-white text-sm font-bold tracking-tight transition-transform duration-300 group-hover:scale-105">
              P
            </span>
            <span className="text-lg font-bold text-brand-dark tracking-tight leading-tight">
              Palm Junior
              <br className="hidden sm:block" />
              <span className="text-xs font-semibold text-brand sm:block hidden">
                Conseil
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-brand-dark bg-brand-dark/5"
                        : "text-gray-dark hover:text-brand-dark hover:bg-brand-dark/5"
                    }
                  `}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-brand-dark transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/nous-contacter"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-dark/20 transition-all duration-300 hover:bg-brand hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg text-gray-dark hover:bg-gray-light transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-gray-light/60 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-brand-dark/5 text-brand-dark"
                      : "text-gray-dark hover:bg-gray-light hover:text-brand-dark"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/nous-contacter"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-xl bg-brand-dark px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-brand-dark/20 transition-all duration-300 hover:bg-brand"
            >
              Contactez-nous
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
