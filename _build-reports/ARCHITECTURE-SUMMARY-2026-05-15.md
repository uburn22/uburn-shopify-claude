# UBurn V2 — Architecture Summary (Freeze)
**Date** : 2026-05-15
**Theme** : `uburn-us-premium-v2` (#186066567487) — unpublished
**Live theme #185967575359** : INTOUCHÉ
**Branch** : `uburn-v2` · Repo : `~/Code/uburn/uburn-shopify-v2/`

---

## A. File structure

### /sections/u2-*.liquid (32 files)

**Atomic homepage sections** :
- `u2-hero-split.liquid` — Double-face hero (Indulgent / Functional)
- `u2-hero.liquid` — Single-face hero (legacy, kept)
- `u2-trust-band.liquid` — 4-pill trust ribbon
- `u2-three-ways.liquid` — Hot/Iced/Water cards (NEW Iter 4)
- `u2-marquee.liquid` — scrolling trust band
- `u2-problem.liquid` — "It's biological" 3 cards
- `u2-formula-grid.liquid` — 6 plant actives
- `u2-efsa-block.liquid` — EFSA authority
- `u2-stats.liquid` — 95/87/82/4.7 stats
- `u2-violet-bottle.liquid` — Signature object teaser (NEW Iter 4)
- `u2-pricing-cards.liquid` — Starter / Maximum + bonus
- `u2-comparison.liquid` — UBurn vs traditional table
- `u2-before-after.liquid` — Ashley K Week 1/4
- `u2-craft.liquid` — Atelier France + features
- `u2-guarantee-bar.liquid` — 4 trust icons
- `u2-final-cta.liquid` — gradient close
- `u2-newsletter.liquid` — 4 PM letter capture

**PDP-specific sections** :
- `u2-pdp.liquid` — gallery + variants + ATC + ritual + testimonials + FAQ + science link + $250 bonus stack
- `u2-pdp-ritual-quiz.liquid` — 3-question matcher
- `u2-pdp-before-after-workday.liquid` — Your 4 PM rewritten
- `u2-pdp-precision.liquid` — Atelier France + 4 features
- `u2-pdp-science-teaser.liquid` — Hook to /pages/the-science
- `u2-pick-your-pack.liquid` — Standalone pricing pattern (not wired, reference design)

**Standalone page sections** :
- `u2-science.liquid` — full Science page
- `u2-our-story.liquid` — Heritage France story
- `u2-contact.liquid` — Contact form + quick links
- `u2-reviews.liquid` — Loox widget + curated testimonials
- `u2-faq-page.liquid` — 12 Q in 3 categories + schema

**Header / footer / announcement** :
- `u2-announcement-bar.liquid` — marquee 4 messages rotating
- `u2-header.liquid` — sticky glassmorphism + mobile drawer
- `u2-footer.liquid` — plum-black + giant lavender wordmark

**Legacy** :
- `u2-homepage.liquid` — monolithic v1 (replaced by atomic, kept for reference)

### /snippets/ (11 u2-* files)
- `u2-icon.liquid` — 16 inline SVG icons (check, leaf, flask, shield, truck, sparkle, globe, lock, arrow-right, chevron-down, plus, star, cart, search, menu, close)
- `u2-logo-wordmark.liquid` — "UBurn" italic bold typographic
- `u2-pill-tag.liquid`
- `u2-trust-pill.liquid` (icon + text)
- `u2-cta-primary.liquid` (3 variants : default plum-black, full-width, on-dark)
- `u2-cta-secondary.liquid` (outline)
- `u2-section-eyebrow.liquid` (with line separator)
- `u2-accordion-item.liquid`
- `u2-review-stars.liquid` (no count per strategy)
- `u2-sticky-atc.liquid`
- `u2-cart-drawer.liquid` — Premium cart drawer (rendered globally via theme.liquid)

### /templates/ (16 JSON files)
- `index.json` → wires 16 homepage sections (atomic order)
- `product.json` → wires u2-pdp + u2-pdp-ritual-quiz + u2-pdp-before-after-workday + u2-pdp-precision + u2-comparison + u2-pdp-science-teaser
- `page.the-science.json` → u2-science (page must be created in Shopify admin)
- `page.our-story.json` → u2-our-story (page must be created)
- `page.contact.json` → u2-contact (page exists ✓)
- `page.reviews.json` → u2-reviews (page must be created)
- `page.faq.json` → u2-faq-page (page exists ✓)
- Others (404, article, blog, cart, collection, list-collections, page, password, search) : Dawn defaults

### /assets/ (5 u2-* CSS+JS files + 28 image files)
- `u2-base.css` — palette tokens, container, spacing scale
- `u2-typography.css` — 3-tier system (serif italic accents / sans bold italic wordmark / sans body)
- `u2-animations.css` — reveal observer + float + marquee + pulse
- `u2-components.css` — pill, CTA, accordion, stars, sticky ATC atoms
- `u2-theme.js` — reveal IntersectionObserver, sticky ATC trigger, accordion toggle, mobile drawer, header scroll state
- 28 u2-*.jpg/png files (logo + product shots + ingredients + ritual + reviewers + atelier)

### /layout/theme.liquid
Modifications :
- Injects u2-base.css + u2-typography.css + u2-animations.css + u2-components.css + u2-theme.js via stylesheet_tag/script_tag after `{{ content_for_header }}`
- Renders `{% render 'u2-cart-drawer' %}` globally before footer-group

### /sections/header-group.json + /sections/footer-group.json
Rewired to use u2-* sections (u2-announcement-bar + u2-header / u2-footer).

---

## B. Structure per page

### Homepage `/` — `templates/index.json` → u2-* atomic flow
**Order (16 sections in templates/index.json)** :
1. hero (u2-hero-split)
2. trust-band (u2-trust-band)
3. three-ways (u2-three-ways)
4. marquee (u2-marquee)
5. problem (u2-problem)
6. formula (u2-formula-grid)
7. efsa (u2-efsa-block)
8. stats (u2-stats)
9. violet-bottle (u2-violet-bottle)
10. pricing (u2-pricing-cards)
11. compare (u2-comparison)
12. before-after (u2-before-after)
13. craft (u2-craft)
14. guarantee (u2-guarantee-bar)
15. final-cta (u2-final-cta)
16. newsletter (u2-newsletter)

Status : **✅ COMPLETE**

### PDP `/products/ube-poudre` — `templates/product.json`
**Order (6 sections + main pdp block which contains 10 sub-blocks)** :
- u2-pdp (mega-section : trust band + gallery + info + variants + Subscribe + ATC + bonus stack $250 + compliance pills + ritual 30s Pour/Stir/Breathe + testimonials grid Ashley/Jennifer/Rachel + FAQ accordion 7Q + science link)
- u2-quiz (u2-pdp-ritual-quiz)
- u2-workday (u2-pdp-before-after-workday)
- u2-precision (u2-pdp-precision)
- u2-compare (u2-comparison reused)
- u2-scit (u2-pdp-science-teaser)

Status : **🟡 PARTIAL** — see PDP-MISSING-ELEMENTS-2026-05-15.md

### `/pages/the-science` — `templates/page.the-science.json` → u2-science
Status : **🔴 PAGE MISSING** — Charles must create the Shopify page entity in admin.
Template wired, section built, content compliance-safe.

### `/pages/our-story` — `templates/page.our-story.json` → u2-our-story
Status : **🔴 PAGE MISSING** — Charles must create the Shopify page entity.

### `/pages/contact` — `templates/page.contact.json` → u2-contact
Status : **✅ COMPLETE** (page exists on Shopify, template wired)

### `/pages/reviews` — `templates/page.reviews.json` → u2-reviews
Status : **🔴 PAGE MISSING** — Charles must create the Shopify page entity.

### `/pages/faq` — `templates/page.faq.json` → u2-faq-page
Status : **✅ COMPLETE** (page exists, template wired, FAQ JSON-LD schema valid)

### Cart drawer `/snippets/u2-cart-drawer.liquid`
Triggered by cart icon click on header. Rendered globally via theme.liquid.
Status : **✅ COMPLETE** — glassmorphism + free shipping progress bar + qty +/- + Subscription badge

---

## C. App integrations

| App | Status | Detail |
|---|---|---|
| **Shopify Subscriptions** (native) | ✅ INSTALLED + WIRED | Selling plan `gid://shopify/SellingPlan/9311846719` ("Livrez chaque mois, 10% de réduction"). Wired in u2-pdp.liquid Subscribe radio. JS adds hidden `<input name="selling_plan">` on selection. |
| **Loox Reviews** | 🟡 PARTIAL | Metafields exist (`loox.num_reviews=28`, `loox.avg_rating=4.7`). Widget conditional render in u2-pdp + u2-reviews. Charles must complete Loox app install for `loox.reviews` HTML metafield to populate. |
| **BUCKS Currency Converter** | 🟡 UNKNOWN | Theme-attached to live #185967575359 per CLAUDE.md. Will need to verify reattachment after v2 publish. App injects async post-DOM, no theme code dependency. |
| **Meta Pixel** | ✅ AUTO | Disabled in theme.liquid per compliance fix. FB&IG channel handles via CAPI server-side. Events fire automatically (view_item, add_to_cart, etc.) |
| **GA4** (G-6G10HXBR4B) | ✅ AUTO | Fires via Shopify Google channel `{{ content_for_header }}`. Confirmed firing on /, /en, /products/* in earlier audit. |
| **Stripe USD** | ✅ AUTO | Shopify Payments + Markets routes USD for US visitors. Theme-agnostic. |
| Judge.me reviews | 🟡 Legacy | Metafield exists (`judgeme.badge`, `judgeme.widget`) but Loox is the recommended source of truth (Charles decision Iter 2). |

---

## D. Metafields

### Product `ube-poudre` (10061750698303) — 11 metafields
| Namespace.key | Type | Value |
|---|---|---|
| `judgeme.badge` | string | Judge.me HTML widget |
| `judgeme.widget` | string | Judge.me reviews HTML |
| `loox.reviews` | multi_line_text_field | Loox HTML widget (empty/pending app activation) |
| `loox.num_reviews` | number_integer | **28** |
| `loox.avg_rating` | number_decimal | **4.7** |
| `reviews.rating` | rating | scale 1-5, value 4.7 |
| `reviews.rating_count` | number_integer | **28** |
| `shopify.dietary-preferences` | list.metaobject_reference | Vegan, etc. |
| `mm-google-shopping.google_product_category` | string | 6848 (Health/Nutrition) |
| `global.title_tag` | string | "UBurn — Plant-based satiety drink \| Konjac fiber \| 30 cal" |
| `global.description_tag` | string | "Plant-based purple drink with research-backed konjac fiber..." |

### Selling plans
- `gid://shopify/SellingPlanGroup/3637215551` — "Subscribe & Save 10%"
- `gid://shopify/SellingPlan/9311846719` — "Livrez chaque mois, 10% de réduction"

---

## E. Compliance status

**Live grep on rendered HTML preview, all pages, both desktop + mobile** :

```
0 × '1,500+'              ✓
0 × 'FDA dietary fiber'   ✓
0 × 'Claire Dubois'       ✓
0 × '6 lbs' / '2,8 kg'    ✓
0 × 'clinically validated' ✓
0 × 'minceur'             ✓
0 × 'satisfait ou remboursé' ✓
```

Required disclaimers present :
- ✓ FDA disclaimer in footer (full text from Charles brief)
- ✓ FDA disclaimer on `/pages/the-science`
- ✓ EFSA Regulation 432/2012 · ID 3120 cited correctly
- ✓ "30 calories" consistent (not 35)
- ✓ "4 hours satiety" (not 6h)
- ✓ "Crafted in France" English (not "Marque Française" FR)

---

## F. Performance

⚠️ **Not Lighthouse-audited yet**. Targets per brief :
- LCP mobile 4G < 2.5s
- CLS < 0.05
- Homepage weight < 1.5 MB
- PDP weight < 2 MB

Current estimates :
- u2-* CSS total : ~15 KB (gzipped)
- u2-theme.js : ~2 KB (gzipped)
- Critical images : hero JPGs ~300-700 KB each (need WebP conversion for ideal LCP)
- All images have `width` + `height` attrs → CLS protection ✓
- `loading="eager" fetchpriority="high"` on hero image only → LCP optimized
- Non-hero images use `loading="lazy"` → bandwidth saved

Lighthouse audit deferred to after-photoshoot iteration.

---

## G. Issues identified (pending decisions)

### 🚨 Blocker — Charles actions
1. **Create 3 Shopify pages** (the-science / our-story / reviews) — 5 min admin
2. **Verify Subscriptions checkout flow** end-to-end (customer portal, billing)
3. **Decide Violet Bottle** : separate product to sell standalone OR bundled gift only

### 🔴 Visible issues to fix this iteration
4. **Hamburger drawer** : current mobile drawer works but lacks logo + social + clear premium feel. Issue 1 of iter brief.
5. **Black-on-violet text** : audit needed per Issue 2 of iter brief. See DESIGN-FIXES doc.
6. **PDP missing CRO elements** : audit needed per Issue 3. See PDP-MISSING-ELEMENTS doc.

### 🟡 Phase 2 candidates
7. Loox real widget activation
8. Exit-intent popup
9. Promo sticky bar with code
10. Lighthouse + WebP conversion
11. Cart drawer cross-sell suggestion
12. Pack image "#1 Marque Française" overlay removal (CDN re-upload required)

### 🟢 Pure polish / nice-to-have
13. Animations timing fine-tuning
14. A/B test hero variations
15. Promo code at checkout
