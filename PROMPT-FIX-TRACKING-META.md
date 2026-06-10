# PRIORITÉ ABSOLUE — Fix tracking Meta Uburn

Le diagnostic Growth confirme que l'attribution est cassée à cause de 5 problèmes dans Shopify. Fais exactement ces étapes dans l'ordre.

## CONTEXTE (ne pas sauter)

Le tracking est cassé depuis le lancement :
- Meta Pixel reçoit 10 Purchase events mais Ads Manager en attribue 0 aux campagnes
- Tous les events sont dupliqués x2 à x4.5 (browser + CAPI sans dedup)
- Les Purchase arrivent en batch de 7 identiques (replay)
- Le fbclid est perdu entre la page produit et le checkout
- GA4 confirme 2 vraies transactions (€103.50) sur 7 jours
- Meta réduit la diffusion automatiquement car il ne voit pas de conversions
- Conséquence : impossible de calculer le CPA, impossible de scaler

Le seul fix est de nettoyer tout le tracking custom et laisser le canal officiel Facebook & Instagram de Shopify gérer browser + CAPI + dedup + fbclid automatiquement.

## IDs à retenir
- Pixel ID : 1207776051409154
- Ad Account : act_818944730982350
- Page Facebook : Uburn (ID 853482911178968)
- Domaine : uburn.co

---

## ÉTAPE 1 — BACKUP

Avant de toucher quoi que ce soit :

1. Va dans Shopify Admin → Paramètres → Customer Events
   → Note TOUS les pixels/scripts actifs (nom, type, code)
   → Copie le code de chaque script custom dans un fichier backup

2. Va dans Shopify Admin → Paramètres → Paiement
   → Section "Scripts supplémentaires" (ou "Additional scripts")
   → Copie tout le contenu dans un fichier backup

3. Va dans Shopify Admin → Paramètres → Notifications → Webhooks
   → Note tous les webhooks existants (URL, événement)

4. Sauvegarde tout dans ~/Desktop/UBURN-DEV/backups/tracking-backup-avant-fix.md

Confirme ✅ quand le backup est fait.

---

## ÉTAPE 2 — SUPPRIMER les scripts custom Meta

### 2A. Customer Events
Shopify Admin → Paramètres → Customer Events
→ Cherche TOUS les web pixels qui contiennent :
  - "fbq("
  - "facebook"
  - "meta"
  - "1207776051409154"
  - "connect.facebook.net"
→ SUPPRIME chacun d'entre eux
→ NE TOUCHE PAS aux pixels Google Analytics / GA4

### 2B. Scripts supplémentaires checkout
Shopify Admin → Paramètres → Paiement → Scripts supplémentaires
→ Cherche tout code qui contient :
  - "fbq("
  - "facebook"
  - "meta pixel"
  - "1207776051409154"
  - "connect.facebook.net/en_US/fbevents.js"
  - "graph.facebook.com"
→ SUPPRIME uniquement les parties Meta/Facebook
→ NE TOUCHE PAS au code Google Analytics / autres pixels

### 2C. Fichiers theme
Va dans Shopify Admin → Boutique en ligne → Thèmes → Modifier le code
→ Cherche dans theme.liquid, checkout.liquid, et tous les snippets :
  - "fbq("
  - "1207776051409154"
  - "facebook"
→ Si tu trouves du code Meta Pixel injecté manuellement dans le thème :
  → COMMENTE-LE (ne le supprime pas, au cas où)
  → Ajoute un commentaire : <!-- DISABLED: old Meta pixel - replaced by FB&IG channel -->

Confirme ✅ quand tout est supprimé. Liste exacte de ce qui a été supprimé.

---

## ÉTAPE 3 — INSTALLER / CONFIGURER le canal Facebook & Instagram officiel

### 3A. Vérifier si le canal est installé
Shopify Admin → Canaux de vente
→ Cherche "Facebook & Instagram" dans la liste

### 3B. Si PAS installé
1. Shopify Admin → Canaux de vente → Ajouter un canal
2. Cherche "Facebook & Instagram"
3. Installe-le
4. Connecte-le au compte Facebook / Meta Business Suite
5. Configure :
   - Page Facebook : Uburn
   - Compte publicitaire : act_818944730982350
   - Pixel : 1207776051409154
   - Data sharing level : **MAXIMUM** (obligatoire)
   - Commerce feature : active
   - Catalogue produits : synchroniser

### 3C. Si DÉJÀ installé — vérifier la config
1. Clique sur Facebook & Instagram dans les canaux de vente
2. Va dans Paramètres / Settings
3. Vérifie :
   - [ ] Pixel ID = 1207776051409154
   - [ ] Data sharing = MAXIMUM (pas "Standard" ni "Enhanced")
   - [ ] CAPI = activé automatiquement (quand Data sharing = Maximum)
   - [ ] Domaine vérifié = uburn.co
   - [ ] Page connectée = Uburn
   - [ ] Compte pub = act_818944730982350

### 3D. Pourquoi "MAXIMUM" est obligatoire
- Standard = browser pixel uniquement (pas de CAPI)
- Enhanced = browser + CAPI mais dedup partielle
- **Maximum = browser + CAPI + dedup complète + fbclid préservé + advanced matching automatique**

C'est le seul niveau qui résout tous les problèmes identifiés.

Confirme ✅ avec screenshot de la config.

---

## ÉTAPE 4 — NETTOYER les webhooks

Shopify Admin → Paramètres → Notifications → Webhooks

Cherche tout webhook dont l'URL contient :
- graph.facebook.com
- facebook.com
- meta.com

→ SUPPRIME-les tous

Ces webhooks custom envoient des events Purchase directement à l'API Meta en parallèle du canal officiel = c'est la source des Purchase events en batch de 7.

NE SUPPRIME PAS les webhooks vers d'autres services (Klaviyo, Google, etc.)

Confirme ✅ avec la liste de ce qui a été supprimé.

---

## ÉTAPE 5 — VÉRIFICATION FINALE

### Checklist post-fix

- [ ] Aucun script Meta custom dans Customer Events
- [ ] Aucun code Meta dans Scripts supplémentaires du checkout
- [ ] Aucun code Meta injecté manuellement dans le thème (ou commenté)
- [ ] Aucun webhook vers facebook.com/graph.facebook.com
- [ ] Canal Facebook & Instagram installé et actif
- [ ] Pixel 1207776051409154 connecté via le canal
- [ ] Data sharing = MAXIMUM
- [ ] CAPI activé automatiquement
- [ ] Domaine uburn.co vérifié

### Rapport final

Produis un rapport avec :
1. Liste de tout ce qui a été SUPPRIMÉ (scripts, webhooks, code)
2. Screenshot de la config canal Facebook & Instagram
3. Confirmation que le canal est le SEUL système de tracking Meta actif
4. Tout problème rencontré et comment il a été résolu

### Test à faire ensuite (Charles le fera)

Une commande test RÉELLE (pas €0) sera passée demain matin.
Après le test, l'Agent Growth vérifiera dans Meta Events Manager :
- L'event Purchase apparaît avec un event_id
- L'event apparaît en source "website" ET "server" avec le MÊME event_id
- L'event est attribué à la campagne ADV+ dans Ads Manager

---

## CE QU'IL NE FAUT PAS FAIRE

- ❌ Ne pas réinstaller de pixel custom "au cas où"
- ❌ Ne pas ajouter de code fbq() dans le thème
- ❌ Ne pas créer de webhook vers Meta
- ❌ Ne pas mettre Data Sharing sur "Standard" ou "Enhanced"
- ❌ Ne pas toucher aux pixels GA4 / Google Analytics
- ❌ Ne pas modifier la campagne Meta Ads

Le canal officiel Facebook & Instagram de Shopify gère TOUT automatiquement. Aucun code custom n'est nécessaire.
