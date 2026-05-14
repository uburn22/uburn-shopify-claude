---
source: sections/home-uburn-2026.liquid (S11 — TÉMOIGNAGES) + brief 2026-05-14 (Phase 3 Section 7)
extracted_date: 2026-05-14
---

# Testimonials

## ⚠️ Reality check
- **Actual reviews on Shopify** : **28 reviews** total (via `reviews.rating_count` AND `loox.num_reviews`)
- **Actual rating** : 4.7/5 (via `reviews.rating` AND `loox.avg_rating`)
- **Monolith claims** : "1,500+ customers" / "1,500+ happy customers" — **NOT supported by data**.
- **Source of truth** for any review count quote = `product.metafields.reviews.rating_count.value` OR Loox API

## Testimonials currently in live monolith (FR persona, EN-translated)
| Author | Location | Quote |
|---|---|---|
| Marion L., 28 | Lyon | "I don't think about the pantry at 4pm anymore. It really helps me day after day. One simple thing that changed how I relate to food." |
| Sophie | Bordeaux | "For $0.65 a day, there's no risk. And it works. On my 2nd pack now." |
| Nathalie | Toulouse | "My coworkers asked me my secret. Tastes great and I don't snack at night anymore." |
| Céline | Lyon, France | "I'd tried many things before. UBurn is the first that actually worked long-term." |

## US testimonials planned in brief 2026-05-14
| Author | Location | Quote |
|---|---|---|
| Ashley K. | Phoenix, AZ | "i tried so many things that made me bored or jittery. this is different. my 4pm cravings are gone." |
| Jennifer M. | Miami, FL | "the powder turns into a calm, indulgent moment. i actually look forward to it." |
| Rachel R. | Denver, CO | "smoother digestion, calmer mood, and no afternoon crash. i'm sold." |

## Recommended for V2
Use the **brief's US testimonials** (Ashley K, Jennifer M, Rachel R) with verified-purchase badge — but ONLY if these are real customers. If fabricated, switch to real Loox reviews via metafield render.

## Photo assets available
- `/images/testimonials/reviewer-ashley.jpg` — Ashley K. portrait
- `/images/testimonials/reviewer-jennifer.jpg` — Jennifer M. portrait
- `/images/testimonials/reviewer-rachel.jpg` — Rachel R. portrait
- `/images/testimonials/reviewer-brooklyn.jpg` — Brooklyn (location-tagged, maybe Sarah D.?)
- `/images/testimonials/reviewer-la.jpg` — LA (location-tagged)

⚠️ Brief mentioned "Megan T." testimonial — **no photo asset found** for Megan. Either drop or add manually.

## Recommended honest claim for social-counter section
> "Loved by [real_count] women across America — Verified Loox reviews · ★ [real_rating]/5"

Replace `[real_count]` with `{{ product.metafields.reviews.rating_count.value }}` and `[real_rating]` with `{{ product.metafields.reviews.rating.value.rating | round: 1 }}`.

Starting realistic copy : "Loved by 28+ women across the U.S." (grows with sales).
