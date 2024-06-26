<script setup lang="ts">
  import type { FunctionalComponent } from 'vue'

  defineProps<{
    to: string
    label: string
    icon: FunctionalComponent
  }>()
</script>

<template>
  <NuxtLink
    :to="to"
    active-class="md-sys-typescale-label-medium-promient router-link-active"
    class="v-stack link md-sys-typescale-label-medium"
  >
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
    text-decoration: none;
    gap: 0.25rem;
    --navr-link-icon-width: 2;

    &:is(:hover, .router-link-active) {
      --navr-link-icon-width: 2.25;
    }
  }

  .link-icon {
    transition: stroke-width 200ms ease;
    :is(.link:hover &, .link.router-link-active &) {
      stroke-width: 2.5;
    }
    .link:active & {
      stroke-width: 1.5;
    }
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
