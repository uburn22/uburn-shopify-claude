# Design Tokens — Uburn PDP V10
> Extraits de `sections/uburn-lp.liquid` (source de vérité)
> Bible design pour toutes les sections de la PDP V10

---

## 1. COULEURS

```css
:root {
  --purple-deep:  #3d1873;   /* titres foncés, hover boutons */
  --purple-main:  #6b2fa0;   /* couleur brand principale, CTAs */
  --purple-mid:   #8b47c5;   /* accents, gradient */
  --purple-light: #b07de8;   /* accents sur fond sombre */
  --purple-pale:  #e8dcf5;   /* bordures légères */
  --purple-wash:  #f5f0fa;   /* fonds de cards, badges */
  --cream:        #faf9f7;   /* fond sections alternées */
  --warm:         #f2f0ed;   /* fond très doux, trust bar */
  --dark:         #242220;   /* texte principal */
  --body:         #5a5654;   /* texte courant */
  --muted:        #8a8785;   /* texte secondaire, meta */
  --grad: linear-gradient(160deg, #3d1873 0%, #6b2fa0 40%, #8b47c5 100%);
}
```

**Jamais** `oklch()` — iOS < 15.4 ne supporte pas.
Toutes les ombres en `rgba()` uniquement.

---

## 2. TYPOGRAPHIE

### Fonts
```html
<!-- Chargement async (non-bloquant) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;600;700;800&family=Red+Hat+Text:wght@400;500;600;700&display=swap"
      rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="..." rel="stylesheet"></noscript>
```

- **Display** : `Red Hat Display` — titres, H1/H2/H3, prix, section-label, numéros
- **Body** : `Red Hat Text` — tout le reste

### Échelle typographique

| Rôle | Font | Size | Weight | Line-height |
|------|------|------|--------|-------------|
| H1 hero | Red Hat Display | `clamp(36px,5vw,60px)` | 800 | 1.06 |
| H2 section | Red Hat Display | `clamp(26px,3.2vw,40px)` | 700 | 1.15 |
| H3 card | Red Hat Display | 17px | 700 | 1.3 |
| H4 card small | Red Hat Display | 15–16px | 700 | 1.3 |
| Section label | Red Hat Text | 11px | 600 | — |
| Body hero | Red Hat Text | 17px | 400 | 1.65 |
| Body standard | Red Hat Text | 15px | 400 | 1.7 |
| Body card | Red Hat Text | 14px | 400 | 1.6 |
| Meta / small | Red Hat Text | 12–13px | 400–500 | 1.55 |
| Prix principal | Red Hat Display | 38px | 800 | 1 |
| Prix stat | Red Hat Display | 56px | 800 | 1 |
| Announce bar | Red Hat Text | 12.5px | 600 | — |
| FAQ question | Red Hat Display | 15px | 600 | — |
| Badge/tag | Red Hat Text | 11px | 700 | — |

### CSS helpers
```css
h1,h2,h3,.section-title { text-wrap: balance; }
.price, .stat-num { font-variant-numeric: tabular-nums; }

.section-label {
  font-size: 11px; font-weight: 600;
  text-transform: uppercase; letter-spacing: 2.5px;
  color: var(--purple-main); margin-bottom: 14px;
}
```

---

## 3. ESPACEMENTS

### Section padding
```css
.section { padding: 100px 40px; }                      /* desktop */
@media (max-width: 900px) { .section { padding: 72px 24px; } }
@media (max-width: 600px) { .section { padding: 60px 16px; } }
```

### Hero padding
```css
.hero { padding: 80px 40px 60px; }
@media (max-width: 900px) { .hero { padding: 52px 24px 36px; } }
@media (max-width: 600px) { .hero { padding: 40px 16px 28px; } }
```

### Grilles
| Contexte | Desktop gap | Mobile gap |
|----------|-------------|------------|
| Cards standard | 24px | 12px |
| Product 2-col | 80px | 36px |
| Ingrédients 3-col | 20px | 12px |
| Testimonials 3-col | 20px | — (1 col) |
| Section margin-top (grille) | 48px | 40px |

### Sticky CTA mobile
```css
@media (max-width: 900px) {
  body { padding-bottom: 72px; }
}
```

---

## 4. BORDER-RADIUS

| Élément | Radius |
|---------|--------|
| Boutons (tous) | `100px` (fully rounded) |
| Cards standard | `18px` |
| Cards featured | `20px–22px` |
| Expert card / cart | `24px` |
| Images produit | `24px` |
| Tags / badges / pills | `100px` |
| Small elements | `10–14px` |
| Ingredient card | `18px` |

---

## 5. TRANSITIONS & ANIMATIONS

### Transitions standard
```css
/* Boutons */
.btn { transition: .3s; }
.btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(107,47,160,.3); }

/* Cards hover */
.card:hover { box-shadow: 0 8px 28px rgba(0,0,0,.06); transform: translateY(-2px); }
.card { transition: .3s; }

/* Image gallery */
.gallery-item img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
.gallery-item:hover img { transform: scale(1.04); }
```

### Reveal (scroll-triggered)
```css
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .7s cubic-bezier(.22,1,.36,1),
              transform .7s cubic-bezier(.22,1,.36,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-d { transition-delay: .15s; }
```

### Stagger children (grilles de cards)
```css
.stagger-children > * {
  opacity: 0; transform: translateY(22px);
  transition: opacity .55s ease, transform .55s ease;
}
.stagger-children.visible > *:nth-child(1) { opacity:1; transform:none; transition-delay:0s; }
.stagger-children.visible > *:nth-child(2) { opacity:1; transform:none; transition-delay:.1s; }
.stagger-children.visible > *:nth-child(3) { opacity:1; transform:none; transition-delay:.2s; }
/* ... jusqu'à nth-child(6) à .5s */
```

### Stagger scale (cards plus dramatiques)
```css
.stagger-scale > * {
  opacity: 0; transform: scale(.88) translateY(16px);
  transition: opacity .5s ease, transform .5s ease;
}
/* idem, delays 0 / .08s / .16s / .24s / .32s / .4s */
```

### Keyframes
```css
@keyframes ub-float     { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-10px)} }
@keyframes ub-pulse-glow{ 0%,100%{box-shadow:0 4px 20px rgba(107,47,160,.25)} 50%{box-shadow:0 8px 40px rgba(107,47,160,.5)} }
@keyframes ub-scale-in  { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
@keyframes ub-slide-up  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes slide        { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }  /* marquee */
```

### Usages animations
| Animation | Élément | Durée |
|-----------|---------|-------|
| `ub-float` | Hero image | 5s infinite |
| `ub-pulse-glow` | `.btn-fill` (CTA principal) | 2.5s infinite |
| `ub-scale-in` | Entrées scale | — |
| `ub-slide-up` | FAQ open, entrées | .3s |
| `slide` | Marquee | 25s linear infinite |

### Observer JS (pattern exact LP)
```js
const obs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);  // ← obligatoire, libère la mémoire
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal,.stagger-children,.stagger-scale').forEach(el => obs.observe(el));
```

### prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  .hero-visual img, .btn-fill { animation: none !important; }
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

---

## 6. IMAGES

### Styles images produit
```css
/* Hero produit */
.hero-visual img {
  border-radius: 24px;
  box-shadow: 0 32px 80px rgba(61,24,115,.22), 0 0 0 1px rgba(107,47,160,.1);
  animation: ub-float 5s ease-in-out infinite;
}
@media (max-width: 900px) { .hero-visual img { animation: none; } }

/* Drop-shadow produit sur fond light */
.prod-img img { filter: drop-shadow(0 12px 30px rgba(61,24,115,.15)); }

/* Offer block packshot */
.offer-img { filter: drop-shadow(0 40px 80px rgba(61,24,115,.25)); }

/* Gallery hover */
.gallery-item img { transition: transform .6s cubic-bezier(.22,1,.36,1); }
.gallery-item:hover img { transform: scale(1.04); }
```

### Ratios & aspect-ratios
| Élément | Ratio | Fit |
|---------|-------|-----|
| Ingrédient card | `4/3` | cover |
| Gallery item | grille fixe 240px | cover |
| Témoignage avatar | `1/1` | cover |
| Expert photo | `1/1` | cover |

### Chargement
```html
<!-- LCP image : preload obligatoire -->
<link rel="preload" as="image" fetchpriority="high" href="[IMAGE_HERO]">
<!-- Toutes les autres : lazy + async -->
<img loading="lazy" decoding="async" src="..." alt="...">
```

---

## 7. CTAs

### Bouton principal (fill)
```css
.btn-fill {
  background: var(--purple-main); color: #fff;
  border-radius: 100px; padding: 13px 30px;
  font-family: 'Red Hat Text', sans-serif;
  font-size: 14px; font-weight: 600;
  border: none; cursor: pointer;
  transition: .3s;
  animation: ub-pulse-glow 2.5s ease-in-out infinite;
}
.btn-fill:hover {
  background: var(--purple-deep);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(107,47,160,.3);
  animation-play-state: paused;
}
```

### Bouton white (sur fond sombre)
```css
.btn-white {
  background: #fff; color: var(--purple-deep);
  border-radius: 100px; padding: 13px 30px;
}
.btn-white:hover { background: var(--purple-wash); transform: translateY(-1px); }
```

### Bouton outline
```css
.btn-outline {
  background: transparent; color: var(--purple-main);
  border: 1.5px solid var(--purple-pale);
}
.btn-outline:hover { background: var(--purple-wash); }
```

### CTA Sticky Mobile
```css
.sticky-mobile-cta {
  display: none; position: fixed; bottom: 0; left: 0; right: 0;
  z-index: 200; padding: 12px 16px max(16px, env(safe-area-inset-bottom));
  background: #fff;
  box-shadow: 0 -4px 20px rgba(0,0,0,.1);
  border-top: 1px solid rgba(0,0,0,.06);
}
.sticky-mobile-cta a {
  display: block; width: 100%; text-align: center;
  background: var(--purple-main); color: #fff;
  padding: 15px 24px; border-radius: 100px;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 15px; font-weight: 700;
}
@media (max-width: 900px) { .sticky-mobile-cta { display: block; } }
```

---

## 8. TRUST BADGES

```css
.ribbon {
  background: var(--purple-wash); padding: 10px 20px;
  display: flex; justify-content: center; gap: 24px;
  flex-wrap: wrap; font-size: 13px; color: var(--body); font-weight: 500;
}
```
Contenu : ✓ Livraison offerte · ✓ EFSA validée · ✓ Satisfait ou remboursé 30j · ✓ 1 500+ clientes

---

## 9. FAQ ACCORDÉON

```css
.faq-item { border-bottom: 1px solid rgba(0,0,0,.06); padding: 20px 0; cursor: pointer; }
.faq-q {
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'Red Hat Display', sans-serif; font-size: 15px; font-weight: 600; color: var(--dark);
}
.faq-q::after { content: '+'; font-size: 20px; color: var(--purple-main); transition: .3s; }
.faq-item.open .faq-q::after { content: '−'; }
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height .4s ease;
  font-size: 14px; color: var(--body); line-height: 1.65;
}
.faq-item.open .faq-a { max-height: 200px; padding-top: 12px; }
.faq-item.open .faq-a { animation: ub-slide-up .3s ease; }
```

```js
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('open'); });
    item.classList.toggle('open');
  });
});
```

---

## 10. STICKY TOP BAR (Announce)

```css
.announce {
  background: var(--dark); color: #fff;
  text-align: center; padding: 10px 20px;
  font-size: 12.5px; font-weight: 600;
  letter-spacing: .8px; text-transform: uppercase;
}
```
Contenu : `LIVRAISON GRATUITE EN FRANCE`

---

## 11. RÈGLES MOBILES — NON-NÉGOCIABLES

```css
/* Sur body ET html pour iOS Safari */
html, body { overflow-x: hidden; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; }

/* Breakpoints */
/* ≤900px = tablet → 1 colonne, paddings réduits */
/* ≤600px = mobile → paddings encore réduits */
/* ≤400px = small → font-size réduit */

/* Tableaux → cards stackées sur mobile */
/* 2+ colonnes → 1 colonne sur ≤600px */
/* Jamais overflow-x: auto sur mobile (crée scroll horizontal parasite iOS) */
/* Jamais backdrop-filter (perf désastreuse sur iPhone ancien) */
```

---

## 12. ASSETS CDN DISPONIBLES

### Packshots produit
| Asset | URL |
|-------|-----|
| Hero packshot principal | `https://uburn.co/cdn/shop/files/WhatsApp_Image_2026-04-17_at_12.46.02_1.jpg?v=1776421390&width=900&format=webp` |
| Product listing | `https://uburn.co/cdn/shop/files/Uburn_Listing_ecom_1.jpg?v=1772700007&width=800` |
| Focus produit 1 (lifestyle) | `https://uburn.co/cdn/shop/files/focus_product_1_3dab8125-eab7-4b9d-a33f-e28cdd57aa67.jpg?v=1776425406&width=1600&format=webp` |
| Focus produit 2 | `https://uburn.co/cdn/shop/files/focus_product_2.jpg?v=1772696236&width=800` |

### Galerie PDP (PRODUCTPAGE)
| Asset | URL |
|-------|-----|
| Shot 1 (unbox) | `https://uburn.co/cdn/shop/files/PRODUCTPAGE_0000_7.jpg?v=1773911263&width=800` |
| Shot 2 | `https://uburn.co/cdn/shop/files/PRODUCT_PAGE_0001_6_6cd95d50-55ff-4349-b486-02ff851786de.jpg?v=1773911263&width=800` |
| Shot 3 | `https://uburn.co/cdn/shop/files/PRODUCTPAGE_0002_5.jpg?v=1773911263&width=800` |
| Shot 4 (lifestyle) | `https://uburn.co/cdn/shop/files/PRODUCTPAGE_0003_4.jpg?v=1773911263&width=800` |
| Shot 5 | `https://uburn.co/cdn/shop/files/PRODUCTPAGE_0004_3.jpg?v=1749644803&width=800&format=webp` |
| Shot 6 | `https://uburn.co/cdn/shop/files/PRODUCT_PAGE_0005_2_1.jpg?v=1773911263&width=800` |

### Ingrédients
| Asset | URL |
|-------|-----|
| Ubé violet | `https://uburn.co/cdn/shop/files/Ingredient_Ube.jpg?v=1749644803&width=500&format=webp` |
| Glucomannane konjac | `https://uburn.co/cdn/shop/files/Ingredient_Glucomannane.jpg?v=1749644803&width=500&format=webp` |
| Fibre d'acacia | `https://uburn.co/cdn/shop/files/Ingredient_Acacia.jpg?v=1749644803&width=500&format=webp` |
| MCT coco | `https://uburn.co/cdn/shop/files/Ingredient_Coco.jpg?v=1749644803&width=500&format=webp` |
| Gingembre | `https://uburn.co/cdn/shop/files/Ingredient_Gingembre.jpg?v=1749644803&width=500&format=webp` |
| L-Carnitine | `https://uburn.co/cdn/shop/files/Ingredient_L-carnitine_tartrate.jpg?v=1749644803&width=500&format=webp` |

### Étapes (Comment ça marche)
| Asset | URL |
|-------|-----|
| Étape 1 | `https://uburn.co/cdn/shop/files/etape_1.jpg?v=1763147054&width=600&format=webp` |
| Étape 2 | `https://uburn.co/cdn/shop/files/etape_2.jpg?v=1763147054&width=600&format=webp` |
| Étape 3 | `https://uburn.co/cdn/shop/files/etape_3.jpg?v=1763147054&width=600&format=webp` |

### Expert
| Asset | URL |
|-------|-----|
| Dr Claire Dubois | `https://uburn.co/cdn/shop/files/Gemini_Generated_Image_gjm16fgjm16fgjm1.png?v=1776424158&width=800` |

### Logos presse
| Asset | URL |
|-------|-----|
| ELLE | `https://uburn.co/cdn/shop/files/ELLE_Magazine_Logo.svg` |
| Vogue | `https://uburn.co/cdn/shop/files/VOGUE_revista_-_logo.png?v=1749644803&width=150&format=webp` |
| TF1 | `https://uburn.co/cdn/shop/files/TF1_1989-1990.png?v=1749644803&width=150&format=webp` |
| Brut | `https://uburn.co/cdn/shop/files/Brut_logo_svg.png?v=1749644803&width=150&format=webp` |
| Femme Actuelle | `https://uburn.co/cdn/shop/files/logo-femmeactuelle-copie_cb5c498d-5470-4a4d-83fc-7b16c264a030.png?v=1749644803&width=150&format=webp` |

### Logo & Pictos
| Asset | URL |
|-------|-----|
| Logo violet | `https://uburn.co/cdn/shop/files/LOGO_Violet.png?v=1741876498&width=200` |
| Picto livraison | `https://uburn.co/cdn/shop/files/Picto_Fast_shipping.svg` |
| Picto monde | `https://uburn.co/cdn/shop/files/Picto_World.svg` |
| Picto client | `https://uburn.co/cdn/shop/files/Picto_customer.svg` |
| Picto paiement | `https://uburn.co/cdn/shop/files/Picto_secure_payment.svg` |

### Fond texture
| Asset | URL |
|-------|-----|
| FOND_FIN (overlay stats) | `https://uburn.co/cdn/shop/files/FOND_FIN.jpg?v=1749644803&width=1600` |

---

## 13. TOKEN SHOPIFY

- `.env` local : contient uniquement `META_ACCESS_TOKEN` (Meta API)
- Token Shopify : dans **GitHub Secrets** → `SHOPIFY_CLI_THEME_TOKEN`
- Deploy : automatique via GitHub Actions au push sur `main`
- **Pas de token `shpat_` en local** — le deploy passe par CI/CD uniquement
- Variant IDs : `Découverte = 51289200034111` · `Résultats Maximum = 51289200066879`

---

## 14. SKILLS DISPONIBLES

Chargés dans `~/.claude/skills/` :
`adapt` · `animate` · `audit` · `bolder` · `clarify` · `colorize` · `critique` · `delight` · `distill` · `emil-design-eng` · `frontend-design` · `impeccable` · `layout` · `meta-ads-campaign` · `optimize` · `overdrive` · `polish` · `quieter` · `shape` · `typeset`
