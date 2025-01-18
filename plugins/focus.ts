const focusableElementSelector = '*:enabled:not([disabled])'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el: HTMLElement) {
      const elIsFocusable = el.matches(focusableElementSelector)
      // el or the first focusable element in the parent chain
      const focusableEl = elIsFocusable
        ? el
        : el.querySelector(focusableElementSelector)
      if (focusableEl && focusableEl instanceof HTMLElement) {
        focusableEl.focus()
        return
      }
    }
  })
})
