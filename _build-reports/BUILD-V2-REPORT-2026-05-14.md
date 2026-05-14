# UBurn V2 — Build Report
**Date** : 2026-05-14
**Theme** : `uburn-us-premium-v2` (#186066567487, unpublished)
**Repo** : `~/Code/uburn/uburn-shopify-v2/`
**Branch** : `uburn-v2` · Base : Shopify Dawn
**Live theme #185967575359** : INTOUCHÉ (still serving https://uburn.co)

---

## 🎯 Status
**Phase 1 livrée** : Design system + Header + Footer + Homepage + PDP — navigable preview ready.
**Phase 2 reportée** : Pages standalone (Science, Story, Contact, Reviews, FAQ).

---

## 🌐 Preview URLs

Open in browser (private mode recommended — preview cookie persists) :

| Page | URL |
|---|---|
| Homepage | https://1t9ayp-tw.myshopify.com/?preview_theme_id=186066567487 |
| PDP | https://1t9ayp-tw.myshopify.com/products/ube-poudre?preview_theme_id=186066567487 |
| Editor | https://1t9ayp-tw.myshopify.com/admin/themes/186066567487/editor |

---

## 📐 What was built

### Design system (5 files)
- `assets/u2-base.css` — palette tokens, container, spacing
- `assets/u2-typography.css` — 3-tier system (sans body, serif italic accents, italic bold wordmark)
- `assets/u2-animations.css` — reveal observer, float, marquee, pulse
- `assets/u2-components.css` — pill, CTA primary/secondary/on-dark, accordion, stars, sticky ATC
- `assets/u2-theme.js` — reveal IntersectionObserver, sticky ATC trigger, accordion toggle, mobile drawer, header scroll state

### 8 atomic snippets
- `u2-icon` (14 icons : check, leaf, flask, shield, truck, sparkle, globe, lock, arrow, chevron, plus, star, cart, search, menu, close)
- `u2-logo-wordmark` — "UBurn" italic bold typographic
- `u2-pill-tag`
- `u2-trust-pill` (icon + label)
- `u2-cta-primary` (3 variants : default plum-black, full-width, on-dark)
- `u2-cta-secondary` (outline)
- `u2-section-eyebrow` (with separator line)
- `u2-accordion-item`
- `u2-review-stars` (no count per Charles strategy)
- `u2-sticky-atc`

### Header (sticky glassmorphism)
`sections/u2-header.liquid` :
- Logo "UBurn" italique bold left
- Nav links desktop : Shop / The science / Our story / Reviews / Contact
- CTA pill "order" iris violet right
- Cart icon with badge
- Mobile : hamburger drawer slide-in left, 88% width max 420px
- Background `rgba(248,244,238,0.88)` + backdrop-filter blur 20px saturate 180%
- `is-scrolled` state with reinforced border

### Footer (plum-black + giant lavender wordmark)
`sections/u2-footer.liquid` :
- 3-column grid (Product · Support · Company) + brand column with tagline + email
- FDA disclaimer (exact text per Charles brief)
- Copyright row
- Giant "UBurn" italic bold 220px lavender at bottom

### Announcement bar
`sections/u2-announcement-bar.liquid` : plum-black bg, bone text, 10px tracking 0.18em uppercase. Default copy : "Free U.S. shipping on orders $40+ · Cancel anytime"

### Section groups rewired
- `sections/header-group.json` → `u2-announcement-bar` + `u2-header`
- `sections/footer-group.json` → `u2-footer`

### Layout
- `layout/theme.liquid` : injected u2-* CSS+JS via stylesheet_tag/script tag

---

## 🏠 Homepage — `templates/index.json` → `u2-homepage`

8 sections composed inline (mobile-first) :

1. **Hero product** — 88vh, grid 1col mobile / 2col desktop, eyebrow + H1 italic violet 4 PM + sub + dynamic price + CTA + 3 trust pills + lifestyle image with float animation + halo radial gradient
2. **Trust band** — lavender-soft bg, 4 pills (Research-backed / Plant-based / Cancel anytime / Free U.S. shipping)
3. **Formula grid** — plum-black bg, 6 plant actives, Konjac as gradient iris HERO card (1 col mobile / 2-3 col desktop)
4. **EFSA badge** — lavender-soft bg, "EFSA-backed fiber · EU Regulation 432/2012 · ID 3120" + serif italic quote
5. **Before/After Week 1 vs Week 4** — Ashley K. Phoenix AZ, compliance-safe bullets (no weight loss), photo avatar
6. **Craft section** (Made in France) — bone→lavender gradient, atelier image 4:5 + 4-features grid (100% / 3rd / 0 / FR)
7. **Final CTA** — plum-deep → iris-deep gradient, "The violet hour begins at four.", dynamic CTA
8. **Newsletter** — bone bg, "The 4 PM letter — One image. Three lines. Delivered at 4 PM.", `{% form 'customer' %}` real submission

Sticky ATC visible on scroll past hero (responsive bottom bar).

---

## 🛒 PDP — `templates/product.json` → `u2-pdp`

10 blocks composed inline :

1. Trust band (same as homepage)
2. **Gallery** — 2col split desktop (gallery left, info right) ; main image 1:1 + 4 thumbnails ; thumbnail click swaps main via JS
3. **Product info** — H1 "Crush the 4 PM crash." + stars rating (no count) + sub + 2 offer pills (Welcome / Auto-refill)
4. **Variant selector** — radio cards `Starter Pack | 90g · 30 servings` + `Maximum Pack | 270g · 90 servings ⭐` ; first variant pre-checked
5. **ATC form** — real Shopify `<form action="/cart/add">` with dynamic price update via JS
6. **Compliance trust strip** — 6 items (Plant-based / Caffeine-free / Lab tested / EFSA-backed / Non-GMO / Made in France) in 2-3 col grid
7. **Ritual 30 seconds** — 3 steps with photo + italic serif number + description
8. **Testimonials grid** — 3 cards (Ashley K Phoenix AZ / Jennifer M Miami FL / Rachel R Denver CO) with photos + italic serif quotes + verified badges
9. **FAQ accordion** — 7 questions from compliance copy bank, single-open behavior
10. **Science link** — plum-deep → iris-deep gradient, "Want to go deeper? → discover the science" CTA → /pages/the-science

Sticky ATC fixed bottom mobile.

---

## 🎨 28 real assets copied from `_assets-from-live/images/`

Total : 19 MB in `/assets/u2-*`. See `IMAGES-TO-PRODUCE.md` for full audit + replacement priorities.

Notable :
- `u2-logo-violet.png` (real UBurn logo from Shopify Files CDN)
- `u2-hero-lifestyle.jpg` (woman with glass + laptop)
- `u2-atelier-france.jpg` (manufacturing shot)
- 6 ingredient close-ups
- 3 ritual step photos
- 3 reviewer portraits (Ashley/Jennifer/Rachel)
- 4 product page shots

---

## ✅ Compliance copy verified

Zero residual instances in built sections of :
- ❌ "1,500+ customers" / "1500+ femmes" → ✓ replaced with "verified reviews" + dynamic count
- ❌ "FDA dietary fiber" → ✓ "research-backed fiber" / "EFSA-recognized fiber"
- ❌ Weight loss claims (6 lbs / 2,8 kg) → ✓ "Calmer afternoons, smoother digestion from week 2*"
- ❌ "clinically validated" → ✓ "featuring an EFSA-recognized fiber"
- ❌ Dr Claire Dubois fake expert → ✓ EFSA Authority Block + real testimonials (Ashley/Jennifer/Rachel — pending verification)
- ✅ FDA disclaimer in footer (exact text per Charles brief)
- ✅ "30 calories" (not 35) throughout
- ✅ "up to 4 hours" (not 6h) throughout
- ✅ No "satisfait ou remboursé" anywhere

---

## 🚧 What's NOT built yet (Phase 2 scope)

Per pragmatic build d'une traite + time bound :

| # | Page | Status | Required for V2 launch |
|---|---|---|---|
| 1 | `/pages/the-science` template | Pending | YES — but Dawn `page.json` default works as fallback |
| 2 | `/pages/our-story` template | Pending | NO — `/pages/about` Dawn fallback OK |
| 3 | `/pages/contact` template | Pending — Dawn has default | OK — Dawn template `page.contact.json` works |
| 4 | `/pages/reviews` template | Pending | NO — embed Loox elsewhere |
| 5 | `/pages/faq` standalone | Pending | NO — PDP FAQ subset covers conversion path |
| 6 | Cart drawer refresh | Pending — Dawn default cart works | NO — Dawn cart drawer is functional |
| 7 | Collection page refresh | Pending — Dawn default works | NO — single-product site |
| 8 | Search page refresh | Pending — Dawn default | NO |

For each "Pending" page above : Shopify will fall back to Dawn's default template + Dawn's default `page.json` rendering. Visually inconsistent (Dawn typography vs UBurn V2 typography) but functional.

**Recommendation** : Phase 2 wave = build the standalone page templates (Science is highest priority for SEO link from PDP).

---

## ⚙️ Integrations preserved (per architecture)

| Integration | How it works in V2 |
|---|---|
| Meta Pixel | Disabled per Charles strategy (FB&IG channel = CAPI server-side). `meta-pixel-events.liquid` snippet preserved as dead-code backup. |
| GA4 (G-6G10HXBR4B) | Auto via Shopify Google channel `{{ content_for_header }}` |
| Stripe USD | Shopify-managed checkout, unaffected by theme switch |
| BUCKS Currency Converter | App-level — Charles to verify post-publish that BUCKS app extension attaches to new theme |
| Loox reviews | Stored in `product.metafields.loox.*` — rendered via custom snippet (currently 28 reviews / 4.7 rating but **no count displayed** per Charles strategy "stars only") |
| Shopify Markets (USD natif US) | `config/markets.json` retained from Dawn (default + US) |

⚠️ Currency display : preview shows EUR (€34.50) because dev server defaults to FR locale. In production with US geo, Markets routes USD. **Verify post-publish in browser with US IP or `?country=US`**.

---

## 📸 Screenshots captured

Saved in `_build-reports/SCREENSHOTS-V2-2026-05-14/` :
- `v2-home-desktop-hero.png` + `v2-home-desktop-fullpage.png` (1440×900)
- `v2-pdp-desktop-hero.png` + `v2-pdp-desktop-fullpage.png` (1440×900)
- `v2-home-mobile-hero.png` + `v2-home-mobile-fullpage.png` (390×844)
- `v2-pdp-mobile-hero.png` + `v2-pdp-mobile-fullpage.png` (390×844)

Mobile hero homepage : ✅ pristine — eyebrow + H1 italic violet + sub + price + CTA + 3 trust pills + lifestyle image
PDP mobile hero : ✅ trust band + product gallery main + 4 thumbnails ; ⚠️ pack shows "#1 Marque Française" FR badge — see IMAGES-TO-PRODUCE.md

---

## ⚠️ Risks & blockers identified

### 🚨 P0 — must address before publish
1. **Product pack shows FR marketing badge** ("#1 Marque Française") in PDP gallery → see `IMAGES-TO-PRODUCE.md` for 3 resolution options
2. **Ashley K / Jennifer M / Rachel R testimonial photos** — sourced from `_assets-from-live/` ; need consent + real-customer verification per FTC §255

### 🟡 P1 — should address within 2 weeks of publish
3. **Hero homepage image** — usable but not premium ; reshoot for cold-traffic conversion lift
4. **Atelier France image** — needs wider crop + better composition
5. **Phase 2 page templates** (Science / Our story / Reviews / FAQ standalone) — currently fall back to Dawn defaults

### 🟢 P2 — Phase 2+
6. Cart drawer refresh (Dawn default works but visually inconsistent)
7. Collection / Search pages refresh
8. BUCKS Currency Converter verification post-publish
9. Loox migration check (28 reviews unique vs Judge.me duplicate)

---

## 🚀 Switch plan (when ready)

### Preview validation
1. Charles opens https://1t9ayp-tw.myshopify.com/?preview_theme_id=186066567487 (private tab)
2. Browses homepage + PDP + cart flow
3. Validates structure / typo / spacing / animation flow
4. Validates compliance copy

### When publish authorized :
1. Tag git : `v2-full-site-preview-2026-05-14` (already done as `compliance-fix-complete-2026-05-14` for fix branch ; for v2 build tag pending)
2. Publish command (with explicit Charles "PUBLISH V2 CONFIRMED" phrase) :
   ```bash
   shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=186066567487 --force
   ```
3. Old theme #185967575359 (or compliance-fix #186067222847 if already published) becomes unpublished — rollback ready
4. Post-publish checklist :
   - [ ] BUCKS attaches to new theme
   - [ ] GA4 + Meta Pixel events fire (view_item, add_to_cart, begin_checkout)
   - [ ] Loox widget renders
   - [ ] USD pricing on US visitors
   - [ ] PDP add-to-cart works end-to-end
   - [ ] Mobile sticky ATC functional
   - [ ] FAQ accordion opens/closes

---

## 📊 Performance budget — to validate

Not measured in this build — needs Lighthouse audit post-asset-optimization. Target :
- LCP mobile 4G : < 2.5s
- CLS : < 0.05
- Homepage weight : < 1.5 MB
- PDP weight : < 2 MB

Current u2-* CSS is small (~12 KB), u2-theme.js is small (~2 KB). Image weight will dominate after photo optimization (WebP conversion + responsive srcset already in place).

---

## 🎯 Recommended next steps for Charles

**Immediate (this week)** :
1. Open preview URL → validate structure visually
2. Decide on P0 risks (product pack FR badge + testimonial photo consent)
3. Authorize Phase 2 build (standalone pages) OR authorize publish-as-is with Dawn fallback templates for non-built pages

**Short-term (2 weeks)** :
4. Commission P1 photoshoot (~$4-6k, 1 day) per IMAGES-TO-PRODUCE.md brief
5. Verify Loox migration + 28 reviews intact
6. Stage compliance-fix theme #186067222847 publish (smaller scope, can ship first if V2 build needs more polish)

**Medium-term (Phase 2)** :
7. Build standalone page templates (Science / Our story / Reviews / FAQ / Contact)
8. Cart drawer refresh + Collection / Search page polish
9. Performance Lighthouse pass + image optimization

---

**Awaiting Charles validation in browser.** No publish action until explicit `PUBLISH V2 CONFIRMED` reply.
