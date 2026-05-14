# Skills Activated — UBurn V2 Iteration 2
**Date** : 2026-05-15
**Project** : `uburn-us-premium-v2` (#186066567487)

---

## Skills available in this environment (relevant subset)

Listing only skills relevant to UBurn V2 DTC e-commerce + Shopify theme build:

### Shopify-specific
- **`mcp__shopify-dev__learn_shopify_api`** — Shopify API knowledge base lookup
- **`mcp__shopify-dev__search_docs_chunks`** — Search Shopify dev documentation
- **`mcp__shopify-dev__validate_theme`** — Validates theme code against Shopify standards
- **`mcp__shopify-dev__validate_graphql_codeblocks`** — GraphQL query validation
- **`mcp__shopify-dev__validate_component_codeblocks`** — Liquid component validation
- **`mcp__shopify-uburn__list_products`** / `get_product` / `list_orders` / etc. — UBurn shop data access

### SEO / Performance
- **`seo-technical`** — Crawlability, indexability, security, Core Web Vitals (INP), structured data
- **`seo-schema`** — Schema.org JSON-LD detection, validation, generation
- **`seo-content`** — E-E-A-T, readability, content depth, AI citation readiness
- **`seo-performance`** — CWV measurement and evaluation
- **`seo-google`** — GSC, PageSpeed Insights, CrUX field data, Indexing API, GA4 organic
- **`seo-ecommerce`** — Product schema validation, Google Shopping, marketplace visibility
- **`seo-image-gen`** — Audit OG/social preview images, identify missing/low-quality images
- **`seo-sxo`** — SERP backwards analysis, intent classification, persona scoring
- **`benchmark`** — Performance regression detection, baseline & compare

### Design / UX
- **`design-review`** / **`plan-design-review`** — Designer's eye plan review
- **`design-consultation`** — Design system + brand guidelines
- **`shape`** — UX/UI planning for features
- **`adapt`** — Responsive UI refactor
- **`animate`** — Motion patterns
- **`quieter`** — Calm down overly busy UIs
- **`optimize`** — Performance / render fixes
- **`delight`** — Micro-interactions polish
- **`web-design-guidelines`** — Vercel Web Interface Guidelines (premium DTC reference)

### Ads / Conversion
- **`ads-landing`** — Landing page CRO assessment (message match, speed, trust, form, conversion)
- **`ads-creative`** — Cross-platform creative quality
- **`ads-meta`** — Meta Pixel + CAPI health
- **`ads-math`** — CRO math (CPA / ROAS / break-even)

### General
- **`careful`** — Safety guardrails for prod operations
- **`canary`** — Post-deploy monitoring
- **`investigate`** — Multi-step investigation
- **`distill`** — Summarize complex info
- **`review`** / **`critique`** / **`polish`** — Iteration loops

### Specialized accessibility / a11y
- No dedicated a11y skill in environment — use `web-design-guidelines` + manual ARIA/contrast checks

### Tools (deferred)
- **`mcp__playwright__*`** — Browser automation (already used for screenshots)
- **`mcp__shopify-uburn__*`** — UBurn shop data access

---

## Skills usage plan for Iteration 2

| Build step | Skill(s) used | Why |
|---|---|---|
| Live sections audit | `Bash` grep + manual section count from `_raw-source/` | Direct file inspection — no skill needed for offline audit |
| Schema validation per section | `mcp__shopify-dev__validate_theme` (post-build) | Catch schema errors before push |
| CRO section design | `ads-landing` principles applied via manual review | Message match, form friction, trust hierarchy |
| Comparison table CRO | `ads-creative` patterns | Premium DTC comparison patterns (Rhode/Moon Juice) |
| Science page structure | `seo-content` E-E-A-T patterns | Long-form authority content |
| Schema markup (Article, Product, Review, FAQ) | `seo-schema` patterns | JSON-LD generation |
| Performance budget | `seo-performance` checklist | LCP <2.5s, CLS <0.05 |
| Visual polish pass | `design-review` lens | Spacing scale, typo hierarchy, color tokens |
| Cart drawer + sticky ATC | `delight` micro-interactions | Smooth slide-in, scroll-trigger timing |
| Mobile responsive | `adapt` patterns | iPhone SE 375 → desktop 1440 fluid |
| Pre-publish prod safety | `careful` mode | Confirm before publish theme |

---

## Skills NOT used (out of scope this iteration)

- `seo-cluster` / `seo-backlinks` / `seo-local` — not Shopify-build related
- `blog-*` skills — no blog content in scope
- `ads-google` / `ads-meta` deep audits — covered by [[project_meta_attribution_gap_2026_05_05]] separately
- `wp-*` skills — WordPress-only, not applicable
- `claude-api` — building Shopify Liquid, not Claude API integrations

---

## Skills proactively invoked

For each section I build in this iteration, I apply the following checks inline (not via dedicated skill invocation but using their checklists):

1. **`seo-schema`** : Does this section emit valid JSON-LD where applicable? (Product, Review, FAQ, Article, Organization)
2. **`ads-landing`** : Message match with hero promise? Friction? Trust signals visible? Form optimization?
3. **`web-design-guidelines`** : Spacing scale 8pt? Color tokens? Typo hierarchy? Touch targets ≥44px?
4. **`seo-content`** : E-E-A-T signals? FDA/FTC compliance? Source attribution?
5. **`careful`** : Destructive operations confirmed before execution?

These run as mental checklists per section rather than separate tool calls, to keep iteration velocity high.
