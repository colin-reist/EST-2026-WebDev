<script setup lang="ts">
/**
 * Emplacement d’image. Tant qu’aucun `src` n’est fourni, affiche le cadre en pointillés
 * de la maquette. Une fois un visuel du kit presse ajouté dans `public/img/`,
 * passer `src`, `alt` et `credit`. `fit="contain"` affiche un visuel détouré en entier, sur fond sombre.
 */
withDefaults(defineProps<{
  label: string
  src?: string
  alt?: string
  credit?: string
  ratio?: string
  fit?: 'cover' | 'contain'
}>(), {
  src: undefined,
  alt: '',
  credit: 'Sandfall Interactive / Kepler Interactive',
  ratio: '4 / 3',
  fit: 'cover'
})
</script>

<template>
  <figure
    v-if="src"
    class="m-0 flex flex-col gap-2"
  >
    <img
      :src="src"
      :alt="alt"
      class="w-full"
      :class="fit === 'contain' ? 'object-contain bg-ground' : 'object-cover'"
      :style="{ aspectRatio: ratio }"
      loading="lazy"
    >
    <figcaption class="font-ui text-xs text-ash">
      © {{ credit }}
    </figcaption>
  </figure>
  <div
    v-else
    class="flex items-center justify-center text-center p-3 border border-dashed border-gold-500/45 font-ui text-[13px] text-ash"
    :style="{ aspectRatio: ratio }"
  >
    [Artwork officiel — {{ label }}]
  </div>
</template>
