# PJC Website

Site vitrine de **PJC**, Junior Conseil de l'école Georges Méliès. Développé avec Next.js, déployé sur GitHub Pages.

## Stack

- [Next.js](https://nextjs.org) (export statique)
- [Tailwind CSS](https://tailwindcss.com)
- [Web3Forms](https://web3forms.com) pour le formulaire de contact

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copie `.env.example` en `.env.local` et remplis les valeurs :

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Clé d'accès Web3Forms (obtenir sur [web3forms.com](https://web3forms.com)) |

## Déploiement

Le déploiement est automatique via GitHub Actions sur chaque push sur `main`. La clé Web3Forms doit être ajoutée dans **Settings → Secrets and variables → Actions** du repo GitHub sous le nom `NEXT_PUBLIC_WEB3FORMS_KEY`.
