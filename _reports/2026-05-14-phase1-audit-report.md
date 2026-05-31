# Phase 1 Audit Report — UBurn US Redesign V2
**Date**: 2026-05-14
**Status**: ✅ COMPLETE — Awaiting Charles validation before Phase 2

---

## ✅ What was done

| Action | Result |
|---|---|
| Shopify CLI auth verified | ✓ store `1t9ayp-tw.myshopify.com` reachable |
| Live theme confirmed | ✓ `#185967575359` = `US-OPTIMIZATION-DRAFT-2026-05-09` |
| WIP cleanup | ✓ Stashed `sections/header-group.json` (EN copy update) as `WIP-pre-redesign-v2-2026-05-14-uncommitted-header-EN-copy` |
| Git baseline tagged | ✓ `phase-1-start-2026-05-14` |
| New branch created | ✓ `redesign/v2` (from `pre-launch-final-2026-05-13`) |
| settings_data.json backup | ✓ `_backups/live-185967575359-2026-05-14/config/settings_data.json` (29.7 KB) |
| Theme duplication | ✓ New theme `uburn-us-premium-dev` ID `#186063356223` (unpublished) |
| Pull local | ✓ Synced to `redesign/v2` working tree |
| Baseline commit | ✓ Pushed delta (markets.json, home-uburn-2026.liquid, cache-bust snippets) |
| Audit files | ✓ `_audit/structure.md`, `_audit/integrations.md`, `_audit/url-map.md` |
| Rollback plan | ✓ `_safety/rollback-plan.md` |

**Live theme #185967575359 is UNTOUCHED.** All work happens on `#186063356223` (dev) + branch `redesign/v2`.

---

## 🚨 5 issues that diverge from the brief — needs your decision

### 1. Meta Pixel client-side is intentionally DISABLED
Brief says: "preserve Meta Pixel ID 1207776051409154 in theme.liquid head".
Reality: It was disabled in favor of Shopify FB&IG channel (Conversions API server-side).
**`fbq()` does NOT fire on the live site** — confirmed by curl on /, /en, /products/*.

→ **If I re-enable the client pixel for V2, you will double-count every event.** I will preserve the disabled state. The dead snippet `meta-pixel-events.liquid` stays as backup.
→ **Confirm**: keep client-pixel disabled, rely on Shopify channel? (recommended)

### 2. BUCKS Currency Converter NOT found
Brief says: "BUCKS Currency Converter actif theme-attached à 185967575359".
Reality: 0 references in theme files + 0 markers in live HTML.
Possibilities: uninstalled, replaced by Shopify Markets native multi-currency, or injects post-DOM dynamically.

→ **Confirm**: do you still want BUCKS? Or has Shopify Markets replaced it for the US pivot? If still needed, where does it run?

### 3. Reviews are NATIVE Shopify metafields, not Loox/Judge.me
Brief says: "fetch real reviews count via Loox or Judge.me API".
Reality: Reviews stored in `product.metafields.reviews.rating` + `reviews.rating_count`. No third-party review app installed.

→ **Good news**: For the Phase 3 Social Counter, I can pull real counts directly with `{{ product.metafields.reviews.rating_count.value }}` — no API key needed. No external dependency.
→ **Confirm**: are the metafield values currently populated, or are they 0? (you can check `/admin/products/10061750698303/metafields`)

### 4. PDP is 16 sections, not 28
Brief says: "PDP raccourcie de 28 → ~14 sections".
Reality: Current default PDP (`templates/product.json`) has 16 sections.

→ Phase 4 reduction target = ~14 → reduction of 2 sections only, not 14. **Brief estimate was stale.** Scope of Phase 4 is smaller than described.

### 5. Homepage is currently a MONOLITHIC single section
Brief assumes existing modular sections to refresh.
Reality: `templates/index.json` wires a single section `home-uburn-2026` (file `sections/home-uburn-2026.liquid` is one large monolith containing the entire current homepage).

→ Phase 3 (11 modular sections) is a **true architectural shift**, not a refactor. **Higher implementation cost than brief implies, but cleaner result.**

---

## ⚠️ 2 brief assumptions that need correction

### Path correction
Brief mentions `~/dev/uburn-shopify-claude/`. Actual repo path is `~/.openclaw/workspace/uburn-shopify-claude/`. All artifacts went there.

### Pages NOT existing (brief assumed they did)
- `/pages/reviews` — does NOT exist. Brief mentioned it. If you want a standalone reviews page, I'll need to create one in Phase 5.
- `/pages/the-science` — does NOT exist. To be CREATED in Phase 5 (matches brief intent).
- `/pages/our-story` — does NOT exist as standalone. Closest = `/pages/about` (EN) or `/pages/notre-histoire` (FR).

---

## 📊 Theme snapshot

| Metric | Value |
|---|---|
| Base theme | Maestrooo **Stretch v1.9.0** (premium OS 2.0) |
| Sections | 99 (heavy variant accumulation: ub-v1/v2, home-v1/v2/v3, pdp-v9...) |
| Snippets | 72 (incl. 6 cache-bust artifacts) |
| Page templates | 11 page.*.json + 4 product.*.json variants |
| Bilingual wrappers | 1008 `request.locale.iso_code` checks (memory said 390 — pattern grew) |
| Locales | 30+ language files (en.default primary, fr custom) |
| Markets | 1 active: `united-states` (parent @default) |
| Live products | 1 (`ube-poudre` ID 10061750698303) |
| Live published pages | 17 (EN + US-EN parallel + FR LP) |

---

## 🔗 Preview URL
The duplicated dev theme is browsable at:
**https://1t9ayp-tw.myshopify.com?preview_theme_id=186063356223**
(Visually identical to live since it's a fresh duplicate. Phase 2 will start adding the design system.)

Editor: https://1t9ayp-tw.myshopify.com/admin/themes/186063356223/editor

---

## 🎯 Recommended Phase 2 scope adjustments (vs brief)

1. **Skip BUCKS re-integration** unless you confirm it's still needed (Markets native is cleaner for US pivot)
2. **Skip Meta client pixel restoration** — Shopify channel already handles it server-side
3. **Skip Loox/Judge.me setup** — native metafields are sufficient
4. **Phase 3 effort upgraded** — monolith → modular sections is full rebuild, not refresh. Plan ~2-3 days of focused work, not 1.
5. **Phase 4 effort downgraded** — only 2 sections to drop, not 14.
6. **Address theme variant cleanup as separate phase** — 99 sections include many dead variants (`*-v1`, `*-v2`, `*-v3`, `*-us`) that should not be deleted as part of redesign but tagged for later cleanup.

---

## ⏸️ STOP — Awaiting your decisions

Before I move to Phase 2 I need:

1. **Pixel/BUCKS/Reviews** — confirm the 3 integration changes (questions 1-3 above)
2. **PDP / homepage scope** — confirm scope adjustments are OK
3. **`/pages/uburn-lp-v2` and `/pages/notre-histoire`** — orphan templates: keep, archive, or delete?
4. **Phase 2 GO/NO-GO** — once 1-3 are answered, I'll start the design system implementation

I will **not** touch the live theme, will **not** modify the dev theme content until you say go on Phase 2, and I'll **not** publish anything ever without explicit `PUBLISH CONFIRMED`.
