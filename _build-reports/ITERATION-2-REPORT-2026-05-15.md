# UBurn V2 Iteration 2 — Completeness + Polish Report
**Date** : 2026-05-15
**Theme** : `uburn-us-premium-v2` (#186066567487) — unpublished
**Live theme #185967575359** : INTOUCHÉ

---

## 🌐 Preview URLs (open in private tab)

| Page | URL | Status |
|---|---|---|
| Homepage | https://1t9ayp-tw.myshopify.com/?preview_theme_id=186066567487 | ✅ All 7 sections rendering |
| PDP | https://1t9ayp-tw.myshopify.com/products/ube-poudre?preview_theme_id=186066567487 | ✅ Refined |
| Contact | https://1t9ayp-tw.myshopify.com/pages/contact?preview_theme_id=186066567487 | ✅ Live page exists |
| FAQ | https://1t9ayp-tw.myshopify.com/pages/faq?preview_theme_id=186066567487 | ✅ Live page exists |
| The Science | https://1t9ayp-tw.myshopify.com/pages/the-science?preview_theme_id=186066567487 | ⚠️ Page needs Charles creation |
| Our Story | https://1t9ayp-tw.myshopify.com/pages/our-story?preview_theme_id=186066567487 | ⚠️ Page needs Charles creation |
| Reviews | https://1t9ayp-tw.myshopify.com/pages/reviews?preview_theme_id=186066567487 | ⚠️ Page needs Charles creation |

---

## ✅ What was added in Iteration 2

### 6 new CRO sections on homepage
| Section | Position in flow | Live source equivalent |
|---|---|---|
| `u2-marquee` | After hero block | Live S2 MARQUEE (compliance-fixed) |
| `u2-problem` | "It's biological" 3 cards | Live S6 PROBLÈME |
| `u2-pricing-cards` | Starter $34.50 / Maximum $54.50 + bonus stack | Live S7 OFFER (most CRO-critical migration) |
| `u2-stats` | 95% / 87% / 82% / 4.7 + image | Live S8 STATS |
| `u2-comparison` | UBurn vs traditional solutions (7-row table) | Live `uburn-lp-us-en` compare-section |
| `u2-guarantee-bar` | 4 trust icons (Research / Free shipping / Secure / Cancel anytime) | Live BARRE GARANTIES |

### 5 standalone page sections
| Section | Template wired | Page status |
|---|---|---|
| `u2-science` | `templates/page.the-science.json` | ⚠️ Page entity must be created in Shopify admin |
| `u2-our-story` | `templates/page.our-story.json` | ⚠️ Page entity must be created |
| `u2-contact` | `templates/page.contact.json` | ✅ Page entity exists |
| `u2-reviews` | `templates/page.reviews.json` | ⚠️ Page entity must be created |
| `u2-faq-page` | `templates/page.faq.json` | ✅ Page entity exists |

### PDP refinements
- Variant micro-copy : "Best for first-timers · 30 days" / "90 days · −33% per scoop"
- Loox reviews widget block via `product.metafields.loox.reviews.value` HTML render (only renders if metafield is non-empty)

### SEO schema
- `Article` schema on Science page
- `FAQPage` schema on FAQ page
- (Product schema already in PDP via Shopify defaults)
- (Organization schema in footer via JSON-LD added Phase 1)

---

## 🚨 BLOCKER : Charles must create 3 Shopify pages

The custom app token I have access to **does not have `write_content` scope**, so I cannot create Shopify pages via API. Charles needs to manually create 3 pages :

**Shopify Admin → Pages → Add page** :

1. **Title** : "The Science Behind UBurn"
   - **Handle** : `the-science`
   - **Template suffix** : `the-science`
   - **Content** : leave empty (template handles everything)

2. **Title** : "Our Story"
   - **Handle** : `our-story`
   - **Template suffix** : `our-story`
   - **Content** : leave empty

3. **Title** : "Reviews"
   - **Handle** : `reviews`
   - **Template suffix** : `reviews`
   - **Content** : leave empty

Once created, the V2 preview URLs for those pages will render the full custom sections.

Total time : ~5 minutes via Shopify admin.

---

## 📁 Audit docs delivered

- `_audit/SECTIONS-INVENTORY-COMPLETE.md` — full live site catalog with 14 homepage sections + 16 PDP sections + 23 LP sections audit
- `_audit/PDP-MIGRATION-MATRIX.md` — verdicts per live PDP section, V2 destinations, CRO gaps
- `_build-reports/SKILLS-ACTIVATED.md` — relevant skills from environment + usage plan
- `_build-reports/ITERATION-2-REPORT-2026-05-15.md` — this report

---

## 📸 Screenshots

`_build-reports/SCREENSHOTS-ITER2-2026-05-15/` :
- `iter2-home-desktop-full.png` (1440 × full page)
- `iter2-home-mobile-full.png` (390 × full page)

---

## ⚙️ Skills mobilized (per design)

- `seo-schema` patterns → Article + FAQPage JSON-LD on standalone pages
- `seo-content` E-E-A-T → Science page long-form authority structure
- `ads-landing` CRO principles → Pricing cards bonus stack, comparison table, trust ribbon
- `web-design-guidelines` → Spacing 8pt scale maintained, color tokens used, touch targets ≥44px on CTAs
- `careful` mode → No publish without explicit Charles GO ; live theme untouched

---

## ⚠️ Order trade-off accepted this iteration

The homepage `u2-homepage` section is monolithic (hero + trust band + formula + EFSA + before/after + craft + final CTA + newsletter all inline). The new 6 CRO sections are wired in `templates/index.json` AFTER `u2-homepage` instead of interleaved at optimal positions.

Result : new CRO sections (marquee → problem → pricing → stats → compare → guarantee) appear AFTER the newsletter block, which is sub-optimal for funnel flow.

**Recommended Iteration 3** : split `u2-homepage` into 8 atomic sections (u2-hero, u2-trust-band, u2-formula-grid, u2-efsa, u2-before-after, u2-craft, u2-final-cta, u2-newsletter) so all 14 sections can be reordered in `templates/index.json` for proper flow.

Optimal target order :
1. Hero (above the fold)
2. Trust band
3. Marquee
4. Problem ("It's biological")
5. Formula grid (6 actives)
6. Stats
7. Pricing cards (with bonus stack)
8. EFSA badge
9. Comparison table
10. Before/After Ashley K
11. Craft France
12. Guarantee bar
13. Final CTA
14. Newsletter

---

## 🟡 Known limitations / Phase 3 candidates

- **u2-homepage monolith** — should be split (see above)
- **Page entities** — 3 to be created by Charles
- **Loox widget** — depends on `product.metafields.loox.reviews.value` being populated with HTML widget code (Loox app installs auto-populate this)
- **Subscribe & Save 10%** — requires Shopify Subscriptions or app (Recharge / Bold / Loop) — Charles decision pending
- **Cart drawer V2** — still using Dawn default ; refresh planned for Iteration 3
- **Exit-intent popup** — requires app (Klaviyo / OptinMonster) — Phase 2
- **Promo sticky bar with code** — UBE10 / similar discount code system — Phase 2 (depends on Shopify Discount API)
- **AI-generated portraits** — already removed in compliance fix iteration ✓
- **Press section** — already deleted per Q5/Q7 ✓
- **Founder section** — already excluded per Q7 ✓

---

## 📐 Design/integration checks performed

✅ Typography 3-tier system consistent across all new sections (italic serif emphasis on H2 em, sans bold italic for "UBurn" logo, sans body)
✅ Color tokens used everywhere (`--u2-iris`, `--u2-plum-black`, `--u2-lavender-soft`, etc.) — no hardcoded hex in section bodies
✅ Spacing scale respected (8pt-based) — section padding `var(--u2-space-section)` mobile 70px / desktop 100px
✅ Reveal animations on all new sections (`.u2-reveal` with delay-1/2/3 staggering)
✅ Reduced-motion respected (animations disable for `prefers-reduced-motion: reduce`)
✅ Mobile-first responsive — 1-col mobile / 2-col tablet / 3-4 col desktop on grids
✅ Touch targets ≥44px on all CTAs (radio cards, pill buttons, accordion triggers)
✅ Compliance copy : no "1500+", no "FDA dietary fiber", no weight loss claims, no "satisfait ou remboursé", no Dr Claire Dubois
✅ FDA disclaimer in footer + on Science page + on Stats section + on Before/After
✅ Variant prices dynamic from Shopify Liquid (no hardcoded $34.50)
✅ JSON-LD schema valid on Science page (Article) + FAQ page (FAQPage)

---

## 🚀 Next steps for Charles

**Immediate (this week)** :
1. **Create 3 Shopify pages** (the-science, our-story, reviews) via admin — ~5 min
2. Open preview URL → browse all pages, verify CRO sections render correctly
3. Validate iteration order acceptable OR ask for u2-homepage split (Iteration 3)

**Short-term (1-2 weeks)** :
4. Install Loox app properly so `loox.reviews` metafield auto-populates with widget HTML
5. Decide on Subscribe & Save app (Recharge vs Bold vs Shopify native subscriptions)
6. Commission P1 photoshoot per `IMAGES-TO-PRODUCE.md` (still applies)

**Iteration 3 (Phase 2)** :
7. Split u2-homepage into atomic sections for proper section order
8. Cart drawer V2 with free shipping progress bar
9. Promo sticky bar with discount code
10. Performance Lighthouse audit + image optimization (WebP conversion)

---

## Tag
- Git tag : `v2-iteration-2-cro-complete`
- Branch : `uburn-v2`

**Awaiting Charles browser validation + decision on Iteration 3 scope.**
