<script setup lang="ts">
/**
 * En-tête de page (toutes les pages sauf l’accueil) :
 * fil d’Ariane → H1 italique → introduction, sur fond en dégradé radial.
 * `layout="split"` place le slot `aside` à droite du titre (page Coulisses).
 */
withDefaults(defineProps<{
  current: string
  title: string
  description: string
  layout?: 'stack' | 'split'
  compact?: boolean
}>(), {
  layout: 'stack',
  compact: false
})
</script>

<template>
  <section
    class="page-glow max-[720px]:py-16"
    :class="compact ? 'pt-20 pb-12' : layout === 'split' ? 'pt-[88px] pb-24' : 'pt-[88px] pb-[72px]'"
  >
    <UContainer
      class="flex flex-col"
      :class="layout === 'split' ? 'gap-12' : 'gap-5'"
    >
      <UBreadcrumb
        class="rise"
        :items="[{ label: 'Accueil', to: '/' }, { label: current }]"
        :ui="{
          link: 'font-ui text-sm font-normal',
          linkLabel: 'overflow-visible'
        }"
      >
        <template #item-label="{ item, active }">
          <span :class="active ? 'text-ivory' : 'text-idle hover:text-ivory underline underline-offset-4'">{{ item.label }}</span>
        </template>
        <template #separator>
          <span class="font-ui text-sm text-ash">/</span>
        </template>
      </UBreadcrumb>

      <div
        class="flex"
        :class="layout === 'split' ? 'flex-wrap gap-16' : 'flex-col gap-5'"
      >
        <div
          class="min-w-0 flex flex-col gap-5"
          :class="layout === 'split' && 'flex-[1_1_440px]'"
        >
          <h1 class="rise [--rise-delay:100ms] m-0 text-[88px] max-[720px]:text-[56px] font-normal leading-[0.95] italic text-balance">
            {{ title }}
          </h1>
          <p class="rise [--rise-delay:200ms] m-0 max-w-[34em] text-[22px] leading-[1.55] text-sand">
            {{ description }}
          </p>
          <slot />
        </div>

        <div
          v-if="layout === 'split'"
          class="rise [--rise-delay:300ms] flex-[1_1_400px] min-w-0 flex flex-col gap-4"
        >
          <slot name="aside" />
        </div>
      </div>
    </UContainer>
  </section>
</template>
