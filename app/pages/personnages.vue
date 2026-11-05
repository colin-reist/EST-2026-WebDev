<script setup lang="ts">
import { personnages } from '~/data/personnages'

useSeoMeta({ title: 'Personnages' })

const total = personnages.length
const selected = ref(0)

const current = computed(() => personnages[selected.value]!)
const prev = computed(() => (selected.value - 1 + total) % total)
const next = computed(() => (selected.value + 1) % total)

/** Sélectionne un personnage et le reflète dans l’URL (#maelle) pour pouvoir partager un lien direct */
function select(index: number) {
  selected.value = index
  history.replaceState(history.state, '', `#${personnages[index]!.slug}`)
}

function syncFromHash() {
  const index = personnages.findIndex(p => `#${p.slug}` === location.hash)
  if (index !== -1) {
    selected.value = index
  }
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncFromHash)
})
</script>

<template>
  <div>
    <PageIntro
      current="Personnages"
      title="Six destins, une seule mission"
      description="Choisissez un membre de l’expédition pour découvrir son histoire et sa façon de combattre."
      compact
    >
      <UAlert
        icon="i-lucide-info"
        description="Sans spoiler : seules les informations du début de l’aventure sont présentées."
        variant="outline"
        :ui="{
          root: 'w-auto self-start items-center gap-2.5 px-4 py-2.5 ring-gold-500/40',
          icon: 'size-[18px] text-gold-500',
          description: 'font-ui text-sm text-sand'
        }"
      />
    </PageIntro>

    <section class="pt-6 pb-28 max-[720px]:pt-6 max-[720px]:pb-14">
      <UContainer class="flex flex-col gap-10">
        <!-- SÉLECTEUR -->
        <div
          role="group"
          aria-label="Choisir un personnage"
          class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5"
        >
          <UButton
            v-for="(perso, index) in personnages"
            :id="perso.slug"
            :key="perso.slug"
            :aria-pressed="index === selected"
            variant="ghost"
            color="neutral"
            class="min-h-16 px-4 py-3 flex-col items-start gap-0.5 text-left font-display ring-1 transition-colors"
            :class="index === selected
              ? 'bg-gold-500 hover:bg-gold-500 text-ground ring-gold-500'
              : 'bg-surface hover:bg-surface text-sand hover:text-ivory ring-gold-500/28 hover:ring-gold-500'"
            @click="select(index)"
          >
            <span
              class="text-[26px] leading-tight"
              :class="index === selected ? 'font-semibold' : 'font-medium'"
            >{{ perso.name }}</span>
            <span
              class="font-ui text-[13px] font-normal"
              :class="index === selected ? 'text-ground' : 'text-ash'"
            >{{ perso.role }}</span>
          </UButton>
        </div>

        <!-- FICHE -->
        <article
          aria-live="polite"
          class="flex flex-wrap gap-14 p-10 max-[720px]:p-5 max-[720px]:gap-8 ring-1 ring-gold-500/28 bg-surface"
        >
          <Transition
            name="fiche"
            mode="out-in"
          >
            <ArtworkPlaceholder
              :key="current.slug"
              :label="current.name"
              :src="current.image"
              :alt="current.imageAlt ?? `Portrait officiel de ${current.name}`"
              ratio="3 / 4"
              class="flex-[1_1_380px] min-w-0 max-h-[620px]"
            />
          </Transition>

          <Transition
            name="fiche"
            mode="out-in"
          >
            <div
              :key="current.slug"
              class="flex-[1_1_520px] min-w-0 flex flex-col gap-[22px]"
            >
              <p class="m-0 font-ui text-sm tracking-[0.12em] uppercase text-gold-500">
                {{ current.role }}
              </p>
              <h2 class="m-0 text-[80px] max-[720px]:text-[56px] font-normal leading-[0.95] italic">
                {{ current.name }}
              </h2>
              <p class="m-0 text-[22px] italic text-gold-400">
                {{ current.tagline }}
              </p>
              <p class="m-0 max-w-[34em] text-xl leading-[1.65] text-sand">
                {{ current.bio }}
              </p>

              <div class="flex flex-col gap-2 px-6 py-[22px] bg-ground ring-1 ring-ivory/12">
                <p class="m-0 font-ui text-[13px] text-ash">
                  Mécanique de combat
                </p>
                <p class="m-0 text-[28px] font-medium">
                  {{ current.mech }}
                </p>
                <p class="m-0 font-ui text-base leading-[1.6] text-sand">
                  {{ current.mechText }}
                </p>
              </div>

              <dl class="m-0 grid grid-cols-2 gap-4 font-ui">
                <div class="flex flex-col gap-1">
                  <dt class="text-[13px] text-ash">
                    Style
                  </dt>
                  <dd class="m-0 text-base">
                    {{ current.style }}
                  </dd>
                </div>
                <div class="flex flex-col gap-1">
                  <dt class="text-[13px] text-ash">
                    Voix anglaise
                  </dt>
                  <dd class="m-0 text-base">
                    {{ current.voice }}
                  </dd>
                </div>
              </dl>

              <div class="flex flex-wrap justify-between gap-3 mt-auto pt-3">
                <UButton
                  :label="`← ${personnages[prev]!.name}`"
                  :aria-label="`Personnage précédent : ${personnages[prev]!.name}`"
                  color="neutral"
                  variant="outline"
                  class="min-h-12 px-5 text-[15px] font-normal text-ivory ring-ivory/35 hover:ring-gold-500 hover:bg-transparent"
                  @click="select(prev)"
                />
                <UButton
                  :label="`${personnages[next]!.name} →`"
                  :aria-label="`Personnage suivant : ${personnages[next]!.name}`"
                  color="neutral"
                  variant="outline"
                  class="min-h-12 px-5 text-[15px] font-normal text-ivory ring-ivory/35 hover:ring-gold-500 hover:bg-transparent"
                  @click="select(next)"
                />
              </div>
            </div>
          </Transition>
        </article>
      </UContainer>
    </section>
  </div>
</template>
