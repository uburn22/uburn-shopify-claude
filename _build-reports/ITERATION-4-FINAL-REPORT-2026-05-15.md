# UBurn V2 Iteration 4 — Final Build Report (Autonomous Night Mode)
**Date** : 2026-05-15
**Theme** : `uburn-us-premium-v2` (#186066567487) — unpublished
**Live theme #185967575359** : INTOUCHÉ throughout entire build

---

## 🌐 Preview URLs (private tab — cookie persists)

| Page | URL |
|---|---|
| **Homepage** (14 atomic sections, CRO-optimal order) | https://1t9ayp-tw.myshopify.com/?preview_theme_id=186066567487 |
| **PDP** (16+ sections + Subscribe & Save wired) | https://1t9ayp-tw.myshopify.com/products/ube-poudre?preview_theme_id=186066567487 |
| /pages/faq | https://1t9ayp-tw.myshopify.com/pages/faq?preview_theme_id=186066567487 |
| /pages/contact | https://1t9ayp-tw.myshopify.com/pages/contact?preview_theme_id=186066567487 |
| /pages/the-science | pending Charles manual page creation |
| /pages/our-story | pending Charles manual page creation |
| /pages/reviews | pending Charles manual page creation |

---

## ✅ ITER 4 — What was delivered

### A. Shopify Subscriptions VERIFIED & WIRED
Found existing selling plan via Admin GraphQL :
- **Group** : `gid://shopify/SellingPlanGroup/3637215551` — "Subscribe & Save 10%"
- **Plan** : `gid://shopify/SellingPlan/9311846719` — "Livrez chaque mois, 10% de réduction"

`u2-pdp.liquid` updated to :
- Iterate `product.selling_plan_groups` and grab first plan dynamically
- Render Subscribe radio only if plan exists (conditional `{%- if sub_plan -%}`)
- Display "−10%" badge (matches real plan discount, not fake 15%)
- JS adds hidden `<input name="selling_plan" value="9311846719">` to form on Subscribe selection
- Shopify Subscriptions app handles the rest at checkout (auto-refill, billing, customer portal)

### B. Homepage ATOMIC SPLIT — 14 sections, CRO-optimal order
8 new atomic section files created (extracted from old monolith):
- `u2-hero.liquid` (with sticky ATC + product price + 3 trust pills)
- `u2-trust-band.liquid` (lavender-soft ribbon, 4 trust pills)
- `u2-formula-grid.liquid` (6 plant actives, Konjac hero spans 2 rows desktop — Acacia orphan fixed)
- `u2-efsa-block.liquid` (EFSA badge + quote)
- `u2-before-after.liquid` (Ashley K Week 1 vs Week 4)
- `u2-craft.liquid` (atelier France + 4 features)
- `u2-final-cta.liquid` (plum→iris gradient close)
- `u2-newsletter.liquid` (4 PM letter capture)

Plus existing : u2-marquee, u2-problem, u2-stats, u2-pricing-cards, u2-comparison, u2-guarantee-bar.

**Final order in `templates/index.json`** (per Iter 4 brief recommendation) :
1. Hero (above the fold, price + CTA + trust pills)
2. Trust band (immediate reassurance)
3. Marquee (brand reinforcement scroll)
4. Problem ("It's biological")
5. Formula grid (6 plant actives — fixed Acacia grid)
6. EFSA Authority (science validation EARLY)
7. Stats 95/87/82/4.7
8. Pricing cards (Starter / Maximum + bonus stack)
9. Comparison table (objection handling)
10. Before/After Week 1 vs Week 4 (outcome proof)
11. Craft France (heritage trust)
12. Guarantee bar (friction removal)
13. Final CTA
14. Newsletter

CRO sequence : Problem → Solution → Science → Proof → Price → Objection → Outcome → Trust → Friction → Close.

### C. CART DRAWER V2 — premium glassmorphism
`snippets/u2-cart-drawer.liquid` (rendered globally via `layout/theme.liquid`) :
- Slide-in from right, max 480px desktop / full mobile
- Glassmorphism : `rgba(248,244,238,0.97)` + `backdrop-filter: blur(20px) saturate(180%)`
- Shadow `-10px 0 40px rgba(26,15,46,0.15)`
- Border-left lavender-soft

**Features** :
- Header : "Your bag · N items" + close X
- **Free shipping progress bar** :
  - If subtotal < $40 : "Add $X.XX to unlock free shipping"
  - If subtotal ≥ $40 : "✓ Free shipping unlocked"
  - Animated fill (gradient lavender → iris)
- Line items : thumbnail + name + variant + Subscription badge (if `item.selling_plan_allocation`) + qty +/- + price + remove link
- Subtotal block : subtotal + "Shipping & taxes calculated at checkout"
- Primary CTA : "Checkout — $XX.XX" (plum-black pill, hover iris)
- Continue shopping link

**JS** :
- Open on cart icon click (prevents default /cart navigation)
- Open after add-to-cart submit success
- Close on overlay click / X / Escape key
- Qty change via `fetch /cart/change.js`
- Remove via `fetch /cart/change.js?quantity=0`

### D. ANNOUNCEMENT BAR — rotating marquee
`u2-announcement-bar.liquid` upgraded :
- 4 rotating messages (configurable via section settings) :
  - "Free U.S. shipping on orders $40+"
  - "Cancel anytime · No commitment"
  - "Crafted in France · Loved in the U.S."
  - "Save 10% with Subscribe & Save"
- 30s scroll loop
- Pause on hover (desktop)
- Respects `prefers-reduced-motion` (flexes to wrap when motion reduced)

### E. PDP — Subscribe & Save real wiring
Already detailed above. Wired to real `selling_plan.id` = `9311846719`.
Subscribe radio appears with conditional render `{%- if sub_plan -%}` so if Charles uninstalls Subscriptions app, the variant gracefully hides.

---

## ✅ Compliance recheck — homepage (live grep on rendered HTML)

```
0 × '1,500+'
0 × 'FDA dietary fiber'
0 × 'Claire Dubois'
0 × '6 lbs'
0 × 'clinically validated'
0 × 'minceur'
0 × 'satisfait ou remboursé'
```

All 7 forbidden patterns : **zero hits**. ✓

---

## 📊 Build deltas across all 4 iterations

| Metric | Iter 1 | Iter 2 | Iter 3 | Iter 4 |
|---|---|---|---|---|
| Section files in /sections/u2-* | 10 | 17 | 21 | **29** |
| Snippets in /snippets/u2-* | 10 | 10 | 10 | **11** (+u2-cart-drawer) |
| CRO blocks on homepage | 8 | 14 | 14 | **14 atomic + reordered** |
| CRO blocks on PDP | 10 | 11 | 16+ | 16+ |
| Standalone pages built | 0 | 5 | 5 | 5 (3 still need Charles page creation) |
| Compliance violations | 0 | 0 | 0 | **0** ✓ |
| Shopify Subscriptions wired | no | UI only | UI only | **REAL selling_plan** ✓ |
| Cart drawer V2 | Dawn default | Dawn default | Dawn default | **Custom premium** ✓ |
| Image weight assets | 19 MB | 19 MB | 19 MB | 19 MB (28 real assets) |

---

## 🚧 Known limitations (Phase 5 / pending Charles actions)

### Charles actions needed
1. **Create 3 Shopify pages** via admin (5 min) :
   - "The Science Behind UBurn" · handle `the-science` · template suffix `the-science`
   - "Our Story" · handle `our-story` · template suffix `our-story`
   - "Reviews" · handle `reviews` · template suffix `reviews`
2. **Verify Shopify Subscriptions app** is fully configured (selling plan exists, but verify checkout flow works end-to-end)
3. **Commission P1 photoshoot** per `IMAGES-TO-PRODUCE.md` (Iter 1 brief still applies — hero/atelier/ritual/UGC images need upgrade for paid traffic launch)

### Technical limitations
4. **"#1 Marque Française" overlay** on Shopify product images — still visible on certain product photos in PDP gallery. Theme can't remove (it's burned into the image). Charles must reshoot pack OR replace via Shopify admin Files. Per IMAGES-TO-PRODUCE.md priority P1.
5. **Loox widget** — section conditional render works but metafield `loox.reviews` is empty. Loox app needs full install/activation for widget to populate.
6. **"#1 Marque Française" badge** — same as above.

### Iteration 5 candidates
7. Exit-intent popup (requires Klaviyo / OptinMonster app)
8. Promo sticky bar with discount code (UBE10 etc.) — requires Shopify Discount API config
9. Lighthouse performance audit + WebP image conversion (current images are JPG, all have width/height attrs so CLS OK)
10. JSON-LD Product schema verification on PDP
11. Cart drawer cross-sell suggestion (currently empty — pending product complementarity strategy)

---

## 📸 Final screenshots

`_build-reports/SCREENSHOTS-ITER4-2026-05-15/` :
- `iter4-home-desktop-full.png` (1440 × full page — all 14 sections atomic order visible)
- `iter4-home-mobile-full.png` (390 × full page)

PDP screenshots from Iter 3 still valid (no PDP layout change, just Subscribe wiring fix).

---

## 🎯 What "PUBLISH V2 CONFIRMED" would actually do

When Charles authorizes publish :
```bash
shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=186066567487 --force
```
- Theme #186066567487 (uburn-us-premium-v2) becomes LIVE
- Current live #185967575359 → automatically becomes unpublished (rollback target)
- Compliance-fix theme #186067222847 → stays as backup
- BUCKS Currency Converter app : Charles to verify post-publish that the app reattaches to new live theme (it was theme-attached to #185967575359)
- Shopify Subscriptions : continues to work since selling plans are product-level, not theme-level
- Loox / Judge.me : continue to work since they read from product metafields

**Rollback (≤ 2 min)** :
```bash
shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=185967575359 --force
```

---

## 📦 Final inventory

### Sections (29 u2-* files in /sections/)
**Homepage atomic** : u2-hero · u2-trust-band · u2-marquee · u2-problem · u2-formula-grid · u2-efsa-block · u2-stats · u2-pricing-cards · u2-comparison · u2-before-after · u2-craft · u2-guarantee-bar · u2-final-cta · u2-newsletter

**PDP** : u2-pdp · u2-pdp-ritual-quiz · u2-pdp-before-after-workday · u2-pdp-precision · u2-pdp-science-teaser

**Standalone pages** : u2-science · u2-our-story · u2-contact · u2-reviews · u2-faq-page

**Layout** : u2-announcement-bar · u2-header · u2-footer · u2-homepage (legacy, kept for reference)

### Snippets (11 u2-* files in /snippets/)
u2-icon (16 icons) · u2-logo-wordmark · u2-pill-tag · u2-trust-pill · u2-cta-primary · u2-cta-secondary · u2-section-eyebrow · u2-accordion-item · u2-review-stars · u2-sticky-atc · **u2-cart-drawer** (NEW Iter 4)

### Design system (5 CSS + 1 JS in /assets/)
u2-base.css · u2-typography.css · u2-animations.css · u2-components.css · u2-theme.js

### Real product assets (28 files in /assets/u2-*)
Logo · 8 product shots · 6 ingredient close-ups · 3 ritual photos · 5 lifestyle/hero · 3 reviewer portraits · 2 before/after shots · atelier France

### Templates wired (7 page templates)
index.json · product.json · page.the-science.json · page.our-story.json · page.contact.json · page.reviews.json · page.faq.json

### Section groups wired
header-group.json → u2-announcement-bar + u2-header
footer-group.json → u2-footer

---

## ✅ Iteration 4 status

**COMPLETE** — Awaiting Charles validation in browser before any publish.

Git tag : `v2-iteration-4-final-ready-2026-05-15`
Branch : `uburn-v2`

---

**For publish authorization, Charles must reply exactly :** `PUBLISH V2 CONFIRMED`
