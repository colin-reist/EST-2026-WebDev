# Clair Obscur : Expedition 33 — site vitrine

Projet du module M7 « Développement internet », EST Divtec, TEEINF2.
Auteur : Colin Reist. Rendu le 5 novembre 2026.

Site vitrine non officiel consacré à *Clair Obscur : Expedition 33*, le RPG de Sandfall Interactive (2025). Ce site n'a aucun lien avec Sandfall Interactive ni Kepler Interactive. Le jeu et ses visuels appartiennent à leurs ayants droit.

---

## 1. Thème et contenu

*Clair Obscur : Expedition 33* est un RPG au tour par tour inspiré de la Belle Époque française. Chaque année, une entité appelée la Peintresse peint un nombre sur son monolithe, et tous les habitants de cet âge disparaissent. L'expédition 33 part la combattre avant qu'elle ne peigne le nombre suivant.

Le site présente le jeu sans spoiler, en reprenant sa direction artistique : fond sombre, accents dorés, typographie à empattements et sections claires « parchemin » qui évoquent le clair-obscur.

| Page | Contenu |
|---|---|
| **Accueil** (`/`) | Accroche, monolithe animé « 33 », pétales qui tombent, tuiles vers les 4 sections |
| **Univers** (`/univers`) | La ville de Lumière, la Peintresse, le Gommage, les expéditions et quatre figures du continent (Renoir, Esquie, les Gestrals, les Nevrons) |
| **Personnages** (`/personnages`) | Sélecteur interactif des six membres de l'expédition : biographie, mécanique de combat, arme, voix anglaise |
| **Combat** (`/combat`) | Le système de combat : tour par tour, esquive et parade en temps réel, visée libre, Pictos et Luminas |
| **Coulisses** (`/coulisses`) | Fiche technique, studio, palmarès des Game Awards 2025, sources |

---

## 2. Installation et utilisation

### Prérequis

- **Node.js 24** (fourni avec npm 11, nécessaire pour lire le `package-lock.json`)
- Un navigateur récent

### Lancer le site en local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

### Autres commandes

| Commande | Rôle |
|---|---|
| `npm run build` | Construit la version de production (pages prérendues en HTML statique) |
| `npm run preview` | Sert la version construite en local |
| `npm run lint` | Vérifie le style et la qualité du code (ESLint) |
| `npm run typecheck` | Vérifie les types TypeScript |

### Navigation

- **Logo** « Expédition 33 » en haut à gauche : retour à l'accueil depuis n'importe quelle page.
- **Menu principal** en haut : Univers, Personnages, Combat, Coulisses. La page active est soulignée en or. Sur mobile (< 768 px), le menu s'ouvre avec le bouton burger.
- **Fil d'Ariane** en tête de chaque page de contenu.
- **Précédent / Suivant** en bas de chaque page : le site se lit dans l'ordre Accueil → Univers → Personnages → Combat → Coulisses, puis retour à l'accueil.
- **Page Personnages** : cliquer sur un nom, ou utiliser les flèches, change le personnage affiché. L'adresse se met à jour (`/personnages#maelle`) : un lien vers un personnage précis peut donc être partagé.
- **Lien d'évitement** « Aller au contenu », visible à la tabulation, pour la navigation au clavier.

---

## 3. Structure du projet

```
app/
├── app.vue                  Coquille du site : en-tête, contenu, pied de page, titre et métadonnées
├── app.config.ts            Configuration du thème Nuxt UI (couleurs, conteneur, boutons)
├── assets/css/main.css      Thème : polices, palette, variables, animations
├── components/
│   ├── AppHeader.vue        En-tête et menu (desktop + mobile)
│   ├── AppFooter.vue        Navigation précédent / suivant et mentions
│   ├── AppLogo.vue          Logo texte « Expédition 33 »
│   ├── PageIntro.vue        En-tête commun des pages de contenu
│   ├── ArtworkPlaceholder.vue  Image avec crédit (ou cadre de substitution)
│   └── PetalsDecor.vue      Pétales animés en SVG (accueil)
├── data/personnages.ts      Données des six personnages
├── pages/                   Une page Vue par route (index, univers, personnages, combat, coulisses)
├── plugins/reveal.ts        Directive v-reveal (apparition au défilement)
└── utils/navigation.ts      Liste et ordre des pages, utilisés par le menu et le pied de page
public/
├── favicon.ico
└── img/                     Visuels des personnages et des figures du continent
```

---

## 4. Adaptations du template

Le projet part du **Nuxt UI Starter Template** (`nuxt-ui-templates/starter`). Le starter ne fournit qu'une page d'exemple. Tout le contenu et l'identité visuelle ont été créés pour ce projet.

### Thème et charte graphique (`app/assets/css/main.css`)

- **Palette « or »** de 50 à 950 déclarée dans `@theme` (Tailwind CSS v4), puis utilisée comme couleur primaire de Nuxt UI.
- **Tokens de couleur** propres au projet (`ground`, `surface`, `ivory`, `sand`, `ash`, `crimson`, `parchment`, `ink`…), utilisables directement en classes Tailwind (`bg-ground`, `text-ivory`…).
- **Variables Nuxt UI rebranchées** (`--ui-bg`, `--ui-text`, `--ui-border`…) sur ces tokens : tous les composants Nuxt UI adoptent la charte sans être réécrits.
- **Coins droits** (`--ui-radius: 0`) au lieu des coins arrondis par défaut, plus proches de l'esthétique Belle Époque.
- **Classe `.parchment`** : redéfinit localement les variables pour créer des sections claires (fond parchemin, texte encre).
- **Mode sombre unique** : la bascule clair/sombre du template est désactivée (`colorMode: false`), car le site n'a qu'une seule ambiance.

### Configuration (`nuxt.config.ts`, `app.config.ts`)

- Polices **Cormorant Garamond** (titres et texte) et **Jost** (interface) chargées par `@nuxtjs/google-fonts`. Les polices par défaut de Nuxt UI sont désactivées (`fonts: false`).
- **Transition de page** en fondu (`pageTransition`), stylée dans `main.css`.
- **Prérendu** de toutes les routes (`routeRules`) : le site est généré en HTML statique.
- `app.config.ts` : couleur primaire `gold`, neutre `stone`, largeur de conteneur et gouttières adaptées, boutons sans arrondi avec la police d'interface.
- Règles ESLint stylistiques ajustées (pas de virgule finale, accolades sur la même ligne).

### Composants Nuxt UI personnalisés

Les composants du template (`UHeader`, `UFooter`, `UPageHero`, `UBreadcrumb`, `UPageCard`, `UAlert`, `UButton`…) sont conservés mais restylés via leur prop `:ui`, sans modifier la bibliothèque.

- **`AppHeader`** : menu desktop avec soulignement doré de la page active, menu mobile plein écran en grande typographie italique.
- **`AppFooter`** : remplace le pied de page du starter par une navigation précédent / suivant calculée à partir de `utils/navigation.ts`, et ajoute les mentions légales.

### Composants créés

- **`PageIntro`** : en-tête commun (fil d'Ariane, titre, introduction) avec deux mises en page (`stack` ou `split`) et un fond en dégradé radial.
- **`ArtworkPlaceholder`** : affiche une image avec sa légende de crédit. Sans image, il affiche un cadre en pointillés.
- **`PetalsDecor`** : huit pétales SVG qui tombent en boucle sur l'accueil, avec durées et délais différents.

### JavaScript ajouté

- **Directive `v-reveal`** (`plugins/reveal.ts`) : utilise l'API `IntersectionObserver` pour faire apparaître les blocs en fondu quand ils entrent à l'écran. Un délai en paramètre (`v-reveal="100"`) échelonne les éléments d'une liste. Les éléments déjà visibles au chargement ne sont pas animés.
- **Sélecteur de personnages** (`pages/personnages.vue`) : état réactif (`ref`, `computed`), navigation circulaire avec les flèches, synchronisation avec l'ancre de l'URL (`history.replaceState` et l'évènement `hashchange`).
- **Navigation précédent / suivant** calculée à partir de la route courante.

### Animations CSS

- Entrée en cascade du texte (`.rise`, délai réglable par la variable `--rise-delay`).
- Lueur pulsée du nombre « 33 » sur le monolithe.
- Chute des pétales.
- Fondu entre les pages.

Toutes les animations sont désactivées si l'utilisateur a activé la réduction des animations dans son système (`prefers-reduced-motion`).

### Accessibilité

Langue `fr` déclarée, lien d'évitement, `aria-label` sur les deux menus et sur le logo, textes alternatifs descriptifs sur les images, zones cliquables d'au moins 48 px, décor SVG masqué aux lecteurs d'écran (`aria-hidden`).

---

## 5. Logiciels, bibliothèques et ressources

| Outil | Rôle | Justification |
|---|---|---|
| **Nuxt 4** | Framework Vue | Routage automatique à partir du dossier `pages/`, import automatique des composants, prérendu statique |
| **Vue 3** (inclus avec Nuxt) | Interface réactive | Composants réutilisables et état réactif pour le sélecteur de personnages |
| **Nuxt UI 4** | Bibliothèque de composants | Fournit le template de départ et des composants accessibles (en-tête avec menu mobile, hero, cartes, fil d'Ariane) que l'on personnalise sans les réécrire |
| **Tailwind CSS 4** (inclus avec Nuxt UI) | Styles | Classes utilitaires et déclaration des tokens de couleur dans `@theme` |
| **@nuxtjs/google-fonts** | Polices | Charge Cormorant Garamond et Jost, deux polices proches de la typographie du jeu |
| **@iconify-json/lucide** | Icônes | Icônes utilisées par l'interface (flèches, information, menu) |
| **@iconify-json/simple-icons** | Icônes | Collection d'icônes de marques détectée par Nuxt Icon |
| **TypeScript** | Typage | Détecte les erreurs avant l'exécution (ex. structure des données des personnages) |
| **ESLint** (`@nuxt/eslint`) | Qualité du code | Style de code uniforme, vérifié automatiquement |
| **vue-tsc** | Vérification des types | Contrôle les types dans les fichiers `.vue` |
| **Node.js 24 / npm 11** | Environnement | Exécution des outils et gestion des dépendances |
| **Git / GitHub** | Versionnement | Historique du projet |
| **GitHub Actions** | Intégration continue | Lance `npm ci`, le lint et le typecheck à chaque push |

**Ressources graphiques :** visuels officiels du jeu, © Sandfall Interactive / Kepler Interactive, crédités sous chaque image.

---

## 6. Sources de documentation

**Documentation technique**

- Nuxt : https://nuxt.com/docs
- Nuxt UI : https://ui.nuxt.com/docs
- Vue.js : https://vuejs.org/guide
- Tailwind CSS v4 : https://tailwindcss.com/docs
- Module Google Fonts pour Nuxt : https://google-fonts.nuxtjs.org
- MDN, API IntersectionObserver : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
- MDN, `prefers-reduced-motion` : https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-reduced-motion
- MDN, History API : https://developer.mozilla.org/fr/docs/Web/API/History_API

**Contenu du site**

- Site officiel du jeu : https://www.expedition33.com
- Distribution des voix anglaises : https://www.expedition33.com/post/meet-our-english-voice-cast
- TechRadar, palmarès des Game Awards 2025 : https://www.techradar.com/gaming/gaming-industry/the-game-awards-2025-winners-list-clair-obscur-expedition-33-makes-history-as-it-takes-home-9-awards-including-game-of-the-year

---

## 7. Intelligences artificielles utilisées

**Claude** (Anthropic) a été utilisé comme assistant pendant le projet.

| Tâche | Ce que l'IA a fait | Contrôle et adaptation |
|---|---|---|
| Relecture avant le rendu | Vérification du projet par rapport à la consigne, repérage des dépendances inutilisées (Tailwind v3, packs d'icônes, i18n) et des doublons de lockfile | Chaque point a été vérifié dans le code avant d'être corrigé. Les suppressions ont été faites à la main, puis contrôlées avec `npm run lint`, `npm run typecheck` et `npm run build` |
| Intégration continue | Diagnostic de l'échec de `npm ci` en CI : lockfile généré avec npm 11, CI sur Node 22 (npm 10) | Passage de la CI sur Node 24, puis vérification que le workflow GitHub Actions passe |
| Documentation | Premier jet de ce README à partir du code du dépôt | Relu et corrigé pour correspondre au projet : chaque fichier, composant et dépendance cité a été vérifié dans le dépôt |