# SEO Full Optimization — Deployment Guide

**Branch** : `seo/full-optimization-2026-05-25`
**Date** : 2026-05-25
**Author** : Claude (autonomous run after audit `_logs/2026-05-25-seo-ai-readiness-audit.md`)
**Scope** : SEO + AI Search readiness, schema, meta, perf — **no design / no copy changes**

---

## What changed (theme code)

### 8 files touched

| File | Change | Risk |
|---|---|---|
| `snippets/meta-tags.liquid` | Fix `og:price:amount` virgule FR → point décimal US (Facebook/Google Shopping spec) | LOW |
| `snippets/seo-enhancements.liquid` | **NEW** — central injection of 5 conditional schemas + LCP preload | LOW |
| `layout/theme.liquid` | Wire `{%- render 'seo-enhancements' -%}` after `microdata-schema` | LOW |
| `sections/u2-pdp.liquid` | Product schema extended : `additionalType DietarySupplement`, `priceValidUntil`, `itemCondition`, `hasMerchantReturnPolicy`, `shippingRate $0 free`, `eligibleRegion US`, `gtin13`+`mpn` from metafields, `aggregateRating` wired to `shop.metafields.loox.*` (fallback preserved 4.7/2847) | MEDIUM |
| `sections/u2-pdp.liquid` | Gallery thumb : `alt=""` → `alt="{product.title} — view {N}"` | LOW |
| `sections/main-uburn-pdp-v9.liquid` | Same alt fix on pdpv9 gallery thumb | LOW |
| `sections/u2-pdp-foryou.liquid` | Alt fallback from image.alt → semantic fallback | LOW |
| `templates/robots.txt.liquid` | **NEW** — clean override (removes duplicate `Crawl-delay`, preserves 23 AI-bot allowlist, fixes `pages/llms` reference to `pages/llms-txt`) | MEDIUM (test on staging first) |
| `templates/page.llms-txt.liquid` | **NEW** — Markdown plain-text llms.txt page (layout none, llmstxt.org spec) | LOW |

### Schemas added (conditional by handle)

| Page | Schema | Why |
|---|---|---|
| `/pages/the-science` | `Article` + `datePublished` + `author` + `Speakable` + `about` (sameAs Wikipedia/EUR-Lex) | Perplexity/AIO freshness signal + voice assistants + entity links |
| `/pages/faq-us-en` | `FAQPage` (8 Q&A canonical) | AI Overview eligibility on FAQ queries |
| `/pages/reviews` | Product/AggregateRating reuse | Star ratings rich result hint |
| `/pages/our-story` | `AboutPage` + `Person` (founder Mariana) | Founder entity recognition for AI search |
| `/pages/ingredients` | `ItemList` of `DietarySupplement` + Wikipedia sameAs | Ingredient knowledge graph |
| Homepage | LCP `<link rel="preload" as="image">` for hero | CWV LCP improvement |

---

## Charles' deployment checklist

### Step 1 — Review the branch (local)

```bash
cd ~/.openclaw/workspace/uburn-shopify-claude
git checkout seo/full-optimization-2026-05-25
git diff main --stat
```

### Step 2 — Push to a dev theme (validation)

Pick a NON-LIVE dev theme ID (NEVER push to live without A/B/C confirmation per memory `feedback_theme_publish`).

```bash
# List available themes
shopify theme list --store=1t9ayp-tw.myshopify.com

# Push to a dev/draft theme (replace <THEME_ID>)
shopify theme push --store=1t9ayp-tw.myshopify.com --theme=<THEME_ID>
```

**Live theme as of 2026-05-25** : `186235420991` — DO NOT push directly. Use a draft copy.

### Step 3 — Live validation on dev theme

Open the dev theme preview URL. Test :

1. **PDP** : visit `/products/ube-poudre` → DevTools Inspect → check 6 JSON-LD blocks present, including new fields (`hasMerchantReturnPolicy`, `priceValidUntil`, `additionalType DietarySupplement`). Verify `og:price:amount` is `34.50` (point), not `34,50`.
2. **/pages/the-science** : view source, confirm Article JSON-LD with `datePublished` + Speakable.
3. **/pages/faq-us-en** : confirm FAQPage JSON-LD with 8 Q&A.
4. **Homepage** : confirm `<link rel="preload" as="image" ...hero...>` in head.
5. **/robots.txt** : confirm no duplicate Crawl-delay, all 23 AI bots still allow.

### Step 4 — Schema validators

Pass each page through :
- https://validator.schema.org/
- https://search.google.com/test/rich-results

Expected : zero errors. Warnings on `gtin13` are OK until metafield populated.

### Step 5 — Create the metafields (required for aggregateRating accuracy)

Shopify Admin → Settings → Custom data → Shop → Add definition :
- Namespace: `loox`, key: `avg_rating`, type: Decimal
- Namespace: `loox`, key: `review_count`, type: Integer

Then either :
- Manual : fill the values matching the real Loox count (e.g., 4.7 / 2847 if real)
- Automated : Loox webhook → Shopify metafield (later improvement — current fallback 4.7/2847 is preserved)

**Action also required** for Product GTIN :
- Namespace: `product`, key: `gtin`, type: Single-line text
- Namespace: `product`, key: `mpn`, type: Single-line text
- Fill on the ube-poudre product (use the SKU as MPN fallback if no real MPN)

### Step 6 — Create the llms-txt page (Shopify Admin)

1. Shopify Admin → Online Store → Pages → Add page
2. Title : `LLMs Context`
3. Handle (URL slug) : `llms-txt`
4. Content : leave empty (template renders everything)
5. Online store → Theme template : select `llms-txt`
6. Visibility : Visible
7. Save

### Step 7 — Add URL redirect /llms.txt → /pages/llms-txt

Shopify Admin → Online Store → Navigation → URL Redirects → Create :
- From : `/llms.txt`
- To : `/pages/llms-txt`

After this, `curl https://uburn.co/llms.txt` should return the Markdown content.

### Step 8 — Push to LIVE theme (only after Steps 3-7 confirmed clean on dev)

Per memory `feedback_theme_publish`, confirm A/B/C with explicit "push to live theme 186235420991" before running :

```bash
shopify theme push --store=1t9ayp-tw.myshopify.com --theme=186235420991 --live
```

OR safer : push as a NEW theme, publish via Shopify Admin UI with manual click.

---

## What this does NOT fix (Charles-only actions remaining)

These are admin-level actions that require Shopify Admin UI access and cannot be done via theme code :

| # | Action | Where | Effort |
|---|---|---|---|
| 1 | **Reconfig Shopify Markets** : US = primary market, USD currency, root URL ; FR = secondary, EUR, `/fr/` prefix | Admin → Markets | 2-4h |
| 2 | **noindex 10 duplicate pages** : `/pages/faq`, `/pages/about`, `/pages/uburn-lp`, `/pages/privacy-policy-en`, `/pages/terms-en`, `/pages/shipping`, `/pages/returns`, + 4 LP US sans noindex (`lp-stress-eater-us`, `lp-clean-label-us`, `lp-meno-belly-us`, `lp-ritual-violet-us`) | Admin → Pages → SEO section per page | 30 min |
| 3 | **Fix /collections/all title + meta description** | Admin → Collections → All → SEO | 5 min |
| 4 | **Rename og:images** : remove `Capture_d_ecran_2025-08-15_a_4.05.37_PM.png` + `WhatsApp_Image_2026-05-19_at_11.47.54.jpg` from Shopify Files, re-upload as `uburn-plant-based-satiety-drink-hero.jpg` + `uburn-ube-konjac-purple-drink-pdp.jpg` | Admin → Content → Files | 15 min |
| 5 | **Activate IndexNow** | Admin → Online Store → Preferences → SEO | 5 min |
| 6 | **Submit updated sitemap to GSC** (after Markets reconfig) | Google Search Console | 5 min |

These 6 admin actions + the metafield setup in Step 5 unlock the full benefit of the schema work.

---

## Out-of-scope (kept per "no design / no content" constraint)

The audit also identified these high-value optimizations, **deliberately NOT applied** in this branch to respect the no-content-edit constraint :

- Inserting Passage 1 "What is UBurn" (148 mots) above-fold homepage
- Replacing the off-brand blog content (Rglows leak)
- Adding 10 atomic citable passages on key pages
- Adding named RD reviewer on /pages/the-science
- Creating new educational pages (`/pages/what-is-ube`, `/pages/uburn-vs-matcha`, etc.)
- Creating 4-6 thematic collections
- Modifying page titles or H1s

If you want any of these unlocked, point at the specific item and I'll execute it on a separate branch.

---

## Rollback

If anything breaks on the dev theme, just revert :

```bash
git checkout main  # or the previous working branch
shopify theme push --store=1t9ayp-tw.myshopify.com --theme=<DEV_THEME_ID>
```

Branch `seo/full-optimization-2026-05-25` is isolated and won't affect any other work.
