# PROMPT UBURN-DEV — REFONTE HOMEPAGE uburn.co
**Émis par : Agent Growth | 17/04/2026**
**Priorité : HIGH | Validation Charles requise avant push**

---

## CONTEXTE

La homepage uburn.co score 46/100 (Grade D) à l'audit ads-landing.
La landing page /pages/uburn-lp score 73/100 (Grade C+).

Mission : aligner la homepage sur la direction artistique et le niveau
de qualité de la LP. Le design system complet est déjà codé dans ce repo.

---

## ÉTAPE 0 — BACKUP OBLIGATOIRE AVANT TOUTE MODIFICATION

```bash
# Créer un tag git de sauvegarde
git tag homepage-backup-avant-refonte-$(date +%Y%m%d)
git push origin homepage-backup-avant-refonte-$(date +%Y%m%d)

# Créer une branche de travail
git checkout -b feat/homepage-redesign
```

Confirmer le tag créé avant de toucher au moindre fichier.

---

## FICHIERS DE RÉFÉRENCE DANS CE REPO

| Fichier | Rôle |
|---|---|
| `audit-sections-uburn-lp.liquid` | Design system complet LP (1304 lignes CSS + composants) |
| `landing-page-uburn.md` | Contenu 8 sections, compliance DGCCRF validée |
| `audit-layout-uburn-lp.liquid` | Layout HTML de référence |

**Règle :** Ne pas recréer le design system — le réutiliser tel quel.
Toutes les classes CSS sont déjà définies dans `audit-sections-uburn-lp.liquid`.

---

## RÈGLES ABSOLUES (UBURN-DEV CLAUDE.md)

- ❌ Ne JAMAIS toucher au Meta Pixel
- ❌ Ne JAMAIS toucher à Loox
- ❌ Ne JAMAIS toucher au cookie banner
- ✅ Toujours montrer le diff avant d'appliquer
- ✅ Mobile 390px en priorité absolue
- ✅ Commit + push uniquement après confirmation Charles

---

## ARCHITECTURE CIBLE — HOMEPAGE

Reproduire exactement cette structure de sections,
dans cet ordre, en Shopify Liquid :

```
1.  announce-bar        "Livraison gratuite en France · -10% première commande · Stock limité"
2.  nav                 Logo + 5 liens (Pourquoi Uburn / Ingrédients / Avis / FAQ / Commander)
3.  trust-ribbon        4 badges inline : EFSA · 0% caféine · Made in France · Sans abonnement
4.  hero                2 colonnes : texte gauche + produit flottant droite
5.  marquee             Défilement : 1500+ femmes · 4h de satiété · 0% caféine · EFSA validé · 0,61€/jour
6.  problem-cards       3 cartes gradient violet (éditorial numéroté)
7.  how-it-works        3 étapes avec icônes SVG
8.  ingredients         Grid 3 colonnes, 6 actifs avec photos macro
9.  press-bar           Logos presse : TF1 / Brut / Femme Actuelle / Forbes / Vogue / ELLE
10. stats-section       Bannière gradient : 3 stats + CTA central
11. testimonials        3 cards avec avatar initiales, étoiles, citation, ville
12. bonus-section       4 bonus avec tags valeur (€184 total)
13. pricing-section     2 cards (Découverte vs Résultats Maximum — pop badge)
14. faq-section         6 questions, accordion JS natif
15. guarantee-bar       4 badges : Remboursé 30j · Made in France · EFSA · Sans abonnement
16. footer              4 colonnes + disclaimer légal complet
17. sticky-mobile-cta   Fixé en bas sur mobile ≤900px
```

---

## SECTION 4 — HERO (détail complet)

```html
<!-- Colonne gauche -->
<span class="hero-tag">⭐ 4,7/5 · 1 500+ femmes satisfaites</span>

<h1>
  Vous grignotez à 16h.<br>
  <span class="accent">Ce n'est pas un problème de volonté.</span>
</h1>

<p class="hero-sub">
  Uburn est un complément alimentaire à base de glucomannane
  qui contribue au contrôle de l'appétit. 30 kcal.
  Jusqu'à 4h de satiété durable.*
</p>

<!-- Badges inline -->
<div class="hero-badges">
  <span class="hero-badge"><span class="ck">✓</span> 0% caféine</span>
  <span class="hero-badge"><span class="ck">✓</span> Made in France</span>
  <span class="hero-badge"><span class="ck">✓</span> EFSA validé</span>
  <span class="hero-badge"><span class="ck">✓</span> Sans abonnement</span>
</div>

<!-- CTA principal -->
<a href="/products/ube-poudre" class="btn btn-fill">
  Commencer ma cure →
</a>

<!-- Sous-CTA -->
<p style="font-size:13px;color:var(--muted);margin-top:10px">
  0,61€/jour · Livraison offerte · Satisfait ou remboursé 30 jours
</p>

<!-- Bloc bonus hero -->
<div class="hero-bonus">
  <div class="hero-bonus-label">🎁 Offerts avec la Cure Maximum</div>
  <div class="hero-bonus-items">
    <span>✓ E-book "30j pour reprendre le contrôle" <em>(valeur 47€)</em></span>
    <span>✓ Groupe privé Uburn Collective <em>(valeur 40€)</em></span>
    <span>✓ Suivi WhatsApp 30j <em>(valeur 47€)</em></span>
  </div>
  <div class="hero-bonus-total">
    Valeur totale : <strong>134€ offerts</strong>
  </div>
</div>

<!-- Float cards sur le visuel produit -->
<div class="hero-float top">
  <span>⭐ 4,7/5</span>
  <span class="float-badge">1 500+ avis</span>
</div>
<div class="hero-float bottom">
  <span>🇫🇷 Made in France</span>
  <span class="float-badge">EFSA</span>
</div>
```

**Note :** H1 utilise "Vous" (vouvoiement) — aligner avec la LP.
Supprimer le "Tu grignottes" actuel.

---

## SECTION 6 — PROBLEM CARDS (cartes gradient éditorial)

```html
<!-- 3 cartes gradient violet — classe prob-cards -->
<!-- Carte 1 -->
<div class="prob-card">
  <div class="prob-num">01</div>
  <div class="prob-title">16h. Le placard vous appelle.</div>
  <div class="prob-sub">
    Vous avez bien mangé à midi. Pourtant, deux heures plus tard,
    c'est plus fort que vous. Ce n'est pas de la gourmandise.
    C'est votre estomac qui se vide trop vite.
  </div>
</div>

<!-- Carte 2 -->
<div class="prob-card">
  <div class="prob-num">02</div>
  <div class="prob-title">Le soir, devant le frigo.</div>
  <div class="prob-sub">
    La journée est finie. La fatigue s'installe. Et avec elle,
    les envies. Vous savez que vous n'avez pas faim.
    Mais votre corps dit le contraire.
  </div>
</div>

<!-- Carte 3 -->
<div class="prob-card">
  <div class="prob-num">03</div>
  <div class="prob-title">La fatigue qui amplifie tout.</div>
  <div class="prob-sub">
    Quand vous êtes fatiguée, votre corps cherche de l'énergie rapide.
    C'est biologique, pas psychologique.
    Ce n'est pas vous le problème. C'est le signal.
  </div>
</div>
```

---

## SECTION 10 — STATS SECTION (bannière gradient)

```html
<div class="stats-row">
  <div class="stat">
    <div class="stat-num" data-count="1500">0</div>
    <div class="stat-label">femmes satisfaites</div>
  </div>
  <div class="stat">
    <div class="stat-num">4h</div>
    <div class="stat-label">de satiété durable*</div>
  </div>
  <div class="stat">
    <div class="stat-num">0,61€</div>
    <div class="stat-label">par jour</div>
  </div>
</div>

<h2>Reprendre le contrôle, c'est possible.</h2>
<p>
  Le glucomannane contribue au contrôle de l'appétit
  dans le cadre d'un régime hypocalorique (EFSA ID 3120).
  30 kcal par dose. 0% caféine.
</p>
<a href="/products/ube-poudre" class="btn btn-white">
  Essayer sans risque →
</a>
```

---

## SECTION 11 — TESTIMONIALS

Utiliser exactement ces 3 témoignages (compliance validée) :

```
★★★★★ — "Ça fait 3 semaines que je prends Uburn le matin.
Le truc qui a changé ? Je ne pense plus au placard à 16h."
— Marie, 42 ans · Lyon

★★★★★ — "J'étais sceptique. Un truc violet qui coupe les fringales ?
Mais j'ai testé. Et je tiens jusqu'au dîner sans y penser.
Pour 0,61€ par jour, y'a pas de risque."
— Sophie, 38 ans · Bordeaux

★★★★☆ — "L'effet satiété est bien là. Je ne grignote presque plus
l'après-midi. Mes collègues m'ont demandé mon secret.
C'est mon deuxième pot."
— Nathalie, 47 ans · Toulouse
```

Avatars : initiales dans cercle `var(--purple-wash)` (M / S / N).
Badge "Achat vérifié" vert sous les étoiles.

---

## SECTION 13 — PRICING

```
CARD 1 — Découverte
  €34,50 · €1,15/jour
  90g · 1 dose/jour · 30 jours
  [Commander →]

CARD 2 — Résultats Maximum ← badge "Meilleure valeur" + pop border
  ~~€69~~ → €54,50 · €0,61/jour
  270g · 3 doses/jour · 30 jours
  ✓ + E-book 30j (47€)
  ✓ + Groupe Uburn Collective (40€)
  ✓ + Suivi WhatsApp (47€)
  ✓ + Événements en ligne (50€)
  → Valeur totale bonus : 184€ offerts
  [Commencer ma cure →]
```

---

## SECTION 14 — FAQ (6 questions)

Utiliser le contenu exact de `landing-page-uburn.md` Section 6.
Accordion JS : toggle class `.open` au click, `max-height` transition.
Fermer les autres items au click (un seul ouvert à la fois).

---

## SECTION 16 — FOOTER

```
Col 1 (2fr) : Logo · tagline courte · hello@uburn.co · Instagram
Col 2 : Produit / Ingrédients / Résultats / Avis
Col 3 : FAQ / Contact / Livraison / Retours
Col 4 : À propos / Blog / Presse / CGV

Disclaimer légal complet (footer-disc) :
"Uburn est un complément alimentaire à base de glucomannane.
Le glucomannane contribue au contrôle de l'appétit dans le cadre
d'un régime hypocalorique (EFSA ID 3120). Conditions : prendre 3g/jour
en 3 doses de 1g, avec 1 à 2 verres d'eau, avant les repas.
Ne se substitue pas à une alimentation variée et équilibrée.
Déconseillé durant la grossesse et l'allaitement."

Modes de paiement : Visa · Mastercard · American Express · Apple Pay
© 2026 Uburn · Mentions légales · Confidentialité · CGV
```

---

## SECTION 17 — STICKY MOBILE CTA

Visible uniquement ≤900px. Disparaît quand le pricing section est visible.

```html
<div class="sticky-mobile-cta" id="sticky-cta">
  <a href="/products/ube-poudre">Commencer ma cure — 0,61€/jour →</a>
</div>
```

JS : IntersectionObserver sur `.pricing-section` → hide sticky quand visible.

---

## MODIFICATIONS CRITIQUES vs HOMEPAGE ACTUELLE

| Élément | Avant | Après |
|---|---|---|
| H1 | "Tu grignottes entre les repas ?" | "Vous grignotez à 16h. Ce n'est pas un problème de volonté." |
| Ton | Tutoiement | Vouvoiement (aligné avec la LP et les ads) |
| Prix above fold | ❌ Absent | ✅ 0,61€/jour dans le sous-CTA hero |
| Social proof | ❌ 0 chiffre | ✅ 4,7/5 · 1500+ dans le hero-tag |
| Sélecteur 60 pays | ❌ 50+ drapeaux PNG | ✅ Supprimer — remplacer par mention simple "Livraison EU" dans footer |
| CTAs | 5 CTAs différents | 1 CTA principal "Commencer ma cure →" + variantes cohérentes |
| Bonus €184 | ❌ Absent hero | ✅ Bloc hero-bonus visible sans scroll |
| Témoignages | ❌ 0 | ✅ 3 témoignages nommés |
| Pricing section | ❌ Absent | ✅ 2 cards avec comparaison |
| FAQ | ❌ Absent | ✅ 6 questions accordion |
| Disclaimer EFSA | ❌ Absent | ✅ Footer + mention sous les stats |
| Marquee animé | ❌ Absent | ✅ Brand values défilants |
| Sticky mobile CTA | ❌ Absent | ✅ Fixé en bas ≤900px |

---

## 10 CRITÈRES DE QUALITÉ UI (impeccable)

1. **Typographie** : Red Hat Display 800 (headings) + Red Hat Text 400/600 (body). Chargement async via `media="print" onload`. `text-wrap:balance` sur tous les titres.

2. **Couleurs** : Variables CSS de la LP uniquement. Pas de nouvelles couleurs. Neutrals tintés vers `--purple-main`. Jamais de texte gris pur sur fond coloré.

3. **Animation hero** : `ub-float` sur l'image produit (5s ease-in-out infinite). `prefers-reduced-motion` : `animation:none !important`.

4. **CTA pulse** : `ub-pulse-glow` sur `.btn-fill` (2.5s). Pause au hover. Aucune autre animation sur les boutons.

5. **Stagger reveals** : `.reveal` + IntersectionObserver sur toutes les sections. `.stagger-children` sur les grids de cards. Delay 0.1s entre chaque enfant.

6. **Mobile sticky CTA** : Visible ≤900px. `body { padding-bottom: 72px }`. Disparaît quand pricing visible (IntersectionObserver).

7. **Responsive breakpoints** : 900px (tablet) + 600px (mobile). Grids → 1 colonne. Nav links → hidden. Hero → 1 colonne, image en premier.

8. **Focus visible** : `outline: 2px solid var(--purple-main); outline-offset: 3px` sur tous les éléments interactifs.

9. **Performance images** : `loading="lazy"` sur tout ce qui est below-fold. `fetchpriority="high"` sur l'image hero. Format WebP via Shopify CDN (`?format=webp&width=800`).

10. **Sélecteur pays** : Supprimer les 50+ drapeaux PNG. Remplacer par texte simple dans le footer : "Livraison France & Europe". Gain estimé : -500KB page weight, LCP -1s.

---

## COMPLIANCE CHECKLIST OBLIGATOIRE (DGCCRF)

Vérifier avant push que la homepage contient :

- [ ] "Jusqu'à 4h de satiété" (jamais "4h garanties")
- [ ] "Contribue au contrôle de l'appétit" (jamais "coupe-faim" ou "brûle les graisses")
- [ ] EFSA ID 3120 référencé avec les conditions
- [ ] "Complément alimentaire" clairement indiqué
- [ ] "Ne se substitue pas à une alimentation variée et équilibrée" dans le footer
- [ ] "Déconseillé durant la grossesse et l'allaitement"
- [ ] Aucune mention de "perte de poids"
- [ ] Aucune mention de "café" (0% caféine uniquement)
- [ ] Aucun before/after corporel
- [ ] Statistiques (95%, 87%) : supprimer ou sourcer — ne pas reprendre sans référence

---

## HORS SCOPE

- ❌ Modifier le Meta Pixel ou les events CAPI
- ❌ Modifier Loox ou le système d'avis
- ❌ Modifier le cookie banner (déjà en place sur la LP)
- ❌ Modifier le checkout Shopify
- ❌ Créer de nouvelles images produit (utiliser celles existantes sur le CDN Shopify)
- ❌ Modifier la page /pages/uburn-lp (ne pas y toucher)
- ❌ Modifier le fichier theme.liquid head (Pixel en place)

---

## LIVRABLES ATTENDUS

1. **Diff complet** des fichiers Liquid modifiés avant push
2. **Preview Shopify** (thème non publié) pour validation visuelle Charles
3. **Checklist compliance** cochée
4. **Confirmation tag git backup** créé
5. **Test mobile 390px** passé (screenshot ou confirmation)
6. **Push sur branche feat/homepage-redesign** — PAS sur main

Push sur main uniquement après validation explicite de Charles.

---

*Prompt généré par UBURN-GROWTH · 17/04/2026*
*Basé sur audit comparatif 3 pages + design system LP + impeccable skill*
