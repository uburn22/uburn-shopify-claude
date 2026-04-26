# UBURN.CO Agent Instructions

## Priority

Work for conversion first. UBURN is a Shopify wellness e-commerce brand selling an ube + glucomannane/konjac drink to French women 35-55. The current bottleneck is the product page View Content to Add to Cart drop-off.

## Non-Negotiables

- Do not edit `/pages/uburn-lp` or its theme files unless Charles explicitly asks. It is the visual reference.
- Do not reopen regulatory/DGCCRF discussion.
- Keep `soutient le métabolisme` if already present.
- Remove or avoid `Satisfait ou remboursé 30j` on the PDP unless Charles explicitly re-approves it.
- Use a branch and PR into `main`; do not merge directly unless Charles asks.
- GitHub `main` deploys to Shopify theme UBURN V2.

## Brand And Design

- Reference style: live landing page `/pages/uburn-lp`.
- Feel: Space Goods x AG1, but warmer, more gourmand, more feminine.
- Avoid cold scientific-first design. Science supports the sale; it should not dominate the first impression.
- Use real product/lifestyle imagery: latte, foam, morning ritual, warm kitchen, product-in-hand.
- Primary purple: `#7d3fff`.
- Pale violet background: `#f8f5ff`.
- Deep purple text: `#2b1e4d`.
- Button radius: `0`.
- Free shipping message: 30 EUR threshold / livraison offerte.

## Product Page CRO

Above the fold must answer:

- What is it?
- Why does it help with cravings?
- Why buy now?
- What arrives at home?

Lead with the human moment:

- `16h. Le placard reste fermé.`
- `4h de satiété durable`
- `30 kcal`
- `0% caféine`
- `Sans abonnement`
- `Livraison offerte`

Keep CTA count tight: one main add-to-cart in the hero plus one sticky CTA is enough.

Push `Découverte 90g` at `34,50€`, while making `Résultats Maximum 270g` at `54,50€` feel like the best value.

## Key Files

- PDP: `sections/uburn-pdp.liquid`
- Product template: `templates/product.json`
- Landing reference: `sections/uburn-lp.liquid`, `templates/page.uburn-lp.json`, `layout/uburn-lp.liquid`
- Shared nav/footer: `snippets/ub-nav.liquid`, `snippets/ub-footer.liquid`
- Useful assets: `assets/latte_hero_01.jpg`, `assets/latte_hero_02.jpg`, `assets/latte_hero_m*.jpg`, `assets/uburn_hero_drink.jpg`, `assets/etape_*.jpg`

## Validation

- Run `git diff --check`.
- Confirm the landing page files were not changed.
- Search PDP for `Satisfait` and `rembours`.
- Ensure any non-purchase buttons inside product forms use `type="button"`.
- Check mobile iPhone layout mentally or visually: no overflow, CTA readable, sticky CTA not covering key controls.

