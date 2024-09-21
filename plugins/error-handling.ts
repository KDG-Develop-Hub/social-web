export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = () => {
    navigateTo('/error')
  }
})
