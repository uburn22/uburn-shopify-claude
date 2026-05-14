# UBurn Live Site — Sections Inventory (Iteration 2 audit)
**Date** : 2026-05-15
**Source** : `_assets-from-live/_raw-source/` (live theme #185967575359 pull from Étape 3)
**Purpose** : Exhaustive section catalog for V2 migration completeness

---

## HOMEPAGE — `templates/index.json` → `home-uburn-2026.liquid` (589 lines, 14 sections)

| # | Section | Content summary | CRO function | V2 status |
|---|---|---|---|---|
| S1 | Hero | "4PM. Take back control." + image + price + CTA + 3 trust pills | Convert (primary CTA) | ✅ PRESENT V2 (different copy "Crush the 4 PM crash") |
| S2 | Marquee | Scrolling band, 9 items × 2 (FDA fiber, caffeine-free, 30 kcal, free shipping, 1500+, cancel anytime, 4h satiety, 6 actives, french brand) | Trust reinforcement | 🔴 **MISSING V2** — only have static trust band |
| S3 | Press | Hidden per UX decision | Trust | ✓ Intentionally dropped |
| S4 | Expert (Dr Claire Dubois) | Fake AI expert | (FTC violation) | ✅ Replaced by EFSA Authority block in V2 |
| S5 | Ritual | Hidden | Education | ✓ Moved to PDP |
| S6 | Problem ("It's biological") | 3 cards : 16h / Soir / Willpower→Biology | Education + emotional hook | 🔴 **MISSING V2** |
| S7 | Offer / Pricing | Starter $36.99 + Maximum Pack $58.99 cards + cart preview with bonus stack (e-book, community, WhatsApp) + total savings | **CRITICAL** convert | 🔴 **MISSING V2** (only on PDP, not homepage) |
| S8 | Stats | 95% feel satiety / 87% less snacking / 82% calmer / 4.7/5 + photo | Social proof | 🔴 **MISSING V2** |
| S9 | Origine / Story | "Ube comes from here. Not a lab." Southeast Asia ube origin + 3 bullets | Brand story | 🟡 PARTIALLY — replaced by Craft France in V2 |
| S10 | Benefits 6 | 6 benefits grouped into 3 cards (4-hour satiety, Steady energy, Digestive comfort) | Education | 🟡 PARTIALLY — V2 has Formula 6 actives instead |
| S11 | Testimonials | Marion L Lyon + Sophie Bordeaux + Nathalie Toulouse + Céline Lyon (FR testimonials in EN) | Social proof | 🟡 V2 has US testimonials only on PDP |
| S12 | Before/After | Marie 42 Paris (FR) Week 1 vs Week 4 | Social proof + transformation | ✅ V2 has Ashley K version on homepage |
| S13 | FAQ | 5 questions | Trust / objection handling | 🟡 V2 has 7 on PDP, none on homepage |
| S14 | Final CTA | "Take back control. Starting tomorrow morning" + Order CTA | Convert (secondary) | ✅ PRESENT V2 ("The violet hour begins at four") |
| EXTRA | Guarantee bar | 4 icons : Research-backed / Free shipping / Secure / Cancel anytime | Trust | 🟡 PARTIALLY (in V2 trust band, lost detail) |
| EXTRA | Sticky mobile CTA | Bottom-fixed pill "Order — from $35" | Convert | ✅ PRESENT V2 |

**HOMEPAGE GAPS for V2 (P1 CRO)** :
1. **Pricing cards section** (Starter / Maximum) — biggest miss
2. **Stats section** (95/87/82/4.7) — social proof
3. **Marquee scrolling** — trust reinforcement
4. **Problem section "It's biological"** — emotional hook
5. **Guarantee bar** 4 icons detailed

---

## PDP — `templates/product.json` → live (16 sections)

| # | Section | Content summary | CRO function | V2 status |
|---|---|---|---|---|
| 1 | main-product | Image gallery + variant picker + ATC | Convert | ✅ PRESENT V2 |
| 2 | trust-icons | Trust badges grid | Trust | ✅ V2 has trust strip |
| 3 | multi-column | 3-col benefits | Education | 🟡 partially in V2 ritual + faq |
| 4 | ss-scrolling-logo-cloud | Logos | Trust | 🔴 dropped (press section was FR) |
| 5 | separator | — | — | — |
| 6 | text-with-media | Product image + text | Education | 🟡 V2 has ritual section |
| 7 | trust-icons (×2) | More trust badges | Trust | ✓ trust strip |
| 8 | multi-column (×2) | More columns | Education | — |
| 9-13 | separator + text-with-media x3 | Visual breaks + content blocks | Education | — |
| 14 | apps (theme app block) | Loox / 3rd party widget render | Reviews UGC | 🔴 **MISSING V2** — Loox widget not embedded yet |
| 15 | collection-list | Collection nav | Cross-sell | 🟡 V2 has science link block |
| 16 | faq | FAQ accordion | Trust / objection | ✅ PRESENT V2 |

**PDP GAPS for V2 (P1 CRO)** :
1. **Loox widget block** (reviews UGC display)
2. **Cart preview with bonus stack** (e-book, community, WhatsApp) — currently in live `home-uburn-2026` S7, lost in V2

---

## /pages/uburn-lp-us-en — `uburn-lp-us-en.liquid` (ULTRA CRO-rich — 23+ sections)

Most CRO-engineered page on the live site. Sections worth extracting :

| Section | CRO function | V2 plan |
|---|---|---|
| Announcement bar | Trust | ✅ V2 already has |
| Promo sticky "UBE10" | Convert (discount code) | 🔴 **MISSING V2** — add promo bar with code |
| Trust ribbon | Trust | ✅ V2 has trust band |
| Hero | Convert | ✅ V2 has |
| Marquee | Trust | 🔴 MISSING V2 (already flagged) |
| Expert (Dr Dubois) | (compliance issue) | ✅ Replaced with EFSA Authority |
| Problem 3 cards | Emotional hook | 🔴 MISSING V2 (already flagged) |
| **How It Works** 3 cols | Education | 🔴 **MISSING V2** |
| **OFFER BLOCK** big pricing + cart preview | Convert (primary) | 🔴 MISSING V2 (already flagged) |
| Lifestyle banner | Brand vibe | 🟡 V2 has craft section |
| **PRODUCT: Satiety 30-day** | Education | 🔴 MISSING V2 |
| Product: Formula | Education | ✅ V2 has Formula grid |
| **Comparison table** UBurn vs others | Differentiation | 🔴 **MISSING V2** |
| Ingredients section | Education | ✅ V2 Formula covers |
| **6 BENEFITS interactive** | Education | 🟡 Different from V2 Formula |
| Press | Trust | ✓ Dropped per decision |
| **Stats big %** | Social proof | 🔴 MISSING V2 (already flagged) |
| Testimonials | Social proof | 🟡 V2 has on PDP, not homepage |
| FAQ | Trust | 🟡 V2 has on PDP |
| **Guarantee bar** | Trust | 🔴 MISSING V2 (already flagged) |
| Footer | Foot | ✅ V2 has |
| Sticky mobile CTA | Convert | ✅ V2 has |
| **Exit-intent popup** | Save | 🔴 MISSING V2 (Phase 2 — needs JS app) |

---

## /pages/faq — `ub-faq-v2.liquid`

| Block | V2 status |
|---|---|
| FAQ hero | 🔴 MISSING V2 standalone page |
| 12 Q&A in 3 categories | 🟡 V2 has 7 Q on PDP only |
| Before/After Sarah D Brooklyn | ✅ V2 has Ashley K version |

**Gap** : need `/pages/faq` standalone page with full 12-question accordion.

---

## /pages/ingredients — `ub-ingredients-v2.liquid`

Long-form ingredient deep dives for SEO. Currently lives on standalone page.

| Block | V2 status |
|---|---|
| Hero "The ingredients behind UBurn" | 🔴 MISSING |
| 6 ingredients individual deep-dives | 🟡 V2 has short version in Formula grid |
| EFSA badge | ✅ V2 has on homepage |
| FDA disclaimer | ✅ V2 has in footer |

**Gap** : Phase 2 — could be merged into `/pages/the-science`.

---

## /pages/about — `ub-about-v2.liquid`

Brand story page.

| Block | V2 status |
|---|---|
| Hero "A French story" | 🔴 MISSING |
| Heritage / Origin | 🔴 MISSING |
| Mission | 🔴 MISSING |
| Craft features | ✅ V2 has on homepage |
| Final CTA | ✅ |

**Gap** : need `/pages/our-story` page.

---

## /pages/contact — `ub-contact-v2.liquid`

Standard contact page.

| Block | V2 status |
|---|---|
| Hero "Talk to us" | 🔴 MISSING |
| Contact form | 🔴 MISSING |
| FAQ quick links | 🔴 MISSING |

**Gap** : need `/pages/contact` page with Shopify native form.

---

## Cart drawer (snippet)

Live theme uses Dawn-style cart drawer. V2 still uses Dawn default.

| Block | V2 status |
|---|---|
| Slide-in drawer | Dawn default (works) |
| Line items | Dawn default |
| Subtotal | Dawn default |
| Free shipping progress bar | 🔴 MISSING V2 |
| Cross-sell | 🔴 MISSING V2 |
| Checkout CTA | Dawn default (works) |

**Gap** : free shipping progress bar at minimum.

---

## Total gap summary for Iteration 2

### 🔴 P1 CRO must-add (impact: cold traffic conversion)
1. **Pricing cards on homepage** (Starter $34.50 / Maximum $54.50 + bonus stack)
2. **Stats big % section** (95/87/82/4.7) on homepage
3. **Comparison table** UBurn vs traditional solutions
4. **Marquee scrolling** trust band
5. **Problem section** "It's biological" (emotional hook)
6. **Free shipping progress bar** in cart drawer
7. **Loox reviews widget** on PDP

### 🟡 P2 important
8. **Promo sticky bar** with code (UBE10 or similar)
9. **How it works 3 cols** on homepage
10. **Bonus stack** on PDP cart preview

### 🟢 P3 nice-to-have (Phase 2)
11. Exit-intent popup
12. 30-day results visual

---

## Standalone pages to build

| Page | Priority | Sections to include |
|---|---|---|
| `/pages/the-science` | P1 (SEO + PDP link) | Science hero, How it works, Pillars, Ingredient deep dives, Comparison, EFSA detailed, FDA disclaimer, CTA back to PDP |
| `/pages/our-story` | P2 | Story hero, Heritage France, Mission, Craft features, Final CTA |
| `/pages/contact` | P2 | Contact hero, Form, FAQ quick links |
| `/pages/reviews` | P3 | Reviews hero, Loox widget, Testimonials, Final CTA |
| `/pages/faq` | P3 | Hero, Categories accordion (12 Q in 3 cats), Contact CTA |
