<script setup lang="ts">
const route = useRoute()

const index = computed(() => sitePages.findIndex(page => page.to === route.path))

const prev = computed(() => index.value > 0 ? sitePages[index.value - 1] : undefined)

const next = computed(() => {
  if (index.value === sitePages.length - 1) {
    return { to: '/', label: 'Retour à l’accueil' }
  }
  return sitePages[index.value + 1]
})
</script>

<template>
  <UFooter
    :ui="{
      root: 'bg-footer border-t border-gold-500/25',
      top: 'py-0 border-b border-ivory/12',
      container: 'py-8 pb-10 lg:py-8 flex flex-wrap justify-between gap-6 lg:items-start',
      left: 'hidden',
      center: 'hidden',
      right: 'contents'
    }"
  >
    <template #top>
      <UContainer>
        <nav
          v-if="index !== -1"
          aria-label="Pages précédente et suivante"
          class="py-10 flex flex-wrap justify-between gap-4"
        >
          <NuxtLink
            v-if="prev"
            :to="prev.to"
            class="group flex flex-col gap-1 min-h-12 text-ivory"
          >
            <span class="font-ui text-[13px] text-ash">← Précédent</span>
            <span class="text-[30px] italic group-hover:text-gold-400 transition-colors">{{ prev.label }}</span>
          </NuxtLink>
          <span v-else />

          <NuxtLink
            v-if="next"
            :to="next.to"
            class="group flex flex-col items-end gap-1 min-h-12 text-ivory"
          >
            <span class="font-ui text-[13px] text-ash">Suivant →</span>
            <span class="text-[30px] italic text-gold-500 group-hover:text-ivory transition-colors">{{ next.label }}</span>
          </NuxtLink>
        </nav>
      </UContainer>
    </template>

    <template #right>
      <p class="m-0 text-2xl italic">
        Pour ceux qui viendront après.
      </p>
      <p class="m-0 max-w-[560px] font-ui text-[13px] leading-[1.7] text-ash">
        Projet scolaire — Colin Reist, DIVTEC / TEEINF2. Site non officiel, sans lien avec Sandfall Interactive ni Kepler Interactive. Clair Obscur : Expedition 33 et ses visuels appartiennent à leurs ayants droit.
      </p>
    </template>
  </UFooter>
</template>
