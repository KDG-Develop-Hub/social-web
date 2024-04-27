<script setup lang="ts"></script>

<template>
  <span>
    <button class="container square">
      <slot />
    </button>
  </span>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  background-color: var(--color-secondary);
  --square-size: 3.5rem;
}
</style>
