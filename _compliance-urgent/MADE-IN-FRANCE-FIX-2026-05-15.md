# Made in France → French brand — Compliance Fix
**Date:** 2026-05-15
**Theme:** `uburn-us-premium-v2` (#186066567487)
**Trigger:** Charles legal clarification — UBurn is a **French brand**, not a "Made in France" product under strict EU/US legal definition.
**Operator:** Claude (autonomous fix, urgent)

## Rule

| Forbidden | Replacement (context) |
|---|---|
| `Made in France` | `French brand` (brand statement) · `French heritage` (property list) |
| `Crafted in France` | `French heritage` (badge) · `French brand` (sentence) |
| `Made FR` | `French brand` |
| `Marque Française` | `French brand` |
| `crafted in france` (lowercase) | `french heritage` |
| `MADE IN FRANCE` (caps) | `FRENCH BRAND` |

**Kept (allowed per Charles):** `French recipe`, `French heritage`, `French brand`, `French-inspired`, `From France`, `French laboratory`.

## All Replacements (30 hits across 13 files)

| File | Line | Before | After |
|---|---:|---|---|
| `sections/u2-announcement-bar.liquid` | 43 | `Crafted in France · Loved in the U.S.` | `French heritage · Loved in the U.S.` |
| `sections/u2-announcement-bar.liquid` | 57 | schema default: `Crafted in France · Loved in the U.S.` | `French heritage · Loved in the U.S.` |
| `sections/u2-comparison.liquid` | 139 | `Crafted in France` (compare cell label) | `French heritage` |
| `sections/u2-craft.liquid` | 2 | comment: `Craft section (Made in France atelier)` | `Craft section (French brand atelier)` |
| `sections/u2-craft.liquid` | 19 | `aria-label="Crafted in France"` | `aria-label="French heritage"` |
| `sections/u2-craft.liquid` | 23 | `crafted in france · since 2024` | `french heritage · since 2024` |
| `sections/u2-craft.liquid` | 28 | `Crafted in France since 2024.` | `Crafted with French heritage since 2024.` |
| `sections/u2-craft.liquid` | 33 | feature label: `made in france` | `french brand` |
| `sections/u2-footer.liquid` | 162 | `© {year} UBurn. Crafted in France. Made for the U.S.` | `© {year} UBurn. French brand · Made for the U.S.` |
| `sections/u2-hero-split.liquid` | 248 | trust-pill: `Crafted in France` | `French heritage` |
| `sections/u2-hero.liquid` | 67 | `30 calories. Crafted in France.` (sub) | `30 calories. French heritage.` |
| `sections/u2-hero.liquid` | 108 | schema default mirror | `30 calories. French brand.` (kept as schema default for editor) |
| `sections/u2-homepage.liquid` | 469 | comment: `CRAFT (Made in France)` | `CRAFT (French brand)` |
| `sections/u2-homepage.liquid` | 689 | `30 calories. Crafted in France.` (hero sub) | `30 calories. French brand.` |
| `sections/u2-homepage.liquid` | 843 | comment: `CRAFT (Made in France)` | `CRAFT (French brand)` |
| `sections/u2-homepage.liquid` | 844 | `aria-label="Crafted in France"` | `aria-label="French heritage"` |
| `sections/u2-homepage.liquid` | 848 | `crafted in france · since 2024` | `french heritage · since 2024` |
| `sections/u2-homepage.liquid` | 853 | `Crafted in France since 2024.` | `Crafted with French heritage since 2024.` |
| `sections/u2-homepage.liquid` | 869 | feature label `made in france` | `french brand` |
| `sections/u2-homepage.liquid` | 920 | schema default hero sub | `30 calories. French brand.` |
| `sections/u2-marquee.liquid` | 47 | items default contains `Crafted in France` | `French heritage` |
| `sections/u2-marquee.liquid` | 61 | schema default mirror | `French heritage` |
| `sections/u2-our-story.liquid` | 139 | headline: `Made in France.` | `French brand.` |
| `sections/u2-pdp-precision.liquid` | 96 | tag: `Crafted in France · Since 2024` | `French heritage · Since 2024` |
| `sections/u2-pdp-precision.liquid` | 120 | feature title: `Made in France` | `French brand` |
| `sections/u2-pdp-science-teaser.liquid` | 63 | `Caffeine-free. 30 calories. Crafted in France.` | `Caffeine-free. 30 calories. French heritage.` |
| `sections/u2-pdp.liquid` | 504 | `Caffeine-free. Crafted in France.` (PDP desc) | `Caffeine-free. French heritage.` |
| `sections/u2-pdp.liquid` | 579 | trust-strip item: `Made in France` | `French brand` |
| `sections/u2-science.liquid` | 250 | `plant-based, crafted in France.` | `plant-based, French heritage.` |
| `sections/u2-science.liquid` | 305 | `Crafted in France since 2024.` | `Crafted with French heritage since 2024.` |

## Contextual Choices

| Context type | Replacement chosen | Why |
|---|---|---|
| Property list (e.g., "Caffeine-free. 30 cal. X.") | `French heritage` | reads naturally as a quality, not a fragment |
| Standalone headline / badge / tag | `French brand` or `French heritage` | both work; chose brand for assertion sentences |
| Footer / copyright | `French brand · Made for the U.S.` | dual brand-origin statement |
| Feature label (icon + 2-3 words) | `French brand` | matches tile pattern |
| Trust pill / compare cell | `French heritage` | uniformity across UI badges |
| Schema editor defaults | `French brand` | gives merchant most flexible word |

## Final Compliance Recheck

```
grep -rni "made in france"     → 0
grep -rni "crafted in france"  → 0
grep -rni "marque française"   → 0
grep -rni "made fr"            → 0
```

**All clear. 0× across all forbidden patterns.**

## Files modified (13)

```
sections/u2-announcement-bar.liquid
sections/u2-comparison.liquid
sections/u2-craft.liquid
sections/u2-footer.liquid
sections/u2-hero-split.liquid
sections/u2-hero.liquid
sections/u2-homepage.liquid
sections/u2-marquee.liquid
sections/u2-our-story.liquid
sections/u2-pdp-precision.liquid
sections/u2-pdp-science-teaser.liquid
sections/u2-pdp.liquid
sections/u2-science.liquid
```

## Commit

```
fix(copy): replace Made in France claims with French brand per Charles legal clarification 2026-05-15
```
