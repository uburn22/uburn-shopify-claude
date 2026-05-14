# Compliance Fix Report — 2026-05-14
## Étape A-B-C complete, awaiting publish authorization

**Live theme #185967575359** : UNTOUCHED throughout. Still serving https://uburn.co
**Working theme #186067222847** : `uburn-live-COMPLIANCE-FIX-2026-05-14` (unpublished)

---

## 5 fixes applied — git log

```
0e89d6c fix(compliance): remove Dr Claire Dubois fake expert + replace with EFSA Authority — F5
8851cc4 fix(compliance): F4 + F1/F2-cleanup — replace clinical claim and remove collateral duplicates
3a3c631 fix(compliance): remove weight loss claim 6lbs / 2,8kg / 3kg — F3 (FTC §255 risk)
3443744 fix(compliance): replace FDA fiber claim — F2
9a89936 fix(compliance): replace 1500 customers claim — F1
e51226b chore(compliance-fix): baseline from live theme #185967575359 duplicated to #186067222847
```

**Tag** : `compliance-fix-complete-2026-05-14`
**Branch** : `compliance-fix-may14`
**Repo** : `~/Code/uburn/uburn-shopify-compliance-fix/`

## Diffs by fix

### F1 — "1,500+ customers" (36 hits, 12 files)
- EN `1,500+ customers` / `1,500+ women` → `Loved by women across America`
- FR `1 500+ femmes` / `1 500+ clientes` → `Aimée par des femmes au quotidien` / `Avis vérifiés`
- Files : home-uburn-2026, main-product, ub-about-v2, ub-home-v2, ub-page-router, ub-results, uburn-homepage, uburn-lp-us-en, uburn-lp-v2, uburn-lp, uburn-pdp, snippets/product-info

### F2 — "FDA dietary fiber" (32 hits, 8 files)
- `FDA dietary fiber` → `research-backed fiber`
- `FDA fiber` → `research-backed fiber`
- Files : home-uburn-2026, main-uburn-pdp-v9, ub-about-v2, ub-faq-v2, ub-ingredients-v2, ub-page-router, uburn-lp-us-en, uburn-lp

### F3 — weight loss claims (11 hits, 4 files) — **HIGHEST RISK FTC §255**
- EN `6 lbs released over 4 weeks` / `Lost 6.2 lbs` / `Down 6 lbs` → `Calmer afternoons, smoother digestion from week 2*`
- FR `Perte de 2,8 kg sur 4 semaines` → `Après-midi plus calmes, digestion plus fluide dès la 2e semaine`
- Testimonials with `6 lbs in 6 weeks` / `3 kg` quotes rewritten to focus on calmer afternoons + smoother digestion
- Files : ub-about-v2, ub-faq-v2, ub-page-router, ub-results

### F4 + F1/F2 cleanup (7 hits, 4 files) — collision resolution
- F4 : `clinically validated satiety from the first dose` → `featuring an EFSA-recognized fiber that supports satiety from the first dose.*`
- F2-cleanup : 4 doublons `Research-backed* research-backed fiber*` → `Research-backed fiber*`
- F1-cleanup : 2 doublons `Avis vérifiés · Avis vérifiés` → `Avis vérifiés`
- Applied per the new "strict-replace-collision rule" (Charles directive 2026-05-14)

### F5 — Dr Claire Dubois fake expert + AI image (7 sections + 1 image swap)
6 expert sections **fully replaced** with EFSA Authority block (recycled from brief V2):

> **EFSA-backed fiber**
> EU Regulation 432/2012 · ID 3120
> *"Konjac glucomannan supports satiety in the context of an energy-restricted diet"*
> Officially recognized by the European Food Safety Authority. Required dose: 3g per day with 1-2 large glasses of water before meals.*

(Bilingual EN/FR where original section had Liquid wrappers)

Files: home-uburn-2026 (S4 EXPERT block), uburn-lp-us-en, uburn-lp, uburn-lp-v2, uburn-pdp (SECTION 6), ub-home

**Additional AI image found during F5** (extension of original F5 scope):
- `main-uburn-pdp-v9.liquid:999` — `Gemini_Generated_Image_j56t4sj56t4sj56t.png` was used in `"Is it for you?"` section (not Dr Dubois context). Per Charles's mandate to delete ALL AI images, replaced with `/assets/uburn-hero-product.jpg` (real lifestyle photo).

---

## Verification

### Local file state (zero residual hits)
```
✓ F1: zero hits for "1,500+" / "1 500+" / "1500+"
✓ F2: zero hits for "FDA dietary fiber" / "FDA fiber"
✓ F3: zero hits for "6 lbs" / "2,8 kg" / "perdu"
✓ F4: zero hits for "clinically validated" / "cliniquement validée"
✓ F5: zero hits for "Claire Dubois" / "Gemini_Generated_Image" / "expert-dr-dubois"
✓ No grammatical collisions remain (research-backed / Avis vérifiés cleanup applied)
```

### Live URL still showing OLD claims (confirms live #185967575359 untouched)
```
6× "1,500+" hits on https://uburn.co/
2× "Claire Dubois" hits on https://uburn.co/
7× "FDA dietary fiber" hits on https://uburn.co/
```

### Preview URL (Shopify page_cache lag may take 5-15 min to clear after push)
**https://1t9ayp-tw.myshopify.com?preview_theme_id=186067222847**

---

## Diff stats summary

```
sections/home-uburn-2026.liquid    | 32 +++++++++-----------
sections/main-product.liquid       |  6 +++---
sections/main-uburn-pdp-v9.liquid  |  9 ++-----
sections/ub-about-v2.liquid        |  8 +++---
sections/ub-faq-v2.liquid          |  4 ++--
sections/ub-home-v2.liquid         | 10 +++++---
sections/ub-home.liquid            | 16 ++++--------
sections/ub-ingredients-v2.liquid  |  6 +++---
sections/ub-page-router.liquid     | 18 +++++++-----
sections/ub-results.liquid         | 14 ++++++----
sections/uburn-homepage.liquid     |  2 +-
sections/uburn-lp-us-en.liquid     | 22 +++++++---------
sections/uburn-lp-v2.liquid       | 24 +++++++-----------
sections/uburn-lp.liquid          | 40 +++++++++++++-----------------
sections/uburn-pdp.liquid         | 27 ++++++++-------------
snippets/product-info.liquid      |  2 +-
16 files changed, 119 insertions(+), 160 deletions(-)
```

---

## Rollback plan

If publish causes issues :
1. Republish theme #185967575359 (still in library, just becomes unpublished after the switch)
   ```bash
   shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=185967575359 --force
   ```
2. Verify live : `curl -I https://uburn.co/`
3. Investigate issue on theme #186067222847 (now unpublished)

The new theme **#186067222847** becomes the live theme. The old **#185967575359** stays in library as unpublished (instant rollback target).

---

## What's NOT done (out of scope for this 48h compliance pass)

These were FLAGGED but not included per strict protocol — Charles can extend scope later or address in V2 launch :

1. **"Satisfait ou remboursé"** claims in 5 spots (uburn-homepage L263, L547 ; ub-results L738 ; ub-about-v2 L849, L866) — CLAUDE.md forbids "satisfait ou remboursé 30 jours" but the matches found are without "30 jours" specifier, so still ambiguous. Out of F1-F5 scope.
2. **Gemini_Generated_Image_*.png images on Shopify Files CDN** — references removed from liquid, but image files still exist on Shopify Files. Charles needs to delete via admin → Settings → Files for full sanitization. Even without admin delete, the liquid no longer references them.
3. **"Cliniquement formulé" / "scientifically formulated"** in EFSA Authority block body and benefit cards — borderline. Kept as "scientifically formulated" (not "clinically validated") which is acceptable structure/function phrasing.
4. **Loox / Judge.me migration** — Charles decision 1 said use Loox only. Migration verification (whether 28 reviews are unique per app or duplicated) NOT done in this pass. Separate task before V2 launch.

---

## Pre-publish operational checks (Charles to verify before publish)

1. **BUCKS Currency Converter** — was theme-attached on #185967575359 per CLAUDE.md. Should auto-migrate on theme switch. Verify after publish.
2. **Meta Pixel / GA4** — handled via Shopify channels (`{{ content_for_header }}`), not theme files. Auto-preserved.
3. **Loox / Judge.me widgets** — embedded via metafields (`loox.reviews`, `judgeme.widget`), rendered by sections that reference these metafields. Should preserve.
4. **Stripe checkout** — Shopify-managed, theme-agnostic. No risk.
5. **Custom domain mapping** — Shopify-level, theme-agnostic.

---

## Awaiting Charles authorization

To publish the compliance-fixed theme to live :

**Reply with exact phrase** : `PUBLISH COMPLIANCE FIX CONFIRMED`

Upon receiving that exact phrase, I will execute :
```bash
shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=186067222847 --force
```

The new theme becomes LIVE. Theme #185967575359 becomes unpublished but remains in library for instant rollback.

Any other reply → I do NOT publish. Discuss / iterate / refuse.
