# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi)   | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui   |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 |Actualités sans support visuel|Défaut d'illustrations cognitives|Frein cognitif à la lecture           |
| 2 |Pas de liens pour la newsletter|Fonctionnalité introuvable sans lien|Action inaccessible aux internautes.   |
| 3 |Image sans attribut alt       | Contenu visuel non restitué   |Image inaudible aux non-voyants         |
| 4 |Absence de régions ARIA       |        Accès direct aux zones.|Navigation impossible aux non-voyants   |
| 5 |Niveau de titre sauté         | Structure hiérarchique rompue.|Navigation perturbée aux non-voyants.   |
| 6 |Liens vagues « cliquez ici »  |Destination du lien imprécise (O)|Contexte perdu aux non-voyants.         |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
