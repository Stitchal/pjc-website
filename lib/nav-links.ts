export type NavLink = {
  href: string;
  label: string;
  sublinks?: { href: string; label: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  {
    href: "/a-propos",
    label: "À propos",
    sublinks: [
      { href: "/a-propos/qui-sommes-nous", label: "Qui sommes-nous ?" },
      { href: "/a-propos/notre-equipe", label: "Notre équipe" },
    ],
  },
  { href: "/nos-prestations", label: "Nos prestations" },
];
