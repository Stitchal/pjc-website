import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Palm Junior Conseil — Industries Culturelles et Créatives",
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
    title: "Palm Junior Conseil — Industries Culturelles et Créatives",
    description:
      "Innovez au cœur des Industries Culturelles et Créatives. Le talent de nos étudiants, au service de votre projet.",
    type: "website",
    locale: "fr_FR",
    siteName: "Palm Junior Conseil",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <ConditionalHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
