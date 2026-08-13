"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  // La page d'accueil a son propre header intégré dans le HeroSection
  if (pathname === "/") return null;
  return <Header />;
}
