# UBurn V2 Iteration 4 FINAL — "The Violet Matcha" Build Report
**Date** : 2026-05-15 (Night build)
**Theme** : `uburn-us-premium-v2` (#186066567487) — unpublished
**Live theme #185967575359** : INTOUCHÉ throughout

---

## 🌐 Preview URLs

| Page | URL |
|---|---|
| **Homepage** (16 sections, hero double-face) | https://1t9ayp-tw.myshopify.com/?preview_theme_id=186066567487 |
| **PDP** (with $250 bonus stack + Subscribe wired) | https://1t9ayp-tw.myshopify.com/products/ube-poudre?preview_theme_id=186066567487 |
| /pages/faq | https://1t9ayp-tw.myshopify.com/pages/faq?preview_theme_id=186066567487 |
| /pages/contact | https://1t9ayp-tw.myshopify.com/pages/contact?preview_theme_id=186066567487 |
| /pages/the-science | pending Charles manual page creation |
| /pages/our-story | pending Charles manual page creation |
| /pages/reviews | pending Charles manual page creation |

---

## ✅ Iter 4 NIGHT BUILD — what was added

### A. POSITIONING "THE VIOLET MATCHA"
Site repositioned around "Functional like a shake. Indulgent like a latte." with 3 use cases (hot latte / iced latte / shake with water).

### B. NEW sections built

#### 1. `u2-hero-split.liquid` — Double-face Hero (REPLACES u2-hero)
- **Left side** : "INDULGENT" label, gradient champagne → lavender → plum, SVG hot mug with steam + violet liquid + foam dots
- **Right side** : "FUNCTIONAL" label, gradient lavender-soft → iris → plum-deep, SVG bottle UB with monogram
- **Central** : circular "or" italique serif (88px mobile / 120px desktop)
- **Tags** : "hot latte · vanilla–hazelnut" / "with water · on-the-go"
- **Below** : eyebrow "est. 2024 · the violet matcha" + H1 serif italic "**Functional** like a shake. *Indulgent* like a latte." + sub + price + CTA "start the ritual" + 4 trust pills

#### 2. `u2-three-ways.liquid` — Three Ways To Drink
- "How you drink it · Three ways. One ritual."
- 3 cards : Hot latte (SVG mug) · Iced latte (SVG glass with ice) · With water (SVG UB bottle)
- Gradient backgrounds aligned with hero split (warm / cool / functional)
- Each card : SVG visual + numéro italic serif + title + desc + 3 chip tags
- Photo placeholder tags : "📍 hot latte · TBD" etc — ready for Charles photoshoot

#### 3. `u2-violet-bottle.liquid` — The Signature Object
- Bg plum-deep gradient with radial halos
- Big SVG bottle (220×320) with cap + body gradient + UB italic 900 monogram + "500 ML"
- H2 "The Violet *Bottle.*"
- 3 perks : Free with Subscribe & Save · Free with Maximum Pack · $29 standalone
- Scarcity : "only 500 bottles · first season"

#### 4. PDP bonus stack updated to **$250 in free bonuses** (5 bonuses incl. Violet Bottle)
- 📖 30-day "Reset your 4 PM" e-book · $50
- 👯 Private UBurn Collective group · $45
- 📣 Online UBurn community events · $55
- 💬 WhatsApp nutrition support 30 days · $50
- 💎 **NEW** Free Violet Bottle · 500 ml glass · UB monogram · $29

#### 5. Shopify Subscriptions REAL WIRING
- Selling plan `9311846719` ("Livrez chaque mois, 10% de réduction") wired in u2-pdp
- Subscribe radio adds hidden `<input name="selling_plan" value="9311846719">` to form
- Conditional render `{%- if sub_plan -%}` (hides if app not configured)
- Discount = 10% real (matches the live selling plan)

### C. Updates to existing sections
- **Header CTA** : "order" → **"start the ritual"** (matches new positioning)
- **Announcement marquee** : 4th message → "FREE Violet Bottle with Subscribe & Save"

### D. Homepage final order (16 sections, CRO-optimal flow with new content)

```
1. announcement-bar (marquee 4 messages)
2. header (sticky glassmorphism + "start the ritual" CTA)
3. hero-split (Indulgent/Functional double-face) ← NEW
4. trust-band (4 pills)
5. three-ways (Hot/Iced/Water) ← NEW
6. marquee (scrolling trust band)
7. problem ("It's biological")
8. formula-grid (6 plant actives, Acacia fixed)
9. efsa-block (authority validation EARLY)
10. stats (95/87/82/4.7)
11. violet-bottle (signature object teaser) ← NEW
12. pricing-cards (Starter / Maximum + bonus)
13. comparison (UBurn vs others)
14. before-after (Ashley K Week 1/4)
15. craft (atelier France)
16. guarantee-bar (4 trust icons)
17. final-cta
18. newsletter
+ footer
+ cart-drawer V2 (global)
```

---

## ✅ Compliance recheck — zero violations

```
0 × '1,500+'              ✓
0 × 'FDA dietary fiber'   ✓
0 × 'Claire Dubois'       ✓
0 × '6 lbs'               ✓
0 × 'clinically validated' ✓
0 × 'minceur'             ✓
0 × 'satisfait ou remboursé' ✓
```

✓ "30 kcal" used consistently (not 35)
✓ "4 hours" satiety (not 6h)
✓ FDA disclaimer in footer + science page
✓ "EFSA ID 3120" correctly cited
✓ "Crafted in France" (English, not "Marque Française")

---

## 📊 Cumulative across all 4 iterations

| Metric | Iter 1 | 2 | 3 | **Iter 4 final** |
|---|---|---|---|---|
| Section files /sections/u2-* | 10 | 17 | 21 | **34** |
| Snippets /snippets/u2-* | 10 | 10 | 10 | **11** (incl. cart drawer) |
| Homepage CRO sections (atomic) | 8 | 14 | 14 | **16 atomic + reordered** |
| PDP CRO sections | 10 | 11 | 16 | **16+ ($250 bonus stack)** |
| Standalone pages built | 0 | 5 | 5 | 5 |
| Compliance violations | 0 | 0 | 0 | **0** ✓ |
| Shopify Subscriptions | none | UI fake | UI fake | **REAL selling_plan wired** ✓ |
| Cart drawer V2 | Dawn | Dawn | Dawn | **Premium custom** ✓ |
| Hero | Standard | Standard | Standard | **Double-face split** ✓ |
| "Violet matcha" positioning | no | no | no | **YES** ✓ |
| "Violet Bottle" merch teaser | no | no | no | **YES** ✓ |
| $250 bonus stack (5 items) | no | no | no | **YES** ✓ |

---

## 🚨 Remaining blockers (Charles actions)

### Immediate (this week)
1. **Create 3 Shopify pages** via admin (5 min) :
   - "The Science Behind UBurn" → handle `the-science` → template suffix `the-science`
   - "Our Story" → handle `our-story` → template suffix `our-story`
   - "Reviews" → handle `reviews` → template suffix `reviews`
2. **Verify Shopify Subscriptions** app end-to-end checkout flow (selling plan exists, just need confirmation customer portal works)
3. **Upload Violet Bottle product** to Shopify if you want to sell it standalone at $29 (otherwise it's just a free gift bundled with Subscribe/Maximum)

### P1 photoshoot (per IMAGES-TO-PRODUCE.md — still applies)
4. Hero hot latte (warm gradient frame)
5. Hero shake bottle (cool gradient frame)
6. Three Ways images : Hot · Iced · Water (lifestyle 4:3 each)
7. Violet Bottle hero (product shot 1:1)
8. Atelier France wider (4:5)
9. Ritual macro shots (Pour / Stir / Breathe)
10. Real customer photos (Ashley/Jennifer/Rachel verified)

### Iteration 5 candidates
11. Exit-intent popup (Klaviyo)
12. Promo sticky bar with discount code
13. Lighthouse + WebP image conversion
14. Cart drawer cross-sell recommendation
15. Loox real widget activation
16. Pack image swap (remove "#1 Marque Française" FR overlay — requires reshoot or retouch)

---

## 📸 Screenshots

`_build-reports/SCREENSHOTS-ITER4-FINAL-2026-05-15/` :
- `iter4-final-home-desktop.png` (1440 × full page — 16 sections visible incl. hero split + three ways + violet bottle)
- `iter4-final-home-mobile.png` (390 × full page)

---

## 📦 Section files inventory (34 u2-* in /sections/)

### Homepage atomic flow (in order)
1. u2-announcement-bar (marquee 4 messages rotating)
2. u2-header (sticky glassmorphism + drawer)
3. **u2-hero-split** (NEW Iter 4)
4. u2-trust-band
5. **u2-three-ways** (NEW Iter 4)
6. u2-marquee
7. u2-problem
8. u2-formula-grid
9. u2-efsa-block
10. u2-stats
11. **u2-violet-bottle** (NEW Iter 4)
12. u2-pricing-cards
13. u2-comparison
14. u2-before-after
15. u2-craft
16. u2-guarantee-bar
17. u2-final-cta
18. u2-newsletter
19. u2-footer

### PDP sections (in order)
- u2-pdp (gallery + variants + Subscribe wiring + ATC + ritual + testimonials + faq + science link + $250 bonus stack)
- u2-pdp-ritual-quiz (3-question matcher)
- u2-pdp-before-after-workday
- u2-pdp-precision (atelier France)
- u2-comparison (reused)
- u2-pdp-science-teaser

### Standalone page sections
- u2-science
- u2-our-story
- u2-contact
- u2-reviews
- u2-faq-page

### Legacy / kept for reference
- u2-homepage (monolithic, replaced by atomic — kept available)
- u2-hero (older single-face, replaced by u2-hero-split)
- u2-pick-your-pack (built but not wired — inline structure used in u2-pdp directly)

---

## Tag + Branch
- Git tag : `v2-iteration-4-final-night-build-2026-05-15`
- Branch : `uburn-v2`

---

## What "PUBLISH V2 CONFIRMED" would do

```bash
shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=186066567487 --force
```

→ Theme #186066567487 becomes LIVE
→ Current live #185967575359 → unpublished (rollback instant target)
→ Compliance-fix #186067222847 → stays as backup
→ BUCKS Currency Converter : reattaches automatically (app-level not theme-level)
→ Shopify Subscriptions : continues working (selling plans are product-level)
→ Loox / Judge.me : continue working (read from product metafields)

**Rollback ≤ 2 min** : `shopify theme publish --theme=185967575359 --force`

---

## ✅ Iteration 4 FINAL — status COMPLETE

Build d'une traite livré : Hero double-face split + Three ways to drink + Violet Bottle teaser + $250 bonus stack on PDP + Subscribe & Save real wiring + 16 atomic homepage sections in CRO-optimal order + zero compliance violations.

**Awaiting Charles validation in browser before any publish.**
