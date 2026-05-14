# UBurn Live Site — Compliance Risk Map (48h remediation plan)

**Date** : 2026-05-14
**Live theme** : #185967575359 `US-OPTIMIZATION-DRAFT-2026-05-09`
**Live domain** : https://uburn.co
**Scope** : 5 compliance findings flagged in Étape 3 extraction report
**Methodology** : `grep` against `_assets-from-live/_raw-source/` (verbatim live theme pull, READ ONLY)

---

## ⚠️ KEY TRUTH UP FRONT

**All 5 findings are hardcoded in `.liquid` section files.** None can be edited purely via Shopify Admin metafields/settings/app config because the values are in section liquid text, not in a settings store.

The 3 paths to fix without "modifying the theme code via CLI" are:
- **A) Theme Editor UI** — Shopify admin → Themes → Customize → edit block text. This creates internal commits in the live theme but does NOT require git/CLI push. It IS a theme modification in Shopify's eyes.
- **B) Section block toggle off** — only works if the section is JSON-template-wired as a block. Most findings are inline HTML in monolithic sections — not togglable.
- **C) CSS hide injection via Theme Settings → Custom CSS** — if the Stretch theme exposes a custom CSS field, we can `display:none` problematic blocks. Verifying availability...

**Honest answer to Charles's question** : if you forbid ANY modification (UI or code) of the live theme, only image-asset deletions are removable. All copy fixes require either theme edit OR custom CSS hide.

**Recommendation** : authorize ONE focused theme-editor session (UI not CLI) limited to compliance text-only edits, OR accept that compliance text remains until V2 launch (~2 weeks). Custom CSS hide is a partial workaround.

---

## URL → section mapping (live)

| Live URL | Template file | Section file | Status |
|---|---|---|---|
| `/` | `templates/index.json` | `sections/home-uburn-2026.liquid` | **Active homepage** |
| `/products/ube-poudre` | `templates/product.json` | uses `main-product` + many blocks (no findings here) | Active PDP |
| `/pages/faq` | `templates/page.faq.json` | `sections/ub-faq-v2.liquid` | Active |
| `/pages/ingredients` | `templates/page.ingredients.json` | `sections/ub-ingredients-v2.liquid` | Active |
| `/pages/about` (EN) + `/pages/about-us-en` | `templates/page.about.json` | `sections/ub-about-v2.liquid` | Active |
| `/pages/uburn-lp` | `templates/page.uburn-lp.json` | `sections/uburn-lp.liquid` | Active (FR-primary) |
| `/pages/uburn-lp-us-en` | `templates/page.uburn-lp-us-en.json` | `sections/uburn-lp-us-en.liquid` | Active (US LP) |
| `/pages/resultats`, `/notre-histoire`, `/uburn-ads`, `/uburn-lp-v2` | various | various | **404 on live ✓** (already dead) |

---

## FINDING 1 — "1,500+ customers" / "1,500+ women" / "1500+ femmes"

### Where it appears (live URLs affected)

| Live URL | Section file | Line(s) | Quote |
|---|---|---|---|
| `/` (homepage) | `home-uburn-2026.liquid` | L44, L57, L66, L214, L252, L324 | "★★★★★ 4,7/5 · 1,500+ customers" (hero pill), marquee items, cart preview, stats row label, testimonial section header |
| `/pages/about` | `ub-about-v2.liquid` | L860 | "Join 1,500+ women" / "Rejoignez 1 500+ femmes" |
| `/pages/uburn-lp` | `uburn-lp.liquid` | L1086 | "1500+ femmes l'utilisent au quotidien" (FAQ block, FR-EN mix) |
| `/pages/uburn-lp-us-en` | `uburn-lp-us-en.liquid` | L770, L1043, L1087 | "Based on 1,500+ early French customer reviews", "Used daily by 1,500+ early French customers" |
| `/pages/uburn-lp-v2` ❌ | dead | — | 404 on live |

### Removability
- **Cannot remove via admin only** — text is hardcoded in `.liquid`.
- **Theme Editor UI** : NO. These are inside `<div>` literals, not settings blocks.
- **Custom CSS hide** : partial — could `display:none` the pill on homepage line 44, marquee items, but breaks layout in many places.
- **Theme edit (CLI or UI Code Editor)** : required for clean fix.

### Recommended 48h action
- **Option A (strict no-edit)** : ignore until V2. Risk : weeks of misleading claim.
- **Option B (focused edit)** : 1 short theme code editor session (Shopify admin → Themes → Edit code) replacing "1,500+" → "" or "many" or remove the lines. 15 mins work, 1 commit.
- **Option C (best)** : Replace all "1,500+ customers" with "★★★★★ 4.7/5 verified reviews" (no count). Aligns with Charles decision 2 ("stars only, no count").

**Recommend Option C** : single search-replace pattern. The 9-12 occurrences become "verified reviews" — honest and consistent.

---

## FINDING 2 — "FDA dietary fiber" / "FDA fiber"

### Where it appears

| Live URL | Section file | Line(s) | Quote |
|---|---|---|---|
| `/` (homepage) | `home-uburn-2026.liquid` | L33, L45, L53, L62, L298 + others | Hero eyebrow, trust pill, marquee items, benefit description |
| `/pages/faq` | `ub-faq-v2.liquid` | L212 | Footnote disclaimer "Glucomannan — FDA dietary fiber*" |
| `/pages/ingredients` | `ub-ingredients-v2.liquid` | L128, L129, L182, L224 | Hero ingredient desc, tag, EFSA badge subtitle, footnote |
| `/pages/about` | `ub-about-v2.liquid` | L624, L629, L630 | Ingredient card desc + tag |
| `/pages/uburn-lp-us-en` | `uburn-lp-us-en.liquid` | L880, L928, L1087 | Compare table "FDA fiber" pill, "FDA dietary fiber list (2020)", FAQ answer |

**Note** : "FDA dietary fiber" is **technically defensible** because in January 2020 the FDA added konjac glucomannan to its official dietary fiber list (Guidance for Industry: Scientific Evaluation of the Evidence on the Beneficial Physiological Effects of Isolated or Synthetic Non-digestible Carbohydrates). So this isn't strictly false. **But** the framing implies endorsement, which the FDA does NOT do for supplements. FTC could flag it as misleading.

### Removability
Same as F1 : hardcoded in `.liquid`. Requires theme edit.

### Recommended 48h action
Replace all instances with **"Research-backed soluble fiber"** (technically accurate, removes FDA association). Single search-replace pattern across all occurrences (~15 hits).

**Alternative softer phrasing** : "FDA-listed dietary fiber (Jan 2020)" — technically accurate but verbose. Pick "Research-backed soluble fiber" for cleanest brand voice.

---

## FINDING 3 — Weight loss claims (6 lbs / 2,8 kg / 3 kg)

### Where it appears

| Live URL | Section file | Line(s) | Quote |
|---|---|---|---|
| `/pages/faq` | `ub-faq-v2.liquid` | L204 | "6 lbs released over 4 weeks with no specific diet*" / FR: "Perte de 2,8 kg sur 4 semaines" |
| `/pages/about` | `ub-about-v2.liquid` | L775 | "Lost 6.2 lbs in 4 weeks with no special diet*" |
| `/pages/resultats` ❌ | `ub-results.liquid` L445 | — | dead (404) |
| Page-router (?) | `ub-page-router.liquid` | L392, L495 | "I lost 6 lbs in 6 weeks without depriving myself" / "Down 6 lbs in 4 weeks" |

**Severity** : 🚨 **HIGHEST** — FTC explicit guidance forbids weight-loss claims for dietary supplements without clinical substantiation specific to the product. Konjac glucomannan EFSA approval is for **satiety in energy-restricted diet**, NOT weight loss. Quantitative weight-loss claims (6 lbs / 2,8 kg) without disclosed clinical trial on UBurn = direct FTC §255 violation risk.

### Removability
Hardcoded. Theme edit required.

### Recommended 48h action — REMOVE IMMEDIATELY
This is the **most legally exposed** finding. Even if everything else waits, **F3 should be fixed in 24h max**.

Replace bullets :
- "6 lbs released over 4 weeks" → "Smoother digestion, less bloating from week 2*"
- "Lost 6.2 lbs in 4 weeks" → "Naturally lighter dinner, no willpower needed*"
- "Down 6 lbs in 4 weeks" → "Calmer mood, no afternoon crash*"
- "Perte de 2,8 kg sur 4 semaines" → "Digestion plus fluide, ventre moins gonflé dès la 2e semaine*"
- "J'ai perdu 3 kg en 6 semaines" → "Mon rituel s'est installé naturellement, 4 heures sans craquage*"

**Where to edit** : 4 section files in Theme Editor → Edit Code. ~10 minutes of careful text replace.

### Page-router special case
`ub-page-router.liquid` is referenced by older routing — checking which URL serves it... grep doesn't show it wired in any template. Likely dead. Verify with `curl` of suspected URLs.

---

## FINDING 4 — "clinically validated satiety from the first dose"

### Where it appears

| Live URL | Section file | Line(s) | Quote |
|---|---|---|---|
| `/` (homepage) | `home-uburn-2026.liquid` | L298 | "Research-backed* FDA dietary fiber* — clinically validated satiety from the first dose" |

Only ONE occurrence found. Localized in benefit card "4-hour satiety*".

**Severity** : 🟡 Medium. Phrase implies a clinical trial was conducted on the UBurn product. The trial is on the **ingredient** (konjac glucomannan, EFSA). Phrasing should reflect that distinction to avoid FTC misleading-claim risk.

### Removability
Hardcoded. Theme edit required.

### Recommended 48h action
Single line edit (`home-uburn-2026.liquid` L298). Replace with :
> "Konjac forms a natural gel in the stomach. Research-backed soluble fiber — supports satiety from the first dose.*"

(Removes "clinically validated" and "FDA dietary fiber" in one edit. Combines F2 + F4 fix.)

---

## FINDING 5 — AI-generated portrait "Dr. Claire Dubois"

### Where it appears

| Live URL | Section file | Line(s) | Asset |
|---|---|---|---|
| `/` (homepage) | `home-uburn-2026.liquid` | L82-83 | `<img src="https://uburn.co/cdn/shop/files/Gemini_Generated_Image_gjm16fgjm16fgjm1.png">` + alt "Dr. Claire Dubois — Nutritionist" |
| `/pages/uburn-lp-us-en` | `uburn-lp-us-en.liquid` | L610-617 | Same image + name "Dr. Claire Dubois" |
| `/pages/uburn-lp-v2` ❌ | `uburn-lp-v2.liquid` L614-621 | — | dead (404) — uses `expert-dr-dubois.jpg` theme asset |
| Product PDP variant | `uburn-pdp.liquid` L1883-1892 | — | Same image. Used by `templates/product.uburn-pdp.json` → URL `/products/ube-poudre?template=uburn-pdp`. Not the default PDP. Likely unused on live but accessible. |
| Old home variant | `ub-home.liquid` L119 | — | Same text. Not wired to current `/`. |

**Severity** : 🚨 **HIGH** — FTC §255.5 explicitly forbids fake expert endorsements. The image is AI-generated (Gemini), the name "Dr. Claire Dubois" is fictional (or unverified), and the "Scientific Committee" credential is fabricated. **Direct FTC §255 violation.**

### Removability — multiple paths
- **A) Delete the image from Shopify Files** (admin → Settings → Files → delete `Gemini_Generated_Image_gjm16fgjm16fgjm1.png`). Result : sections will show broken image (`<img>` with 404 src). Visually broken but no fake endorsement visible.
- **B) Theme edit** — remove the entire `<section class="uhome-expert">` block from `home-uburn-2026.liquid` (~20 lines) + `uburn-lp-us-en.liquid` (~30 lines).
- **C) Custom CSS hide** — `.uhome-expert { display:none !important }` in theme.css or custom CSS. Removes section visually. ⚠️ Only works on `home-uburn-2026.liquid` — `uburn-lp-us-en.liquid` uses different class names.

### Recommended 48h action
**Path A + Custom CSS hide combined** :
1. Delete `Gemini_Generated_Image_gjm16fgjm16fgjm1.png` from Shopify Files. Result : alt text "Dr. Claire Dubois — Nutritionist" still visible in HTML but no fake portrait shown. Reduces visual fake-endorsement risk.
2. Add custom CSS to hide remaining expert sections : `.uhome-expert, .expert-card { display:none !important; }` via theme.css edit OR custom CSS injection.

If full theme edit authorized : **remove the expert section entirely** — cleanest fix, ~15 mins work across 4 section files.

---

## REMEDIATION SUMMARY — 48h scoreboard

| # | Finding | Files affected | Lines to edit | Severity | Recommended path |
|---|---|---|---|---|---|
| 1 | "1,500+" | 4 active liquid files | ~12 hits | 🟡 Medium | Theme edit (search-replace → "verified reviews") |
| 2 | "FDA dietary fiber" | 5 active liquid files | ~15 hits | 🟡 Medium | Theme edit (search-replace → "Research-backed soluble fiber") |
| 3 | "6 lbs / 2,8 kg" | 3 active liquid files | ~5 hits | 🚨 HIGH (FTC §255) | Theme edit ASAP — 24h max |
| 4 | "clinically validated" | 1 active liquid file | 1 hit | 🟡 Medium | Theme edit (combined with F2 fix) |
| 5 | Dr Claire Dubois AI | 4+ active liquid files + 1 CDN image | section blocks | 🚨 HIGH (FTC §255.5) | Delete image from Files + theme edit OR custom CSS hide |

**Total theme edits estimate** : ~30 search-replace operations across 6 section files = **30-45 minutes** of careful text editing in Shopify Theme Editor → Edit Code.

---

## RECOMMENDED 48h PROCEDURE (Charles authorization needed)

### Step 1 — Image deletion (no theme edit needed)
```
Shopify admin → Settings → Files
Search "Gemini_Generated_Image"
Delete both files (or just gjm16fgjm16fgjm1.png)
```

### Step 2 — Authorize ONE focused theme edit session
Charles authorizes a single Shopify Theme Editor → Edit Code session limited to text replacement (no structural changes). I (or Charles) executes :

**Search-replace 1** : `1,500+ customers` → `verified reviews`
**Search-replace 2** : `1,500+ women` / `1500+ femmes` → `verified buyers` / `acheteuses vérifiées`
**Search-replace 3** : `FDA dietary fiber*` → `Research-backed soluble fiber*`
**Search-replace 4** : `FDA fiber` → `research-backed fiber`
**Search-replace 5** : `FDA dietary fiber list (2020)` → `Officially listed as dietary fiber (FDA, Jan 2020)`
**Search-replace 6** : `clinically validated satiety from the first dose` → `supports satiety from the first dose`
**Search-replace 7** : Replace each "6 lbs / 6.2 lbs / 2,8 kg / 3 kg" bullet with neutral structure/function phrasing (see F3 above for exact replacements — 5 unique lines)
**Search-replace 8** : Remove `<section class="uhome-expert">` block from `home-uburn-2026.liquid` (lines ~77-97)
**Search-replace 9** : Remove expert block from `uburn-lp-us-en.liquid` (lines ~605-625)

### Step 3 — Verify changes via curl
```bash
for u in / /pages/faq /pages/ingredients /pages/about /pages/uburn-lp-us-en; do
  curl -s "https://uburn.co${u}" | grep -iE "(1,500|FDA fiber|6 lbs|2,8 kg|clinically validated|Claire Dubois)" \
    && echo "STILL THERE on ${u}"
done
```

Expected output : empty (no remaining hits).

### Step 4 — Git commit on archive branch (for traceability)
The current archive theme `uburn-us-premium-dev-ARCHIVE-2026-05-14` has the same content. Mirror the compliance fixes there too (pull → edit → push) to keep traceability.

---

## ALTERNATIVE — DO NOTHING ON LIVE, RELY ON V2 LAUNCH

If Charles prefers zero theme-touch on live :
- Accept compliance debt for 1-2 more weeks
- F3 (weight loss claims) is the **highest risk** finding — FTC class action liability exists
- F5 (fake doctor) is the **second highest risk**

**Recommend at minimum** :
- Image deletion (Step 1) — fixes F5 partial without theme edit
- F3 text replacement — should be priority even if F1/F2/F4 wait

---

## OPEN QUESTIONS — CHARLES DECISION

1. **Authorize Theme Editor Code-Edit session ?** (Steps 1-3 above, 30-45 min execution)
2. **OR delete Gemini AI image only ?** (Step 1 alone, partial fix for F5)
3. **OR do nothing, wait for V2 launch ?** (highest legal risk)
4. **Who executes ?** Charles via Shopify admin UI, or me via CLI push with explicit "TEXT EDIT CONFIRMED" reply ?

Awaiting decision before proceeding to Étape 4 (design system).
