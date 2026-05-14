---
source: brief 2026-05-14 Phase 3 Section 7 (NEW — replaces press logos)
extracted_date: 2026-05-14
---

# Social counter section (NEW)

## Brief Phase 3 spec
- **Eyebrow** : — loved by women across america
- **Counter value** (placeholder) : [X,XXX]
- **Counter label** : women have started their UBurn ritual
- **Rating value** (placeholder) : [4.X]
- **Rating count** (placeholder) : [X,XXX]
- 3 testimonials with verified badge

## Real values to pull dynamically
Use Shopify Liquid to render LIVE counts from metafields:

```liquid
{%- assign rating_count = product.metafields.reviews.rating_count.value | default: 0 -%}
{%- assign rating_value = product.metafields.reviews.rating.value.rating | round: 1 -%}
{%- assign loox_count = product.metafields.loox.num_reviews | default: 0 -%}
{%- assign loox_rating = product.metafields.loox.avg_rating | default: 4.7 -%}
```

**Current real values (2026-05-14)** :
- Shopify native `reviews.rating_count` = **28**
- Shopify native `reviews.rating` = **4.7/5**
- Loox `num_reviews` = **28** (matches)
- Loox `avg_rating` = **4.7** (matches)

## Recommended honest copy for V2
- **Eyebrow** : — verified reviews
- **Counter** : `{{ rating_count }} verified Loox reviews`
- **Stars** : `★★★★★ {{ rating_value | round: 1 }}/5`
- **Sub-line** : "Loved by U.S. women rewriting their 4PM."

## DO NOT use
- ❌ "1,500+ customers" (doesn't match data)
- ❌ "thousands of women" (doesn't match data)
- ❌ Fake countdown timers or fabricated numbers

## Honest CTA
> "Be one of the next [rating_count + 1] women — start your ritual today."

## 3 testimonials block (US-aligned)
Per brief, with photos available in `/images/testimonials/`:
- Ashley K. · Phoenix, AZ → reviewer-ashley.jpg
- Jennifer M. · Miami, FL → reviewer-jennifer.jpg
- Rachel R. · Denver, CO → reviewer-rachel.jpg

See `testimonials.md` for full quotes.

## Implementation note
- If using Loox app for reviews, embed via `[loox.reviews]` metafield render (HTML widget pre-built).
- Native Shopify reviews populate from Shopify admin metafield page.
- For now both systems show same count — pick ONE source of truth to display, OR display both counts ("28 verified Loox reviews · 4.7 stars").
