<script setup lang="ts"></script>

<template>
  <span>
    <button
      v-ripple="{ color: 'var(--md-sys-color-on-tertiary)' }"
      class="container square"
    >
      <slot />
    </button>
  </span>
</template>

<style scoped>
  .container {
    display: grid;
    place-items: center;
    border-radius: var(--md-sys-shape-corner-md);
    border: none;
    cursor: pointer;
    background-color: var(--md-sys-color-tertiary);
    --square-size: 3.5rem;
    color: var(--md-sys-color-on-tertiary);
    :slotted(*) {
      color: var(--md-sys-color-on-tertiary);
    }
  }
</style>
