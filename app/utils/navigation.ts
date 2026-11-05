export interface SitePage {
  to: string
  label: string
}

/** Ordre de lecture linéaire du site : Accueil → Univers → Personnages → Combat → Coulisses */
export const sitePages: SitePage[] = [
  { to: '/', label: 'Accueil' },
  { to: '/univers', label: 'Univers' },
  { to: '/personnages', label: 'Personnages' },
  { to: '/combat', label: 'Combat' },
  { to: '/coulisses', label: 'Coulisses' }
]

/** Entrées du menu principal (l’accueil passe par le logo) */
export const mainNav = sitePages.slice(1)
