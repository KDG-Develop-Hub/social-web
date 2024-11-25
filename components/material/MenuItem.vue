<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'

  defineProps<{
    value: string
    selected?: boolean
  }>()
</script>

<template>
  <Menu.Item
    v-ripple="{ color: 'var(--color)' }"
    class="item"
    :value
    :class="{ selected }"
  >
    <slot name="leading-icon" />

    <slot />
  </Menu.Item>
</template>

<style scoped>
  .item {
    cursor: pointer;
    user-select: none;
    display: flex;
    gap: 0.75rem;
    padding: 0 0.75rem;
    align-items: center;
    height: 3rem;
    transition: margin var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);
    --margin: 0;
    --color: var(--md-sys-color-on-surface);
    &.selected {
      background-color: var(--md-sys-color-secondary-container);
      --color: var(--md-sys-color-on-secondary-container);
    }
    &[data-highlighted] {
      background: color-mix(in srgb, var(--color) 10%, transparent);
    }
  }
</style>
