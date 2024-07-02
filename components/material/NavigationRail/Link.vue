<script setup lang="ts">
  import type { FunctionalComponent } from 'vue'

  defineProps<{
    to: string
    label: string
    icon: FunctionalComponent
  }>()
</script>

<template>
  <NuxtLink :to="to" class="v-stack link label-md">
    <span class="indicator h-stack">
      <component :is="icon" class="link-icon" />
    </span>
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
  .link {
    text-decoration: none;
    gap: 0.25rem;
    --navr-link-icon-width: 2;

    &:is(:hover, .router-link-active) {
      font-weight: var(--md-sys-typescale-label-md-weight-prominent);
      --navr-link-icon-width: 2.5;
    }

    &:active {
      --navr-link-icon-width: 1.5;
    }
  }

  .link-icon {
    transition: stroke-width var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);
    stroke-width: var(--navr-link-icon-width);
  }

  .indicator {
    position: relative;
    width: 3.5rem;
    justify-content: center;
    border-radius: var(--md-sys-shape-corner-full);
    height: 2rem;

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      width: 0;
      height: 100%;
      transition: all var(--md-sys-motion-duration-short4)
        var(--md-sys-motion-easing-emphasized);
      opacity: 0;
      border-radius: var(--md-sys-shape-corner-full);
      background-color: var(--md-sys-color-secondary-container);
    }

    .link:hover & {
      background-color: color-mix(
        in srgb,
        var(--md-sys-color-on-surface) 8%,
        transparent
      );
    }

    .link:active & {
      background-color: color-mix(
        in srgb,
        var(--md-sys-color-on-surface) 10%,
        transparent
      );
    }

    .link.router-link-active &::before {
      opacity: 1;
      width: 100%;
    }
  }
</style>
