# URL Map — uburn.co (production state 2026-05-14)

## Source
- `https://uburn.co/sitemap.xml` + sub-sitemaps
- Shopify Admin API products endpoint

## Domain config
- **Primary**: `uburn.co` (English default storefront)
- **FR variant**: `uburn.co/fr/...` (Shopify locale routing — full mirror)

## Products (Shopify routing)
| URL | Product ID | Status |
|---|---|---|
| `/products/ube-poudre` | 10061750698303 | active — **the only live product** |

Single SKU site. Brief mentions "Variant selector 3 options" — these are variants of `ube-poudre` (Découverte 90g + 2 others to confirm).

## Pages (sitemap-published)
### English/default
| URL | Template suffix | Purpose |
|---|---|---|
| `/pages/contact` | contact | Contact |
| `/pages/about` | about | Brand story (EN) |
| `/pages/faq` | faq | FAQ EN |
| `/pages/data-sharing-opt-out` | (default) | CCPA opt-out |
| `/pages/ingredients` | ingredients | Ingredient detail |
| `/pages/uburn-lp` | uburn-lp | LP V1 (FR primary) |
| `/pages/uburn-lp-us-en` | uburn-lp-us-en | LP US English |
| `/pages/shipping` | (default) | Shipping info |
| `/pages/returns` | (default) | Returns policy |

### US-EN specific (parallel set)
- `/pages/about-us-en`
- `/pages/faq-us-en`
- `/pages/shipping-us-en`
- `/pages/returns-us-en`
- `/pages/privacy-policy-us-en`
- `/pages/terms-us-en`

### Legal EN
- `/pages/privacy-policy-en`
- `/pages/terms-en`

### Not in sitemap but in theme templates (orphan or unpublished?)
- `/pages/notre-histoire` (template `page.notre-histoire` exists)
- `/pages/resultats` (template `page.resultats` exists)
- `/pages/uburn-ads` (template `page.uburn-ads` exists)
- `/pages/uburn-lp-v2` (template `page.uburn-lp-v2` exists)
- `/pages/list-collections` (template `page.list-collections` exists)

⚠️ Charles to confirm: are these unpublished drafts, or pages that exist but were excluded from sitemap?

## Collections
| URL | Purpose |
|---|---|
| `/collections/best-seller` | Single collection (likely contains ube-poudre only) |

## Standard Shopify routes preserved
- `/` — homepage
- `/cart` — cart page
- `/account`, `/account/login`, `/account/register`, etc.
- `/search`
- `/404`
- `/checkout/*` (Shopify-managed)

## Pages NOT existing but mentioned in brief
- `/pages/reviews` — **does NOT exist** in sitemap. Brief assumed it exists; need creation if Phase 3 social-counter wants its own page.
- `/pages/the-science` — **does NOT exist**. To be CREATED in Phase 5 per brief.
- `/pages/our-story` — **does NOT exist** as standalone. Brief mentioned this; closest equivalent = `/pages/about` or `/pages/notre-histoire`.

## SEO preservation matrix for V2 redesign
| URL | Action in V2 |
|---|---|
| `/products/ube-poudre` | PRESERVE handle + add new sections (no URL change) |
| `/pages/uburn-lp` | 301 redirect → `/products/ube-poudre` (Phase 1 only after switch) |
| `/pages/uburn-lp-us-en` | 301 redirect → `/products/ube-poudre` (US LP consolidation) |
| `/pages/uburn-lp-v2` | already unpublished or draft — kill |
| `/pages/about`, `/pages/faq`, `/pages/contact`, `/pages/ingredients` | PRESERVE — content refresh only |
| `/pages/the-science` | CREATE in Phase 5 |
| `/pages/shipping`, `/pages/returns`, legal pages | PRESERVE as-is |
| `/collections/best-seller` | PRESERVE |

## URL changes to AVOID
- DO NOT change `/products/ube-poudre` handle
- DO NOT remove existing pages without 301 redirect setup
- DO NOT add trailing slash variations (Shopify strict)
