# Rollback Plan — UBurn US Redesign V2

**Created**: 2026-05-14
**Owner**: Charles Moret
**Trigger conditions**: any of the below within 4h post-publish

## Live state to restore
- **LIVE theme ID**: `185967575359` (`US-OPTIMIZATION-DRAFT-2026-05-09`)
- **Backup snapshot of settings_data.json**: `_backups/live-185967575359-2026-05-14/config/settings_data.json`
- **Git baseline tag**: `phase-1-start-2026-05-14` (on branch `pre-launch-final-2026-05-13`)
- **Stashed WIP**: stash entry `WIP-pre-redesign-v2-2026-05-14-uncommitted-header-EN-copy` (sections/header-group.json EN copy fix)

## Trigger thresholds (post-publish monitoring)
Switch back to #185967575359 if ANY of:
- Conversion rate drops >30% vs 7-day baseline within 4h of publish
- Pixel/GA4 events stop firing for >15min
- Checkout error rate >2% (vs <0.5% baseline)
- LCP regresses >50% on mobile real-user-monitoring
- Critical 5xx errors on PDP or homepage
- Charles visual reject during preview-to-live transition

## Switch back procedure (≤ 2 minutes)

### Option A — Shopify Admin UI (fastest)
1. Shopify Admin → Online Store → Themes
2. Find `US-OPTIMIZATION-DRAFT-2026-05-09` (#185967575359) in "Theme library"
3. Click `...` → "Publish"
4. Confirm publish dialog
5. Verify live: `curl -I https://uburn.co/products/ube-poudre` returns 200

### Option B — Shopify CLI
```bash
cd ~/.openclaw/workspace/uburn-shopify-claude
shopify theme publish --store=1t9ayp-tw.myshopify.com --theme=185967575359 --force
```

### Option C — Admin REST API
```bash
SHOP_TOKEN=$(doppler secrets get SHOPIFY_ACCESS_TOKEN --plain --project uburn --config dev)
curl -X PUT "https://1t9ayp-tw.myshopify.com/admin/api/2025-01/themes/185967575359.json" \
  -H "X-Shopify-Access-Token: $SHOP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"theme":{"id":185967575359,"role":"main"}}'
```

## Post-rollback verification checklist
- [ ] `curl -sI https://uburn.co/` → 200 OK
- [ ] `curl -sI https://uburn.co/products/ube-poudre` → 200 OK
- [ ] PDP renders with stars, price, ATC button
- [ ] Add to cart → cart drawer → checkout works end-to-end
- [ ] GA4 event firing (`https://www.google-analytics.com/g/collect` in network)
- [ ] Stripe checkout USD pricing works
- [ ] Markets/locale routing intact (`/fr/products/ube-poudre`)

## Permanent constraints during V2 work
1. **NEVER** call `shopify theme publish --theme=186063356223` without explicit Charles "PUBLISH CONFIRMED" reply
2. **NEVER** modify theme `185967575359` directly
3. **NEVER** delete the stashed WIP without checking with Charles
4. **NEVER** delete tag `phase-1-start-2026-05-14`
5. **NEVER** force-push to `redesign/v2` branch
6. **NEVER** rebase `redesign/v2` over destructive operations

## Backup artifacts inventory
| Artifact | Location |
|---|---|
| settings_data.json backup | `_backups/live-185967575359-2026-05-14/config/settings_data.json` (29.7 KB) |
| Git tag baseline | `phase-1-start-2026-05-14` |
| Branch state | `redesign/v2` (commit message: "chore(redesign/v2): baseline from live theme...") |
| Stash | `git stash list` → `WIP-pre-redesign-v2-2026-05-14-uncommitted-header-EN-copy` |
| Dev theme in Shopify | #186063356223 `uburn-us-premium-dev` (unpublished, mirror of live) |

## Backup theme on Shopify (additional safety net)
If catastrophic local repo loss, the live theme #185967575359 remains untouched on Shopify. Can be re-pulled at any time via:
```bash
shopify theme pull --store=1t9ayp-tw.myshopify.com --theme=185967575359
```
