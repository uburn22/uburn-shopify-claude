# UBurn Theme Structure Audit — uburn-us-premium-dev (#186063356223)

**Source**: Duplicated from live theme #185967575359 (US-OPTIMIZATION-DRAFT-2026-05-09)
**Date**: 2026-05-14
**Branch**: redesign/v2

## Base theme
- **Vendor**: Maestrooo "Stretch" v1.9.0 (premium OS 2.0 theme)
- **Support**: https://support.maestrooo.com/

## Counts at a glance
| Folder | Count |
|---|---|
| sections/ | 99 |
| snippets/ | 72 |
| templates/ | 28 (incl. 8 customers/, 4 product variants, 3 uburn-lp variants) |
| assets/ | 45 |
| layout/ | 3 (theme.liquid, password.liquid, uburn-lp.liquid) |
| locales/ | 30+ (en.default primary, fr fallback) |
| markets/ | 1 active (united-states, parent @default) |

## Custom UBurn sections (non-Stretch base)
- `home-uburn-2026.liquid` — currently the only section wired in templates/index.json
- `main-uburn-home-us.liquid`
- `main-uburn-home-v3.liquid`
- `main-uburn-home.liquid`
- `main-uburn-pdp-v9.liquid`
- `uburn-homepage.liquid`
- `uburn-lp-us-en.liquid`
- `uburn-lp-v2.liquid`
- `uburn-lp.liquid`
- `uburn-pdp.liquid`
- `ub-about.liquid`, `ub-about-v2.liquid`
- `ub-collections.liquid`
- `ub-contact.liquid`, `ub-contact-v2.liquid`
- `ub-faq.liquid`, `ub-faq-v2.liquid`
- `ub-home.liquid`, `ub-home-v2.liquid`
- `ub-ingredients.liquid`, `ub-ingredients-v2.liquid`
- `ub-page-router.liquid`
- `ub-results.liquid`

**Observation**: heavy theme variant accumulation (v1, v2, v3, us, v9). Cleanup opportunity but NOT scope for Phase 2 redesign.

## Cache-bust artifacts present
- `snippets/_cache-bump.liquid`
- `snippets/_cache-bust-1.liquid`, `_cache-bust-2.liquid`, `_cache-bust-3.liquid`
- `snippets/_purge-marker-1.liquid`, `_purge-marker-2.liquid`

These are Shopify page_cache invalidation tricks (see memory `project_shopify_page_cache_lag`). Preserve as-is.

## Templates inventory

### Page templates (Shopify routing)
| Template | Probable URL | Status |
|---|---|---|
| `index.json` | `/` (homepage) | Wired to `home-uburn-2026` only |
| `product.json` | `/products/*` (default PDP) | 16 sections — DEFAULT PDP |
| `product.uburn-pdp.json` | `/products/*?template=uburn-pdp` | Alt PDP |
| `product.uburn-v9.json` | `/products/*?template=uburn-v9` | Alt PDP |
| `product.uburn.json` | `/products/*?template=uburn` | Alt PDP |
| `product.pre-order.json` | `/products/*?template=pre-order` | Alt PDP |
| `page.about.json` | `/pages/about` | |
| `page.contact.json` | `/pages/contact` | |
| `page.faq.json` | `/pages/faq` | |
| `page.ingredients.json` | `/pages/ingredients` | |
| `page.notre-histoire.json` | `/pages/notre-histoire` | |
| `page.resultats.json` | `/pages/resultats` | |
| `page.uburn-ads.json` | `/pages/uburn-ads` | |
| `page.uburn-lp.json` | `/pages/uburn-lp` | LP FR primary |
| `page.uburn-lp-us-en.json` | `/pages/uburn-lp-us-en` | LP US |
| `page.uburn-lp-v2.json` | `/pages/uburn-lp-v2` | LP V2 |
| `page.list-collections.json` | `/pages/list-collections` | |
| `page.json` | fallback page | |
| `index.uburn-v2.json` | unused alt home | |

### Default templates
- `404.json`, `article.json`, `blog.json`, `cart.json`, `collection.json`, `list-collections.json`, `gift_card.liquid`, `password.json`, `search.json`
- `customers/account.json`, `activate_account.json`, `addresses.json`, `login.json`, `order.json`, `register.json`, `reset_password.json`

## Current default PDP section stack (templates/product.json)
1. `main` (main-product)
2. `trust_icons_my9GCC` (trust-icons)
3. `multi_column_MHejQP` (multi-column)
4. `ss_scrolling_logo_cloud_zHwEQq` (ss-scrolling-logo-cloud)
5. `separator_adjustable_wJXUqG` (separator-adjustable)
6. `text_with_media_6nbr7X` (text-with-media)
7. `trust_icons_jAMQBc` (trust-icons)
8. `multi_column_QCLMjx` (multi-column)
9. `separator_adjustable_pQXxig` (separator-adjustable)
10. `separator_adjustable_xxbed6` (separator-adjustable)
11. `text_with_media_mwqBjX` (text-with-media)
12. `text_with_media_HYdW4P` (text-with-media)
13. `separator_adjustable_Fi6xnq` (separator-adjustable)
14. `1763466816ac9eee2b` (apps — theme app block container)
15. `collection_list_r8VBKW` (collection-list)
16. `faq_ahgahg` (faq)

**Total: 16 sections** (brief estimated 28; actual count is lower). Target for V2 = ~14 sections, so reduction needed ≈ 2-4 sections only, not 14. **Brief estimate stale.**

## Current homepage stack (templates/index.json)
- 1 section only: `home-2026` → `home-uburn-2026.liquid`

The homepage is currently a **single monolithic section** (`home-uburn-2026.liquid`) which contains all visual elements. The brief's Phase 3 plan of 11 modular sections would be a true architectural shift — splitting the monolith into atomic sections.

## Bilingual pattern
- **1008 occurrences** of `request.locale.iso_code == 'en'` across sections/snippets/layout (memory said 390; pattern has grown). MUST preserve when refactoring sections.

## Locales
- 30+ language files maintained from base theme (auto-translated by Shopify)
- Primary: `en.default.json` + `en.default.schema.json`
- Custom French overrides: `fr.json` + `fr.schema.json`
