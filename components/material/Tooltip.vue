<script setup lang="ts">
  import { TooltipContent, TooltipPositioner } from '@ark-ui/vue'
</script>

<template>
  <TooltipPositioner>
    <TooltipContent class="tooltips body-sm">
      <slot />
    </TooltipContent>
  </TooltipPositioner>
</template>

<style scoped>
  .tooltips {
    display: inline-flex;
    align-items: center;
    background-color: var(--md-sys-color-inverse-on-surface);
    color: var(--md-sys-color-inverse-surface);
    border-radius: var(--md-sys-shape-corner-xs);
    height: 1.5rem;
    padding: 0 0.5rem;
  }
</style>
