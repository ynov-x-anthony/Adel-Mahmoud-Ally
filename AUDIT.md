# AUDIT.md : complété

## 1. Audits outillés

Lance les 3 audits sur la page (`npm run dev`, puis ouvre-la dans Chrome) et
colle ici un résumé de ce que chacun remonte :

- **Lighthouse** (DevTools → onglet Lighthouse → catégorie Accessibility) :
  - Score d'accessibilité dégradé (autour de 75-80%).
  - 4 violations de contraste détectées sous la règle *« Les éléments d'arrière-plan et de premier plan n'ont pas un rapport de contraste suffisant. »* ciblant `.subtitle`, `.label`, `.hint` et le bouton `.btn-primary`.
- **axe DevTools** (extension Chrome) :
  - Détecte 4 problèmes de sévérité sérieuse de type `color-contrast` (*« Elements must meet minimum color contrast ratio thresholds »*).
- **WAVE** (https://wave.webaim.org/, ou l'extension) :
  - Remonte 4 erreurs de contraste (*« Very low contrast »*) correspondant aux 4 éléments textuels dont le contraste est inférieur à 4.5:1.

## 2. Les éléments à corriger

| Élément | Couleur texte | Couleur fond | Ratio mesuré | Ratio AA requis | Conforme ? |
|---------|---------------|--------------|--------------|------------------|------------|
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2.3:1 | 4.5:1 | Non conforme |
| `.label` | `#999999` | `#ffffff` | 2.8:1 | 4.5:1 | Non conforme |
| `.hint` | `#bbbbbb` | `#ffffff` | 1.8:1 | 4.5:1 | Non conforme |
| `.btn-primary` | `#ffffff` | `#6fa8dc` | 2.1:1 | 4.5:1 (texte) | Non conforme |

> Utilise un vérificateur de contraste (ex. le picker de couleur de Chrome
> DevTools affiche déjà le ratio AA/AAA quand tu modifies une couleur).

## 3. Priorisation

Classe les 4 corrections par ordre d'impact (1 = le plus urgent) et explique pourquoi :

1. **`.btn-primary` (Gérer mon abonnement)** : C'est le bouton d'action principal (Call-to-Action) et le seul élément interactif permettant à l'utilisateur d'effectuer une tâche critique. Un mauvais contraste peut empêcher un utilisateur malvoyant de repérer le bouton ou de lire son libellé.
2. **`.hint` (Texte d'astuce/avertissement)** : Possède le pire ratio de contraste mesuré (1.8:1), rendant le texte quasi invisible sur fond blanc, alors qu'il donne une information importante sur la facturation.
3. **`.label` (Intitulés de champ/section)** : Permet de donner le sens de l'information ("Statut de l'abonnement", "Astuce"). De plus, sa taille réduite (`0.85rem`) accentue la difficulté de lecture causée par le faible contraste (2.8:1).
4. **`.subtitle` (Sous-titre explicatif)** : Texte d'accompagnement sous le titre principal. Utile pour la compréhension globale de la page, mais son absence de lisibilité est moins bloquante que celle du bouton d'action ou des informations de facturation.
