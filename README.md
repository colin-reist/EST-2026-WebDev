# Clair Obscur : Expedition 33 — site vitrine

Site vitrine non officiel consacré à *Clair Obscur : Expedition 33*, le RPG de Sandfall Interactive (2025). Il présente l'univers du jeu, ses personnages et son système de combat, sans spoiler.

Projet du module M7 « Développement internet », EST Divtec, TEEINF2 — Colin Reist, 2026.
La documentation technique (adaptations, bibliothèques, sources, IA) est fournie séparément : `documentation-technique.pdf`.

**Version en ligne :** https://est-2026-web-dev.vercel.app — pour consulter le site sans rien installer.

---

## Installer et lancer le site

### Prérequis

- **Node.js 24** ([nodejs.org](https://nodejs.org)). Il installe aussi npm 11, nécessaire pour ce projet.
- Un navigateur récent (Firefox, Chrome, Edge ou Safari).

Pour vérifier la version installée :

```bash
node -v
```

Le résultat doit commencer par `v24`.

### Lancement

Dans un terminal, depuis le dossier du projet :

```bash
npm install
npm run dev
```

Ouvre ensuite **http://localhost:3000** dans le navigateur. Pour arrêter le site, appuie sur `Ctrl + C` dans le terminal.

`npm install` n'est nécessaire qu'au premier lancement.

---

## Parcourir le site

Le site compte cinq pages, à lire dans cet ordre :

| Page | Ce qu'on y trouve |
|---|---|
| **Accueil** | Présentation du jeu et accès aux quatre sections |
| **Univers** | La ville de Lumière, la Peintresse, le Gommage et les figures du continent |
| **Personnages** | Les six membres de l'expédition, leur histoire et leur façon de combattre |
| **Combat** | Le fonctionnement des combats |
| **Coulisses** | Le studio, la fiche technique du jeu, ses récompenses et les sources |

### Se déplacer

- **Menu en haut de page** : accès direct aux quatre sections. La page où tu te trouves est soulignée en or.
- **Logo « Expédition 33 »**, en haut à gauche : retour à l'accueil.
- **Précédent / Suivant**, en bas de chaque page : passe à la page voisine sans remonter au menu. Après Coulisses, le lien ramène à l'accueil.
- **Fil d'Ariane**, en haut des pages : indique où tu te trouves et ramène à l'accueil.

### Page Personnages

- Clique sur un nom pour afficher la fiche du personnage.
- Les flèches **←** et **→** passent au personnage précédent ou suivant. Après le dernier, on revient au premier.
- L'adresse de la page change selon le personnage (par exemple `/personnages#maelle`). Copie-la pour envoyer un lien direct vers ce personnage.

### Sur téléphone

Sous 768 px de large, le menu est remplacé par un bouton **☰** en haut à droite. Touche-le pour ouvrir la liste des pages.

### Accessibilité

- **Au clavier** : la touche `Tab` fait d'abord apparaître un lien « Aller au contenu », qui saute le menu.
- **Animations** : si la réduction des animations est activée dans ton système, le site s'affiche sans animation.

---

## En cas de problème

| Problème | Solution |
|---|---|
| `npm ci` ou `npm install` signale que le `package-lock.json` n'est pas synchronisé | Ta version de npm est trop ancienne. Installe Node.js 24, puis relance |
| `Le jeton « && » n'est pas un séparateur d'instruction valide` (PowerShell) | Windows PowerShell 5 ne comprend pas `&&`. Tape les commandes une par une |
| Le port 3000 est déjà utilisé | Lance le site sur un autre port : `npm run dev -- --port 3001` |
| Les polices ne s'affichent pas correctement au premier lancement | Elles sont téléchargées depuis Google Fonts : vérifie la connexion internet, puis relance `npm run dev` |

---

*Site non officiel, sans lien avec Sandfall Interactive ni Kepler Interactive. Clair Obscur : Expedition 33 et ses visuels appartiennent à leurs ayants droit.*