<template>
  <UHeader
    :ui="{
      root: 'bg-ground border-gold-500/25',
      center: 'hidden md:flex',
      toggle: 'md:hidden size-12 justify-center text-ivory',
      content: 'md:hidden bg-ground',
      overlay: 'md:hidden'
    }"
  >
    <template #left>
      <AppLogo />
    </template>

    <nav aria-label="Navigation principale">
      <ul class="flex gap-7">
        <li
          v-for="link in mainNav"
          :key="link.to"
        >
          <ULink
            :to="link.to"
            exact
            raw
            class="inline-flex items-center min-h-12 font-ui text-[15px] tracking-[0.06em] transition-colors"
            active-class="text-ivory shadow-[inset_0_-2px_0_var(--color-gold-500)]"
            inactive-class="text-idle hover:text-ivory"
          >
            {{ link.label }}
          </ULink>
        </li>
      </ul>
    </nav>

    <template #body>
      <nav aria-label="Navigation principale (mobile)">
        <ul class="flex flex-col">
          <li
            v-for="link in mainNav"
            :key="link.to"
            class="border-b border-default"
          >
            <ULink
              :to="link.to"
              exact
              raw
              class="flex items-center min-h-14 font-display text-3xl italic"
              active-class="text-gold-500"
              inactive-class="text-ivory hover:text-gold-400"
            >
              {{ link.label }}
            </ULink>
          </li>
        </ul>
      </nav>
    </template>
  </UHeader>
</template>
