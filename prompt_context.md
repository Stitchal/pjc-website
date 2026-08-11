# Context & Architecture Document: Palm Junior Conseil Website

## 1. Project Overview & Identity
- **Client Name:** Palm Junior Conseil[cite: 1]
- **Type:** Junior-Entreprise (Association loi 1901) spécialisée dans les Industries Culturelles et Créatives (ICC)[cite: 1, 3].
- **Tagline:** "Innovez au cœur des Industries Culturelles et Créatives"[cite: 1] / "Le talent de nos étudiants, au service de votre projet."[cite: 3]
- **Location:** Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca[cite: 1, 2, 3, 4].
- **Email:** palmjuniorconseil@gmail.com[cite: 1, 2, 3, 4]
- **Goal:** Showcase the Junior-Enterprise, detail its 5 core services, present the methodology, and convert visitors into contact requests[cite: 1, 2, 3, 4].

---

## 2. Technical Stack & Rules
- **Framework:** Next.js (App Router, React)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (`lucide-react`)
- **UI Components:** shadcn/ui (recommandé pour formulaires, cartes, boutons)
- **Coding Style Guidelines:**
  - Modern, clean, semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Fully responsive design (Mobile-first mindset).
  - Use Modular Client & Server Components (`"use client"` only where state or interactivity is required).
  - Reusable, atomic components placed inside `@/components/`.

---

## 3. Design System & Theme
- **Color Palette (Derived from Mocks):**
  - **Primary / Brand Burgundy:** `#6b1238` / `bg-[#6b1238]` (utilisé sur les boutons CTA, cartes actives, headers, éléments clés)[cite: 1, 2, 3, 4].
  - **Secondary Light Gray:** `#f5f5f7` / `bg-gray-100` (arrières-plans de cartes, sections alternées)[cite: 1, 2].
  - **Text Colors:** Very Dark Charcoal / Black for headings (`#111827`) and subtle gray for body text (`#4b5563`).
  - **Accent / White:** Pure `#ffffff` for cards and header container background[cite: 1, 2, 3, 4].
- **Typography:**
  - Clean sans-serif font (Inter / Plus Jakarta Sans recommended).
  - High contrast for accessibility.
- **UI Style:** Modern rounded corners (`rounded-2xl` or `rounded-3xl`), light shadows (`shadow-sm` / `shadow-md`), clean iconography with burgundy badges.

---

## 4. Navigation & Layout

### Global Header
- **Logo:** Palm Junior Conseil (Gobert/Palme icon + text)[cite: 1, 2, 3, 4].
- **Navigation Links:**
  - `Notre Junior` -> `/notre-junior`[cite: 1, 2, 3, 4]
  - `Nos prestations` -> `/nos-prestations`[cite: 1, 2, 3, 4]
  - `Nous contacter` -> `/nous-contacter`[cite: 1, 2, 3, 4]

### Global Footer
- **Column 1 (Logo & Branding):** Palm Junior Conseil logo[cite: 1, 2, 3, 4].
- **Column 2 (Coordonnées):**
  - Campus Georges Méliès, 214 avenue Francis Tonner, 06150 Cannes La Bocca[cite: 1, 2, 3, 4]
  - `palmjuniorconseil@gmail.com`[cite: 1, 2, 3, 4]
- **Column 3 (Nous suivre):**
  - LinkedIn icon link[cite: 1, 2, 3, 4]
  - Instagram icon link[cite: 1, 2, 3, 4]
- **Column 4 (Pages légales):**
  - Mentions Légales[cite: 1, 2, 3, 4]
  - Politique de confidentialité[cite: 1, 2, 3, 4]

---

## 5. Page Specifications & Structure

### Page 1: Accueil (`/`)
1. **Hero Section:**
   - Heading: "Palm Junior Conseil, une Junior spécialisée dans les Industries Culturelles et Créatives"[cite: 1]
   - Button CTA: "Notre plaquette commerciale"[cite: 1]
   - Background image: Building architecture photo (Campus Georges Méliès)[cite: 1].
2. **Introduction Card Section:**
   - Card Title: "Innovez au cœur des Industries Culturelles et Créatives"[cite: 1]
   - Text: "Au cœur du campus Georges Méliès, écosystème entièrement dédié aux industries culturelles et créatives, Palm Junior Conseil est une association à but pédagogique qui met la créativité de ses étudiants au service de votre projet."[cite: 1]
   - Placeholder image: `photo mandat`[cite: 1].
3. **Nos prestations Overview:**
   - Grid of 5 services cards with icon, title, description[cite: 1]:
     1. **Communication:** "Propulsez votre visibilité et votre communication"[cite: 1]
     2. **Production audiovisuelle:** "Valorisez vos contenus et vos productions"[cite: 1]
     3. **Game Design:** "Réinventez l'expérience par le jeu"[cite: 1]
     4. **Événementiel:** "Fédérez vos publics par l'événementiel"[cite: 1]
     5. **Étude de publics:** "Décryptez l'impact de vos projets et de vos publics"[cite: 1]
4. **Call To Action Banner:**
   - Text: "Un projet en tête ? Nos équipes, sont à votre écoute pour vous accompagner"[cite: 1]
   - Button: "Contactez-nous" -> redirect to `/nous-contacter`[cite: 1].
5. **Partners / "Ils nous soutiennent":**
   - Logo Carousel/Grid: Campus des Métiers et des Qualifications d'Excellence, Université Côte d'Azur, Pépite Méditerranée, CNJE (Junior-Entreprises)[cite: 1].

---

### Page 2: Notre Junior (`/notre-junior`)
1. **Hero Section:**
   - Title: "Le talent de nos étudiants, au service de votre projet."[cite: 3]
2. **"Qui sommes nous ?" Section:**
   - Photo: Founding team photo (`mettre photo membres fondateurs`)[cite: 3].
   - Paragraphs describing creation in 2026, 1200 students ecosystem, UCA / Cannes Campus connection[cite: 3].
   - Button CTA: "Notre plaquette commerciale"[cite: 3].
3. **"Notre méthodologie" Section (5 Steps Timeline/Cards):**
   1. *ÉCHANGES SUR VOS ATTENTES* - Un premier rendez-vous de cadrage pour comprendre vos besoins et objectifs.[cite: 3]
   2. *UN PROJET SUR-MESURE* - Conception d'une proposition unique et détaillée...[cite: 3]
   3. *CONVENTION D'ÉTUDE* - Définition des termes et conditions du projet...[cite: 3]
   4. *RÉALISATION DU PROJET* - Sélection d'intervenants compétents...[cite: 3]
   5. *RESTITUTION* - Remise du livrable final et présentation des résultats.[cite: 3]
   - Note: "Un suivi constant est maintenu avec les chefs de projet..."[cite: 3]
4. **Key Strengths Cards:**
   - Card 1: "Des intervenants de qualité"[cite: 3]
   - Card 2: "Une équipe compétente"[cite: 3]

---

### Page 3: Nos Prestations (`/nos-prestations`)
1. **Hero Header:**
   - Title: "Découvrez nos prestations"[cite: 4]
   - Banner illustration / photo[cite: 4].
2. **Detailed Services Grid/List (5 Pillars):**
   - **Communication:**[cite: 4]
     - Tagline: "Propulsez votre visibilité et votre communication"[cite: 4]
     - Bullet points: Conception plans de communication, Déploiement communication interne, Création graphique & identité visuelle[cite: 4].
   - **Production audiovisuelle:**[cite: 4]
     - Tagline: "Valorisez vos contenus et vos productions"[cite: 4]
     - Bullet points: Production audiovisuelle & montage, Production et réalisation de reportages écrits ou multimédias, Production de contenus audio/podcasts, Rédaction web et storytelling[cite: 4].
   - **Game Design:**[cite: 4]
     - Tagline: "Réinventez l'expérience par le jeu"[cite: 4]
     - Bullet points: Conception de jeux de société, Conception de jeux vidéo, Prototypage, Création d'un GDD[cite: 4].
   - **Événementiel:**[cite: 4]
     - Tagline: "Fédérez vos publics par l'événementiel"[cite: 4]
     - Bullet points: Conception, direction artistique & management de projet, Coordination logistique & animation[cite: 4].
   - **Étude de publics:**[cite: 4]
     - Tagline: "Décryptez l'impact de vos projets et de vos publics"[cite: 4]
     - Bullet points: Étude des publics (enquêtes & questionnaires), Réalisation d'interviews & enquêtes de terrain[cite: 4].

---

### Page 4: Nous Contacter (`/nous-contacter`)
1. **Contact Form Component:**
   - Header: "Nous contacter"[cite: 2]
   - Input Fields:
     - Nom (Placeholder: "Votre nom")[cite: 2]
     - Prénom (Placeholder: "Votre prénom")[cite: 2]
     - Mail (Placeholder: "Votre adresse mail")[cite: 2]
     - Téléphone (Placeholder: "Votre téléphone")[cite: 2]
     - Message (Textarea, Placeholder: "Écrivez ici...")[cite: 2]
   - Privacy Checkbox: "En soumettant ce formulaire, vous acceptez notre Politique de confidentialité"[cite: 2]
   - Submit Button: "ENVOYER" (Primary Burgundy style)[cite: 2]

---

## 6. Guidelines for AI Coding Assistant
1. Always reference this context when creating page layouts or components.
2. Build components in `@/components/ui/` or `@/components/sections/`.
3. Keep the styling faithful to the burgundy (#6b1238) branding present in the mockups[cite: 1, 2, 3, 4].
4. Create empty asset placeholder components (e.g. `<Image src="/assets/placeholder.jpg" ... />`) with proper dimensions matching the mockups.