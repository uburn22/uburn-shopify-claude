# URGENCE — Fix site uburn.co
## Agent Dev — 6 avril 2026

## CONTEXTE PERFORMANCE (chiffres reels GA4)

Le site perd 75% des visiteurs immediatement. Voici les donnees :

- Bounce rate global : 75%
- Bounce rate page produit /products/ube-poudre : 73.7%
- Duree moyenne page produit : 22 SECONDES
- Seulement 12% des visiteurs scrollent
- 71% du trafic est mobile
- Bounce mobile : 75% avec 52s de duree
- Trafic facebook/cpc : 100% bounce, 11 secondes de visite
- 0 vente en 5 jours
- €104 depenses en ads pour 0 conversion

La page /pages/uburn-lp performe 12x mieux (4min30 de duree, 67% bounce).
Mais les ads envoient sur /products/ube-poudre qui ne convertit pas.

## LES 6 PROBLEMES A FIXER — PAR ORDRE DE PRIORITE

---

### PROBLEME 1 — Above the fold page produit (CRITIQUE)
**Constat** : les visiteurs restent 22 secondes et 88% ne scrollent pas. Le haut de page ne donne pas envie de rester.

**Ce qui doit apparaitre dans les 2 premieres secondes (sans scroller) sur MOBILE :**

1. **Titre clair** — pas le nom du produit ("Uburn — Reprenez le controle") mais le BENEFICE :
   "Reduisez vos fringales naturellement"
   ou "La boisson qui favorise la satiete durablement"

2. **Sous-titre** — prix ancre + deculpabilisation :
   "6 actifs naturels. 30 kcal. Moins d'1EUR/jour."

3. **Social proof immediat** — juste en dessous du titre :
   "2 400+ clientes satisfaites" avec des etoiles
   ou "Note 4.8/5" (si vrais avis disponibles)

4. **Image produit** — packshot clair du sachet + verre violet
   PAS un slider, PAS un carrousel — UNE image fixe qui charge instantanement

5. **Bouton ATC visible** sans scroller sur mobile (dans le viewport 667px)

**Ce qu'il faut SUPPRIMER du above the fold :**
- Les badges/labels qui encombrent
- Les descriptions longues
- Les sliders/carrousels (ralentissent le chargement)
- Tout texte qui ne repond pas a "C'est quoi ? Pourquoi ? Combien ?"

**Implementation** :
- Fichier : sections/main-product.liquid ou le template product.json
- Reorganiser les blocs pour que titre + social proof + prix + CTA soient dans les 667px premiers pixels
- Tester sur iPhone SE (plus petit ecran courant) — tout doit etre visible sans scroller

---

### PROBLEME 2 — Vitesse de chargement mobile (CRITIQUE)
**Constat** : le trafic facebook/cpc reste 11 secondes. La page ne charge probablement pas assez vite sur mobile. Si la page met plus de 3 secondes a charger, 53% des visiteurs partent (donnees Google).

**Actions** :
1. Tester la vitesse avec PageSpeed Insights (pagespeed.web.dev) — noter le score mobile
2. Objectif : score mobile > 70

**Optimisations a appliquer :**

A. **Images** :
   - Toutes les images au format WebP (pas PNG, pas JPEG)
   - Largeur max 800px pour mobile (pas besoin de 2000px)
   - Lazy loading sur toutes les images sauf la premiere (above the fold)
   - Preload l'image hero : `<link rel="preload" as="image" href="...">`

B. **Scripts** :
   - Defer tous les scripts non critiques :
     `<script defer src="...">`
   - Reporter le chargement du chat widget Shopify Inbox apres 5 secondes
   - Reporter PageFly JS s'il est present (pagefly-main.js)
   - Reporter les scripts de tracking non essentiels

C. **CSS** :
   - Inline le CSS critique (above the fold) dans le `<head>`
   - Charger le reste du CSS en async
   - Supprimer le CSS inutilise (theme.css fait probablement 200KB+ dont 80% inutilise)

D. **Fonts** :
   - Preload les fonts : `<link rel="preload" as="font" ...>`
   - Utiliser font-display: swap pour eviter le flash blanc

**Implementation** :
- Fichier principal : layout/theme.liquid
- Verifier assets/theme.css et assets/theme.js — taille et optimisation
- Verifier si PageFly est utilise — ses scripts sont lourds

---

### PROBLEME 3 — Chat widget qui masque le CTA (IMPORTANT)
**Constat** : le widget Shopify Inbox (bulle noire en bas a droite) avec badge "1" :
- Cache le prix total dans le panier sur mobile
- Distrait au moment du checkout
- Prend de l'espace sur le CTA "Ajouter au panier"

**Fix** :
1. Masquer le chat widget sur ces pages :
   - /cart
   - /checkouts/*
   - /products/* (sur mobile uniquement)

2. Reporter le chargement du chat widget de 5 secondes apres le page load

3. Supprimer le message de bienvenue automatique qui genere le badge "1"

**Implementation** :
Option A — CSS :
```css
/* Masquer sur panier et checkout */
.cart-page .shopify-chat-widget,
[data-page="cart"] iframe[title*="chat"],
.checkout iframe[title*="chat"] {
  display: none !important;
}

/* Masquer sur mobile product page */
@media (max-width: 768px) {
  .product-page .shopify-chat-widget,
  [data-page="product"] iframe[title*="chat"] {
    display: none !important;
  }
}
```

Option B — Shopify Admin :
Shopify Admin → Inbox → Parametres → Visibilite → exclure les pages cart et checkout

---

### PROBLEME 4 — Social proof absent (IMPORTANT)
**Constat** : aucun avis, aucun temoignage, aucun chiffre de confiance visible immediatement sur la page produit. Les femmes 35-55 ans ont besoin de confiance avant d'acheter.

**Ce qu'il faut ajouter :**

A. **Barre de confiance sous le titre** (visible sans scroller) :
```
★★★★★ 4.8/5 — 2 400+ clientes satisfaites
```
ou si pas de vrais avis encore :
```
✅ Livraison offerte  ✅ Satisfaite ou remboursee 30j  ✅ Sans abonnement
```

B. **Section temoignages** (apres la description produit) :
3 temoignages courts avec prenom + age + ville :
- "Marie, 42 ans, Lyon — Je ne grignote plus l'apres-midi depuis 3 semaines"
- "Sophie, 38 ans, Paris — C'est devenu mon rituel du matin"
- "Claire, 51 ans, Bordeaux — Enfin un produit naturel qui fonctionne"
(UNIQUEMENT si ce sont de vrais temoignages verifiables)

C. **Badge garantie** visible pres du bouton ATC :
"30 jours satisfaite ou remboursee — sans question"

**Implementation** :
- Ajouter dans le template product.json ou dans les sections product
- Utiliser un snippet `trust-badges.liquid` pour les icones de confiance
- Le badge garantie doit etre ADJACENT au bouton ATC, pas cache en bas

---

### PROBLEME 5 — Landing page LP pas utilisee comme destination (IMPORTANT)
**Constat** : /pages/uburn-lp a 4min30 de duree vs 22s pour /products/ube-poudre. Mais les ads envoient sur la page produit.

**Ce qu'il faut faire :**

Option A — Ameliorer /products/ube-poudre (cette page) :
Appliquer les fixes 1-4 ci-dessus pour que la page produit performe autant que la LP.
C'est mieux a long terme car c'est la page ou le bouton ATC est natif.

Option B — Rediriger les ads vers /pages/uburn-lp :
Ajouter un bouton ATC sur la LP qui redirige vers le checkout avec le produit pre-rempli.
URL : /cart/add?id=VARIANT_ID&quantity=1

**Recommandation** : Option A (ameliorer la page produit) + integrer les meilleurs elements de la LP dans la page produit.

**Elements de la LP a copier dans la page produit :**
- La structure hero (titre benefice + sous-titre + CTA)
- La section "Comment ca marche" (3 etapes)
- La section ingredients
- La FAQ
- La garantie

---

### PROBLEME 6 — Sticky bar ATC sur la page panier (MINEUR)
**Constat** : la barre sticky en bas "Uburn — Reprenez... €34,50 | Ajouter au panier" persiste sur la page panier alors que le produit est deja dedans.

**Fix** :
```liquid
{% unless template == 'cart' %}
  {% render 'product-sticky-add-to-cart' %}
{% endunless %}
```
Fichier : snippets/product-sticky-add-to-cart.liquid ou layout/theme.liquid

---

## ORDRE D'EXECUTION

| # | Fix | Impact | Temps estime |
|---|---|---|---|
| 1 | **Above the fold page produit** | 🔴 Le plus gros impact — passer de 22s a >45s | 2-3h |
| 2 | **Vitesse mobile** | 🔴 Si la page charge pas, rien d'autre ne marche | 1-2h |
| 3 | **Chat widget** | 🟡 Quick win | 15 min |
| 4 | **Social proof / trust badges** | 🟡 Augmente la confiance | 1h |
| 5 | **LP elements dans page produit** | 🟡 Moyen terme | 2h |
| 6 | **Sticky bar panier** | 🟢 Mineur | 10 min |

## VERIFICATION APRES CHAQUE FIX

- [ ] Tester sur iPhone (Safari) — la page charge en moins de 3 secondes
- [ ] Le titre + social proof + prix + CTA sont visibles sans scroller sur mobile
- [ ] Le chat widget n'apparait plus sur /cart et /checkouts
- [ ] PageSpeed Insights mobile > 70
- [ ] Faire un parcours complet : ad → page produit → ATC → panier → checkout
- [ ] Verifier que le Pixel fire toujours correctement apres les modifications

## CE QU'IL NE FAUT PAS FAIRE

- ❌ Ne pas changer l'URL de la page produit
- ❌ Ne pas supprimer le Pixel Meta ou les scripts de tracking
- ❌ Ne pas modifier le checkout Shopify (c'est gere par le canal FB&IG)
- ❌ Ne pas ajouter de pop-up sur mobile (ca fait fuir)
- ❌ Ne pas changer le prix ou le nom du produit
