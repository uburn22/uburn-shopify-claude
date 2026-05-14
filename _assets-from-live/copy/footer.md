---
source: sections/footer.liquid + snippets/ub-footer.liquid + brief 2026-05-14
extracted_date: 2026-05-14
---

# Footer

## Tagline (top of footer)
> The afternoon ritual that resets your 4PM.
> Crafted in France · Plant-based · Caffeine-free

## 3-column structure (brief Phase 2)

### Column 1 — Product
- The Drink (PDP) → `/products/ube-poudre`
- Ingredients → `/pages/ingredients`
- The Science → `/pages/the-science` (to be created Phase 5)
- Reviews → embedded on PDP via Loox

### Column 2 — Support
- Contact us → `/pages/contact`
- FAQ → `/pages/faq`
- Shipping → `/pages/shipping` (or `/pages/shipping-us-en`)
- Returns → `/pages/returns` (or `/pages/returns-us-en`)
- Email → `hello@uburn.co`

### Column 3 — Company
- Our story → `/pages/about` (or `/pages/about-us-en`)
- Crafted in France → block within About
- Press kit → contact us (no dedicated page)
- Instagram / TikTok → social links (TBD URLs)

## FDA disclaimer (preserved as-is from live)
> *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. UBurn is a dietary supplement, not a medication.*

## Copyright
> © 2026 UBurn. All rights reserved. Crafted in France. Made for the U.S.

## Big wordmark — "UBurn" 120px lavender at bottom
Brief Phase 2 spec : footer ends with giant typographic "UBurn" in `--lavender` (#B89DD9), 120px, italic bold, low opacity (~0.4).
Asset reference : we have the violet `LOGO_Violet.png` if we want to use the image version instead of typography.

## Bottom legal links
- Privacy policy → `/pages/privacy-policy-us-en`
- Terms → `/pages/terms-us-en`
- Data sharing opt-out (CCPA) → `/pages/data-sharing-opt-out`
- Accessibility statement (TBD)

## Locale switcher
- Currently shows EUR/USD + FR/EN. For US-first launch:
  - USD default, EUR hidden unless on uburn.co/fr/*
  - EN default, FR hidden unless on /fr/* path
  - Country auto-detect via Shopify Markets

## Payment icons (already in live monolith S7 cart preview)
Visa · Mastercard · Apple Pay · Shop Pay
Add for V2 : American Express · Google Pay (US-common)
