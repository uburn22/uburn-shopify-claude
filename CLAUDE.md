# UBURN Growth Agent
Role: Meta Ads Manager & Performance Analyst for uburn.co

## Account access
Meta Ad Account: Uburn ADS France
Pixel ID: 1207776051409154 (browser + CAPI · deduplication ON)
API: Meta Graph v21.0 · token in .env file
Page ID: 853482911178968 (Uburn)
IG Business ID: 17841476067891794 (uburn.co)
Business: R Glow F.Z.E

## Meta Token (mis à jour 30/03/2026)
- Type: System User Token (PERMANENT · n'expire jamais)
- Script de vérification: `bash scripts/check_token.sh`
- 7 permissions actives:
  - ads_management, ads_read, business_management
  - pages_read_engagement, pages_manage_ads, pages_manage_posts
  - public_profile

### Permissions bloquées — en attente vérification R Glow F.Z.E
Meta exige que le Business (R Glow F.Z.E) soit vérifié avant d'accorder les permissions avancées.
Une fois vérifié, regénérer le System User Token avec ces permissions supplémentaires :

| Permission | Fonction | Statut |
|---|---|---|
| `instagram_basic` | Accès au compte IG, lire les posts | ⏳ Bloqué |
| `instagram_manage_comments` | Lire/répondre aux commentaires IG | ⏳ Bloqué |
| `instagram_manage_insights` | Analytics IG (reach, impressions) | ⏳ Bloqué |
| `instagram_content_publish` | Publier des posts IG via API | ⏳ Bloqué |
| `instagram_manage_messages` | DMs Instagram | ⏳ Bloqué |
| `pages_messaging` | DMs Facebook Messenger | ⏳ Bloqué |
| `pages_manage_engagement` | Répondre aux commentaires FB | ⏳ Bloqué |
| `pages_read_user_content` | Lire commentaires visiteurs | ⏳ Bloqué |
| `read_insights` | Analytics ads (CPA, CTR, ROAS) | ⏳ Bloqué |
| `leads_retrieval` | Récupérer les leads | ⏳ Bloqué |

### Ce qui fonctionne MAINTENANT (sans vérification)
- ✅ Lire/modifier les campagnes Meta Ads
- ✅ Créer/pauser/activer des ads
- ✅ Lire le statut des campagnes et budgets
- ✅ Accéder aux infos Page Facebook (nom, fans)

### Ce qui est BLOQUÉ (jusqu'à vérification Business)
- ❌ Analytics ads (impressions, CPA, CTR, ROAS) → `read_insights`
- ❌ Commentaires Instagram (lire + répondre) → `instagram_basic` + `instagram_manage_comments`
- ❌ Analytics Instagram (reach, views) → `instagram_manage_insights`
- ❌ DMs Facebook Messenger → `pages_messaging`
- ❌ DMs Instagram → `instagram_manage_messages`
- ❌ Répondre aux commentaires Facebook Ads → `pages_manage_engagement`

### Étapes pour débloquer
1. Vérifier R Glow F.Z.E dans Meta Business Manager → Paramètres → Centre de sécurité → Vérification
2. Attendre validation Meta (quelques jours)
3. Regénérer le System User Token avec les 17 permissions complètes
4. Mettre à jour .env : `read -s -p "Token: " T && sed -i '' "s/META_ACCESS_TOKEN=.*/META_ACCESS_TOKEN=$T/" ~/Desktop/UBURN-GROWTH/.env`
5. Vérifier : `bash scripts/check_token.sh`

## Pixel Status (mis à jour 01/04/2026)
- Purchase event: ACTIVE — 3 events dernière semaine
- Events 7 jours: PageView 376 · ViewContent 185 · AddToCart 37 · InitiateCheckout 25 · Purchase 3
- content_ids format: shopify_FR_{productId}_{variantId}
- AddToCart fix déployé 31/03 (cart:change hook au lieu de form submit)
- InitiateCheckout fix déployé 31/03 (click listener au lieu de page load)
- Satiété officielle : **4h** (pas 6h)
- Pas de café dans la recette — ne jamais mentionner "café" (sauf "0% caféine")

## Structure campagne (inspirée AG1/Huel — mise à jour 23/03/2026)

### Campagne 1 — TEST (10% budget)
- Objectif : tester les nouveaux créatifs uniquement
- Budget : €10/jour
- Règle : couper si hook rate < 30% après 3 jours
- Campagne actuelle : FB-AE-[UBURN] ADV+ Sales · budget €30/jour (augmenté le 23/03/2026)

### Campagne 2 — SCALE (90% budget) — À CRÉER
- Objectif : winners confirmés uniquement (CPA < €25 après 7 jours)
- Règle : ne jamais modifier cette campagne une fois lancée
- Statut : en attente — pas de winner confirmé pour le moment

### Campagnes existantes
- FB-FR-[UBURN] Traffic → PAUSED définitivement
- Targeting compagne → PAUSED (ignorer)

## KPIs cibles (ordre de priorité 2026)
1. Hook rate (% qui regardent > 3s) → cible > 30%
2. Outbound CTR → cible > 1.5%
3. CPA → cible < €25
4. ROAS → cible > 3x
5. Fréquence → alerter si > 3.5 (ad fatigue)
- LTV moyenne €55
- Objectif CA mensuel : €35 000

## Créatifs en attente (PAUSED)
- FB-AE-[UBURN]-ADV+_Video_Coconut → à activer
- FB-AE-[UBURN]-ADV+_Video_Milk → à activer
- Règle : 1 créatif à la fois · €10/jour · 5-7 jours de data

## Ads statiques — créées le 23 mars 2026 (PAUSED · en attente validation Charles)

### AD 1 — [CC] Femmes-Healthy_v2
- Ad ID: 120243393529860469
- Creative ID: 3180801798769140
- Image: Femmes-Healthy_9x16 (hash: b4f1f8b99602495714a850b76b3ee04f)
- Awareness: Unaware (cold)
- Headline: "La boisson violette qui coupe les fringales 4h"
- Budget prévu: €10/jour
- Statut: PAUSED

### AD 2 — [CC] Meilleur-Ube
- Ad ID: 120243393530860469
- Creative ID: 2054748805101406
- Image: Meilleur-Ube_9x16 (hash: ea8eec0c8994b12f58c081af9b3f7175)
- Awareness: Problem Aware (cold)
- Headline: "Ube + Konjac = 4h sans fringales"
- Budget prévu: €10/jour
- Statut: PAUSED

### AD 3 — [CC] Routine-UBE
- Ad ID: 120243393531380469
- Creative ID: 2372078609930495
- Image: Routine-UBE_9x16 (hash: 42754145aaa1affe400f6e7cd3a19f87)
- Awareness: Solution Aware (retargeting)
- Headline: "Votre nouvelle routine commence ici"
- Budget prévu: €10/jour
- Statut: PAUSED

## Vidéos studio — EN PRODUCTION (24/03/2026)

### VIDEO 1 — [CC] Video-Coconut-v1
- Format: Studio · 45s · 9:16
- Style: Packshot coconut MCT
- Musique: Lo-fi acoustique · guitare légère · tempo lent · warm
- Source musique: Epidemic Sound → "morning routine acoustic"
- Awareness: Unaware / Problem Aware
- Ad copy à associer: Copy 1 (angle glycémie 16h)
- Statut: EN PRODUCTION · à uploader quand livré
- Nom Meta: [CC] Video-Coconut-v1

### VIDEO 2 — [CC] Video-WaterCoconut-v1
- Format: Studio · 45s · 9:16
- Style: Packshot water coconut
- Musique: Chillwave · synthé doux · tempo medium · bright
- Source musique: Epidemic Sound → "fresh tropical minimal"
- Awareness: Solution Aware
- Ad copy à associer: Copy 2 (angle ube + konjac)
- Statut: EN PRODUCTION · à uploader quand livré
- Nom Meta: [CC] Video-WaterCoconut-v1

### À faire quand les vidéos sont livrées
1. Upload sur Meta Ads Manager
2. Créer 2 ads dans ADV+ (status PAUSED)
3. Associer chaque vidéo au bon ad copy
4. Activer uniquement après review du 31 mars

### Règles musique Meta Ads
- Pas de paroles (distrait du texte overlay)
- Volume: 60% du normal (beaucoup regardent sans son)
- Fade in dès la première seconde (pas de silence)
- Droits commerciaux obligatoires: Epidemic Sound ou Artlist uniquement

### Règles de décision (après 5 jours)
- Hook rate > 30% + CTR > 2% + CPA < €25 → promouvoir en campagne SCALE
- Hook rate < 30% après 3 jours → couper et remplacer
- CTR < 1% après 3 jours → couper et remplacer
- CPM > €35 → vérifier l'audience ADV+
- Fréquence > 3.5 → alerter Charles (ad fatigue)
- Ne rien activer sans validation de Charles

## Meta Ads best practices
### Structure campagne
- Toujours Sales/Conversion objective pour Uburn
- Advantage+ Shopping Campaign = meilleur format e-commerce Shopify
- 1 campagne ADV+ · plusieurs ads · laisser Meta optimiser
- Ne jamais micro-manager les adsets

### Budget et scaling
- Minimum €10/jour pour sortir du Learning
- Ne jamais modifier le budget de plus de 20% par jour
- Doubler budget si CPA < €25 après 7 jours
- Couper une ad si CPA > €40 après 5 jours
- Ne pas juger une ad avant 3 jours minimum

### Créatifs
- Format winner : vidéo 9:16 · 15-30s · hook dans les 3 premières secondes
- Tester 1 nouvelle créa par semaine
- Max 3-5 ads actives simultanément
- CTR > 2% = bon créatif · CTR < 1% = couper après 3 jours

### Diagnostics
- CTR bon + CPA élevé = landing page ou offre problème
- CTR faible + CPA élevé = créatif problème
- CPM > €30 = audience trop restreinte
- Learning Limited = budget trop bas ou trop de changements

### Erreurs à ne jamais faire
- Ne jamais pauser une ad qui performe
- Ne jamais changer le budget tous les jours
- Ne jamais lancer 10 ads en même temps
- Ne jamais utiliser objectif Traffic pour vendre

## Concurrents & Marché (mis à jour 24/03/2026)

### ubfit.fr
- Même produit · même cible femmes 35-55 ans France
- Notre angle : transparence · pas d'abo caché · satisfait ou remboursé

### Huel (racheté par Danone — mars 2026, ~€1 milliard)
- Huel : meal replacement · audience large · €2-3/dose · générique
- Uburn : anti-craving · femmes 35-55 FR · €0.61/jour · spécifique
- Impact marché :
  - Danone va injecter du budget massif en France → éducation marché poudres nutritionnelles végétales
  - CPM wellness va augmenter dans 6-12 mois
  - MAINTENANT = fenêtre pour établir Uburn avant l'arrivée des gros budgets
  - La légitimité de la catégorie va augmenter → aide la conversion
- Avantage Uburn à exploiter : niche spécifique (coupe-faim femmes) vs généraliste Huel

### Nouvel angle ad à tester (après review du 31 mars)
- "Moins de 1€/jour. 4h sans fringales."
- Price anchoring vs prix quotidien
- Ajouter au prochain batch créatif

### Roadmap pricing Q2 2026
- Opportunité : abonnement sans engagement "économisez 15%" (inspiré Huel save 20%)
- PAS urgent — à planifier quand le budget le permet

## Équipe créative
- Sonia : contenu organique + ads créatives vidéo/photo
- Nadir (Won Media Buying) : ads créatives en discussion
- Charles : CEO Uburn

## Trends 2026 (updated: March 2026)

### 1. Reels 9:16 avec son = format roi
Les Reels ads ont un CPA 34,5% plus bas que les images et 15% plus bas que les vidéos sans son. Engagement 3x supérieur (3,2% vs 1,1% pour le statique). Reach rate 30,8% vs 13% pour les photos. Pour Uburn : toujours produire en 9:16 vertical avec musique/voix — c'est le format que Meta récompense le plus.

### 2. Le créatif EST le ciblage
Avec Advantage+, Meta gère le ciblage automatiquement. Le créatif doit faire le travail d'attirer la bonne audience. Broad targeting (Femmes 18-55, France) + créatif qui parle directement à la cible = meilleure approche 2026. Ne plus perdre de temps sur les intérêts — investir dans la qualité créa.

### 3. Vidéo en cold, image en retargeting
Vidéo = +135% de reach organique, meilleur pour top of funnel. Mais coût par achat 24% plus élevé que l'image. Solution : vidéo pour accrocher en cold audience, images/carrousels pour convertir en retargeting. Format idéal : 6-15 secondes.

### 4. Restrictions santé/perte de poids renforcées
Meta a durci les règles en 2025-2026 pour le wellness. Interdit : avant/après, shame-based messaging, transformation corporelle. Autorisé : compléments alimentaires 18+, bénéfices fonctionnels (énergie, satiété, métabolisme). Pour Uburn : cadrer le message sur l'énergie et le bien-être, PAS sur la perte de poids directe.

### 5. ADV+ : consolider, pas fragmenter
ADV+ délivre en moyenne +22% de ROAS vs campagnes manuelles. Best practice : 1 campagne, budget consolidé, 3-5 créas max, laisser l'algo répartir. Minimum recommandé : €100/jour pour des résultats optimaux (on est à €10 — phase test). "Four Peaks Theory" : planifier 4 promos majeures/an pour scaler.

## Offre d'entrée cold (inspirée AG1) — à mentionner dans toutes les ads cold
- E-book "30j pour reprendre le contrôle" (valeur 47€)
- Groupe privé Uburn Collective (valeur 40€)
- Suivi nutrition WhatsApp 30j (valeur 47€)
- Total valeur perçue : 134€ OFFERTS avec la commande
- Angle prix : "Moins de €1/jour"

## Whitelisting (à tester)
- Demander à Sonia l'accès whitelist à son compte Instagram
- Lancer les prochaines ads depuis son profil perso → CTR potentiellement x2 vs compte marque
- Statut : en attente — à discuter avec Sonia

## Inspirations créatives AG1 à adapter pour Uburn
- "Remplace 5 compléments par 1 seule dose" → "Remplace 5 solutions minceur par 1 seule routine"
- Prix par jour mis en avant : "Moins de €1/jour"
- Résultats à 30, 60, 90 jours → à collecter sur les clientes

## Pricing anchor (règle permanente)
- Angle prix : "Moins de 1€/jour" · "€0,61/jour"
- Ne PAS comparer au café — il n'y a pas de café dans la recette
- Utiliser comme objection handler prix dans tous les nouveaux ad copies

## Angles à tester Q2 2026 (après review 31 mars)

### Angle 1 — "Le soir aussi" (sans caféine)
- Hook : "Vous craquez à 16h mais vous évitez Uburn le soir par peur de mal dormir ?"
- Argument : 0% caféine, peut se prendre à toute heure
- Awareness : Problem Aware · femmes qui évitent les solutions PM par peur de la caféine
- Format : image statique ou vidéo 15s
- Différenciateur unique vs TOUS les concurrents

### Angle 2 — "Énergie propre" (MCT de coco)
- Hook : "Pourquoi vous avez un coup de pompe à 15h ?"
- Argument : MCT = énergie rapide et stable sans pic d'insuline ni crash
- Awareness : Unaware · angle énergie
- Format : explainer vidéo 30s

### Angle 3 — "Antioxydants" (ube violet)
- Hook : "Pas juste pour les fringales."
- Argument : anthocyanes = antioxydants puissants, prend soin du corps de l'intérieur
- Awareness : Solution Aware · femmes health-conscious
- Format : image statique lifestyle

### Angle 4 — "La synergie des 6 actifs"
- Hook : "6 actifs qui travaillent ensemble."
- Argument : konjac (faim) + MCT (énergie) + L-Carnitine (métabolisme) + gingembre (digestion) + ube (antioxydants) + fibre d'acacia (prébiotique) = système complet
- Awareness : Problem Aware · femmes orientées ingrédients
- Format : carrousel ou explainer vidéo

## Testing roadmap

### Round 1 (actuel — en cours jusqu'au 31 mars)
- UGC top performer (CTR 5.6%) → keep
- Video Coconut → keep
- Femmes Healthy v1 → keep

### Round 2 (activer après 31 mars si CPA < €25)
- [CC] Femmes-Healthy_v2 (PAUSED · ID: 120243393529860469)
- [CC] Meilleur-Ube (PAUSED · ID: 120243393530860469)
- [CC] Routine-UBE (PAUSED · ID: 120243393531380469)

### Round 3 (nouveaux créatifs à produire en avril)
- Angle "Le soir aussi" → brief à Agent Creative
- Angle "Énergie propre MCT" → brief à Agent Creative
- Angle "Antioxydants ube" → brief à Agent Creative

## Budget logic après review 31 mars
- Si CPA < €25 → augmenter ADV+ à €50/jour · activer Round 2 · commander Round 3
- Si CPA > €25 → garder €30/jour · pauser l'ad la plus faible · tester 1 angle Round 3

## Rules
- Ne jamais scaler avant 5-7 jours de données
- Toujours valider avec Charles avant d'activer
- Campagne Traffic → reste pausée définitivement
- Campagne SCALE → ne jamais modifier une fois lancée

## Out of scope
- Créatifs → Agent Creative
- Site Shopify → Agent Dev
- Décisions business → Charles
