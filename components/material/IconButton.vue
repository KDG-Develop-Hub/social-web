<script setup lang="ts">
  import { TooltipRoot, TooltipTrigger } from '@ark-ui/vue'

  defineEmits<{
    (e: 'click', event: MouseEvent): void
  }>()
  const id = useId()
  withDefaults(
    defineProps<{
      disabled?: boolean
      variant?: 'filled' | 'filled-tonal' | 'outlined' | 'standard'
      selected?: boolean
      title?: string
    }>(),
    { disabled: false, variant: 'standard', selected: false, title: '' }
  )
</script>

<template>
  <TooltipRoot :id :positioning="{ placement: 'bottom' }">
    <div class="icon-button-wrapper">
      <TooltipTrigger as-child>
        <button
          v-ripple
          class="icon-button"
          :class="`icon-button-${variant}`"
          :data-selected="selected || undefined"
          @click="$emit('click', $event)"
        >
          <slot v-if="selected" name="selected" />
          <slot v-else />
        </button>
      </TooltipTrigger>
    </div>
    <MaterialTooltip v-if="title">
      {{ title }}
    </MaterialTooltip>
  </TooltipRoot>
</template>

<style scoped>
  .icon-button-wrapper {
    position: relative;
    display: inline-grid;
    place-items: center;
    height: 3rem;
    width: 3rem;
  }
  .icon-button {
    border-radius: var(--md-sys-shape-corner-full);
    color: var(--icon-button-color);
    background: var(--icon-button-bg);
    outline: none;
    display: inline-grid;
    place-items: center;
    height: 2.5rem;
    width: 2.5rem;
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
      &[data-selected] {
        --icon-button-color: var(--md-sys-color-primary);
      }
    }
    &:hover {
      background: color-mix(
        in srgb,
        var(--icon-button-color) 8%,
        var(--icon-button-bg)
      );
    }
    &:focus-visible {
      background: color-mix(
        in srgb,
        var(--icon-button-color) 10%,
        var(--icon-button-bg)
      );
    }
    &:deep(*) {
      color: var(--icon-button-color);
    }
  }
</style>
