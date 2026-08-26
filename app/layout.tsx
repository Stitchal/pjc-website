import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Palm Junior Conseil | Industries Culturelles et Créatives",
    template: "%s | Palm Junior Conseil",
  },
  description:
    "Palm Junior Conseil est une Junior-Entreprise spécialisée dans les Industries Culturelles et Créatives, basée sur le Campus Georges Méliès à Cannes. Communication, production audiovisuelle, game design, événementiel et études de publics.",
  keywords: [
    "Junior-Entreprise",
    "Industries Culturelles",
    "Industries Créatives",
    "Cannes",
    "Communication",
    "Production audiovisuelle",
    "Game Design",
    "Événementiel",
    "Étude de publics",
  ],
  authors: [{ name: "Palm Junior Conseil" }],
  openGraph: {
    title: "Palm Junior Conseil | Industries Culturelles et Créatives",
    description:
      "Innovez au cœur des Industries Culturelles et Créatives. Le talent de nos étudiants, au service de votre projet.",
    type: "website",
    locale: "fr_FR",
    siteName: "Palm Junior Conseil",
    images: [
      {
        url: "https://www.palmjuniorconseil.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palm Junior Conseil | Industries Culturelles et Créatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.palmjuniorconseil.fr/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Palm Junior Conseil",
    alternateName: "PJC",
    url: "https://www.palmjuniorconseil.fr",
    email: "palmjuniorconseil@gmail.com",
    description:
      "Association étudiante loi 1901 spécialisée dans les Industries Culturelles et Créatives, basée sur le Campus Georges Méliès à Cannes.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "214 avenue Francis Tonner",
      addressLocality: "Cannes La Bocca",
      postalCode: "06150",
      addressCountry: "FR",
    },
    sameAs: [
      "https://www.linkedin.com/company/palmjuniorconseil",
      "https://instagram.com/palmjuniorconseil",
    ],
  };

  return (
    <html lang="fr" className={`${plusJakartaSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
