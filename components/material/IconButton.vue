<script setup lang="ts">
  withDefaults(
    defineProps<{
      disabled?: boolean
      variant?: 'filled' | 'filled-tonal' | 'outlined' | 'standard'
    }>(),
    { disabled: false, variant: 'standard' }
  )
</script>

<template>
  <button v-ripple class="icon-button" :class="`icon-button-${variant}`">
    <slot />
  </button>
</template>

<style scoped>
  .icon-button {
    border-radius: var(--md-sys-shape-corner-full);
    color: var(--icon-button-color);
    background: var(--icon-button-bg);
    display: inline-grid;
    place-items: center;
    height: 3.5rem;
    width: 3.5rem;
    flex-shrink: 0;
    &.icon-button-filled {
      --icon-button-color: var(--md-sys-color-on-primary);
      --icon-button-bg: var(--md-sys-color-primary);
    }
    &.icon-button-filled-tonal {
      --icon-button-color: var(--md-sys-color-on-secondary-container);
      --icon-button-bg: var(--md-sys-color-secondary-container);
    }
    &.icon-button-outlined {
      border: 1px solid var(--md-sys-color-outline);
      --icon-button-color: var(--md-sys-color-inverse-surface);
      --icon-button-bg: transparent;
    }
    &.icon-button-standard {
      --icon-button-color: var(--md-sys-color-on-surface);
      --icon-button-bg: transparent;
    }
    &:deep(*) {
      color: var(--icon-button-color);
    }
  }
</style>
