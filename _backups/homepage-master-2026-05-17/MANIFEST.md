# HOMEPAGE MASTER — Charles-approved snapshot (2026-05-17)

## What this is
The exact state of the HOMEPAGE on dev theme
`UBURN-US-VISUALS-2026-05-15 #186117488959` as Charles reviewed it
on 2026-05-17 evening. This is the **validated master LP** =
brand entry page for the US market.

## URL when this snapshot was made
- Dev preview (auth required) :
  https://1t9ayp-tw.myshopify.com/?preview_theme_id=186117488959
- Live (after publish — currently the version BEFORE today's enrichments) :
  https://uburn.co/

## Files included
- `templates/index.json` — homepage template with section order
- `layout/theme.liquid` — global layout (header/footer wrapper)
- 17 homepage sections (u2-hero-split, u2-trust-band, u2-three-ways,
  u2-marquee, u2-problem, u2-formula-grid, u2-efsa-block, u2-stats,
  u2-violet-bottle, u2-pricing-cards, u2-comparison, u2-before-after,
  u2-craft, u2-moodboard, u2-guarantee-bar, u2-final-cta, u2-newsletter)
- + u2-header, u2-footer, u2-announcement-bar
- CSS : u2-base.css, u2-typography.css, u2-components.css
- All images referenced by these sections (ingredients, hero photos,
  moodboard stock, packshots, before-after, etc.)
- Snippets : u2-cta-primary, u2-trust-pill, u2-sticky-atc

## Key validated changes vs previous live (#186066567487)
1. u2-hero-split : hot latte hero image (validated variant A) + bottle photo right
2. u2-three-ways : iced ritual photo c.jpg (right-biased preserving UBurn pouch)
3. u2-problem : NEW lifestyle banner "it's not in your head — it's in your blood"
4. u2-moodboard : NEW 6-tile editorial section (origin · founder · craft · matter · mood · ritual)
5. u2-formula-grid : redesigned cards (boosted contrast, real ingredient photos
   from _assets-from-live, no embedded buy block — consolidated below)
6. u2-pricing-cards : NEW Subscribe (−10%) ↔ One-time toggle + direct
   /cart/add checkout + dynamic prices + dynamic bundle total
7. Dose copy fixed everywhere : Starter 90g · 1 scoop/day · 30 days vs
   Maximum 270g · 3 scoops/day · 30 days · faster results
8. $/scoop pricing (not $/day) for honest comparison

## Restore command (if ever needed)
```bash
cd ~/Code/uburn/uburn-shopify-v2
cp _backups/homepage-master-2026-05-17/templates/index.json templates/
cp _backups/homepage-master-2026-05-17/sections/*.liquid sections/
cp _backups/homepage-master-2026-05-17/assets/*.css assets/
cp _backups/homepage-master-2026-05-17/assets/*.png assets/
cp _backups/homepage-master-2026-05-17/assets/*.jpg assets/
shopify theme push --theme=<TARGET> --store=1t9ayp-tw.myshopify.com --nodelete
```
