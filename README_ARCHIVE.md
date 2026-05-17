# ⚠️ PROTECTED ARCHIVE — DO NOT MERGE

This repository is an **exploratory archive** of the "Violet Matcha" iter4 redesign
work performed locally in `~/Code/uburn/uburn-shopify-v2`.

**Decision date** : 2026-05-18
**Canonical repository** : [`uburn22/uburn-shopify-claude`](https://github.com/uburn22/uburn-shopify-claude)
**Authority** : Charles Moret · `feedback_theme_publish` + `STABILIZATION_PHASE_REPORT.md` Scenario A

## What this archive contains

- **Branch `uburn-v2`** — Charles' iter1→iter4 atomic CRO redesign on Dawn baseline.
  - `u2-*` design system (157 files): hero, PDP atomic sections, pricing cards, etc.
  - "The Violet Matcha" hero positioning angle
  - $250 bonus stack + Subscribe&Save flow
- **Branch `main`** — Shopify Dawn baseline (upstream theme)
- **Branch `stash-pre-US-visuals-2026-05-15`** — preserved stash from local
- **Tags** — 9 milestones: `pre-archive-snapshot-2026-05-17`, `post-archive-snapshot-2026-05-17`, `uburn-v2-dawn-baseline-2026-05-14`, `v15.4.1`, `v2-full-site-preview-2026-05-14`, `v2-iteration-2-cro-complete`, `v2-iteration-3-pdp-complete`, `v2-iteration-4-final-night-build-2026-05-15`, `v2-iteration-4-final-ready-2026-05-15`

## ❌ Forbidden actions

| Action | Why forbidden |
|---|---|
| Merge any branch from here into `uburn-shopify-claude` | Incompatible design system (`u2-*` vs `ub-*`/`uburn-*`). 79 same-name files diverge. Would cause regressions. |
| Cherry-pick commits into canonical | Same reason — atomic component dependencies span the whole iter4 set. |
| Force-push to any branch here | This is a frozen archive. Re-write history is irreversible. |
| Open Pull Requests for merge | This repo doesn't accept PRs by policy. |

## ✅ Allowed actions

| Action | Notes |
|---|---|
| Read-only browsing | Open Liquid files, inspect commits, read iter reports |
| Manually port a specific item | Follow `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/PORT_CHECKLIST_FROM_V2.md`. Each port = manual re-implementation in `uburn-shopify-claude` with `ub-*`/`uburn-*` prefix, **never copy-paste with `u2-*` prefix**. |
| Clone for offline reference | `gh repo clone uburn22/uburn-shopify-v2-archive` then `git checkout post-archive-snapshot-2026-05-17` |

## Restore procedure (if local clone lost)

```bash
mkdir -p ~/Code/uburn
cd ~/Code/uburn
gh repo clone uburn22/uburn-shopify-v2-archive uburn-shopify-v2
cd uburn-shopify-v2
git checkout post-archive-snapshot-2026-05-17   # state at archive time
```

## See also

- Decision report: `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/SHOPIFY_CANONICAL_DECISION_REPORT.md`
- Port checklist: `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/PORT_CHECKLIST_FROM_V2.md`
- Stabilization summary: `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/STABILIZATION_PHASE_REPORT.md`

---

🔒 Tag this archive's state with `protected-archive-do-not-merge` and treat as read-only.
