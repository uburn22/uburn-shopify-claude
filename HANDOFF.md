# HANDOFF — uburn-shopify-claude

> **Authority** : CLAUDE.md Règle 5 (multi-Mac coordination)
> **Purpose** : record state when switching between Mac Studio ↔ MacBook Pro to avoid conflicts.
> **Update** : whenever you finish a session OR before switching machines.

## Active session

- **Last machine** : Mac Studio (`MacStudio-de-charles.local`)
- **Date / time** : 2026-05-18 (Phase Mac Studio stabilization)
- **Branch** : `feat/lp-4pm-killer-us`
- **HEAD** : `368babd feat(phase2/wave1): trust band V2 + design system bridge for monolith` (2026-05-14)
- **State** : 4 uncommitted (not edited this session)

## In-progress work

- (none — Charles paused here pre Phase 0+1 infra cleanup)
- Phase 2 redesign work : trust band V2 + design system bridge for monolith (last commit context)

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

1. Continue feat/lp-4pm-killer-us OR open `port/*-from-v2` branch
2. If touching production theme : confirm A/B/C theme target (cf. memory `feedback_theme_publish`)
3. Update this HANDOFF.md before stopping or switching machines

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
