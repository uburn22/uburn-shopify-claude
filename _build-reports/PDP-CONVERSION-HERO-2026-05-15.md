# PDP Conversion Hero + Pages Discovery — Build Report
**Date:** 2026-05-15
**Theme:** `uburn-us-premium-v2` (#186066567487) — [LIVE]
**Charles brief:** PDP qui convertit, offre irrésistible, sub/one-time format identique à l'ancien site, pages standalone accessibles depuis Templates dropdown.

---

## 1. PDP Hero — Conversion-optimized rewrite ✅ LIVE

`sections/u2-pdp.liquid` rewritten (764 lines → 720 lines), focused 100% on the purchase decision.

### Split layout
- **Left:** Multi-slide gallery (CSS scroll-snap on mobile, sticky on desktop) + thumbnail row
- **Right:** Purchase panel

### Purchase panel structure (top → bottom)
1. **Eyebrow chip** "Now in the U.S. · Limited launch stock" (urgency)
2. **Pill** "Formulated with ube, konjac & coconut MCT" (credibility)
3. **H1** "Crush the **4 PM** crash.*" (serif italic accent on 4 PM)
4. **Subtitle** "A violet wellness ritual. Plant-based satiety. 30 calories. Caffeine-free. French heritage."
5. **Rating** ★★★★★ 4.7/5 · Verified reviews (stars only, NO count per memory `[Show creative before upload]`)
6. **3 bullets** with checkmarks (Stops 4PM crash · Stays full · Zero caffeine)
7. **Price** "From $34.50" (prefix removed on variant click)
8. **Variant cards (2 columns)** — Starter / Maximum Pack with "Best Value" badge on Maximum
9. **Purchase mode cards** (Subscribe & Save / One-time — when selling plan exists):
   - Subscribe & Save card with green `SAVE 10%` tag, strike + final price, $250 bonus stack inline (e-book + Collective + Events + WhatsApp + **Free Violet Bottle**)
   - One-time card "No bonuses · No commitment"
10. **Quantity stepper**
11. **ATC button** full-width dark, "Start my routine — $X" / "Subscribe & start — $X"
12. **Trust line** "Free U.S. shipping · Secure checkout · Bonuses included"
13. **4 reassurance icons** (truck, lock, clock, chat)
14. **6-pill trust strip** (Plant-based · Caffeine-free · Lab tested · EFSA · Non-GMO · French brand)
15. **Sticky mobile CTA** appears when main ATC scrolls out (IntersectionObserver)

### Verification (curl, fresh User-Agent)
- ✅ `u2-header__menu-icon` (hamburger): **7 occurrences**
- ✅ New u2-pdp hero markup: live
- ⚠️ `u2-pdp-mode--sub` (Subscribe&Save card): **0 occurrences** — because the product has 0 selling plans (see §3)

---

## 2. PDP Sections (19 total) — wired in `product.uburn-v9.json`

| Order | Section | Status |
|---|---|---|
| 1 | u2-pdp (HERO — this rewrite) | ✅ |
| 2 | u2-pdp-press | ✅ |
| 3 | u2-pdp-stories-mini | ✅ |
| 4 | u2-pdp-precision | ✅ |
| 5 | u2-pdp-founder | ✅ |
| 6 | u2-pdp-reviews | ✅ |
| 7 | u2-pdp-before-after-workday | ✅ |
| 8 | u2-pdp-taste | ✅ |
| 9 | u2-pdp-steps | ✅ |
| 10 | u2-pdp-ritual-quiz | ✅ |
| 11 | u2-pdp-foryou | ✅ |
| 12 | u2-pdp-howit | ✅ |
| 13 | u2-pdp-diff | ✅ |
| 14 | u2-pdp-science-teaser | ✅ |
| 15 | u2-comparison | ✅ |
| 16 | u2-pdp-formula-detail | ✅ |
| 17 | u2-pdp-safety | ✅ |
| 18 | u2-pdp-faq | ✅ |
| 19 | u2-pdp-final-cta | ✅ |

---

## 3. ⚠️ ACTIONS CHARLES REQUIRED

### A. Activate Subscribe & Save card on PDP (5 min)

The Subscribe & Save card is built and ready in `u2-pdp.liquid`. It renders automatically once a Shopify selling plan is attached to the product. Currently **0 selling plan groups** exist on the product → card is hidden.

**Required:** Install Shopify's free **Subscriptions** app (apps.shopify.com → search "Subscriptions" → Install).

Then in the app:
1. Create plan: name "Subscribe & Save 10%", interval = 30 days, discount = 10%
2. Attach to product `ube-poudre` (id 10061750698303)

Save → reload PDP → the Subscribe & Save card with the $250 bonus stack appears automatically.

*Alternative:* Add `write_purchase_options` scope to the custom Admin API app (Settings → Apps → Develop apps → Configure scopes), and I create the plan via API on next run.

### B. Create Shopify Pages so Templates dropdown shows them (5 min)

Current state: 6 templates exist (`page.the-science`, `page.our-story`, `page.faq`, `page.reviews`, `page.contact`, `page.json`) but **0 Page resources** in Shopify CMS. That's why your Templates dropdown only shows the homepage.

**Required:** Shopify Admin → Online Store → Pages → "Add page" for each:

| Title | URL | Template to attach |
|---|---|---|
| The Science | /pages/the-science | page.the-science |
| Our Story | /pages/our-story | page.our-story |
| FAQ | /pages/faq | page.faq |
| Reviews | /pages/reviews | page.reviews |
| Contact | /pages/contact | page.contact |

For each, in the right sidebar "Theme template" → select the matching template → Save.

*Alternative:* Add `write_content` scope to the custom Admin API app, and I create all 5 pages via API on next run.

---

## 4. Compliance recheck (final)

```
grep -rni "made in france|crafted in france|marque française|1,500|1500+|FDA dietary fiber|Claire Dubois|6 lbs|2,8 kg|clinically validated|minceur|satisfait ou remboursé 30"
```

**Result:** 0 hits in rendered Liquid output. Single hit (`u2-pdp-press.liquid:3`) is in a `{%- comment -%}` block (not rendered).

---

## 5. Files modified this round

```
MODIFIED:
  sections/u2-pdp.liquid                    (full rewrite — 720 lines)
  templates/product.uburn-v9.json           (wired 19 sections)

CREATED:
  _build-reports/PDP-CONVERSION-HERO-2026-05-15.md
```

---

## 6. Site map summary

| URL | Template | Sections live | Status |
|---|---|---|---|
| `/` | index.json | 16 atomic sections | ✅ |
| `/products/ube-poudre` | product.uburn-v9 | 19 atomic sections | ✅ |
| `/pages/the-science` | page.the-science | u2-science | ⚠️ needs Page resource |
| `/pages/our-story` | page.our-story | u2-our-story | ⚠️ needs Page resource |
| `/pages/faq` | page.faq | u2-faq-page | ⚠️ needs Page resource |
| `/pages/reviews` | page.reviews | (placeholder) | ⚠️ needs Page resource |
| `/pages/contact` | page.contact | u2-contact | ⚠️ needs Page resource |

Header (hamburger left, logo center, cart right) renders globally ✅ live.
Footer renders globally ✅.

---

## 7. Next iterations (after Charles unblocks §3)

- [ ] Verify Subscribe & Save card renders (after plan attached)
- [ ] Test cart drawer + subscription checkout flow end-to-end
- [ ] Upload product photos for Stories/Founder/Steps/Taste/Reviews sections via Theme Editor (image_picker on each)
- [ ] Lighthouse score CWV on /products/ube-poudre
- [ ] Add Loox/Judge.me review widget integration if Charles wants real review feed on u2-pdp-reviews section
