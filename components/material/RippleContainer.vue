<script setup lang="ts">
  const ripples = inject(ripplesKey)

  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: '#fff'
    }
  )

  if (!ripples) throw Error('RippleContainer should be inside of RippleRoot.')
  const { instances } = ripples
</script>

<template>
  <span
    v-for="ripple in instances"
    :key="ripple.symbol"
    class="ripple"
    :style="{
      top: ripple.top,
      left: ripple.left,
      width: ripple.diameter,
      height: ripple.diameter
    }"
    :class="{ remove: ripple.dissapeering }"
    @transitionend="
      instances = instances.filter(it => it.symbol !== ripple.symbol)
    "
  ></span>
</template>

<style scoped>
  .ripple {
    user-select: none;
    pointer-events: none;
    position: absolute;
    border-radius: 50%;
    background: color-mix(in srgb, v-bind(color) 10%, transparent);
    scale: 0;
    animation: ripple-scale var(--md-sys-motion-duration-long1)
      var(--md-sys-motion-duration-short3) forwards linear;
    &.remove {
      opacity: 0;
      transition: opacity var(--md-sys-motion-duration-long1)
        var(--md-sys-motion-duration-short1) linear;
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
