---
source: brief 2026-05-14 Phase 3 Section 7 (NEW — replaces press logos)
extracted_date: 2026-05-14
status: DROPPED for V1 per Charles decision 2026-05-14
---

# Social Counter section — DROPPED FOR V1

## Decision (2026-05-14)
**Section retirée du scope V1.** Réintroduction Phase 2 quand reviews count >= 100+.

### Raison
28 reviews actuellement. Sur cold traffic US, "28" déclenche doute plutôt que confiance. Mieux vaut **pas de compteur** que un compteur faible.

## Strategy "stars only, no count" pour V1
- Afficher uniquement les **étoiles** dans le hero / PDP / final-cta : `★★★★★ 4.7/5`
- **Ne JAMAIS afficher** le nombre de reviews (ni "1,500+", ni "28", ni "[X,XXX]")
- Quand reviews >= 100 : on réintroduit la section avec compteur dynamique

## Compensation (per décision Charles)
Renforcer l'authority via :
1. **EFSA Authority Block** — déplacer plus haut dans la homepage (post-hero, avant Formula)
2. **Trust band élargi** — ajouter "Made in France · EFSA-recognized fiber · 3rd party lab tested · Free U.S. shipping"

## Implementation note (when reactivated Phase 2)
```liquid
{%- if product.metafields.loox.num_reviews >= 100 -%}
  <section class="social-counter">
    <p class="counter">{{ product.metafields.loox.num_reviews }} verified Loox reviews</p>
    <p class="stars">★★★★★ {{ product.metafields.loox.avg_rating | round: 1 }}/5</p>
  </section>
{%- endif -%}
```

## Stars-only rendering (V1 — used in hero, PDP, final-cta)
```liquid
<div class="stars-rating">
  <span class="stars">★★★★★</span>
  <span class="rating">{{ product.metafields.loox.avg_rating | default: 4.7 | round: 1 }}/5</span>
</div>
```

(No count rendering. Period.)

## 3 testimonials block — moved to its own section
See `testimonials.md`. Render as standalone section with photos, no count.
