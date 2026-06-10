# MISSION : Fix checkout mobile uburn.co

Tu es l'Agent Dev Uburn. Dossier de travail : ~/Desktop/UBURN-DEV
Site Shopify : uburn.co · theme Dawn customise

## CONTEXTE PERFORMANCE

Les ads Meta fonctionnent (CTR 3.6%, 263 link clicks/semaine) mais 0 purchase attribue.
Funnel Meta 7 jours : 22 Add to Cart → 16 Initiate Checkout → 1 Add Payment → 0 Purchase.
GA4 montre 5 achats reels sur la meme periode.
89% du trafic est mobile.
Le probleme est 100% cote checkout, pas cote ads.

## PROBLEMES IDENTIFIES (screenshots analyses)

### 1. CRITIQUE — Chat widget masque le total panier sur mobile
- Le bouton Shopify Inbox (bulle noire) couvre le prix total dans /cart
- Le client ne voit pas combien il va payer → abandonne
- Le widget apparait aussi dans le checkout → distraction au moment du paiement
- FIX : masquer le chat widget sur les pages /cart et /checkouts/*
- Implementation : ajouter du CSS ou modifier la config Shopify Inbox pour exclure ces pages

### 2. CRITIQUE — Verifier les codes promo actifs
- Une commande test a ete passee a 0,00€ au lieu de 34,50€
- Verifier dans Shopify Admin → Reductions s'il y a un code actif qui donne -100%
- Si oui, le desactiver ou le limiter
- Impact : le Pixel Meta ne track pas les achats a 0€ comme des "purchases"

### 3. MOYEN — Double sticky bar "Ajouter au panier" dans le panier
- Une barre sticky en bas affiche "Uburn — Reprenez... €34,50 | Ajouter au panier"
- Cette barre persiste sur la page panier alors que le produit est deja dedans
- FIX : masquer la sticky bar ATC quand on est sur /cart
- Implementation : condition dans le template cart ou CSS display:none sur la page panier

### 4. MOYEN — "Saisir une adresse d'expedition" au lieu de "Gratuit"
- Dans le checkout, la ligne Expedition affiche "Saisir une adresse d'expedition"
- Le client pense qu'il y aura des frais supplementaires → hesitation
- La livraison est gratuite en France mais ca n'est pas visible avant d'entrer l'adresse
- FIX : dans Shopify Admin → Parametres → Expedition → verifier que le tarif gratuit France est bien configure
- Si possible, afficher "Livraison offerte" par defaut dans le checkout avant la saisie d'adresse

### 5. MOYEN — Widget chat notification badge "1"
- Le chat Shopify Inbox affiche un badge "1" (notification non lue) en permanence
- Ca attire l'oeil du client au mauvais moment (panier, checkout)
- FIX : supprimer le message de bienvenue automatique qui genere le badge
- Dans Shopify Admin → Inbox → Parametres → Messages automatiques → desactiver ou modifier

## REGLES

- Tester chaque fix sur mobile 375px avant de valider
- Ne pas toucher au design de la page produit
- Ne pas toucher aux ads ni au Pixel
- Ne pas modifier le prix du produit
- Commit chaque fix separement avec un message clair
- Ordre de priorite : 1 → 2 → 5 → 3 → 4

## VERIFICATION APRES FIX

- [ ] Le chat widget n'apparait plus sur /cart
- [ ] Le chat widget n'apparait plus sur /checkouts/*
- [ ] Aucun code promo -100% actif
- [ ] La sticky bar ATC ne s'affiche plus sur /cart
- [ ] Le badge "1" du chat n'apparait plus
- [ ] Tester un parcours complet mobile : page produit → ATC → panier → checkout → paiement
- [ ] Verifier que le Pixel fire bien Purchase apres un achat test
