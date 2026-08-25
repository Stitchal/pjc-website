import Link from "next/link";
import AppImage from "@/components/AppImage";
import { MapPin, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { NAV_LINKS } from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1 — Logo & Branding */}
          <div>
            <Link href="/" className="inline-block group">
              <AppImage
                src="/assets/logos/logo-blanc.png"
                alt="Palm Junior Conseil"
                width={280}
                height={100}
                className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Column 2 — Coordonnées */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-light" />
                <span>
                  Campus Georges Méliès,
                  <br />
                  214 avenue Francis Tonner,
                  <br />
                  06150 Cannes La Bocca
                </span>
              </li>
              <li>
                <a
                  href="mailto:palmjuniorconseil@gmail.com"
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-light" />
                  palmjuniorconseil@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/nous-contacter" className="transition-colors duration-200 hover:text-white">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Nous suivre */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Nous suivre
            </h3>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://www.linkedin.com/company/palmjuniorconseil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/80 no-underline transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/palmjuniorconseil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/80 no-underline transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <FaInstagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>

          {/* Column 4 — Pages légales */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Informations légales
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} Palm Junior Conseil. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
