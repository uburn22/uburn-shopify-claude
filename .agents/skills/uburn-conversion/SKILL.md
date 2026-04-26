---
name: uburn-conversion
description: Use for UBURN.CO Shopify work involving conversion-rate optimization, product-page redesign, landing-page-inspired design, theme edits, Shopify/GitHub deploy workflow, Meta funnel fixes, and any task touching the UBURN brand, PDP, homepage, pages, CRO copy, mobile iPhone audit, or theme files in this repo.
---

# UBURN Conversion

Use this skill to keep UBURN work focused on conversion, visual consistency, and the current Shopify workflow.

## Operating Mode

- Move fast and give Charles one concrete action at a time.
- Prefer implementing over explaining when the task is clear.
- Keep `/pages/uburn-lp` and `sections/uburn-lp.liquid` as the visual reference and do not edit them unless Charles explicitly asks.
- Use a branch and PR into `main`; never merge directly unless Charles explicitly asks.
- After code changes, push to GitHub and give the compare/PR link.
- Avoid long marketing explanations. State what changed and what to test.

## Brand DNA

- Audience: French women 35-55 buying a wellness drink for satiety and fewer cravings.
- Product: ube + glucomannane/konjac wellness powder, 30 kcal, 0% caffeine.
- Desired feel: Space Goods x AG1, but warmer and more gourmand.
- Preserve the landing page ADN: premium wellness, purple, direct conversion, proof-first.
- Use gourmand/lifestyle imagery when available: latte served, foam, morning ritual, warm kitchen, product-in-hand.
- Avoid a cold scientific look as the main impression. Science should support the sale, not dominate it.

## Visual Tokens

- Font: Poppins where the theme allows; current LP/PDP may use Red Hat Display/Text.
- Primary purple: `#7d3fff`.
- Signature background: `#f8f5ff`.
- Deep text purple: `#2b1e4d`.
- Button radius: `0`.
- Free shipping threshold/bar: `30€`.
- Buttons should be direct and conversion-led: `Commander`, `Commencer ma cure`, `Livraison offerte`.

## Conversion Priorities

1. PDP `/products/ube-poudre` is the bottleneck. Optimize View Content to Add to Cart first.
2. Above the fold must answer: what is it, why it works, why buy now, what arrives at home.
3. Lead with the craving moment: `16h. Le placard reste fermé.`
4. Show immediate proof: `4h`, `30 kcal`, `0% caféine`, `livraison offerte`, `sans abonnement`.
5. Make `Résultats Maximum` feel like the best value while keeping `Découverte 90g` available at `34,50€`.
6. Keep CTA count controlled: one main ATC in hero plus one sticky CTA is enough.
7. Remove `Satisfait ou remboursé 30j` from PDP unless Charles explicitly re-approves it.
8. Keep `soutient le métabolisme` if already present; do not reopen the regulatory discussion.

## Shopify Repo Map

- Product template: `templates/product.json`.
- PDP section: `sections/uburn-pdp.liquid`.
- Untouchable landing reference: `templates/page.uburn-lp.json`, `layout/uburn-lp.liquid`, `sections/uburn-lp.liquid`.
- Homepage sections: `sections/ub-home*.liquid`, `templates/index.json`.
- Page router/common pages: `sections/ub-page-router.liquid`, `templates/page.*.json`.
- Shared nav/footer: `snippets/ub-nav.liquid`, `snippets/ub-footer.liquid`, `sections/header.liquid`, `sections/footer.liquid`.
- Useful assets: `assets/latte_hero_01.jpg`, `assets/latte_hero_02.jpg`, `assets/latte_hero_m*.jpg`, `assets/uburn_hero_drink.jpg`, `assets/etape_*.jpg`, `assets/Histoire_*.jpg`, `assets/PLANTATION_UBE.png`.

## GitHub And Deploy

- Repo: `uburn22/uburn-shopify-claude`.
- Shopify theme: UBURN V2, id `181977973055`.
- Store: `1t9ayp-tw.myshopify.com`, live domain `uburn.co`.
- Auto-deploy: GitHub Actions deploys `main` to Shopify V2.
- Preferred working branch: `feat/finalisation`.
- Typical flow:
  1. Fetch latest `origin/main`.
  2. Work on `feat/finalisation`.
  3. Commit scoped changes.
  4. Push branch.
  5. Give Charles the GitHub compare link for `main...feat/finalisation`.
  6. Charles merges when ready to deploy live.

## Current Known Issues

- `/pages/resultats` may 404 if the Shopify page does not exist even when template exists.
- Placeholder pages may still need Shopify Admin creation: `comment-ca-marche`, `avis`, `livraison`, `retour`, `mentions-legales`, `cgv`, `confidentialite`.
- Shopify Admin API needs a valid `shpat_*` token; expired `shpss_*` tokens return 401.
- Mobile iPhone 375x812 should be audited for hero fit, sticky CTA, tap targets, image loading, and no overflow.

## Validation Checklist

- Confirm only intended files changed.
- Run `git diff --check`.
- Search PDP for unwanted copy: `Satisfait`, `rembours`.
- Confirm `/pages/uburn-lp` files were not modified unless requested.
- For PDP changes, verify variant cards update the hidden Shopify variant id.
- Ensure non-submit buttons inside product forms have `type="button"`.
- On mobile, ensure CTA text fits, sticky CTA does not cover important controls, and hero content does not overflow.

