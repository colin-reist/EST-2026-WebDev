export interface Personnage {
  slug: string
  name: string
  role: string
  tagline: string
  bio: string
  mech: string
  mechText: string
  style: string
  voice: string
  image?: string
  imageAlt?: string
}

export const personnages: Personnage[] = [
  {
    slug: 'gustave',
    name: 'Gustave',
    role: 'L’ingénieur',
    tagline: 'Celui qui tient l’expédition debout.',
    bio: 'Ingénieur de Lumière, Gustave a remplacé son bras par une prothèse mécanique de sa conception. Méthodique et protecteur, il prend la tête de l’expédition 33 et veille sur Maelle comme un grand frère.',
    mech: 'Surcharge',
    mechText: 'Ses attaques remplissent une jauge de charge. Une fois pleine, il la libère en une décharge puissante depuis son bras mécanique.',
    style: 'Épée et bras mécanique',
    voice: 'Charlie Cox',
    image: '/img/artwork-Gustave.webp'
  },
  {
    slug: 'maelle',
    name: 'Maelle',
    role: 'L’escrimeuse',
    tagline: 'La plus jeune, et peut-être la plus curieuse.',
    bio: 'À 16 ans, Maelle est la plus jeune membre de l’expédition. Sœur adoptive de Gustave, elle manie la rapière avec élégance et rêve de découvrir ce qui se trouve au-delà de Lumière.',
    mech: 'Postures',
    mechText: 'Selon ses compétences, elle passe en posture défensive, offensive ou virtuose, qui modifient les dégâts qu’elle inflige et qu’elle reçoit.',
    style: 'Rapière',
    voice: 'Jennifer English',
    image: '/img/artwork-Maelle.webp'
  },
  {
    slug: 'lune',
    name: 'Lune',
    role: 'L’érudite',
    tagline: 'La connaissance avant tout.',
    bio: 'Chercheuse rationnelle et déterminée, Lune a consacré sa vie à étudier la Peintresse et les expéditions passées. Au combat, elle maîtrise une magie élémentaire redoutable.',
    mech: 'Taches',
    mechText: 'Ses sorts laissent des taches de feu, de glace, de foudre, de terre ou de lumière, que d’autres sorts consomment pour gagner en puissance.',
    style: 'Magie élémentaire',
    voice: 'Kirsty Rider',
    image: '/img/artwork-Lune.webp'
  },
  {
    slug: 'sciel',
    name: 'Sciel',
    role: 'La sereine',
    tagline: 'Un sourire face à la fin.',
    bio: 'Ancienne fermière et enseignante, Sciel affronte le destin avec un calme désarmant. Sous cette douceur se cache une combattante redoutable.',
    mech: 'Présage et Crépuscule',
    mechText: 'Elle marque ses ennemis de charges de Présage puis les consomme pour des attaques puissantes. L’état de Crépuscule amplifie encore ses dégâts.',
    style: 'Lame et cartes',
    voice: 'Shala Nyx',
    image: '/img/artwork-Sciel.webp'
  },
  {
    slug: 'verso',
    name: 'Verso',
    role: 'L’énigme',
    tagline: 'Il en sait plus qu’il ne le dit.',
    bio: 'Un homme rencontré en chemin, qui semble ne pas vieillir. Charmeur, pianiste et mélancolique, il connaît le continent bien mieux que l’expédition.',
    mech: 'Rangs de perfection',
    mechText: 'Réussir ses actions fait grimper son rang de D jusqu’à S et augmente ses dégâts. Être touché le fait redescendre.',
    style: 'Épée',
    voice: 'Ben Starr',
    image: '/img/artwork-Verso.webp'
  },
  {
    slug: 'monoco',
    name: 'Monoco',
    role: 'Le Gestral',
    tagline: 'Toujours partant pour un combat.',
    bio: 'Gestral excentrique et passionné de combat, Monoco accompagne Verso depuis longtemps. Il adore prendre la forme de ses adversaires.',
    mech: 'Roue bestiale',
    mechText: 'Il apprend les techniques des Nevrons vaincus et peut les réutiliser. Une roue détermine le bonus appliqué à ses attaques.',
    style: 'Formes de Nevrons',
    voice: 'Rich Keeble',
    image: '/img/artwork-Monoco.webp'
  }
]
