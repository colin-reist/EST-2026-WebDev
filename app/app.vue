<script setup lang="ts">
import { fr } from '@nuxt/ui/locale'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
  ],
  htmlAttrs: {
    lang: 'fr'
  },
  titleTemplate: title => title ? `Clair Obscur : Expedition 33 — ${title}` : 'Clair Obscur : Expedition 33'
})

useSeoMeta({
  description: 'Site vitrine non officiel consacré à Clair Obscur : Expedition 33, le RPG de Sandfall Interactive.'
})
</script>

<template>
  <UApp :locale="fr">
    <a
      class="skip-link"
      href="#contenu"
    >Aller au contenu</a>

    <AppHeader />

    <UMain
      id="contenu"
      tabindex="-1"
      class="outline-none"
    >
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
