<script setup lang="ts"></script>

<template>
  <span>
    <MaterialRippleRoot
      as-child
      color="var(--md-sys-color-on-tertiary-container)"
    >
      <button class="container square">
        <slot />
      </button>
    </MaterialRippleRoot>
  </span>
</template>

<style scoped>
  .container {
    display: grid;
    place-items: center;
    border-radius: var(--md-sys-shape-corner-md);
    border: none;
    cursor: pointer;
    background-color: var(--md-sys-color-tertiary-container);
    --square-size: 3.5rem;
    color: var(--md-sys-color-on-tertiary-container);
    :deep(*) {
      color: var(--md-sys-color-on-tertiary-container);
    }
  }
</style>
