# UBURN Live Snapshot — pre-bright-evolution (2026-05-18)

Snapshot complet du thème live `uburn-us-premium-v2 #186066567487`
au moment où Charles a demandé l'évolution visuelle "bright premium".

## État capturé
- 487 fichiers
- Toutes sections u2-* (homepage + PDP + about)
- Templates index.json + page.lp-*.json + product.*.json
- Snippets, assets, layout, locales, config

## Hero state au snapshot
- Image gauche: lp-hero-stress-eater.jpg / uburn-us-homepage-01-hot-latte-hero-a.jpg (master)
- Image droite: uburn-us-homepage-hero-bottle-500ml-b.jpg
- Rating chip: ★ 4.7 · 2,847+ customers
- Hero CTA: form direct checkout /cart/add → /checkout
- Sticky ATC: form direct checkout

## CRO wins déjà appliqués sur ce snapshot
- Hero rating chip
- Hero direct checkout form
- Sticky ATC form
- u2-pricing-cards subscribe toggle + bundle dynamic
- u2-formula-grid redesigned + real ingredient photos
- u2-moodboard new section
- u2-live-proof popup
- Dose copy 3 scoops/day pour 270g

## Rollback one-liner

```bash
cd ~/Code/uburn/uburn-shopify-v2
rm -rf assets/u2-*.css assets/u2-*.png assets/u2-*.jpg sections/u2-*.liquid templates/page.lp-*.json templates/index.json
cp -R _backups/homepage-pre-bright-evolution-2026-05-18/* .
shopify theme push --theme=186066567487 --store=1t9ayp-tw.myshopify.com --allow-live --no-color
```

OR republish duplicate theme `UBURN-LIVE-BACKUP-2026-05-18` directly via Shopify admin (1 click).
