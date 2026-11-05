<script setup lang="ts">
useSeoMeta({ title: 'Univers' })

const piliers = [
  { num: '01', title: 'Lumière', text: 'Une cité au style parisien, isolée sur son île après la Fracture, le cataclysme qui a brisé le continent il y a 67 ans. C’est d’ici que partent les expéditions.' },
  { num: '02', title: 'La Peintresse', text: 'Une figure gigantesque, visible au loin sur le continent. À chaque réveil, elle peint sur son monolithe un nombre, plus petit d’une année à l’autre.' },
  { num: '03', title: 'Le Gommage', text: 'Quand le nombre est peint, toute personne de cet âge s’efface en pétales. Chaque année, une expédition part tenter de détruire la Peintresse.' }
]

const figures = [
  { artwork: 'Renoir', category: 'Menace', title: 'Renoir', text: 'Un vieil homme puissant qui attend l’expédition dès son arrivée. Ses motivations restent longtemps une énigme.' },
  { artwork: 'Esquie', category: 'Allié', title: 'Esquie', text: 'Une immense créature ronde et attachante, compagnon et monture du groupe, qui débloque de nouvelles façons d’explorer.' },
  { artwork: 'Gestrals', category: 'Peuple', title: 'Les Gestrals', text: 'Des créatures en bois, joueuses et obsédées par les duels. Leurs villages comptent parmi les lieux les plus vivants du continent.' },
  { artwork: 'Nevrons', category: 'Adversaires', title: 'Les Nevrons', text: 'Les créatures hostiles du continent, aux formes étranges et souvent fascinantes. Les principaux adversaires de l’expédition.' }
]
</script>

<template>
  <div>
    <PageIntro
      current="Univers"
      title="Un monde peint, une fin annoncée"
      description="Inspiré de la Belle Époque française, l’univers de Clair Obscur mêle élégance, surréalisme et mélancolie. Tout commence à Lumière, dernier refuge d’une humanité qui compte ses années."
    />

    <!-- LES TROIS PILIERS -->
    <section
      aria-labelledby="piliers"
      class="parchment py-[104px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-col gap-12">
        <h2
          id="piliers"
          v-reveal
          class="m-0 text-[52px] max-[720px]:text-[40px] font-normal italic"
        >
          Ce qu’il faut savoir
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
          <article
            v-for="(pilier, index) in piliers"
            :key="pilier.num"
            v-reveal="index * 120"
            class="flex flex-col gap-3.5 pt-6 border-t border-ink"
          >
            <span
              aria-hidden="true"
              class="text-[44px] italic text-bronze"
            >{{ pilier.num }}</span>
            <h3 class="m-0 text-[32px] font-medium">
              {{ pilier.title }}
            </h3>
            <p class="m-0 text-xl leading-[1.6] text-ink-soft">
              {{ pilier.text }}
            </p>
          </article>
        </div>
      </UContainer>
    </section>

    <!-- FIGURES DU CONTINENT -->
    <section
      aria-labelledby="figures"
      class="py-[104px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-col gap-12">
        <div
          v-reveal
          class="flex flex-col gap-3.5 max-w-[720px]"
        >
          <h2
            id="figures"
            class="m-0 text-[52px] max-[720px]:text-[40px] font-normal italic"
          >
            Figures du continent
          </h2>
          <p class="m-0 text-xl leading-[1.6] text-sand">
            Ceux que l’expédition croise en chemin : alliés, menaces et mystères.
          </p>
        </div>

        <UPageGrid class="grid-cols-[repeat(auto-fit,minmax(270px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
          <UPageCard
            v-for="(figure, index) in figures"
            :key="figure.title"
            v-reveal="index * 100"
            as="article"
            variant="naked"
            :ui="{
              root: 'bg-surface ring-1 ring-gold-500/28',
              container: 'p-0 sm:p-0 gap-y-0',
              wrapper: 'items-stretch',
              header: 'mx-3.5 mt-3.5 mb-0',
              leading: 'px-6 pt-[22px] mb-2.5',
              body: 'px-6 pb-7',
              description: 'mt-2.5'
            }"
          >
            <template #header>
              <ArtworkPlaceholder :label="figure.artwork" />
            </template>
            <template #leading>
              <p class="m-0 font-ui text-[13px] text-gold-500">
                {{ figure.category }}
              </p>
            </template>
            <template #title>
              <h3 class="m-0 text-[30px] font-medium text-ivory">
                {{ figure.title }}
              </h3>
            </template>
            <template #description>
              <p class="m-0 text-lg leading-[1.6] text-sand">
                {{ figure.text }}
              </p>
            </template>
          </UPageCard>
        </UPageGrid>
      </UContainer>
    </section>
  </div>
</template>
