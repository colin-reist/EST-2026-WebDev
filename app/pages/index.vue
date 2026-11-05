<script setup lang="ts">
useSeoMeta({ title: 'Accueil' })

const tiles = [
  { numeral: 'I', to: '/univers', title: 'Univers', description: 'Lumière, la Peintresse, le Gommage et les figures du continent.' },
  { numeral: 'II', to: '/personnages', title: 'Personnages', description: 'Les six membres de l’expédition, leur histoire et leur façon de combattre.' },
  { numeral: 'III', to: '/combat', title: 'Combat', description: 'Un tour par tour où l’esquive et la parade se jouent en temps réel.' },
  { numeral: 'IV', to: '/coulisses', title: 'Coulisses', description: 'Le studio, la fiche technique et un palmarès historique.' }
]
</script>

<template>
  <div>
    <!-- HERO -->
    <div class="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_30%,#2A2219_0%,#0D0C0B_62%)]">
      <PetalsDecor />

      <UPageHero
        orientation="horizontal"
        headline="Un RPG de Sandfall Interactive · 2025"
        description="Une fois par an, la Peintresse peint un nombre sur son monolithe. Tous ceux qui ont cet âge disparaissent. Cette année, elle a peint 33."
        :ui="{
          container: 'py-16 sm:py-16 md:pt-[120px] md:pb-[112px] lg:pt-[120px] lg:pb-[112px] gap-16 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_320px]',
          headline: 'rise mb-7 font-ui font-normal text-sm tracking-[0.2em] uppercase text-gold-500',
          title: 'rise [--rise-delay:120ms] font-normal tracking-normal text-[60px] sm:text-[60px] md:text-[104px] leading-[0.92]',
          description: 'rise [--rise-delay:240ms] mt-7 max-w-[32em] text-[22px] sm:text-[22px] leading-[1.55] sm:leading-[1.55] text-sand',
          links: 'rise [--rise-delay:360ms] mt-9 gap-4'
        }"
      >
        <template #title>
          <span class="block italic">Clair Obscur</span>
          <span class="block mt-[18px] text-[0.42em] tracking-[0.2em] uppercase font-medium text-sand">Expedition 33</span>
        </template>

        <template #links>
          <UButton
            to="/personnages"
            label="Rencontrer l’expédition"
            class="min-h-13 px-7 text-base"
          />
          <UButton
            to="/univers"
            label="Découvrir l’univers"
            color="neutral"
            variant="outline"
            class="min-h-13 px-7 text-base text-ivory ring-ivory/45 hover:bg-ivory/5"
          />
        </template>

        <figure class="rise [--rise-delay:300ms] m-0 flex flex-col items-center gap-4 justify-self-center">
          <svg
            role="img"
            aria-label="Le monolithe de la Peintresse, marqué du nombre 33"
            viewBox="0 0 300 460"
            class="w-full max-w-[300px] h-auto"
          >
            <defs>
              <linearGradient
                id="mono"
                x1="0"
                x2="1"
              >
                <stop
                  offset="0"
                  stop-color="#1B1712"
                />
                <stop
                  offset="0.5"
                  stop-color="#2E261C"
                />
                <stop
                  offset="1"
                  stop-color="#141210"
                />
              </linearGradient>
            </defs>
            <path
              d="M118 30 L182 30 L214 440 L86 440 Z"
              fill="url(#mono)"
              stroke="#C8A25A"
              stroke-width="1.2"
            />
            <path
              d="M150 30 L146 120 L156 190 L148 300 L153 440"
              fill="none"
              stroke="#C8A25A"
              stroke-opacity="0.35"
              stroke-width="1"
            />
            <text
              x="150"
              y="250"
              text-anchor="middle"
              font-family="Cormorant Garamond, serif"
              font-size="96"
              font-style="italic"
              fill="#C8A25A"
              class="monolith-number"
            >33</text>
            <line
              x1="20"
              y1="440"
              x2="280"
              y2="440"
              stroke="#C8A25A"
              stroke-opacity="0.5"
              stroke-width="1"
            />
          </svg>
          <figcaption class="font-ui text-[13px] text-ash">
            Le Monolithe
          </figcaption>
        </figure>
      </UPageHero>
    </div>

    <!-- EXPLORER -->
    <section
      aria-labelledby="explorer"
      class="pt-24 pb-[120px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-col gap-10">
        <h2
          id="explorer"
          v-reveal
          class="m-0 text-5xl font-normal italic"
        >
          Explorer le site
        </h2>

        <UPageGrid
          v-reveal
          class="sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <UPageCard
            v-for="tile in tiles"
            :key="tile.to"
            :to="tile.to"
            :title="tile.title"
            :description="tile.description"
            variant="naked"
            class="tile"
            :ui="{
              root: 'min-h-60 bg-surface ring-1 ring-gold-500/28 hover:ring-gold-500 hover:bg-surface-2 motion-safe:hover:-translate-y-1 transition-[background-color,box-shadow,translate] duration-300',
              container: 'p-8 gap-y-3.5 sm:p-8',
              leading: 'mb-3.5 text-[40px] leading-none italic text-gold-500',
              title: 'text-[34px] font-medium',
              description: 'mt-3.5 font-ui text-[15px] leading-[1.6] text-sand',
              footer: 'font-ui text-[15px] text-gold-500'
            }"
          >
            <template #leading>
              <span aria-hidden="true">{{ tile.numeral }}</span>
            </template>
            <template #footer>
              <span aria-hidden="true">Découvrir <span class="tile-arrow">→</span></span>
            </template>
          </UPageCard>
        </UPageGrid>
      </UContainer>
    </section>

    <!-- CITATION -->
    <section class="parchment py-28 max-[720px]:py-16 text-center">
      <UContainer
        v-reveal
        class="max-w-[884px] flex flex-col items-center gap-5"
      >
        <p class="m-0 text-[56px] max-[720px]:text-[40px] leading-[1.1] italic">
          « Pour ceux qui viendront après. »
        </p>
        <p class="m-0 font-ui text-[15px] text-[#5C4313]">
          La devise des expéditions de Lumière
        </p>
      </UContainer>
    </section>
  </div>
</template>
