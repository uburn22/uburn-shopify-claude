# HANDOFF — uburn-shopify-claude

> **Authority** : CLAUDE.md Règle 5 (multi-Mac coordination)
> **Purpose** : record state when switching between Mac Studio ↔ MacBook Pro to avoid conflicts.
> **Update** : whenever you finish a session OR before switching machines.

## Active session

- **Last machine** : Mac Studio (`MacStudio-de-charles.local`)
- **Date / time** : 2026-05-25 19:56 (autonomous SEO optimization run by Claude)
- **Branch** : `seo/full-optimization-2026-05-25` (pushed to origin)
- **HEAD** : `bafdf69 feat(seo): full optimization pass — schema/meta/perf only, no design/copy`
- **State** : clean (committed + pushed)
- **Previous branch** : `restore-morning-state-3cb7d95-merged` (base of this work)

## In-progress work

- **SEO optimization branch ready for Charles validation + dev theme push**
  - 9 files changed, 595 insertions
  - Full deployment guide at `_audit/DEPLOY-SEO-2026-05-25.md`
  - Audit context : `~/Library/CloudStorage/.../UBURN-SYNC/_logs/2026-05-25-seo-ai-readiness-audit.md`
  - 6 Shopify Admin actions still required (Markets, noindex, IndexNow, GSC, og:image rename, metafield creation) — listed in deploy guide
- Phase 2 redesign work (paused) : trust band V2 + design system bridge for monolith

## Pending decisions

| Item | Status | See |
|---|---|---|
| Port 7 high-value items from v2-archive | ⏸ planned, not started | `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/PORT_CHECKLIST_FROM_V2.md` |
| Port F1-F5 compliance fixes from `uburn-shopify-compliance-fix-archive` | ⏸ planned, ~3-5h work | `~/UBURN_INFRA_BACKUP_2026-05-17/stabilization/SHOPIFY_CANONICAL_DECISION_REPORT.md` §10 |
| Shopify webhooks pipeline (replaces deleted Admin API) | ⏸ unscoped | Phase ultérieure — needed to re-enable cart-recovery, welcome-flow, post-purchase-flow LaunchAgents |

## Blockers

- Shopify Admin API tokens deleted from Doppler (2026-05-18). Read-only orders/carts not available via this repo's scripts until refactor.
- 4 LaunchAgents Shopify-dependent paused : `cart-recovery`, `welcome-flow`, `post-purchase-flow`, `architecture-recheck` (one-shot already past)

## Next action when you resume

1. **Review SEO branch** : `git diff main...seo/full-optimization-2026-05-25 --stat` + read `_audit/DEPLOY-SEO-2026-05-25.md`
2. **Push to DEV theme only** (NOT live 186235420991) — validate schema on dev theme preview URL
3. **Create the 4 metafields** (Settings → Custom data → Shop : loox.avg_rating, loox.review_count ; Product : product.gtin, product.mpn)
4. **Create page handle `llms-txt`** in Shopify Admin Pages, assign template `llms-txt`
5. **Add URL redirect** `/llms.txt → /pages/llms-txt`
6. **Run schema validators** : validator.schema.org + Rich Results Test on PDP/the-science/faq-us-en
7. **Only after 1-6 clean** : push to LIVE theme — confirm A/B/C per memory `feedback_theme_publish`
8. **Then attaque les 6 Shopify Admin actions** restantes (Markets, noindex 10 pages, IndexNow, GSC sitemap, og:image rename, /collections/all meta) — détaillées dans DEPLOY guide

If touching production theme : confirm A/B/C theme target (cf. memory `feedback_theme_publish`)
Update this HANDOFF.md before stopping or switching machines

## Stashes (DO NOT lose)

```
stash@{0}: On redesign/v2: wip-pre-lp-4pm
stash@{1}: On pre-launch-final-2026-05-13: WIP-pre-redesign-v2-2026-05-14-uncommitted-header-EN-copy
stash@{2}: On copywriting-uburn-silhouette-v1: WIP-CHARLES-AVANT-AUTONOMOUS-2026-05-08
```

## Repository hygiene snapshot (2026-05-18)

- 57 local branches
- ~50 `backup-pre-*` safety snapshots (all <30 days, kept as insurance)
- Active production-bound branches : `feat/lp-4pm-killer-us`, `redesign/v2`, `main` (verify default before any push)
- Canonical Shopify theme #186066567487 `uburn-us-premium-v2` (per memory `project_uburn_cta_systemic_bug_fix`)

---

## Template — copy + edit for each session

```markdown
## Active session
- **Last machine** : Mac Studio | MacBook Pro
- **Date / time** : YYYY-MM-DD HH:MM
- **Branch** : <branch>
- **HEAD** : <sha> <message>
- **State** : clean | <N> uncommitted | WIP

## In-progress work
- <file> — <what you're doing>

## Pending decisions
- <decision> — waiting on <person/external>

## Blockers
- <blocker>

## Next action when you resume
1. <step>
2. <step>
```
