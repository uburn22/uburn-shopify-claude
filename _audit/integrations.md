# Integrations Audit — UBurn live theme #185967575359

**Date**: 2026-05-14
**Method**: theme file grep + live storefront HTML fetch (curl)

## 🟢 Confirmed active integrations

### GA4 (Google Analytics 4)
- **Property**: `513024244` / Measurement ID `G-6G10HXBR4B`
- **Injection**: NOT in theme files. Fires via `{{ content_for_header }}` injected by **Shopify Google & YouTube channel** app
- **Status**: ✅ confirmed firing on /, /en, /products/*
- **Action for V2**: nothing — preserved automatically by Shopify channel

### Shopify Markets
- Single market defined: `united-states` (parent @default)
- Default storefront serves EUR; USD appears only on PDP meta tags (Shopping feed)
- Currency switching is server-side via market detection (not BUCKS client-side)
- **Action for V2**: preserved

### Reviews (Shopify Product Reviews app — free, native)
- Stored as **product metafields**: `reviews.rating` (scale 5), `reviews.rating_count`
- Rendered by theme snippet `snippets/product-rating.liquid`
- **NO third-party app** (no Loox, Judge.me, Stamped, Yotpo, Okendo references found anywhere in theme)
- **Action for V2**: Phase 3 Social Counter section can fetch live counts via:
  ```liquid
  {{ product.metafields.reviews.rating_count.value }}
  {{ product.metafields.reviews.rating.value.rating | round: 1 }}
  ```
  ⚠️ Brief mentioned "Loox/Judge.me credentials needed" → **not needed**, reviews are native Shopify metafields.

## 🟡 Changed since brief was written

### Meta Pixel `1207776051409154`
- **Status in theme**: DISABLED. Comment in `layout/theme.liquid:144-146`:
  ```
  <!-- DISABLED: old Meta pixel — replaced by FB&IG channel (Data Sharing Maximum) -->
  <!-- All Meta tracking is now handled by the official Shopify Facebook & Instagram channel -->
  ```
- **Snippet still exists**: `snippets/meta-pixel-events.liquid` (93 lines, contains ViewContent/AddToCart/InitiateCheckout). NOT included anywhere → dead code preserved for rollback.
- **Live storefront**: `fbq()` is NOT firing client-side. Confirmed by curl /, /en, /products/*.
- **Tracking now lives**: Shopify Facebook & Instagram channel handles all Meta events (ViewContent / AddToCart / InitiateCheckout / Purchase) via Conversions API (server-side, no client pixel).
- **Action for V2**: do NOT re-enable client-side pixel — would cause double-counting. Preserve `meta-pixel-events.liquid` as dead-code backup.

⚠️ **Brief says**: "Meta Pixel ID 1207776051409154 must be preserved in theme.liquid head". This is **OBSOLETE** — preservation now means leaving the disabled comment + dead snippet intact, not re-enabling the script.

## 🔴 NOT found in theme or live storefront

### BUCKS Currency Converter
- **Brief claim**: "BUCKS Currency Converter (theme-attached à 185967575359)"
- **Search results**:
  - 0 references in theme files (sections, snippets, layout, assets, JSON)
  - 0 BUCKS markers in live storefront HTML (homepage, /en, PDP)
- **Possibilities**:
  1. App was uninstalled and theme references cleaned up
  2. App injects async via post-DOM script (would not appear in raw HTML)
  3. App is registered as theme app block but unused
- **Action for V2**: ⚠️ **Question for Charles** — is BUCKS still active? If yes, where? Shopify Markets native multi-currency may have replaced it.

### Stripe (USD checkout)
- No Stripe JS in theme (expected — checkout is Shopify-managed)
- USD pricing flows via Shopify Payments / Markets → Stripe behind the scenes
- **Action for V2**: preserved by Shopify, no theme work needed

### Sendcloud / Colissimo
- Not visible in theme (expected — shipping is handled in Shopify admin)
- **Action for V2**: nothing — verify in Shopify admin separately

## Theme app blocks present (anonymous IDs in product.json)
- `1763466816ac9eee2b` in `apps` section type → Theme app block container, populated by an installed app extension (could be a reviews widget, subscription app, or upsell tool). Charles to confirm in Shopify admin which app populates it.

## Apps section (sections/apps.liquid)
- Generic Maestrooo Stretch theme app container — renders blocks added via Shopify app extensions

## ⚠️ Apps detection limitation
Custom app token does not have `read_apps` scope. Cannot enumerate installed apps via Admin API.
**Action**: Charles can confirm installed apps list via Shopify Admin → Apps & Sales Channels.
