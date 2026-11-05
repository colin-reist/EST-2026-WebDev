<script setup lang="ts">
useSeoMeta({ title: 'Combat' })

const principes = [
  { num: 'i.', title: 'Esquiver et parer', text: 'Pendant le tour adverse, une esquive ou une parade bien placée évite les dégâts. Parer toutes les attaques d’un enchaînement déclenche une contre-attaque.' },
  { num: 'ii.', title: 'Viser librement', text: 'Un mode de tir permet de viser les points faibles des Nevrons, en échange de points d’action.' },
  { num: 'iii.', title: 'Personnaliser avec les Pictos', text: 'Les Pictos donnent des bonus. Une fois maîtrisés, ils deviennent des Luminas que tous les personnages peuvent équiper.' },
  { num: 'iv.', title: 'Jouer en rythme', text: 'Certaines compétences demandent d’appuyer au bon moment pour maximiser leurs effets, comme une partition à jouer juste.' }
]

const lexique = [
  { term: 'Points d’action', definition: 'La ressource dépensée pour lancer des compétences et tirer.' },
  { term: 'Pictos', definition: 'Des objets équipables qui ajoutent des statistiques et des effets passifs.' },
  { term: 'Luminas', definition: 'L’effet d’un Picto maîtrisé, partageable entre tous les personnages.' },
  { term: 'Contre-attaque', definition: 'La riposte déclenchée quand toutes les attaques ennemies sont parées.' }
]
</script>

<template>
  <div>
    <PageIntro
      current="Combat"
      title="Le tour par tour, réinventé"
      description="Clair Obscur reprend les codes des RPG japonais classiques et y ajoute des actions en temps réel : chaque attaque ennemie devient un moment de tension où le timing fait toute la différence."
    />

    <!-- LES 4 PRINCIPES -->
    <section
      aria-labelledby="principes"
      class="parchment py-[104px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-wrap gap-16">
        <div
          v-reveal
          class="flex-[1_1_340px] min-w-0 flex flex-col gap-4"
        >
          <h2
            id="principes"
            class="m-0 text-[52px] max-[720px]:text-[40px] font-normal italic"
          >
            Quatre principes
          </h2>
          <p class="m-0 text-xl leading-[1.6] text-ink-soft">
            Le combat alterne entre votre tour, où vous choisissez vos actions, et celui de l’ennemi, où vous réagissez.
          </p>
        </div>

        <ol class="flex-[1_1_560px] min-w-0 m-0 p-0 list-none flex flex-col border-b border-ink">
          <li
            v-for="(principe, index) in principes"
            :key="principe.num"
            v-reveal="index * 100"
            class="flex gap-6 py-6 border-t border-ink"
          >
            <span
              aria-hidden="true"
              class="flex-[0_0_56px] text-[34px] italic text-bronze"
            >{{ principe.num }}</span>
            <div class="flex flex-col gap-1.5">
              <h3 class="m-0 text-[28px] font-medium">
                {{ principe.title }}
              </h3>
              <p class="m-0 text-[19px] leading-[1.55] text-ink-soft">
                {{ principe.text }}
              </p>
            </div>
          </li>
        </ol>
      </UContainer>
    </section>

    <!-- LEXIQUE -->
    <section
      aria-labelledby="lexique"
      class="py-[104px] max-[720px]:py-16"
    >
      <UContainer class="flex flex-col gap-10">
        <div
          v-reveal
          class="flex flex-col gap-3.5 max-w-[720px]"
        >
          <h2
            id="lexique"
            class="m-0 text-[52px] max-[720px]:text-[40px] font-normal italic"
          >
            Petit lexique
          </h2>
          <p class="m-0 text-xl leading-[1.6] text-sand">
            Les termes du jeu que vous croiserez sur ce site.
          </p>
        </div>

        <dl class="m-0 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-10">
          <div
            v-for="(entry, index) in lexique"
            :key="entry.term"
            v-reveal="index * 100"
            class="flex flex-col gap-2 py-[22px] border-t border-default"
          >
            <dt class="text-[28px] font-medium">
              {{ entry.term }}
            </dt>
            <dd class="m-0 font-ui text-base leading-[1.6] text-sand">
              {{ entry.definition }}
            </dd>
          </div>
        </dl>

        <UButton
          to="/personnages"
          label="Voir la mécanique de chaque personnage"
          color="neutral"
          variant="outline"
          class="self-start max-w-full min-h-13 px-7 py-3 text-base text-left whitespace-normal font-normal text-ivory ring-ivory/45 hover:bg-ivory/5"
        />
      </UContainer>
    </section>
  </div>
</template>
