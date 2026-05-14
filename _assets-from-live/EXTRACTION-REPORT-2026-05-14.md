# Étape 3 — Asset Extraction Report
**Date** : 2026-05-14
**Source** : Live theme #185967575359 (`US-OPTIMIZATION-DRAFT-2026-05-09`) — pulled read-only
**Destination** : `~/Code/uburn/uburn-shopify-v2/_assets-from-live/`
**Live theme status** : UNTOUCHED ✓

---

## a) Images extracted — 68 files, 74 MB

Manifest with all dimensions + labels : `_assets-from-live/images/manifest.json`

### By category (66 cataloged + 2 extra product shots downloaded post-catalog)

| Folder | Count | Description |
|---|---|---|
| `brand/` | 1 | **`logo-uburn-violet.png`** (the real UBurn wordmark, plum violet PNG) |
| `product/` | 9 | Pack listing, scoop, quality control, 6 product page shots |
| `hero/` | 10 | Focus product shots + lifestyle (woman with glass + laptop) + latte heroes |
| `ingredient/` | 6 | Konjac, Ube, Coconut MCT, L-Carnitine, Purple ginger, Acacia (close-ups) |
| `lifestyle/` | 2 | Atelier France manufacturing + Brooklyn lifestyle |
| `ritual/` | 5 | Etape 1/2/3 (pour/mix/sip) + 2 refreshed v2 visuals |
| `testimonials/` | 5 | Ashley, Jennifer, Rachel, Brooklyn, LA reviewer portraits |
| `origin/` | 12 | Ube plantation, Histoire moodboards, fields, mission desktop+mobile, banner |
| `press/` | 5 | Brut, ELLE, VOGUE, TF1, Femme Actuelle logos (archived, hidden section) |
| `trust-icons/` | 4 | World, fast shipping, secure payment, customer service SVG pictograms |
| `founder-archive/` | 3 | Founder Mariana + 2 AI-generated portraits — **archive only, NOT for V2** |
| `before-after/` | 2 | After-calm + before-stress lifestyle shots |
| `extras/` | 4 | Placeholder pixel, hash-named image, 2 WhatsApp screenshots (UGC ?) |

### Top images by relevance (with dimensions)
| File | Dim | Use |
|---|---|---|
| `brand/logo-uburn-violet.png` | 3508 × 1242 | Primary logo (header, footer) |
| `hero/hero-product-focus-1.jpg` | 1080 × 1080 | Current live hero (woman with glass) |
| `hero/hero-lifestyle-laptop-glass.jpg` | 1024 × 1024 | Lifestyle 4PM moment (used in V2 hero) |
| `lifestyle/atelier-france-manufacturing.jpg` | 1024 × 1024 | "Crafted in France" section |
| `product/product-pack-listing.jpg` | 2000 × 2500 | PDP main image |
| `ritual/ritual-step-{1,2,3}-{pour,mix,sip}.jpg` | 1080+ each | 3-step ritual section |
| `ingredient/ingredient-konjac-glucomannan.jpg` | 1024 × 1024 | EFSA hero ingredient |

---

## b) Copy files — 15 .md files, 60 KB

| File | Two-line preview |
|---|---|
| `announcement-bar.md` | Current : "Limited launch stock — Free U.S. shipping $40+". Brief recommends : "Free U.S. shipping on orders $40+ · Cancel anytime" |
| `hero-headline.md` | Current : "4PM. Take back control." / Brief V2 : "Crush the 4 PM crash." with eyebrow "the violet hour · est. 2024" + dynamic Shopify price |
| `trust-pills.md` | 4-pill set for V2 : Research-backed · Caffeine-free · Third-party lab tested · 100% plant-based (replaces brief's "FDA lab tested" compliance issue) |
| `formula-ingredients.md` | 6 plant actives with name, latin, benefit, description, tags : Konjac (HERO), Ube, Coconut MCT, L-Carnitine, Purple ginger, Acacia fiber |
| `efsa-block.md` | "EFSA-backed fiber · EU Regulation 432/2012 ID 3120" + official quote. Compliance-safe phrasing for US market |
| `social-counter.md` | NEW section spec : pull live count via `product.metafields.reviews.rating_count.value` = **28** + rating **4.7/5** (NOT 1,500+) |
| `testimonials.md` | 3 US testimonials (Ashley K Phoenix · Jennifer M Miami · Rachel R Denver) — verify if real or fabricated before publish |
| `week1-week4.md` | Before/After Ashley K. 28 days. **⚠️ Drop "6 lbs released" — FTC weight loss claim issue** |
| `ritual-30-seconds.md` | 3 steps : Pour 1 scoop · Mix with water/plant milk · Sip 30 min before meal. Image refs etape_1/2/3 |
| `craft-made-in-france.md` | NEW section : "Made with precision. Tested for purity." + 4 features grid (100% / 3rd party / 0 / FR) |
| `faq.md` | 12 questions in 3 groups (Product · How to use · Order & shipping). Subset of 5 for homepage |
| `final-cta.md` | Brief V2 : "The violet hour begins at four." + start my pack CTA at $34.50 → Starter Pack variant |
| `newsletter-block.md` | NEW spec : "One image. Three lines. Delivered at 4PM." Brief eyebrow "— the 4pm letter" |
| `footer.md` | 3-column structure (Product · Support · Company) + FDA disclaimer preserved + huge lavender wordmark 120px |
| `compliance-disclaimer.md` | **Full compliance bible** : DGCCRF/FTC forbidden words list + authorized phrasings + FDA disclaimer template + EFSA wording rules |

---

## c) Metafields extracted — 2 JSON files, 28 KB

`_assets-from-live/metafields/`

### Product `ube-poudre` (ID 10061750698303) — `product-ube-poudre.json`
- Title : UBurn — Plant-based satiety drink
- Status : active
- Vendor : UBurn
- Tags : `phase2, us-launch, v4-en`
- Body HTML : 444 chars (minimal — needs expansion for SEO)
- 2 variants : Starter Pack 90g ($34.50, SKU UBURN-90G-DECOUVERTE) / Maximum Pack 270g ($54.50, SKU UBURN-270G-MAXIMUM)
- 8 images (already in `/images/product/`)
- 1 option : `CHOISISSEZ VOTRE OBJECTIF` (FR — **needs US rename**)

### Metafields `metafields-ube-poudre.json` (11 metafields total)
| Namespace.key | Type | Value preview |
|---|---|---|
| `judgeme.badge` | string | Judge.me HTML widget (review app #1) |
| `judgeme.widget` | string | Judge.me reviews list HTML |
| `loox.reviews` | multi_line | Loox reviews HTML (review app #2) |
| `loox.num_reviews` | number_integer | **28** |
| `loox.avg_rating` | number_decimal | **4.7** |
| `reviews.rating` | rating | scale 1-5, value 4.7 (Shopify native, review app #3) |
| `reviews.rating_count` | number_integer | **28** |
| `shopify.dietary-preferences` | list.metaobject_reference | Vegan, etc. |
| `mm-google-shopping.google_product_category` | string | 6848 (Health/Nutrition) |
| `global.title_tag` | string | "UBurn — Plant-based satiety drink \| Konjac fiber \| 30 cal" |
| `global.description_tag` | string | "Plant-based purple drink with research-backed konjac fiber..." |

---

## d) Total size

| Bucket | Size |
|---|---|
| `images/` (cataloged + renamed) | **74 MB** |
| `copy/` (15 .md files) | 60 KB |
| `metafields/` (product + metafields JSON) | 28 KB |
| `_raw-source/` (unmodified live theme pull) | **83 MB** |
| **GRAND TOTAL** | **~157 MB** |

`_raw-source/` is the verbatim live theme dump — kept for reference, **must NOT be deployed**. It contains all liquid/css/js from the legacy theme (per Charles's interdiction, do not copy any of it to V2 theme).

---

## e) Anomalies found

### 🚨 MAJOR — compliance / honesty issues in existing copy

1. **"1,500+ customers" claim** in monolith + brief — **not supported**. Real review count = **28** (Loox + Shopify native, both confirm). Update all copy to use dynamic count or honest framing.

2. **"FDA dietary fiber*"** appears across monolith, FAQ, marquee. FDA does not classify ingredients as "FDA dietary fiber" — this is misleading. Should be "research-backed soluble fiber" or "EFSA-recognized fiber".

3. **"6 lbs released over 4 weeks"** in faq-v2 EN Week 4 testimonial — weight loss claim, **forbidden** for supplements in US (FTC). Drop.

4. **"Cliniquement formulé" / "clinically validated satiety from the first dose"** — implies clinical trial on the UBurn product. Clinical validation is on the INGREDIENT (konjac glucomannan via EFSA), not the formula. Rephrase.

5. **Three review systems coexist** : Judge.me + Loox + Shopify native — all 3 show same counts (28 / 4.7) but only ONE should be displayed on V2 to avoid confusion. **Recommend Loox** (most polished UX, app-managed).

### 🟡 MINOR — content surprises

6. **Logo IS uploaded** — `LOGO_Violet.png` 3508×1242 on Shopify Files. The header.liquid `section.settings.logo` is set. Phase 1 audit incorrectly said "no logo, typography only". Correct : logo exists, but theme header is configured to fall back to wordmark text if logo setting empty.

7. **Press logos preserved** — Brut, ELLE, VOGUE, TF1, Femme Actuelle. Section is hidden per Charles's UX decision, but logos cached on CDN. Files moved to `images/press/` for archive.

8. **AI-generated portraits found** — `Gemini_Generated_Image_*.png` × 2. One is Dr Claire Dubois (fictional nutritionist). These should NOT be on the V2 site (FTC honesty + endorser rules) unless clearly labeled as illustrations.

9. **WhatsApp screenshots** — 2 PNG files from 2026-04-17 in extras. Likely UGC testimonial screenshots. Source/permission unknown — exclude from V2 unless confirmed authorized.

10. **Two refreshed ritual visuals** (`Imnt_site_step01_melangez_v2_1777326239.jpg`) exist alongside the older `etape_1/2/3.jpg` — these are NEWER (timestamp suggests refresh). Use the v2 versions for the V2 site.

11. **Translated body HTML mismatch** — product `body_html` is 444 chars only. The Liquid sections do the heavy lifting via `{% if request.locale.iso_code == 'en' %}` wrappers. V2 will need full bilingual body or section-level copy.

12. **Tags `phase2, us-launch, v4-en`** — confirm these are intentional, not stale. `phase2` could conflict with semantic versioning.

### 🟢 GOOD discoveries

13. **`shopify.dietary-preferences`** metaobject exists — can render badges like "Vegan", "Gluten-free" natively via metaobjects API. Cleaner than hardcoded.

14. **SEO tags present** — `global.title_tag` and `global.description_tag` populated. V2 should preserve or refine.

15. **Real atelier image** exists (`uburn-lab-manufacturing.jpg`) — usable for "Crafted in France" section without needing new photoshoot.

16. **Real ingredient close-ups** for all 6 actives (Ingredient_*.jpg series) — production-ready for the Formula grid section.

### 🔵 DECISIONS NEEDED FROM CHARLES

- [ ] **Reviews app choice** : Loox / Judge.me / Shopify native — pick ONE for V2. Recommend Loox.
- [ ] **Honest review count framing** : show "28 verified reviews" / show "★ 4.7/5" without count / hide social counter section until count grows ?
- [ ] **AI portraits + WhatsApp screenshots** : keep as future content reference or delete from V2 plan ?
- [ ] **Megan T testimonial** mentioned in earlier brief : no photo asset found. Drop or add manually ?
- [ ] **Product option name** `CHOISISSEZ VOTRE OBJECTIF` (FR) : rename to "Pick your pack" or "Choose your pack" for US ?
- [ ] **Body HTML expansion** : product body is only 444 chars. Recommend writing 1500-2000 chars for SEO. Generate now or later ?
- [ ] **Press section** (hidden) : keep `images/press/` for archive or delete ?

---

## f) Files NOT extracted (intentionally)

- ❌ `.liquid` files from live theme (legacy code, not copied per Charles interdiction)
- ❌ `.css` files (theme.css, uburn-home.css, etc. — V2 builds fresh from Dawn)
- ❌ `.js` files (theme.js, vendor.min.js — V2 uses Dawn JS)
- ❌ Live `templates/*.json` (V2 will build fresh templates)
- ❌ Live `config/settings_data.json` (V2 uses Dawn defaults + our tokens)
- ❌ Live `layout/theme.liquid` (V2 will customize Dawn's theme.liquid)

Raw source kept in `_raw-source/` for reference only — read access for copy/asset hunt, never to be deployed.

---

## STATUS : Étape 3 complete ✓

Awaiting Charles validation before Étape 4 (build design system).

**Next step preview** (Étape 4 — Build design system) :
1. `/assets/base.css` — CSS variables per brief (--iris #6B4E9E, --plum-black #1A0F2E, --lavender #B89DD9, --bone, --cream, etc.)
2. `/assets/typography.css` — 3-tier system (serif italic for H2 emphasis, sans bold italic for "UBurn" wordmark, sans body)
3. `/assets/animations.css` — reveal observer + smooth transitions
4. `/assets/components.css` — atoms (pill, cta, trust pill, eyebrow, accordion, review-stars)
5. `/assets/theme.js` — reveal IO + sticky ATC
6. `/snippets/` — 8 atomic snippets per brief
7. `/sections/header.liquid` + `/sections/footer.liquid` premium glassmorphism + wordmark giant
8. `/templates/page.design-system.json` — test page to preview all components
9. Push to dev theme `uburn-us-premium-v2` #186066567487
10. Screenshot + report
