export default defineAppConfig({
  ui: {
    colors: {
      primary: 'gold',
      neutral: 'stone'
    },
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-5 min-[720px]:px-8'
    },
    button: {
      slots: {
        base: 'font-ui font-medium rounded-none'
      }
    }
  }
})
