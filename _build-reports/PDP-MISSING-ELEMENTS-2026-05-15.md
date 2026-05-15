# PDP Missing Elements — Live (#185967575359) vs V2 (#186066567487)
**Date** : 2026-05-15
**Method** : Direct inspection of live `templates/product.json` `main-product` blocks + section files

---

## Diff matrix

| # | Element | Present Live | Present V2 | Action | Priority |
|---|---|---|---|---|---|
| 1 | **Social proof carousel** ("Sophie ✓, Camille ✓ adorent nos produits!") rotating verified names | ✅ block `section_store_block_social_proof` | ❌ | **ADD** (CR-positive cold traffic, builds initial trust above the fold) | P1 |
| 2 | **Inventory progress bar** (low stock urgency, threshold 0, max 50) | ✅ block `inventory_8YcMYF` | ❌ | **ADD** (urgency lever) | P1 |
| 3 | **Shipping date countdown** ("🚚 Ships before [date] · Free shipping") | ✅ block `section_store_block_shipping_info` | ❌ | **ADD** (urgency + transparency) | P1 |
| 4 | **Payment icons grid** (Visa/MC/Apple Pay/Shop Pay/etc.) | ✅ block `section_store_block_payment_icons_2` | 🟡 partial (only in cart drawer) | **ADD** to PDP near ATC | P1 |
| 5 | **Video carousel** (4 product videos : UB Coconut, V_10, V_6, etc.) | ✅ block `section_store_block_video_carousel` | ❌ | **ADD** (PHASE 2 — needs Charles video assets confirmed) | P2 |
| 6 | **Icons with text trust line** ("🔥 Soutient métabolisme · 📉 Ressentie · ⏱️ Satiété") | ✅ block `icons_with_text_kAU97U` (FR copy) | 🟡 partial (V2 has compliance trust strip with similar concept) | **ADAPT** — V2 has it but US-aligned compliance copy | OK |
| 7 | **Title block** "Crush the 4PM crash" | ✅ block `title` | ✅ u2-pdp H1 | DONE | — |
| 8 | **Price block** with strike-through subscription discount | ✅ block `price` | ✅ u2-pdp variants | DONE | — |
| 9 | **Variant picker** (block style) | ✅ block `variant_picker` | ✅ u2-pdp variant cards + Subscribe radio | DONE (improved with Subscribe) | — |
| 10 | **Buy buttons** (with payment button + gift card + qty selector) | ✅ block `buy_buttons` | ✅ u2-pdp ATC form | DONE | — |
| 11 | **Accordion "Ingrédients"** | ✅ block `accordion_4Byccp` | ✅ u2-pdp FAQ accordion + Formula grid | DONE (more comprehensive) | — |
| 12 | **Trust icons** (`trust-icons` section ×2) | ✅ section | ✅ u2-trust-band + u2-pdp compliance pills | DONE | — |
| 13 | **Multi-column blocks** (`multi-column` ×2) | ✅ section | 🟡 spirit covered in u2-pdp ritual + testimonials | DONE | — |
| 14 | **Press scrolling logos** (`ss-scrolling-logo-cloud`) | ✅ section | ❌ DROPPED | DROPPED per Charles Q5/Q7 (FR press irrelevant for US) | — |
| 15 | **Text with media** (×3) | ✅ section | ✅ u2-pdp ritual / precision / workday | DONE (more sections, better content) | — |
| 16 | **Apps block** (Loox widget) | ✅ section `apps` | 🟡 conditional render in u2-pdp + u2-reviews | DONE (conditional pending Loox app fully activated) | — |
| 17 | **Collection list** (cross-sell other products) | ✅ section `collection-list` | ❌ (only 1 product on site → not applicable yet) | SKIP — single product site | — |
| 18 | **FAQ section** | ✅ section `faq` | ✅ u2-pdp FAQ accordion 7Q | DONE | — |

---

## P1 elements to ADD this iteration

### Element 1 : Social proof carousel
Rotating short messages of verified buyers :
- "Sophie K. just subscribed ✓"
- "Jennifer M. left a 5-star review ✓"
- "Rachel D. is back for her 3rd pack ✓"

Implementation : new section `u2-pdp-social-proof.liquid` above variant selector. Auto-rotate every 4s with fade-in.

### Element 2 : Inventory low-stock progress bar
"Only [X] packs left" if `current_variant.inventory_quantity < 50`. Progress bar visual.

Implementation : inline block in u2-pdp.liquid info section, using `{{ current_variant.inventory_quantity }}`.

### Element 3 : Shipping date countdown
"🚚 Ships in 24-48h · Free U.S. delivery on $40+"
Or dynamic : "Order in next [Xh] for delivery by [date]"

Implementation : inline block in u2-pdp.liquid info section. Static text first iteration; dynamic countdown JS can come later.

### Element 4 : Payment icons grid
Visa · Mastercard · Amex · Apple Pay · Shop Pay · Google Pay
Below ATC button.

Implementation : inline block in u2-pdp.liquid below ATC.

---

## P2 elements (Phase 2)

### Element 5 : Video carousel
Requires Charles to confirm which videos are usable (current 4 videos `UB Coconut.mp4`, `V_10.mp4`, `V_6.mp4`, `copy_5F4D14F0...mov` — need to verify content quality for US market).

Skip this iteration. Add in iter 5 with new product photoshoot/videos.

---

## Summary

**Adding 4 new CRO elements this iteration** :
- Social proof rotating carousel
- Inventory low-stock bar
- Shipping date / countdown line
- Payment icons grid (under ATC)

**Status after additions** : PDP V2 will have feature parity with live PDP minus video carousel (P2) and collection cross-sell (not applicable).
