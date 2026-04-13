# Design System — Uburn

## Product Context
- **What this is:** Complément alimentaire anti-grignotage sous forme de boisson à base d'ube (patate douce violette). Vendu en DTC sur Shopify, trafic principalement Meta Ads mobile.
- **Who it's for:** Femmes françaises 35-55 ans qui grignotent entre les repas et cherchent une solution naturelle, sans régime, sans caféine.
- **Space/industry:** Wellness DTC supplements. Peers : AG1, Huel, Ritual, Athletic Greens.
- **Project type:** E-commerce landing page + product page. Conversion-first.

## Aesthetic Direction
- **Direction:** Luxury/Refined — sophistiqué sans être froid. Inspiré des marques wellness premium qui parlent à des femmes matures, pas à des fitness addicts.
- **Decoration level:** Intentional — textures subtiles (grain, dégradés doux), pas de flat brut ni d'effets excessifs.
- **Mood:** Confiance calme. La cliente doit se sentir comprise, rassurée, et attirée par quelque chose d'élégant — pas de urgence criarde, pas de "BUY NOW" agressif. Penser magazine wellness, pas site de deals.
- **Reference sites:** AG1 (structure), Ritual (esthétique), Medvi (ton sombre), Huel (clarté produit)

## Typography
- **Display/Hero:** Playfair Display — serif éditorial avec caractère. L'italique sur les mots-clés crée un effet éditorial magazine. Évoque la sophistication sans être rigide.
- **Body:** DM Sans — sans-serif moderne, excellente lisibilité mobile, géométrique doux. Ni trop technique (Inter) ni trop rond (Nunito).
- **UI/Labels:** DM Sans 600/700
- **Data/Tables:** DM Sans tabular-nums
- **Code:** Non applicable
- **Loading:** Google Fonts via `@import` dans le `<style>` inline (pas de fichier externe séparé pour réduire les requêtes)
- **Scale:**
  - Hero H1: 2.2rem mobile / 3rem desktop
  - Section H2: 1.8rem mobile / 2.2rem desktop
  - Body: 0.9-1rem
  - Small/Legal: 0.75-0.85rem
  - CTA button: 1rem / 1.05rem large

## Color
- **Approach:** Restrained — l'aubergine est la seule couleur forte. L'or est un accent rare et intentionnel. Le crème crée la chaleur.
- **Primary (Aubergine):** `#4A2068` — profondeur, féminité sophistiquée, pas le violet "tech" générique (#6B21A8 est banni comme trop commun)
- **Primary Deep:** `#2D1340` — pour footer, sticky bar, trust strip. Plus sombre = plus premium.
- **Primary Light:** `#F0EAF5` — sections alternées, backgrounds doux
- **Accent (Or doux):** `#C8A862` — étoiles, prix/jour, urgence, bouton sticky. Évoque la valeur sans être "bling".
- **Accent Light:** `#F5EDDA` — fond urgence/promo
- **Cream (Background):** `#FBF8F4` — chaleur. Pas blanc (#fff = froid, clinique). Pas beige (#f5f0e8 = trop jaune).
- **Cream Dark:** `#F3EDE5` — footers légers, separations
- **Text:** `#1F1F1F` — presque noir, plus doux que #000
- **Text Muted:** `#6B6B6B` — sous-titres, descriptions
- **Text Light:** `#9A9A9A` — mentions légales, notes
- **Border:** `rgba(74, 32, 104, 0.08)` — teintée aubergine, pas grise
- **Semantic:** success `#16a34a`, warning `#C8A862`, error `#dc2626`, info `#4A2068`
- **Dark mode:** Non applicable (LP uniquement, pas d'app)

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — le produit est wellness/premium, l'air est un signal de qualité
- **Scale:** 2xs(4) xs(8) sm(12) md(16) lg(24) xl(32) 2xl(48) 3xl(56) 4xl(72) 5xl(96)
- **Section padding:** 56px mobile / 72px desktop
- **Max content width:** 600px mobile sections / 720px desktop / 940px hero desktop grid

## Layout
- **Approach:** Hybrid — grid pour le hero desktop (2 colonnes texte+produit), linéaire pour mobile (tout empilé)
- **Grid:** 1 colonne mobile / 2 colonnes hero desktop / 2 colonnes offre desktop / 3 colonnes témoignages desktop
- **Max content width:** 600px (sections) / 940px (hero)
- **Border radius:**
  - Cards/Sections: 20px (généreux, doux)
  - Buttons: 50px (pill — signature Uburn)
  - Step numbers: 50% (cercles)
  - Small elements: 12-14px
  - Images produit: 20px

## Motion
- **Approach:** Intentional — transitions smooth sur les interactions, pas d'animations d'entrée lourdes (mobile = performance first)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` partout (Material Design standard — fluide sans être mou)
- **Duration:** hover(200ms) transitions(300ms) scroll-reveal(400ms si implémenté)
- **Hover effects:** translateY(-2px) + shadow increase sur cards et boutons. Subtil mais tangible.
- **Interdit:** Bouncy animations, parallax, slide-in aggressifs, shake/wiggle, pulse sur les prix

## Anti-patterns (JAMAIS faire)
- ❌ Violet vif `#6B21A8` comme couleur primaire (trop "tech startup")
- ❌ Fond blanc pur `#ffffff` (froid, clinique)
- ❌ Arial / Inter / Roboto / system-ui comme font primaire
- ❌ Border-radius 8px uniform partout (générique)
- ❌ Ombres noires `rgba(0,0,0,x)` (utiliser des ombres teintées aubergine)
- ❌ Gradient buttons flashy
- ❌ Emojis comme éléments de design principal (OK comme ponctuation)
- ❌ "Satisfaite ou remboursée" (politique non applicable)
- ❌ "Made in France" (utiliser "Marque française")
- ❌ Fake countdown timers qui reset
- ❌ Centered everything avec spacing uniform

## CSS Custom Properties (source de vérité)
```css
:root {
  --ub-cream: #FBF8F4;
  --ub-aubergine: #4A2068;
  --ub-aubergine-deep: #2D1340;
  --ub-aubergine-light: #F0EAF5;
  --ub-gold: #C8A862;
  --ub-gold-light: #F5EDDA;
  --ub-text: #1F1F1F;
  --ub-muted: #6B6B6B;
  --ub-light: #9A9A9A;
  --ub-border: rgba(74, 32, 104, 0.08);
  --ub-shadow: 0 8px 32px rgba(74, 32, 104, 0.08);
  --ub-radius: 20px;
  --ub-pill: 50px;
  --ub-serif: 'Playfair Display', Georgia, serif;
  --ub-sans: 'DM Sans', -apple-system, sans-serif;
  --ub-ease: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-13 | Playfair Display + DM Sans | Serif éditorial pour les titres (luxe féminin) + sans-serif moderne pour le body (lisibilité mobile). Combo validée par les meilleures LP wellness. |
| 2026-04-13 | Aubergine #4A2068 au lieu de violet #6B21A8 | Le violet vif est un anti-pattern AI slop (overused). L'aubergine est plus sophistiqué, plus féminin, plus premium. |
| 2026-04-13 | Or doux #C8A862 comme accent | Évoque la valeur et le premium sans être flashy. Utilisé avec parcimonie (étoiles, prix/jour, sticky CTA). |
| 2026-04-13 | Crème #FBF8F4 comme background | Le blanc pur est clinique. Le crème est chaleureux et wellness. Référence : Ritual, AG1. |
| 2026-04-13 | Pill buttons (50px radius) | Signature douce et féminine. Contraste avec le serif éditorial des titres. |
| 2026-04-13 | Pas de "satisfaite ou remboursée" | Politique non applicable chez Uburn — retiré de tout le site. |
| 2026-04-13 | Pas de "Made in France" | Préférence Charles : "Marque française" uniquement. |
