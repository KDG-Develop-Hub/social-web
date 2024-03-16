<script setup lang="ts">

</script>

<template>
  <button class="container square">
    <slot />
  </button>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  background-color: var(--blue-7);
  --square-size: 3.5rem;
}
</style>