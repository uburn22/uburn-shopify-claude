---
source: Shopify product 10061750698303 options + Charles decision 2026-05-14
extracted_date: 2026-05-14
---

# Product options (variant picker)

## Current (FR-leaning)
- **Option name** : `CHOISISSEZ VOTRE OBJECTIF` (FR uppercase)
- **Values** :
  - Starter Pack | 90g · 30 servings ($34.50)
  - Maximum Pack | 270g · 90 servings ⭐ ($54.50)

## Decision 2026-05-14 — US rename
- **New option name** : **Choose your pack**
- **Reformulated values** :
  - **Starter** — 90g · 30 servings · $34.50 (label : "Try it · 30 days")
  - **Maximum** — 270g · 90 servings · $54.50 (label : "Best value · 90 days · -33% vs Starter")

## Update procedure (Shopify admin)
1. Admin → Products → UBurn — Plant-based satiety drink (10061750698303)
2. Variants section → click option name `CHOISISSEZ VOTRE OBJECTIF` → rename to `Choose your pack`
3. Variant titles updated automatically (or edit each variant separately)
4. SKUs preserved (UBURN-90G-DECOUVERTE, UBURN-270G-MAXIMUM) — do NOT change

## UX recommendation V2
Render as 2 radio cards (not dropdown) :
```
┌───────────────────────────────────┐  ┌───────────────────────────────────┐
│ STARTER · 90g · 30 servings       │  │ MAXIMUM · 270g · 90 servings  ⭐  │
│ $34.50                            │  │ $54.50  (was $74)                 │
│ Try it for 30 days                │  │ Best value · -33% per day         │
│ [○ Select]                        │  │ [● Selected]                       │
└───────────────────────────────────┘  └───────────────────────────────────┘
```

Default selected : **Maximum** (drives AOV, matches current live default).
For cold traffic optimization : consider defaulting to **Starter** (lower friction first purchase).

## Subscribe & Save option
Not currently in variants — would require Shopify Subscriptions or app (Recharge, Bold, Loop). Charles decision pending.
