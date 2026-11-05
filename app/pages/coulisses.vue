<script setup lang="ts">
useSeoMeta({ title: 'Coulisses' })

const fiche = [
  { label: 'Studio', value: 'Sandfall Interactive (France)' },
  { label: 'Éditeur', value: 'Kepler Interactive' },
  { label: 'Sortie', value: '24 avril 2025' },
  { label: 'Plateformes', value: 'PC, PlayStation 5, Xbox Series X|S' },
  { label: 'Moteur', value: 'Unreal Engine 5' },
  { label: 'Musique', value: 'Lorien Testard' }
]

const prix = [
  'Meilleure direction de jeu',
  'Meilleure narration',
  'Meilleure direction artistique',
  'Meilleure bande originale',
  'Meilleure performance (Jennifer English, Maelle)',
  'Meilleur jeu indépendant',
  'Meilleur premier jeu indépendant',
  'Meilleur RPG'
]

const sources = [
  { label: 'Site officiel du jeu — expedition33.com', to: 'https://www.expedition33.com' },
  { label: 'Expedition 33 — distribution des voix anglaises', to: 'https://www.expedition33.com/post/meet-our-english-voice-cast' },
  { label: 'TechRadar — palmarès des Game Awards 2025', to: 'https://www.techradar.com/gaming/gaming-industry/the-game-awards-2025-winners-list-clair-obscur-expedition-33-makes-history-as-it-takes-home-9-awards-including-game-of-the-year' }
]
</script>

<template>
  <div>
    <!-- EN-TÊTE DE PAGE + FICHE TECHNIQUE -->
    <PageIntro
      current="Coulisses"
      title="Un premier jeu, venu de Montpellier"
      description="Clair Obscur est le tout premier jeu de Sandfall Interactive, un studio indépendant français fondé par Guillaume Broche. Porté par une petite équipe, il est devenu l’un des jeux les plus récompensés de l’histoire."
      layout="split"
    >
      <template #aside>
        <h2 class="m-0 text-[32px] font-medium">
          Fiche technique
        </h2>
        <dl class="m-0 grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] font-ui text-base border-b border-default">
          <template
            v-for="row in fiche"
            :key="row.label"
          >
            <dt class="py-3.5 border-t border-default text-ash">
              {{ row.label }}
            </dt>
            <dd class="m-0 py-3.5 border-t border-default">
              {{ row.value }}
            </dd>
          </template>
        </dl>
      </template>
    </PageIntro>

    <!-- PALMARÈS -->
    <section
      aria-labelledby="palmares"
      class="parchment py-[104px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-wrap items-start gap-14">
        <div
          v-reveal
          class="flex-[0_1_340px] flex flex-col gap-2.5"
        >
          <h2
            id="palmares"
            class="m-0 text-[52px] max-[720px]:text-[40px] font-normal italic"
          >
            Palmarès
          </h2>
          <span
            aria-hidden="true"
            class="text-[140px] max-[720px]:text-[88px] leading-[0.9] italic text-bronze"
          >9</span>
          <p class="m-0 font-ui text-base leading-[1.6] text-ink-soft">
            <span class="sr-only">9 </span>prix aux Game Awards 2025, un record pour la cérémonie.
          </p>
        </div>

        <ul
          v-reveal="150"
          class="flex-[1_1_560px] min-w-0 m-0 p-0 list-none grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 text-[22px]"
        >
          <li class="col-span-full py-[18px] border-t border-ink text-[34px] italic">
            Jeu de l’année
          </li>
          <li
            v-for="item in prix"
            :key="item"
            class="py-3.5 border-t border-ink/25"
          >
            {{ item }}
          </li>
        </ul>
      </UContainer>
    </section>

    <!-- SOURCES -->
    <section
      aria-labelledby="sources"
      class="py-[88px] max-[720px]:py-16"
    >
      <UContainer
        v-reveal
        class="flex flex-col gap-5"
      >
        <h2
          id="sources"
          class="m-0 text-[40px] font-normal italic"
        >
          Sources
        </h2>
        <ul class="m-0 pl-5 list-disc flex flex-col gap-2.5 font-ui text-base leading-[1.6] text-sand">
          <li
            v-for="source in sources"
            :key="source.to"
          >
            <ULink
              :to="source.to"
              raw
              class="text-gold-400 underline underline-offset-4 hover:text-ivory"
            >
              {{ source.label }}
            </ULink>
          </li>
        </ul>
      </UContainer>
    </section>
  </div>
</template>
