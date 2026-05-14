# Phase 1 Decisions Log — Charles approvals

**Date**: 2026-05-14
**Status**: Phase 1 closed. Paused before Phase 2 (Charles a d'autres priorités).

## Decisions ratified

| # | Question | Decision | Impact |
|---|---|---|---|
| 1 | Meta Pixel client-side | **Keep disabled** (CAPI server-side via Shopify FB&IG channel handles it) | Snippet `meta-pixel-events.liquid` stays as dead code. No `fbq()` re-enable in V2. |
| 2 | BUCKS Currency Converter | **Already uninstalled** — Shopify Markets only | No theme work for currency conversion. USD via Stripe + Markets native. |
| 3 | Orphan templates | **Archive + delete** | 4 templates removed from dev theme (verified live = 404 on all 4). Files in `_backups/orphan-templates-2026-05-14/`. |
| 4 | Phase 2 GO/NO-GO | **Pause** — other priorities | Phase 1 deliverables sealed. Resume Phase 2 when ready. |

## Templates removed (dev theme only)
- `page.uburn-lp-v2.json`
- `page.notre-histoire.json`
- `page.uburn-ads.json`
- `page.resultats.json`

All 4 verified returning **HTTP 404 on live storefront** before deletion. Archived locally for rollback safety.

## State frozen for resumption

### Git
- Branch: `redesign/v2`
- Last commit: `a84b6ca chore(redesign/v2): archive + delete 4 orphan page templates from dev theme`
- Tags: `phase-1-start-2026-05-14`, `phase-1-complete-2026-05-14`

### Shopify
- Live: `#185967575359` UNTOUCHED ✓
- Dev: `#186063356223 uburn-us-premium-dev` (unpublished, mirror of live - 4 orphan templates)
- Preview: https://1t9ayp-tw.myshopify.com?preview_theme_id=186063356223

### Backup artifacts
- `_backups/live-185967575359-2026-05-14/config/settings_data.json` — live settings snapshot
- `_backups/orphan-templates-2026-05-14/*.json` — 4 archived templates
- Stash `WIP-pre-redesign-v2-2026-05-14-uncommitted-header-EN-copy` — pre-Phase-1 WIP

## Resume instructions (when Charles is ready for Phase 2)

```bash
cd ~/.openclaw/workspace/uburn-shopify-claude
git checkout redesign/v2
git log --oneline -5  # verify last commit a84b6ca
# Phase 2 plan: create /assets/base.css + typography + animations + atomic snippets
# Per brief sections 2.1 → 2.10
```

Re-read in new session:
- `_reports/2026-05-14-phase1-audit-report.md`
- `_reports/2026-05-14-phase1-decisions.md` (this file)
- `_audit/structure.md`, `_audit/integrations.md`, `_audit/url-map.md`
- `_safety/rollback-plan.md`
- Memory: `[[project_uburn_us_redesign_v2]]`

## Brief scope adjustments confirmed implicitly
- Phase 3 (homepage) = **heavier than brief** (true rebuild from monolith)
- Phase 4 (PDP) = **lighter than brief** (16 → 14 sections, drop 2)
- Phase 5 (`/pages/the-science`) = create new, as planned
- No BUCKS work
- No client Pixel work
- No third-party reviews app work (use native metafields)
