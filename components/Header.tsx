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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div className="section-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div
          style={{
            display: "flex",
            height: "68px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span
              style={{
                display: "flex",
                height: "36px",
                width: "36px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                backgroundColor: "#60042b",
                color: "#ffffff",
                fontSize: "0.8125rem",
                fontWeight: 700,
              }}
            >
              P
            </span>
            <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#60042b", lineHeight: 1.2 }}>
              Palm Junior
              <br />
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "#9e3a5b" }}>Conseil</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#60042b" : "#333333",
                    backgroundColor: isActive ? "rgba(96,4,43,0.06)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "0.75rem",
                backgroundColor: "#60042b",
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#ffffff",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              Contactez-nous
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              width: "40px",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "#333333",
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div style={{ borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff", padding: "1rem" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: "block",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: isActive ? "#60042b" : "#333333",
                    backgroundColor: isActive ? "rgba(96,4,43,0.06)" : "transparent",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div style={{ paddingTop: "0.5rem" }}>
              <Link
                href="/nous-contacter"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "0.75rem",
                  backgroundColor: "#60042b",
                  padding: "0.75rem 1rem",
                  textAlign: "center",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  textDecoration: "none",
                }}
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
