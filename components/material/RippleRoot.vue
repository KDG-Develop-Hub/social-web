<script setup lang="ts">
  import { ark } from '@ark-ui/vue'

  type Ripple = {
    symbol: symbol
    diameter: string
    dissapeering: boolean
    left: string
    top: string
  }

  const props = withDefaults(
    defineProps<{
      asChild?: boolean
      color?: string
      disabled?: boolean
    }>(),
    {
      color: '#fff'
    }
  )

  const ripples = ref<Ripple[]>([])

  const createRipple = (event: MouseEvent | TouchEvent) => {
    if (props.disabled) return
    const { clientX, clientY } =
      event instanceof MouseEvent ? event : event.touches[0]
    const root = event.target as HTMLElement

    const symbol = Symbol('ripple')
    const diameter = Math.max(root.clientWidth, root.clientHeight)
    const radius = diameter / 2
    const left = `${clientX - root.getBoundingClientRect().left - radius}px`
    const top = `${clientY - root.getBoundingClientRect().top - radius}px`

    ripples.value.push({
      symbol,
      diameter: `${diameter}px`,
      dissapeering: false,
      left,
      top
    })
  }

  const removeRipple = () => {
    ripples.value = ripples.value.map(ripple => ({
      ...ripple,
      dissapeering: true
    }))
  }

  provide(ripplesKey, {
    instances: ripples,
    color: props.color || '#fff',
    center: false
  })
</script>

<template>
  <ark.div
    class="ripple-root"
    :as-child
    @mousedown="createRipple"
    @touchstart="createRipple"
    @touchend="removeRipple"
    @mouseleave="removeRipple"
    @mouseup="removeRipple"
  >
    <slot></slot>
  </ark.div>
</template>

<style scoped>
  .ripple-root {
    position: relative;
    overflow: hidden;
  }
</style>
