/**
 * Directive `v-reveal` : fait apparaître un élément en fondu quand il entre dans l’écran.
 * `v-reveal="120"` ajoute un délai (ms) pour échelonner une liste.
 * Les éléments déjà visibles au chargement s’affichent sans animation (pas de flash après le prérendu).
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  function getObserver() {
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer!.unobserve(entry.target)
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    return observer
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: () => ({}),
    mounted(el, { value }) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92

      // Ce qui est déjà à l’écran est couvert par l’entrée du hero ou la transition de page
      if (reduced || inView) {
        return
      }

      if (value) {
        el.style.transitionDelay = `${value}ms`
      }
      el.classList.add('reveal')
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    }
  })
})
