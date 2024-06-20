<script setup lang="ts">
  import type { FunctionalComponent } from 'vue'

  defineProps<{
    to: string
    label: string
    icon: FunctionalComponent
  }>()
</script>

<template>
  <NuxtLink :to="to" class="v-stack link">
    <span class="indicator h-stack">
      <component
        :is="icon"
        class="link-icon"
        stroke-width="var(--navr-link-icon-width)"
      />
    </span>
    {{ label }}
  </NuxtLink>
</template>

<style scoped>
  .link {
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    gap: 0.25rem;
    --navr-link-icon-width: 2;

    &:is(:hover, .router-link-active) {
      font-weight: 600;
      --navr-link-icon-width: 2.25;
    }
  }

  .link-icon {
    transition: stroke-width 200ms ease;
  }

  .indicator {
    position: relative;
    width: 3.5rem;
    justify-content: center;
    border-radius: 99rem;
    height: 2rem;

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      width: 0;
      height: 100%;
      transition: all 200ms ease;
      opacity: 0;
      border-radius: 99rem;
      background-color: var(--md-sys-color-primary-container);
    }

    .link:hover & {
      background-color: color-mix(
        in srgb,
        var(--palette-neutral60),
        transparent 80%
      );
    }

    .link:active & {
      background-color: color-mix(
        in srgb,
        var(--palette-neutral60),
        transparent 72%
      );
    }

    .link.router-link-active &::before {
      opacity: 1;
      width: 100%;
    }
  }
</style>
