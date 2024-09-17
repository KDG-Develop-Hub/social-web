<script setup lang="ts">
  import { ark } from '@ark-ui/vue'

  withDefaults(
    defineProps<{
      asChild?: boolean
      color?: string
    }>(),
    {
      color: '#fff'
    }
  )

  const ripples = ref<HTMLSpanElement[]>([])
  function createRipple(event: MouseEvent | TouchEvent) {
    if ((event.target as HTMLElement).ariaDisabled) return
    const { clientX, clientY } =
      event instanceof MouseEvent ? event : event.touches[0]
    const root = event.target as HTMLElement
    const circle = document.createElement('span')
    const diameter = Math.max(root.clientWidth, root.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${
      clientX - root.getBoundingClientRect().left - radius
    }px`
    circle.style.top = `${
      clientY - root.getBoundingClientRect().top - radius
    }px`
    circle.classList.add('ripple')

    circle.addEventListener('transitionend', () => {
      if (!circle.classList.contains('remove')) return
      circle.remove()
      ripples.value = ripples.value.filter(ripple => ripple !== circle)
    })

    root.appendChild(circle)

    ripples.value.push(circle)
  }

  function removeRipple() {
    ripples.value.forEach(ripple => ripple.classList.add('remove'))
  }
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
    & :deep(.ripple) {
      user-select: none;
      pointer-events: none;
      position: absolute;
      border-radius: 50%;
      background: color-mix(in srgb, v-bind(color) 10%, transparent);
      scale: 0;
      animation: ripple-scale 450ms 150ms forwards linear;
    }
    & :deep(.ripple.remove) {
      opacity: 0;
      transition: opacity 450ms 50ms linear;
    }
  }

  @keyframes ripple-scale {
    from {
      scale: 0.5;
    }
    to {
      scale: 4;
    }
  }
</style>
