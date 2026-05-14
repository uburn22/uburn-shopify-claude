---
source: sections/home-uburn-2026.liquid + sections/ub-faq-v2.liquid + CLAUDE.md (UBurn compliance rules)
extracted_date: 2026-05-14
---

# Compliance disclaimers (US — FDA / FTC)

## Primary FDA disclaimer (required on every supplement page)
> *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.*

Use as small print near any structure/function claim. Always with asterisk.

## Secondary general disclaimer (results)
> *Individual results may vary. UBurn is a dietary supplement, not a medication.*

## Footer legal disclaimer (full)
> Individual results may vary. UBurn is a dietary supplement, not a medication. Not intended to diagnose, treat, cure, or prevent any disease. These statements have not been evaluated by the FDA. Always consult your doctor before starting a supplement, particularly if pregnant, nursing, or under medication.

## Compliance rules from CLAUDE.md (UBurn-specific)

### ❌ ABSOLUTELY FORBIDDEN (US + FR equivalents)
- "weight loss" / "lose weight" / "slim down" / "minceur" / "maigrir"
- "fat burning" / "burn fat" / "brûle graisses"
- "appetite suppressant" / "coupe-faim"
- "clinically proven" / "cliniquement prouvé"
- "6h satiety" or any duration other than 4h (matches EFSA spec)
- "meal replacement" / "substitut alimentaire"
- "EFSA-approved" / "EFSA-certified" (use "EFSA-backed" or "recognized by EFSA")
- "satisfait ou remboursé 30 jours" / "satisfaction guaranteed 30 days"
- "contains coffee" or any caffeine claim (formula is caffeine-free)
- "boosts metabolism" / "booste métabolisme"
- "healthy" (vague, FDA flagged)
- "green coffee" / "café vert"

### ✅ AUTHORIZED PHRASING
- "favorise la satiété durable jusqu'à 4h" / "supports satiety up to 4 hours*"
- "contribue au contrôle de l'appétit" / "supports appetite control"
- "30 kcal" / "30 calories" (✅ matches product spec — the site says 30 kcal even though packaging may say 35)
- "0% caféine" / "0% caffeine"
- "100% végétal" / "100% plant-based"
- "Méthode Violet-Fibre-Gel" (proprietary term — protected)
- EFSA glucomannane allégation (only for konjac, only with 3g/jour + water + before-meal context)
- "Research-backed*" (with asterisk)
- "Third-party lab tested" (preferred over "FDA tested" — FDA doesn't test supplements)

## Star asterisk system
Every structure/function claim needs `*` and matches a disclaimer at section footer or page footer. Typical pattern:
> "supports satiety up to 4 hours*"
> ...
> *Individual results may vary. These statements have not been evaluated by the FDA.

## Special EFSA wording (only for konjac glucomannan)
> "EU Regulation 432/2012 (ID 3120) — konjac glucomannan contributes to satiety in the context of an energy-restricted diet. Requires 3g daily with adequate water before meals."

## Compliance flags found in live monolith / brief
- ❌ "FDA dietary fiber*" appears in monolith — FDA doesn't classify fibers as "FDA dietary fiber". This is potentially misleading. Replace with "research-backed soluble fiber" or "EFSA-recognized fiber".
- ❌ "1,500+ customers" claim is **NOT supported** by actual data (28 reviews). Remove or replace with dynamic count.
- ❌ "Clinically validated satiety from the first dose" — implies clinical trial conducted on UBurn product itself, which isn't the case. EFSA validation is on the INGREDIENT (konjac), not the product. Rephrase: "Konjac glucomannan is recognized by EFSA for satiety support."
- ❌ "6 lbs released over 4 weeks with no specific diet*" in week1-week4 — weight loss claim, **must be removed**.
- ⚠️ "cliniquement formulé" in benefits cards — borderline. Use "scientifically formulated" or just "formulated".

## Forbidden in US market (FTC)
- Money-back guarantee with specific timeframe (use "Contact us within 30 days for refund support" — soft phrasing)
- Comparison claims vs competitors without evidence
- Endorsements by non-customers
- Fake testimonials (DOJ guidelines)
