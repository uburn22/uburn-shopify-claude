# PDP Migration Matrix — Live → V2
**Date** : 2026-05-15
**Live PDP** : 16 sections in `templates/product.json` + main-product anchor
**V2 PDP** : `u2-pdp` section (10 blocks composed inline)

---

## Migration verdicts

| # | Live section type | Live role | V2 destination | Verdict |
|---|---|---|---|---|
| 1 | `main-product` (Maestrooo) | Image gallery + variant + ATC | `u2-pdp` gallery + variants + ATC blocks | ✅ MIGRATED |
| 2 | `trust-icons` (1st) | Trust badges row | `u2-pdp` trust band (top) | ✅ MERGED |
| 3 | `multi-column` (1st) | Benefits 3-col | `u2-pdp` compliance-trust-strip + ritual sections | ✅ MERGED |
| 4 | `ss-scrolling-logo-cloud` | Press scrolling logos | — | ✅ DROPPED (decision Q7, press FR) |
| 5 | `separator-adjustable` | Visual break | — | ✅ DROPPED (V2 uses spacing tokens) |
| 6 | `text-with-media` (1st) | "How UBurn works" image+text | `u2-pdp` ritual-30s section | ✅ MERGED |
| 7 | `trust-icons` (2nd) | More trust | `u2-pdp` compliance-trust-strip | ✅ MERGED |
| 8 | `multi-column` (2nd) | Made in France 4-features | Should go to `u2-pdp` craft block | 🔴 MISSING (lost in V2) |
| 9-13 | 3× `separator-adjustable` + 2× `text-with-media` | Visual breaks + content | — | 🟡 Spacing implicit in V2 |
| 14 | `apps` (theme app block) | **Loox reviews widget** | Should embed in V2 PDP | 🔴 **MISSING V2** |
| 15 | `collection-list` | Cross-sell other products | `u2-pdp` science-link (different CTA) | 🟡 MERGED but different |
| 16 | `faq` | FAQ accordion | `u2-pdp` faq section | ✅ MIGRATED (7 Q in V2 vs 5-10 in live) |

---

## V2 PDP blocks (10) — all CRO-validated

| V2 block | Live equivalent | CRO score |
|---|---|---|
| Trust band top | `trust-icons` (×2) | ✅ Trust above gallery |
| Gallery + 4 thumbs | `main-product` images | ✅ Visual hero |
| H1 + stars rating | `main-product` title + reviews | ✅ Match hero promise |
| Offer-stack pills (Welcome / Auto-refill) | (live had similar promo badge) | ✅ Conversion stack |
| Variant radio cards | `main-product` variant picker | ✅ Clear choice, no default chaos |
| ATC form Shopify native | `main-product` form | ✅ Convert |
| Compliance trust strip 6 items | `trust-icons` | ✅ Reinforce trust below CTA |
| Ritual 30 seconds (3 steps) | `text-with-media` | ✅ Usage education |
| Testimonials grid 3 (Ashley/Jennifer/Rachel) | NOT in live PDP (was on homepage) | ✅ Social proof on PDP for cold traffic |
| FAQ accordion (7 Q) | `faq` | ✅ Objection handling |
| Science link block | `collection-list` | ✅ Educational CTA |
| Sticky ATC (mobile) | live had `.uhome-sticky` (homepage only) | ✅ Always-visible convert |

---

## 🚨 Critical missing CRO elements on V2 PDP

### 1. Loox reviews widget (App block)
- **Live** : section `apps` block #14 renders Loox widget which shows the 28 actual customer reviews with photos
- **V2** : currently only shows `★★★★★ 4.7/5` static stars + 3 hardcoded testimonials
- **Impact** : MAJOR — cold traffic conversion depends heavily on UGC social proof
- **Fix** : embed Loox widget via metafield `product.metafields.loox.reviews.value` (already extracted) OR add Shopify App Embed block in u2-pdp template

### 2. Bonus stack at cart preview
- **Live** : on homepage `home-uburn-2026.liquid` S7 cart preview shows:
  - "E-book 30 days to take back control" — $50 → FREE
  - "Private community UBurn Collective" — $43 → FREE
  - "Nutrition support — WhatsApp 30 days" — $50 → FREE
  - "Total savings −$199"
- **V2** : NOT present — neither in homepage nor PDP
- **Impact** : value perception — Maximum Pack appears $54.50 alone vs $254 value stack
- **Fix** : add bonus stack block in V2 PDP (or homepage pricing card section if we add that)

### 3. "Which pack is right for you?" matcher
- **Live** : NOT explicitly present, but PDP has rich variant info (90g / 270g labeled)
- **V2** : variant radio cards have basic labels
- **Improvement opportunity** : add 1-line micro-copy under each radio explaining who it's for
  - Starter Pack 90g → "Best for first-timers · 30 days"
  - Maximum Pack 270g → "Best value · 90 days · -33% per scoop · Most popular"

### 4. Subscribe & Save
- **Live** : has subscription flow via Shopify Subscriptions or app
- **V2** : variant cards are one-time only
- **Status** : Phase 2 (requires Shopify Subscriptions app config + 3rd variant)
- **Fix** : Phase 2 (Charles decision needed on app: Recharge / Bold / Shopify native)

### 5. Free shipping progress bar
- **Live** : not in PDP main, only in cart drawer (Dawn-style)
- **V2** : currently Dawn default cart drawer (works but generic)
- **Impact** : medium — drives AOV upsell
- **Fix** : custom u2-cart-drawer.liquid with progress bar, or add inline ATC note "$X away from free shipping"

---

## V2 iteration 2 PDP plan

Add to `sections/u2-pdp.liquid` :
1. ✅ Loox reviews widget block (via `product.metafields.loox.reviews.value` HTML render)
2. ✅ Variant card micro-copy ("Best for first-timers" / "Best value")
3. ✅ Inline ATC note "Free shipping over $40 — you qualify ✓" (since pack $34.50+ → +shipping)
4. 🟡 Bonus stack (optional — needs Charles confirmation on bonus offers truth)
5. 🔵 Subscribe & Save → Phase 2 (subscription app dependency)
6. 🔵 Sticky cart drawer with progress → Phase 2 (new section build)
