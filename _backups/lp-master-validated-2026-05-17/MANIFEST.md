# LP MASTER VALIDATED — Charles-approved snapshot (2026-05-17)

## What this is
The exact state of `/pages/lp-4pm-killer-us` on LIVE theme
`uburn-us-premium-v2 #186066567487`, pulled 2026-05-17 evening.

This is the **validated reference**: Charles reviewed it across 3
feedback iterations (logs 1730, 1815, 1900 same day) and approved.
Use this as the **source of truth** for the LP content + design.

## URL when this snapshot was made
https://uburn.co/pages/lp-4pm-killer-us
https://1t9ayp-tw.myshopify.com/pages/lp-4pm-killer-us

## Files
- `sections/lp-4pm-killer-us.liquid` — monolithic LP section (537 lines)
- `assets/lp-4pm-killer-us.css` — full LP CSS
- `assets/lp-4pm-killer-us.js` — sticky ATC + ATC handlers + live proof + Meta Pixel
- `templates/page.lp-4pm-killer-us.json` — page template (just refs the section)

## Validated content includes
- Hero: "4pm. Your snack drawer stays closed." + violet bottle SVG
- USP strip: 4h / 30 / 0 / FR
- Founder card: Claire D. quote
- Same script 3 cards: 10am / 3pm / 7pm
- 3 gestures: Mix / Sip / Stay
- 6 plant actives table (glucomannan + ube + MCT + L-carnitine + ginger + acacia)
- Stats block (40% / 50%+ / 4h)
- Press bar
- 3 testimonials (Ashley K. / Jessica M. / Megan R.)
- Offer: $34.50 Starter + $54.50 Maximum + bundle savings
- 7 FAQ items
- Final CTA "Your 4pm changes today"
- Sticky ATC + live proof popup

## Mobile QA validated 2026-05-15
- 0 horizontal overflow at 390px viewport
- Sticky ATC visible bottom
- All CTAs WCAG-compliant contrast (white text on plum-black bg)
- Trust tags wrap correctly without overflow

## Relationship to lp-master-us
The lp-master-us refactor on dev theme #186117488959 is FUNCTIONALLY
IDENTICAL to this snapshot — same Liquid, same content, just exposed
via schema blocks for future variant adaptation.

If lp-master-us refactor ever introduces a regression:
```bash
cp _backups/lp-master-validated-2026-05-17/sections/lp-4pm-killer-us.liquid sections/
cp _backups/lp-master-validated-2026-05-17/assets/lp-4pm-killer-us.* assets/
cp _backups/lp-master-validated-2026-05-17/templates/page.lp-4pm-killer-us.json templates/
shopify theme push --theme=186117488959 --store=1t9ayp-tw.myshopify.com --nodelete \
  --only "sections/lp-4pm-killer-us.liquid" \
  --only "assets/lp-4pm-killer-us.*" \
  --only "templates/page.lp-4pm-killer-us.json"
```
